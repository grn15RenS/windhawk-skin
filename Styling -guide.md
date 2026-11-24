# Windhawk Skin Styling Guide

A short guide for writing your own skin for the Windhawk interface. It covers the basic structure of a skin, the selectors that are available, light and dark mode, the window bridge, and debugging.

The selectors in this guide come from the `native-macos` theme. They only cover the pages and elements that theme styles, so the list is not complete.

> [!WARNING]
> The Windhawk UI can change between versions. A selector that works today may stop matching after an update, so keep your skin easy to adjust.

## How a skin works

A skin is a single JavaScript file. The Windhawk Skin mod injects it into the Windhawk UI (a WebView2 page) on every page load. Most skins do two things: add a `<style>` element with CSS, and run a small script that adds or changes elements the CSS cannot reach.

See the mod readme for the setup (**Skin file path** or **Skin theme**) and the debug port.

## Minimal skin

The script is evaluated several times during startup, so the install guard at the top is required. The Windhawk UI is a React app and replaces elements when it re-renders, so the skin re-applies its changes in a `tick` function that runs on DOM changes.

```js
(() => {
  if (window.__mySkinInstalled) return;
  window.__mySkinInstalled = true;

  const css = String.raw`
    body { background: rgb(10, 10, 12) !important; }
  `;

  const ensureStyle = () => {
    if (document.getElementById('my-skin-css')) return;
    const parent = document.head || document.documentElement;
    if (!parent) return;
    const style = document.createElement('style');
    style.id = 'my-skin-css';
    style.textContent = css;
    parent.append(style);
  };

  const tick = () => {
    ensureStyle();
    // add or fix your own elements here
  };

  // Run on DOM changes, at most once per frame
  let scheduled = false;
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      tick();
    });
  };
  new MutationObserver(schedule).observe(document, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  // Safety net in case a change is missed
  setInterval(tick, 2000);
  tick();
})();
```

Tips:

- Give every element you create an `id` or a class, and check for it before creating it again.
- Use `!important` in your CSS. The Windhawk UI uses styled-components and Ant Design, and their rules are often more specific than yours.
- `localStorage` works in the page, so a skin can remember its own state (for example, a collapsed sidebar). Wrap reads and writes in `try/catch`.

## Selectors

### `data-testid` attributes

These are the easiest to target, because they are plain attributes and do not change with every build.

| Selector | Element |
| --- | --- |
| `[data-testid="app-header"]` | The sidebar |
| `[data-testid="create-new-mod"]` | The New Mod button |
| `[data-testid="mods-view-toggle"]` | The grid / list view toggle |
| `[data-testid="mod-card-title"]` | The title of a mod card |
| `[data-testid="mod-card-switch"]` | The enable switch on a mod card |
| `[data-testid="mod-card-details"]` | The Details button on a mod card |
| `[data-testid="mod-card-remove"]` | The Remove button on a mod card |
| `[data-testid="mod-group-header"]` | A mod group header on Home |
| `[data-testid="mod-group-count"]` | The mod count inside a group header |
| `[data-testid="mod-group-caret"]` | The expand button of a group (`aria-expanded` is `true` when open) |
| `[data-testid="settings-page"]` | The Settings page |
| `[data-testid="about-page"]` | The About page |
| `[data-testid="mod-details-back"]` | The back button on the mod details page |
| `[data-testid^="mod-details-tab-"]` | The tabs of the mod details page |
| `[data-testid="mod-details-reviews"]` | The Reviews button on the mod details page |
| `[data-testid="mod-action-enable"]` | The Enable button on the mod details page |
| `[data-testid="mod-action-update"]` | The Update button on the mod details page |
| `[data-testid="mod-action-remove"]` | The Remove button on the mod details page |

### Styled-components classes

Many elements have no `data-testid`. Their class names look like `AppHeader__HeaderLogo-sc-1a2b3c`, where the part after `-sc-` is generated and changes between builds. Never use the full class name. Match the stable first part with `[class*="..."]`:

```css
[class*="AppHeader__HeaderButtonsWrapper"] .ant-btn { height: 34px !important; }
```

Class names used by the `native-macos` theme:

| Part of the class name | Element |
| --- | --- |
| `AppHeader__HeaderLogo` | The logo area of the sidebar (also matches `HeaderLogoButton`) |
| `AppHeader__HeaderLogoButton` | The logo button inside it |
| `AppHeader__HeaderButtonsWrapper` | The sidebar menu (Home, Explore, Settings, About) |
| `ModsBrowserLocal__ModsContainer` | The container of the Home page |
| `ModsBrowserLocal__SectionHeader` | A section title on Home |
| `ModsBrowserLocal__SearchFilterContainer` | The row with the search field and filter |
| `CreateNewModButton__ButtonContainer` | The wrapper of the New Mod button |
| `ModCardActionsContainer` | The footer of a mod card |
| `ModCard__ModCardTitle-` | The title text of a mod card |
| `ModGroupHeader__GroupName` | The name inside a group header |
| `Settings__SettingsList` | The list of settings on the Settings page |
| `SettingRow-sc-` | One row of the Settings page |
| `About__AboutContent` and `About__ContentSection` | The content and sections of the About page |
| `ModDetailsHeader__...` | The header of the mod details page (several parts, such as `CardTitleFirstLine`, `CardTitleModId`, `CardTitleDescription` and `RatingLine`) |
| `ModDetailsView__ModVersionRadioGroup` | The version pills on the mod details page |
| `ModPageButtons__ModPageButtonsWrapper` | The Share and Visit Link buttons |
| `ModMetadataLine__MetadataLineWrapper` | The version, author and target line |

Use `[class*="..."]` with a trailing `-` or `-sc-` when a name is also the start of a longer one, for example `[class*="ModCard__ModCardTitle-"]`.

### Ant Design classes

The UI is built with Ant Design, so its classes (`.ant-card`, `.ant-btn`, `.ant-switch`, `.ant-modal-content`, `.ant-tabs-tab`, `.ant-input-affix-wrapper`, and so on) can be styled directly. Colors, radii and backgrounds on these usually need `!important`.

### Useful CSS tricks

- `:has()` is supported, so you can select a parent by its content, for example `.ant-card:has([data-testid="mod-card-title"])` for mod cards only.
- To change text without touching React's DOM, hide the original (for example `font-size: 0`) and add new text with `::after { content: "..." }`.
- Layout changes (a card grid, a fixed sidebar) are usually done in CSS. Use the script only for things CSS cannot do, such as new buttons or reading values.

## Light and dark mode

Windhawk sets `data-theme="light"` on `body` when the light color scheme is active. Write your dark styles as the default and add light overrides:

```css
body { background: rgb(10, 10, 12) !important; }
html body[data-theme="light"] { background: rgb(238, 238, 242) !important; }
```

A good habit is to define colors as CSS variables on `:root` and redefine them under `body[data-theme="light"]`.

## Window bridge

If your skin draws its own title bar (for example, window buttons), use `window.whWindow` to talk to the mod. The message must be a JSON string made with `JSON.stringify`.

| Message | Effect |
| --- | --- |
| `{"type":"titlebar","custom":true}` | Tells the mod that the skin draws its own title bar. |
| `{"type":"close"}` | Closes the window. |
| `{"type":"minimize"}` | Minimizes the window. |
| `{"type":"maximize"}` | Maximizes the window, or restores it if already maximized. |
| `{"type":"drag"}` | Starts moving the window. |
| `{"type":"resize","edge":"t"}` | Starts resizing from the top edge. `edge` can also be `"tl"` or `"tr"` for the top corners. |

```js
const send = (type, extra) => {
  if (typeof window.whWindow !== 'function') return;
  window.whWindow(JSON.stringify({ type, ...extra }));
};

send('titlebar', { custom: true });
```

Notes:

- **Remove native title bar** only takes effect after the skin has sent `titlebar` with `custom: true`. It needs Windows 11 22H2 (build 22621) or newer.
- When the native title bar is removed, the top of the window loses its resize border. A skin should add its own invisible handles on the top edge and top corners and send `resize` on `mousedown`.
- `whWindow` may not exist yet when the script first runs. Check for it and retry, as in the example above.
- For dragging, send `drag` from `mousedown` on your title bar area. Skip it when the target is a button, an input or a link. The `native-macos` theme starts the drag only after the pointer has moved a few pixels, so that a double-click can still maximize the window.

## Transparency and backdrop

The **Window backdrop** setting (Mica, Acrylic, Mica Alt) draws a system effect behind the page. It is only visible where the page is transparent, so a skin must use transparent backgrounds (`background: transparent`, or colors with alpha) on `body` and the main containers. A skin with a solid background, like `native-macos`, hides the backdrop completely.

## Debugging

1. Turn on **Write debug log file** in the mod settings if you want a log file (`windhawk-ui-mod.log` in the temp folder). The Windhawk log also shows messages such as `Script loaded from` and `WebSocket connected`.
2. Open the Windhawk UI, then open `http://127.0.0.1:19222` in a Chromium-based browser. If you changed **Debug port**, use that number.
3. Pick the page from the list. You get the normal DevTools, so you can inspect elements, try CSS live, and read console errors.
4. Copy the working CSS into your skin file and restart the Windhawk UI. Changes to the file are only applied after a restart.

## Checklist before you share a skin

- The install guard is at the top of the script.
- Every selector is either a `data-testid` or a `[class*="..."]` match, with no generated class suffixes.
- Both the dark and the light color scheme have been checked.
- If the skin draws its own title bar, it sends `titlebar`, handles `drag`, and adds top resize handles.
- The theme readme states the Windows version, the settings it needs, and the Windhawk version it was tested on.
