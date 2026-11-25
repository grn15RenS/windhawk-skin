/*
Windows 11 theme for Windhawk Skin

This theme gives the Windhawk interface a Windows 11 look in the WinUI 3
style: transparent surfaces so the Mica or Acrylic backdrop shows through, a
collapsible NavigationView sidebar with a groups list, Fluent caption buttons,
a toolbar with search and a New Mod button, install statistics, and a card grid
for installed mods. It supports both the dark and the light Windhawk color
schemes.

Author: [grn15RenS](https://github.com/grn15RenS)
*/
(() => {
  if (window.__whWin11Installed) return;
  window.__whWin11Installed = true;

  const css = String.raw`
/* Variables */
:root {
  /* Surfaces (transparent so the window backdrop shows through) */
  --bg-sidebar:        transparent;
  --bg-card:           rgba(255, 255, 255, 0.0512);
  --bg-card-hover:     rgba(255, 255, 255, 0.0837);
  --bg-control:        rgba(255, 255, 255, 0.0605);
  --bg-control-hover:  rgba(255, 255, 255, 0.0837);
  --bg-control-active: rgba(255, 255, 255, 0.0326);
  --bg-flyout:         #2c2c2c;

  /* Lines */
  --stroke:        rgba(255, 255, 255, 0.07);
  --stroke-strong: rgba(255, 255, 255, 0.14);

  /* Text */
  --text:   #ffffff;
  --text-2: rgba(255, 255, 255, 0.786);
  --text-3: rgba(255, 255, 255, 0.54);

  /* Accent */
  --accent:        #0b66f5;
  --accent-hover:  #2a7af7;
  --accent-active: #0a56cf;
  --accent-soft:   rgba(11, 102, 245, 0.22);

  /* Radii */
  --r-card: 8px;
  --r-ctrl: 4px;
  --r-sm:   4px;

  /* Layout */
  --sb-w: 256px;            /* sidebar width (expanded) */
  --sb-w-collapsed: 56px;   /* sidebar width (collapsed) */
  --tb-h: 48px;             /* title bar height */
  --col-w: 1480px;          /* max width of the content column */

  /* Stop the dark color scheme from painting an opaque page canvas */
  color-scheme: normal !important;
}

/* Base: backgrounds, font, flat surfaces */
body,
#root {
  background: transparent !important;
}

/* Dark tint over the backdrop to reduce the pale look (0 = none, 0.4 = strong) */
html {
  background: rgba(0, 0, 0, 0.18) !important;
}

body {
  color: var(--text) !important;
  -webkit-font-smoothing: antialiased;
}

/* No automatic scroll compensation, no horizontal scrolling */
html, body, #root { overflow-anchor: none !important; }
html { overflow-x: hidden !important; }

/* Everything transparent so the backdrop shows through */
.ant-layout,
.ant-layout-content,
.ant-layout-header,
.ant-layout-sider,
.ant-layout-sider-children {
  background: transparent !important;
}

.ant-layout-content {
  padding: 28px 40px 40px !important;
}

h1, h2, h3,
.ant-typography h1,
.ant-typography h2,
.ant-typography h3 {
  font-weight: 600 !important;
  letter-spacing: 0 !important;
}

/* Segoe font everywhere (code stays monospace) */
*:not(code):not(pre):not(kbd):not(samp):not(pre *):not(code *) {
  font-family: "Segoe UI Variable Text", "Segoe UI Variable", "Segoe UI", sans-serif !important;
}

/* Flat surfaces: no glass, no blur, thin 1px stroke */
.ant-card,
.ant-alert,
.ant-collapse,
.ant-list-bordered {
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  background-image: none !important;
  box-shadow: none !important;
  border-radius: var(--r-card) !important;
}

.ant-card {
  background-color: var(--bg-card) !important;
  border: 1px solid var(--stroke) !important;
  transition: background-color 0.15s ease !important;
  width: auto !important;
  max-width: none !important;
  margin: 0 !important;
}
.ant-card:hover {
  background-color: var(--bg-card-hover) !important;
}

/* Update banner: neutral InfoBar */
.ant-alert {
  margin-top: 16px !important;
  padding: 12px 16px !important;
}
.ant-alert-info {
  background: var(--bg-card) !important;
  border: 1px solid var(--stroke) !important;
}

/* Flyouts: dropdown, popover, select list, tooltip, modal (kept opaque for readability) */
.ant-dropdown-menu,
.ant-popover-inner,
.ant-select-dropdown,
.ant-tooltip-inner,
.ant-modal-content,
.ant-modal-container,
.ant-drawer-content {
  background-color: var(--bg-flyout) !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border: 1px solid var(--stroke-strong) !important;
  border-radius: var(--r-card) !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45) !important;
}
.ant-modal-header { background: transparent !important; }
.ant-modal-mask { background: rgba(0, 0, 0, 0.5) !important; }
.ant-dropdown-menu,
.ant-select-dropdown { padding: 4px !important; }
.ant-dropdown-menu-item,
.ant-select-item,
.ant-tag { border-radius: var(--r-sm) !important; }
.ant-dropdown-menu-item:hover,
.ant-select-item-option-active:not(.ant-select-item-option-disabled) {
  background: var(--bg-control-hover) !important;
}

/* Buttons */
.ant-btn {
  border-radius: var(--r-ctrl) !important;
  box-shadow: none !important;
  transition: background-color 0.12s ease, border-color 0.12s ease !important;
}

/* Default / secondary (Details, Remove, Review updates...) */
.ant-btn-default:not(.ant-btn-primary):not(.ant-btn-dangerous),
.ant-btn-variant-outlined:not(.ant-btn-dangerous) {
  background: var(--bg-control) !important;
  border: 1px solid var(--stroke) !important;
  color: var(--text) !important;
}
.ant-btn-default:not(.ant-btn-primary):not(:disabled):hover {
  background: var(--bg-control-hover) !important;
  border-color: var(--stroke) !important;
  color: var(--text) !important;
}
.ant-btn-default:not(.ant-btn-primary):not(:disabled):active {
  background: var(--bg-control-active) !important;
  color: var(--text-2) !important;
}

.ant-btn-primary:not(.ant-btn-background-ghost),
.ant-btn-variant-solid:not(.ant-btn-background-ghost):not(.ant-btn-dangerous) {
  background-image: none !important;
  background-color: var(--accent) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  color: #fff !important;
}
.ant-btn-primary:not(.ant-btn-background-ghost):not(:disabled):hover {
  background-color: var(--accent-hover) !important;
}
.ant-btn-primary:not(.ant-btn-background-ghost):not(:disabled):active {
  background-color: var(--accent-active) !important;
  color: rgba(255, 255, 255, 0.8) !important;
}

/* Disabled buttons keep a muted look */
.ant-btn-primary:not(.ant-btn-background-ghost):disabled,
.ant-btn-primary:not(.ant-btn-background-ghost):disabled:hover,
.ant-btn-variant-solid:not(.ant-btn-background-ghost):not(.ant-btn-dangerous):disabled {
  background-color: var(--bg-control-active) !important;
  border-color: var(--stroke) !important;
  color: var(--text-3) !important;
  cursor: not-allowed !important;
}
.ant-btn-default:not(.ant-btn-primary):not(.ant-btn-dangerous):disabled,
.ant-btn-default:not(.ant-btn-primary):not(.ant-btn-dangerous):disabled:hover,
.ant-btn-variant-outlined:not(.ant-btn-dangerous):disabled {
  background: var(--bg-control-active) !important;
  border-color: var(--stroke) !important;
  color: var(--text-3) !important;
  cursor: not-allowed !important;
}

/* Text / icon-only buttons */
.ant-btn-text,
.ant-btn-link,
.ant-btn-variant-text {
  background: transparent !important;
  border: none !important;
}
.ant-btn-text:hover,
.ant-btn-variant-text:hover {
  background: var(--bg-control-hover) !important;
}

/* Inputs */
.ant-input,
.ant-input-affix-wrapper,
.ant-input-number,
.ant-select-selector,
.ant-picker {
  background: var(--bg-control) !important;
  border: 1px solid var(--stroke) !important;
  border-bottom-color: var(--stroke-strong) !important;
  border-radius: var(--r-ctrl) !important;
  color: var(--text) !important;
  box-shadow: none !important;
}
.ant-input-affix-wrapper > input.ant-input,
.ant-input-affix-wrapper > input.ant-input:hover,
.ant-input-affix-wrapper > input.ant-input:focus {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
}
.ant-input::placeholder,
.ant-input-affix-wrapper input::placeholder {
  color: var(--text-3) !important;
}
/* WinUI focus: 2px accent line at the bottom edge */
.ant-input:focus,
.ant-input-affix-wrapper-focused,
.ant-input-affix-wrapper:focus-within {
  background: rgba(255, 255, 255, 0.04) !important;
  border-color: var(--stroke) !important;
  border-bottom: 2px solid var(--accent) !important;
  box-shadow: none !important;
}

/* Toggle switch (WinUI ToggleSwitch, 40x20 with a 12px knob) */
.ant-switch {
  min-width: 40px !important;
  height: 20px !important;
  background: rgba(255, 255, 255, 0.05) !important;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.55) !important;
  transition: background 0.15s ease, box-shadow 0.15s ease !important;
}
.ant-switch:hover:not(.ant-switch-disabled) {
  background: rgba(255, 255, 255, 0.1) !important;
}
.ant-switch .ant-switch-handle {
  top: 4px !important;
  inset-inline-start: 4px !important;
  width: 12px !important;
  height: 12px !important;
}
.ant-switch .ant-switch-handle::before {
  background: rgba(255, 255, 255, 0.8) !important;
  box-shadow: none !important;
  border-radius: 999px !important;
}
.ant-switch.ant-switch-checked,
.ant-switch.ant-switch-checked:hover:not(.ant-switch-disabled) {
  background: var(--accent) !important;
  box-shadow: inset 0 0 0 1px var(--accent) !important;
}
.ant-switch.ant-switch-checked .ant-switch-handle {
  inset-inline-start: calc(100% - 16px) !important;
}
.ant-switch.ant-switch-checked .ant-switch-handle::before {
  background: #ffffff !important;
}

/* Scrollbars (thin, grow on hover) */
::-webkit-scrollbar { width: 10px; height: 10px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.4);
  border: 4px solid transparent;
  background-clip: padding-box;
  border-radius: 999px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.6);
  border-width: 2px;
  background-clip: padding-box;
}
/* Sidebar keeps a slightly thicker thumb */
[data-testid="app-header"]::-webkit-scrollbar-thumb,
#wh-groups-nav::-webkit-scrollbar-thumb { border-width: 3px; }
[data-testid="app-header"]::-webkit-scrollbar-thumb:hover,
#wh-groups-nav::-webkit-scrollbar-thumb:hover { border-width: 2px; }
/* No horizontal scrollbars in the sidebar */
[data-testid="app-header"] * { overflow-x: clip !important; }
html::-webkit-scrollbar:horizontal,
[data-testid="app-header"]::-webkit-scrollbar:horizontal,
[data-testid="app-header"] *::-webkit-scrollbar:horizontal,
#wh-groups-nav::-webkit-scrollbar:horizontal {
  display: none !important;
  height: 0 !important;
}

/* Windhawk's own custom scrollbar (wh-cscroll-*) */
html body .wh-cscroll-track { background: transparent !important; }
html body .wh-cscroll-thumb.wh-cscroll-v {
  width: 4px !important;
  margin-left: 3px !important;
  border-radius: 999px !important;
  background: rgba(255, 255, 255, 0.4) !important;
  transition: width 0.12s ease, margin-left 0.12s ease, background-color 0.12s ease;
}
html body .wh-cscroll-thumb.wh-cscroll-v:hover {
  width: 6px !important;
  margin-left: 2px !important;
  background: rgba(255, 255, 255, 0.6) !important;
}
html body .wh-cscroll-track.wh-cscroll-h,
html body .wh-cscroll-thumb.wh-cscroll-h { display: none !important; }

/* Page layout: the content makes room for the sidebar and title bar */
#root {
  box-sizing: border-box;
  padding-left: var(--sb-w) !important;
  padding-top: var(--tb-h) !important;
  transition: padding-left 0.2s ease;
}
html.wh-collapsed #root { padding-left: var(--sb-w-collapsed) !important; }
html.wh-has-bar #root { padding-top: calc(var(--tb-h) + 12px) !important; }
html.wh-has-bar { scroll-padding-top: calc(var(--tb-h) + 16px) !important; }

/* Content column (marked by JS), centered with a max width */
.wh-col {
  max-width: var(--col-w) !important;
  width: 100% !important;
  margin-left: auto !important;
  margin-right: auto !important;
}

/* Title bar: transparent drag area + caption buttons (added by JS) */
#wh-tb {
  position: fixed;
  top: 0;
  right: 0;
  width: 138px;
  height: var(--tb-h);
  z-index: 100000;
  display: flex;
  justify-content: flex-end;
  background: transparent;
  user-select: none;
}
#wh-tb button {
  width: 46px;
  height: var(--tb-h);
  padding: 0;
  border: none;
  border-radius: 0;
  background: transparent;
  color: #fff;
  cursor: default;
  font-family: "Segoe Fluent Icons", "Segoe MDL2 Assets" !important;
  font-size: 10px;
  line-height: 1;
}
#wh-tb button:hover { background: rgba(255, 255, 255, 0.0837); }
#wh-tb button:active { background: rgba(255, 255, 255, 0.0326); color: rgba(255, 255, 255, 0.7); }
#wh-tb button.wh-close:hover { background: #c42b1c; }
#wh-tb button.wh-close:active { background: #b22a1b; color: rgba(255, 255, 255, 0.7); }
#wh-tb.wh-inactive button { color: rgba(255, 255, 255, 0.4); }

/* Sidebar (WinUI NavigationView style) */
[data-testid="app-header"] {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  bottom: 0 !important;
  width: var(--sb-w) !important;
  height: auto !important;
  max-height: none !important;
  min-height: 0 !important;
  box-sizing: border-box !important;
  display: flex !important;
  flex-direction: column !important;
  flex-wrap: nowrap !important;
  justify-content: flex-start !important;
  align-items: stretch !important;
  gap: 4px;
  padding: 6px 8px 12px !important;
  background: var(--bg-sidebar) !important;
  border: none !important;
  border-right: 1px solid var(--stroke) !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  z-index: 50;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  overscroll-behavior: contain;
  scrollbar-width: auto !important;
  transition: width 0.2s ease;
}
[data-testid="app-header"]::after { display: none !important; }
[data-testid="app-header"] > * {
  flex: 0 0 auto !important;
  min-height: auto !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}
html.wh-collapsed [data-testid="app-header"] { width: var(--sb-w-collapsed) !important; }

/* Logo row: icon + "Windhawk" */
[data-testid="app-header"] [class*="AppHeader__HeaderLogo"]:not([class*="HeaderLogoButton"]) {
  position: static !important;
  width: 100%;
  height: 44px !important;
  padding: 0 !important;
  margin-bottom: 8px !important;
  border: none !important;
  display: flex !important;
  align-items: center !important;
  justify-content: flex-start !important;
}
[data-testid="app-header"] [class*="AppHeader__HeaderLogoButton"] {
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: flex-start !important;
  gap: 12px !important;
  width: 100%;
  height: 44px !important;
  padding: 0 8px !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  line-height: 1 !important;
  letter-spacing: 0 !important;
  white-space: nowrap;
  color: var(--text) !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  border-radius: var(--r-ctrl) !important;
}
[data-testid="app-header"] [class*="AppHeader__HeaderLogoButton"]:hover {
  background: var(--bg-control) !important;
}
[data-testid="app-header"] [class*="AppHeader__HeaderLogoButton"] > :first-child,
[data-testid="app-header"] [class*="AppHeader__HeaderLogoButton"] img,
[data-testid="app-header"] [class*="AppHeader__HeaderLogoButton"] svg {
  width: 28px !important;
  height: 28px !important;
  min-width: 28px !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  object-fit: contain;
  flex-shrink: 0;
}
/* Keep the logo text from running under the hamburger */
html:not(.wh-collapsed) [data-testid="app-header"] [class*="AppHeader__HeaderLogoButton"] {
  padding-right: 52px !important;
}

/* Hamburger (added by JS), on the right side of the logo row */
#wh-sb-toggle {
  width: 40px;
  height: 36px;
  margin-left: 4px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: var(--r-ctrl);
  background: transparent;
  color: var(--text);
  cursor: pointer;
  transition: background 0.12s ease;
  font-family: "Segoe Fluent Icons", "Segoe MDL2 Assets" !important;
  font-size: 16px;
}
#wh-sb-toggle::before { content: "\E700"; }
#wh-sb-toggle:hover { background: var(--bg-control-hover); }
#wh-sb-toggle:active { background: var(--bg-control-active); }
#wh-sb-toggle:focus { outline: none !important; }
#wh-sb-toggle:focus-visible {
  outline: 1px solid var(--stroke-strong) !important;
  outline-offset: -1px;
}
html:not(.wh-collapsed) #wh-sb-toggle {
  position: absolute;
  top: 10px;
  right: 8px;
  margin: 0;
  z-index: 2;
}
html.wh-collapsed #wh-sb-toggle {
  position: static;
  width: auto !important;
  margin: 0 !important;
}

/* Main menu: Home / Explore / Settings / About. The wrapper disappears so the
   items become direct flex children of the sidebar and can be re-ordered. */
[data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] {
  display: contents !important;
}
[data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-badge {
  display: block !important;
  width: 100%;
}
[data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn {
  position: relative;
  flex: 0 0 auto !important;
  width: 100% !important;
  height: 40px !important;
  padding: 0 12px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: flex-start !important;
  gap: 14px !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  color: var(--text) !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  border-radius: var(--r-ctrl) !important;
}
[data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn:hover {
  background: var(--bg-control-hover) !important;
  color: var(--text) !important;
}
/* Active page: neutral fill + small accent pill (like NavigationView) */
[data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn.ant-btn-primary,
[data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn.ant-btn-primary:hover {
  background: var(--bg-control) !important;
  color: var(--text) !important;
}
[data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn.ant-btn-primary::before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  width: 3px;
  height: 16px;
  transform: translateY(-50%);
  border-radius: 2px;
  background: #5aa2ff;
  opacity: 1;
}
/* Fluent glyphs instead of the original icons (glyph span added by JS) */
[data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn[data-wh] .anticon,
[data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn[data-wh] .ant-btn-icon,
[data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn[data-wh] > svg,
[data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn[data-wh] > img {
  display: none !important;
}
[data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn[data-wh] > .wh-ico {
  flex: 0 0 20px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Segoe Fluent Icons", "Segoe MDL2 Assets" !important;
  font-size: 18px;
  line-height: 1;
  color: var(--text);
}
[data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn[data-wh="home"] > .wh-ico::before     { content: "\E80F"; }
[data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn[data-wh="explore"] > .wh-ico::before  { content: "\E774"; }
[data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn[data-wh="settings"] > .wh-ico::before { content: "\E713"; }
[data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn[data-wh="about"] > .wh-ico::before    { content: "\E946"; }

/* Version label next to "About" */
.wh-about::after {
  content: "v2.0 Alpha8";   /* edit this text */
  margin-left: auto;
  font-size: 11px;
  font-weight: 400;
  white-space: nowrap;
  color: var(--text-3);
}

/* The original "New Mod" button is hidden (the toolbar has its own) */
[class*="CreateNewModButton__ButtonContainer"] { display: none !important; }

/* Groups list (added by JS). It shrinks and scrolls so Settings/About stay visible. */
#wh-groups-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid var(--stroke);
  white-space: nowrap;
  flex: 1 1 0 !important;
  min-height: 0 !important;
  overflow-y: auto !important;
  scrollbar-width: auto !important;
}
#wh-groups-nav:empty { display: none; }
#wh-groups-nav > * { flex: 0 0 auto !important; }

.wh-gh,
.wh-gi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-radius: var(--r-ctrl);
  background: transparent;
  color: var(--text);
  font: inherit;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  transition: background 0.12s ease;
}
.wh-gh { height: 36px; padding: 0 12px; color: var(--text-2); }
.wh-gi { height: 34px; padding: 0 8px 0 34px; position: relative; }
.wh-gh:hover, .wh-gi:hover { background: var(--bg-control-hover); }

/* Selected group: neutral fill + small accent pill */
.wh-gi.wh-gi-active { background: var(--bg-control); }
.wh-gi.wh-gi-active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 3px;
  height: 16px;
  transform: translateY(-50%);
  border-radius: 2px;
  background: #5aa2ff;
}

.wh-gh .wh-chev {
  display: flex;
  transition: transform 0.15s ease;
  font-family: "Segoe Fluent Icons", "Segoe MDL2 Assets" !important;
  font-size: 12px;
}
.wh-gh .wh-chev::before { content: "\E70E"; }
#wh-groups-nav.wh-closed .wh-chev { transform: rotate(180deg); }
#wh-groups-nav.wh-closed .wh-gi { display: none; }

.wh-count {
  min-width: 22px;
  height: 20px;
  padding: 0 6px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.09);
  color: var(--text);
  font-size: 12px;
  line-height: 1;
}

/* Collapsed sidebar (icons only) */
html.wh-collapsed [data-testid="app-header"] [class*="AppHeader__HeaderLogoButton"] {
  padding: 0 !important;
  justify-content: center !important;
  font-size: 0 !important;
  gap: 0 !important;
}
html.wh-collapsed [data-testid="app-header"] [class*="AppHeader__HeaderLogoButton"] > :first-child { margin: 0 !important; }
html.wh-collapsed [data-testid="app-header"] [class*="AppHeader__HeaderLogoButton"] > :not(:first-child) { display: none !important; }
html.wh-collapsed #wh-groups-nav { display: none !important; }
html.wh-collapsed [data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn {
  padding: 0 !important;
  justify-content: center !important;
  gap: 0 !important;
  font-size: 0 !important;
}
html.wh-collapsed .wh-about::after { display: none !important; }

/* Toolbar (search, filter, list/sort, New Mod) */
.wh-toolbar {
  display: flex !important;
  flex-wrap: nowrap !important;
  align-items: center !important;
  gap: 12px !important;
  position: fixed !important;
  top: 0 !important;
  left: var(--sb-w) !important;
  right: 0 !important;
  height: var(--tb-h) !important;
  box-sizing: border-box !important;
  /* Same side gap as the centered content column */
  padding: 0 max(154px, calc((100vw - var(--sb-w) - var(--col-w)) / 2)) 0
           max(24px, calc((100vw - var(--sb-w) - var(--col-w)) / 2)) !important;
  background: transparent !important;
  border-bottom: 1px solid var(--stroke) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  z-index: 40 !important;
  transition: left 0.2s ease;
}
html.wh-collapsed .wh-toolbar {
  left: var(--sb-w-collapsed) !important;
  padding: 0 max(154px, calc((100vw - var(--sb-w-collapsed) - var(--col-w)) / 2)) 0
           max(24px, calc((100vw - var(--sb-w-collapsed) - var(--col-w)) / 2)) !important;
}

.wh-toolbar .ant-input-affix-wrapper {
  flex: 1 1 auto !important;
  width: auto !important;
  max-width: none !important;
  height: 36px !important;
  padding: 0 12px !important;
  font-size: 14px !important;
  border-radius: var(--r-ctrl) !important;
}
.wh-toolbar .ant-btn:not(#wh-newmod) {
  min-width: 36px !important;
  height: 36px !important;
  padding: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 16px !important;
  border-radius: var(--r-ctrl) !important;
}

/* Search icon on the right side (like AutoSuggestBox) */
.wh-toolbar .ant-input-affix-wrapper > input.ant-input { order: 1 !important; }
.wh-toolbar .ant-input-affix-wrapper > .ant-input-suffix { order: 2 !important; }
.wh-toolbar .ant-input-affix-wrapper > .ant-input-prefix {
  order: 3 !important;
  margin: 0 0 0 8px !important;
}
.wh-toolbar .ant-input-prefix svg { display: none !important; }
.wh-toolbar .ant-input-prefix::before {
  content: "\E721";
  font-family: "Segoe Fluent Icons", "Segoe MDL2 Assets" !important;
  font-size: 14px;
  line-height: 1;
  color: var(--text-2);
}

/* Toolbar buttons: Fluent glyphs (span added by JS) */
.wh-toolbar .ant-btn[data-wh-glyph] > :not(.wh-ico) { display: none !important; }
.wh-toolbar .ant-btn[data-wh-glyph] > .wh-ico {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  font-family: "Segoe Fluent Icons", "Segoe MDL2 Assets" !important;
  font-size: 16px;
  line-height: 1;
  color: var(--text);
}
.wh-toolbar .ant-btn[data-wh-glyph="filter"] > .wh-ico::before { content: "\E71C"; }
.wh-toolbar .ant-btn[data-wh-glyph="sort"]   > .wh-ico::before { content: "\E8CB"; }
.wh-toolbar .ant-btn[data-wh-glyph="list"]   > .wh-ico::before { content: "\E8FD"; }

/* New Mod button (added by JS, clicks the hidden original) */
#wh-newmod {
  flex: 0 0 auto;
  height: 36px;
  padding: 0 16px;
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--r-ctrl);
  background: var(--accent);
  color: #fff;
  font: inherit;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.12s ease;
}
#wh-newmod::before {
  content: "\E710";
  font-family: "Segoe Fluent Icons", "Segoe MDL2 Assets" !important;
  font-size: 16px;
}
#wh-newmod:hover { background: var(--accent-hover); }
#wh-newmod:active { background: var(--accent-active); color: rgba(255, 255, 255, 0.8); }

/* Page title + stats */
.wh-page-title {
  margin: -2px 0 16px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  flex-wrap: wrap;
  gap: 8px 24px;
  width: 100%;
  box-sizing: border-box;
  font-size: 28px !important;
  font-weight: 600 !important;
  line-height: 1.25 !important;
  letter-spacing: 0 !important;
  color: var(--text) !important;
  text-transform: capitalize;
}

#wh-stats {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-right: 17px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0;
  text-transform: none;
}
.wh-stat { display: flex; align-items: center; gap: 12px; }
.wh-stat-ic {
  font-family: "Segoe Fluent Icons", "Segoe MDL2 Assets" !important;
  font-size: 22px;
  line-height: 1;
}
.wh-stat-tx { display: flex; flex-direction: column; }
.wh-stat-tx b { font-size: 14px; font-weight: 600; color: var(--text); }
.wh-stat-tx span { font-size: 12px; font-weight: 400; color: var(--text-3); }

/* Mod cards and card grid */
/* 15px semibold title, 12px secondary description */
.wh-card-title {
  font-size: 15px !important;
  font-weight: 600 !important;
  line-height: 1.35 !important;
}
.wh-card-desc {
  font-size: 12px !important;
  line-height: 1.45 !important;
  color: var(--text-2) !important;
}

/* Card grid (class added by JS): full width, 2 columns, 3 on very wide windows */
.wh-card-grid {
  display: grid !important;
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  gap: 16px !important;
  justify-content: stretch !important;
  justify-items: stretch !important;
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
}
@media (min-width: 1800px) {
  html body .wh-card-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
}
.wh-card-grid > * {
  width: auto !important;
  max-width: none !important;
  min-width: 0 !important;
  margin: 0 !important;
}
.wh-card-grid .ant-card { width: 100% !important; }

/* Group headers span all columns */
[data-testid="mod-group-header"] { grid-column: 1 / -1; }

/* Header flow: search row first, update banner second (order set by JS) */
.wh-header-flow {
  display: flex !important;
  flex-direction: column !important;
}
.wh-header-flow .wh-toolbar { margin-bottom: 16px !important; }
.wh-header-flow .ant-alert { margin: 0 0 16px !important; }

/* Details page: surfaces that were opaque */
/* Select box (Theme dropdown). The popup list stays opaque on purpose. */
html body .ant-select,
html body .ant-select-outlined,
html body .ant-select .ant-select-content {
  background: var(--bg-control) !important;
  border-color: var(--stroke) !important;
}

/* Segmented control (Visual mode / Textual mode) */
html body .ant-segmented,
html body .ant-segmented .ant-segmented-group {
  background: var(--bg-control) !important;
}
html body .ant-segmented .ant-segmented-item-selected,
html body .ant-segmented .ant-segmented-thumb {
  background: rgba(255, 255, 255, 0.14) !important;
  box-shadow: none !important;
}

/* Source code (CodeMirror). The card behind it gives a light fill. */
html body .cm-editor,
html body .cm-scroller,
html body .cm-content,
html body .cm-gutters,
html body .cm-activeLine,
html body .cm-activeLineGutter {
  background: transparent !important;
}
html body [class*="SourceCodeView__SourceHost"],
html body [class*="ModDetailsSource__SourceWrapper"] {
  background: var(--bg-card) !important;
  border-radius: var(--r-card) !important;
}

/* Installed / Latest / Other versions */
html body .ant-radio-button-wrapper {
  background: var(--bg-control) !important;
  border-color: var(--stroke) !important;
  color: var(--text) !important;
}
html body .ant-radio-button-wrapper:hover {
  background: var(--bg-control-hover) !important;
}
html body .ant-radio-button-wrapper-checked {
  background: var(--accent-soft) !important;
  border-color: var(--accent) !important;
  color: #fff !important;
}
html body .ant-radio-button-wrapper::before {
  background-color: var(--stroke) !important;
}

/* Light mode (only when the system theme is light) */
@media (prefers-color-scheme: light) {
  :root {
    --bg-sidebar:        transparent;
    --bg-card:           rgba(255, 255, 255, 0.7);
    --bg-card-hover:     rgba(249, 249, 249, 0.5);
    --bg-control:        rgba(255, 255, 255, 0.7);
    --bg-control-hover:  rgba(249, 249, 249, 0.5);
    --bg-control-active: rgba(249, 249, 249, 0.3);
    --bg-flyout:         #f9f9f9;
    --stroke:            rgba(0, 0, 0, 0.08);
    --stroke-strong:     rgba(0, 0, 0, 0.18);
    --text:              rgba(0, 0, 0, 0.9);
    --text-2:            rgba(0, 0, 0, 0.62);
    --text-3:            rgba(0, 0, 0, 0.45);
    --accent:            #0067c0;
    --accent-hover:      #1a74c6;
    --accent-active:     #3383cd;
    --accent-soft:       rgba(0, 103, 192, 0.16);
    /* Light tint over the backdrop (0 = none, 0.5 = strong) */
    background: rgba(255, 255, 255, 0.3) !important;
  }

  /* Flyouts: softer shadow */
  :root .ant-dropdown-menu,
  :root .ant-popover-inner,
  :root .ant-select-dropdown,
  :root .ant-tooltip-inner,
  :root .ant-modal-content,
  :root .ant-modal-container,
  :root .ant-drawer-content {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18) !important;
  }
  :root .ant-modal-mask { background: rgba(0, 0, 0, 0.3) !important; }

  /* Input focus fill */
  :root .ant-input:focus,
  :root .ant-input-affix-wrapper-focused,
  :root .ant-input-affix-wrapper:focus-within {
    background: rgba(255, 255, 255, 0.9) !important;
  }

  /* Toggle switch, off state only (the on state keeps the accent look) */
  :root .ant-switch:not(.ant-switch-checked) {
    background: rgba(0, 0, 0, 0.04) !important;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.55) !important;
  }
  :root .ant-switch:not(.ant-switch-checked):hover:not(.ant-switch-disabled) {
    background: rgba(0, 0, 0, 0.08) !important;
  }
  :root .ant-switch:not(.ant-switch-checked) .ant-switch-handle::before {
    background: rgba(0, 0, 0, 0.6) !important;
  }

  /* Scrollbars */
  :root *::-webkit-scrollbar-thumb { background-color: rgba(0, 0, 0, 0.4); }
  :root *::-webkit-scrollbar-thumb:hover { background-color: rgba(0, 0, 0, 0.6); }
  html body .wh-cscroll-thumb.wh-cscroll-v { background: rgba(0, 0, 0, 0.4) !important; }
  html body .wh-cscroll-thumb.wh-cscroll-v:hover { background: rgba(0, 0, 0, 0.6) !important; }

  /* Selected nav item: neutral fill + accent pill */
  :root [data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn.ant-btn-primary,
  :root [data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn.ant-btn-primary:hover {
    background: rgba(0, 0, 0, 0.0373) !important;
  }
  :root [data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn.ant-btn-primary::before {
    background: var(--accent);
  }

  /* Caption buttons: dark glyphs and dark hover fills on a light window */
  :root #wh-tb button { color: rgba(0, 0, 0, 0.9); }
  :root #wh-tb button:hover { background: rgba(0, 0, 0, 0.0373); }
  :root #wh-tb button:active { background: rgba(0, 0, 0, 0.0241); color: rgba(0, 0, 0, 0.6); }
  :root #wh-tb button.wh-close:hover { background: #c42b1c; color: #ffffff; }
  :root #wh-tb button.wh-close:active { background: #b22a1b; color: rgba(255, 255, 255, 0.7); }
  :root #wh-tb.wh-inactive button { color: rgba(0, 0, 0, 0.4); }

  /* Selected group + count badges in the sidebar */
  :root .wh-gi.wh-gi-active { background: rgba(0, 0, 0, 0.0373); }
  :root .wh-gi.wh-gi-active::before { background: var(--accent); }
  :root .wh-count { background: rgba(0, 0, 0, 0.06); }
}
  `;

  const ensureStyle = () => {
    if (document.getElementById('wh-custom-css')) return;
    const parent = document.head || document.documentElement;
    if (!parent) return;
    const style = document.createElement('style');
    style.id = 'wh-custom-css';
    style.textContent = css;
    parent.append(style);
  };

  // localStorage can throw, so all access goes through here
  const storage = {
    get(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {}
    },
  };

  // Sidebar

  const SB_KEY = 'wh-sidebar-collapsed';
  let collapsed = storage.get(SB_KEY) === '1';

  const applyCollapsed = () => {
    if (document.documentElement) {
      document.documentElement.classList.toggle('wh-collapsed', collapsed);
    }
  };

  const toggleSidebar = () => {
    collapsed = !collapsed;
    applyCollapsed();
    storage.set(SB_KEY, collapsed ? '1' : '0');
  };

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && !e.shiftKey && !e.altKey && e.key.toLowerCase() === 'b') {
      e.preventDefault();
      toggleSidebar();
    }
  });

  const getMenu = () =>
    document.querySelector('[class*="AppHeader__HeaderButtonsWrapper"]');
  const getLogo = () =>
    document.querySelector(
      '[data-testid="app-header"] [class*="AppHeader__HeaderLogo"]:not([class*="HeaderLogoButton"])'
    );

  const ensureHamburger = () => {
    const host = document.querySelector('[data-testid="app-header"]');
    if (!host || !getMenu()) return;
    if (document.getElementById('wh-sb-toggle')) return;
    const btn = document.createElement('button');
    btn.id = 'wh-sb-toggle';
    btn.type = 'button';
    btn.title = 'Toggle sidebar (Ctrl+B)';
    btn.setAttribute('aria-label', 'Toggle sidebar');
    btn.onclick = toggleSidebar;
    const logo = getLogo();
    if (logo) logo.after(btn);
    else host.prepend(btn);
  };

  const decorateMenu = () => {
    document
      .querySelectorAll('[class*="AppHeader__HeaderButtonsWrapper"] .ant-btn')
      .forEach((b) => {
        const label = b.textContent.trim();
        if (label && b.title !== label) b.title = label;
        const key = ((label.match(/^[A-Za-z]+/) || [''])[0]).toLowerCase();
        if (!key) return;
        b.setAttribute('data-wh', key);
        if (!b.querySelector(':scope > .wh-ico')) {
          const g = document.createElement('span');
          g.className = 'wh-ico';
          g.setAttribute('aria-hidden', 'true');
          b.prepend(g);
        }
      });
  };

  // Settings and About sit at the bottom of the sidebar
  const markBottomItems = () => {
    const wrap = getMenu();
    if (!wrap) return;
    wrap.querySelectorAll('.ant-btn').forEach((b) => {
      const label = b.textContent.trim();
      if (!label.startsWith('Settings') && !label.startsWith('About')) return;
      // Climb to the direct child of the menu wrapper (button or its badge)
      let item = b;
      while (item.parentElement && item.parentElement !== wrap) item = item.parentElement;
      item.style.order = label.startsWith('Settings') ? '11' : '12';
      if (label.startsWith('Settings')) item.style.marginTop = 'auto';
      if (label.startsWith('About')) b.classList.add('wh-about');
    });
  };

  const getHeaders = () =>
    [...document.querySelectorAll('[data-testid="mod-group-header"]')];

  const getName = (h) =>
    h.querySelector('[class*="ModGroupHeader__GroupName"]')?.textContent.trim() || '';

  const getCount = (h) => {
    const t = h.querySelector('[data-testid="mod-group-count"]')?.textContent || '';
    return (t.match(/\d+/) || [''])[0];
  };

  const getCaret = (h) => h.querySelector('[data-testid="mod-group-caret"]');
  const isOpen = (h) => getCaret(h)?.getAttribute('aria-expanded') === 'true';

  // Finds the element that actually scrolls (window or an inner container)
  const getScroller = (el) => {
    let p = el.parentElement;
    while (p && p !== document.body && p !== document.documentElement) {
      const o = getComputedStyle(p).overflowY;
      if ((o === 'auto' || o === 'scroll') && p.scrollHeight > p.clientHeight + 1) return p;
      p = p.parentElement;
    }
    return document.scrollingElement || document.documentElement;
  };

  // Keeps the group header just below the fixed top bar while the layout settles
  let alignFrame = null;
  let alignCancel = false;
  ['wheel', 'touchstart', 'keydown'].forEach((t) =>
    window.addEventListener(
      t,
      () => {
        alignCancel = true;
      },
      { passive: true, capture: true }
    )
  );
  const alignGroup = (el) => {
    cancelAnimationFrame(alignFrame);
    alignCancel = false;
    const t0 = performance.now();
    let steady = 0;
    const step = () => {
      if (alignCancel || !el.isConnected || performance.now() - t0 > 1800) return;
      const d = el.getBoundingClientRect().top - 52;
      if (Math.abs(d) < 1) {
        if (++steady >= 20) return;
      } else {
        steady = 0;
        // ease-out: move a fraction of the remaining distance each frame
        const move = Math.abs(d) < 8 ? d : d * 0.16;
        getScroller(el).scrollBy({ top: move, behavior: 'instant' });
      }
      alignFrame = requestAnimationFrame(step);
    };
    alignFrame = requestAnimationFrame(step);
  };

  let activeGroup = null;
  const selectGroup = (name) => {
    activeGroup = name;
    setTimeout(tick, 450);
    const headers = getHeaders();
    const target = headers.find((h) => getName(h) === name);
    if (!target) return;
    headers.forEach((h) => {
      if (h !== target && isOpen(h)) getCaret(h).click(); // close the others
    });
    if (!isOpen(target)) getCaret(target).click();
    setTimeout(() => alignGroup(target), 350);
  };

  let nav = null;
  let lastNavKey = null;
  let groupsClosed = false;

  const ensureNav = () => {
    if (nav && nav.isConnected) return true;
    const menu = getMenu();
    if (!menu) return false;
    nav = document.createElement('div');
    nav.id = 'wh-groups-nav';
    nav.classList.toggle('wh-closed', groupsClosed);
    menu.after(nav);
    lastNavKey = null;
    return true;
  };

  const renderGroups = () => {
    const items = getHeaders().map((h) => {
      const name = getName(h);
      return { name, count: getCount(h), open: isOpen(h) && name === activeGroup };
    });
    const key = items.map((i) => i.name + ':' + i.count + ':' + i.open).join('|');
    if (key === lastNavKey) return;
    lastNavKey = key;
    nav.replaceChildren();
    if (!items.length) return; // empty nav is hidden by CSS (:empty)

    const head = document.createElement('button');
    head.type = 'button';
    head.className = 'wh-gh';
    const title = document.createElement('span');
    title.textContent = 'Groups';
    const chev = document.createElement('span');
    chev.className = 'wh-chev'; // the glyph comes from CSS
    head.append(title, chev);
    head.onclick = () => {
      groupsClosed = !groupsClosed;
      nav.classList.toggle('wh-closed', groupsClosed);
    };
    nav.append(head);

    items.forEach(({ name, count, open }) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'wh-gi' + (open ? ' wh-gi-active' : '');
      const text = document.createElement('span');
      text.textContent = name;
      const badge = document.createElement('span');
      badge.className = 'wh-count';
      badge.textContent = count;
      b.append(text, badge);
      b.onclick = () => selectGroup(name);
      nav.append(b);
    });
  };

  const updateSidebar = () => {
    applyCollapsed();
    ensureHamburger();
    decorateMenu();
    if (ensureNav()) renderGroups();
  };

  // Page header: title, toolbar, banner
  let titleEl = null;

  // Find the page title by its text (outside the sidebar)
  const findTitle = () => {
    const nodes = document.querySelectorAll('#root h1, #root h2, #root h3, #root span, #root div');
    for (const el of nodes) {
      if (el.closest('[data-testid="app-header"]')) continue;
      if (el.children.length > 1) continue;
      const own = [...el.childNodes]
        .filter((n) => n.nodeType === 3)
        .map((n) => n.textContent.trim())
        .join('');
      if (/^installed mods$/i.test(own)) return el;
    }
    return null;
  };

  const ensureTitle = () => {
    if (!titleEl || !titleEl.isConnected) titleEl = findTitle();
    if (!titleEl) return;
    titleEl.classList.add('wh-page-title');

    // Hide the small icon next to the title (if any)
    [...(titleEl.parentElement?.children || [])].forEach((s) => {
      if (s !== titleEl && (s.matches('svg, img, .anticon') || s.querySelector('svg'))) {
        s.style.display = 'none';
      }
    });
    titleEl.querySelectorAll('svg, .anticon').forEach((s) => (s.style.display = 'none'));
  };

  const ensureToolbar = () => {
    const search = document.querySelector('#root .ant-input-affix-wrapper');
    if (!search || search.closest('[data-testid="app-header"]')) return;
    const si = search.querySelector('input');
    if (!si || !/search/i.test(si.placeholder || '')) return;
    const bar = search.parentElement;
    if (!bar || (titleEl && bar.contains(titleEl))) return;
    bar.classList.add('wh-toolbar');

    if (bar.querySelector('#wh-newmod')) return;
    const orig = document.querySelector(
      '[class*="CreateNewModButton__ButtonContainer"] button, [class*="CreateNewModButton__ButtonContainer"] .ant-btn'
    ) || document.querySelector('[class*="CreateNewModButton__ButtonContainer"]');
    if (!orig) return;

    const btn = document.createElement('button');
    btn.id = 'wh-newmod';
    btn.type = 'button';
    btn.innerHTML = '<span>New Mod</span>'; // the plus glyph comes from CSS
    btn.onclick = () => orig.click();
    bar.append(btn);
  };

  // Search row above the update banner
  const reorderHeader = () => {
    const banner = document.querySelector('#root .ant-alert');
    const bar = document.querySelector('#root .wh-toolbar');
    if (!banner || !bar) return;

    // Find the closest common parent of the toolbar and the banner
    let parent = bar.parentElement;
    while (parent && !parent.contains(banner)) parent = parent.parentElement;
    if (!parent || parent === bar || parent === banner) return;

    const branchOf = (el) => {
      let n = el;
      while (n && n.parentElement !== parent) n = n.parentElement;
      return n;
    };
    const barBranch = branchOf(bar);
    const bannerBranch = branchOf(banner);
    if (!barBranch || !bannerBranch || barBranch === bannerBranch) return;

    parent.classList.add('wh-header-flow');
    const kids = [...parent.children];
    kids.forEach((c, i) => {
      c.style.order = String(i * 2);
    });

    // If the banner currently comes first, put the toolbar right before it
    const bannerIdx = kids.indexOf(bannerBranch);
    const barIdx = kids.indexOf(barBranch);
    if (bannerIdx < barIdx) {
      barBranch.style.order = String(bannerIdx * 2 - 1);
    }
  };

  // Moves the fixed toolbar so the search box is centered on the logo row
  const alignToolbar = () => {
    const bar = document.querySelector('.wh-toolbar');
    const logo = document.querySelector(
      '[data-testid="app-header"] [class*="AppHeader__HeaderLogoButton"]'
    );
    const field = bar && bar.querySelector('.ant-input-affix-wrapper');
    if (!bar || !logo || !field) return;
    const a = logo.getBoundingClientRect();
    const s = field.getBoundingClientRect();
    const d = a.top + a.height / 2 - (s.top + s.height / 2);
    if (Math.abs(d) < 0.5) return;
    const cur = parseFloat(bar.style.top) || 0;
    bar.style.setProperty('top', cur + d + 'px', 'important');
  };

  const decorateToolbar = () => {
    const bar = document.querySelector('.wh-toolbar');
    if (!bar) return;
    const isHome = !!document.querySelector('.wh-page-title');
    [...bar.querySelectorAll('.ant-btn')]
      .filter((b) => b.id !== 'wh-newmod')
      .forEach((b, i) => {
        const g = i === 0 ? 'filter' : isHome ? 'list' : 'sort';
        if (b.getAttribute('data-wh-glyph') !== g) b.setAttribute('data-wh-glyph', g);
        if (!b.querySelector(':scope > .wh-ico')) {
          const s = document.createElement('span');
          s.className = 'wh-ico';
          s.setAttribute('aria-hidden', 'true');
          b.prepend(s);
        }
      });
  };

  // Mod cards and card grid

  // First text = title, longest of the remaining texts = description
  const decorateCards = () => {
    document.querySelectorAll('#root .ant-card').forEach((card) => {
      if (card.querySelector('.wh-card-title')) return;
      if (card.parentElement.closest('.ant-card')) return;
      if (![...card.querySelectorAll('button')].some((b) => b.textContent.trim() === 'Details')) return;
      const leaves = [...card.querySelectorAll('*')].filter(
        (el) =>
          el.children.length === 0 &&
          el.textContent.trim() &&
          !el.closest('button, .ant-btn, .ant-switch, .ant-ribbon, .ant-tag')
      );
      if (leaves.length < 2) return;
      leaves[0].classList.add('wh-card-title');
      let best = null;
      let len = 0;
      leaves.slice(1).forEach((el) => {
        const n = el.textContent.trim().length;
        if (n >= len) {
          best = el;
          len = n;
        }
      });
      if (best) best.classList.add('wh-card-desc');
    });
  };

  // Marks the real card list containers with .wh-card-grid.
  // gridDepth = levels between a card and its list container, learned from
  // lists that have several cards and reused for lists that hold only one card.
  let gridDepth = 1;
  const markCardGrid = () => {
    // Only visible cards count (the Home page stays mounted but hidden while a
    // details page is open), and containers holding tabs are never a card list
    const keep = new Set();
    if (document.querySelector('.wh-toolbar')) {
      const cards = [...document.querySelectorAll('#root .ant-card')].filter(
        (c) => !c.parentElement.closest('.ant-card') && c.getClientRects().length > 0
      );
      for (let i = 0; i + 1 < cards.length; i++) {
        // The closest common parent of two neighbouring cards is the list container
        let box = cards[i].parentElement;
        while (box && !box.contains(cards[i + 1])) box = box.parentElement;
        if (!box || box.id === 'root') continue;
        if (box.querySelector('[data-testid="mod-group-header"]')) continue;
        if (box.querySelector('.ant-tabs')) continue;
        let n = cards[i], d = 0;
        while (n && n !== box) { n = n.parentElement; d++; }
        if (n === box) gridDepth = d;
        keep.add(box);
      }
      // Lists with a single card: climb the same number of levels as in other lists
      cards.forEach((c) => {
        let a = c;
        for (let i = 0; i < gridDepth && a; i++) a = a.parentElement;
        if (!a || a.id === 'root' || a === document.body) return;
        if (a.querySelector('[data-testid="mod-group-header"]')) return;
        if (a.querySelector('.ant-tabs')) return;
        keep.add(a);
      });
    }
    // Remove the class from containers that no longer qualify
    document.querySelectorAll('.wh-card-grid').forEach((el) => {
      if (!keep.has(el)) el.classList.remove('wh-card-grid');
    });
    keep.forEach((el) => el.classList.add('wh-card-grid'));
  };

  // Finds the ancestor of the card grid that limits the page width and marks
  // it (.wh-col) so the CSS can widen and center it
  const markColumn = () => {
    // Only mark the column while the card grid is on screen, and clean up on
    // other pages (e.g. the mod details page)
    const grid = document.querySelector('.wh-card-grid');
    if (!grid || !grid.getClientRects().length) {
      document.querySelectorAll('.wh-col').forEach((x) => x.classList.remove('wh-col'));
      return;
    }
    let e = grid;
    while (e && e.id !== 'root') {
      const s = getComputedStyle(e);
      if (s.maxWidth !== 'none' || (e.parentElement && e.offsetWidth < e.parentElement.clientWidth - 40 && e.offsetWidth > 900)) {
        e.classList.add('wh-col');
        return;
      }
      e = e.parentElement;
    }
  };

  // Top-bar spacing only where the bar exists + scroll reset
  const isShown = (el) => el.getClientRects().length > 0;
  const onDetail = () => [...document.querySelectorAll('#root .ant-tabs')].some(isShown);
  // True only when a toolbar exists AND is visible, and we are not on a mod details page
  const barVisible = () =>
    [...document.querySelectorAll('.wh-toolbar')].some(isShown) && !onDetail();
  const pageKey = () =>
    location.href +
    '|' + barVisible() +
    '|' + !!document.querySelector('.wh-page-title');
  let stableKey = pageKey();
  let lastBarSeen = Date.now();
  const syncPage = () => {
    if (barVisible()) {
      lastBarSeen = Date.now();
      document.documentElement.classList.add('wh-has-bar');
    } else if (onDetail() || Date.now() - lastBarSeen > 250) {
      document.documentElement.classList.remove('wh-has-bar');
    } else {
      setTimeout(syncPage, 270);
    }
    const k = pageKey();
    if (k === stableKey) return;
    setTimeout(() => {
      if (pageKey() === k && k !== stableKey) {
        stableKey = k;
        window.scrollTo(0, 0);
      }
    }, 150);
  };

  // Statistics (Catalog / Installed / Enabled)
  const GKEY = 'wh-grp-enabled';
  let grpCache = {};
  try {
    grpCache = JSON.parse(storage.get(GKEY) || '{}') || {};
  } catch {}

  // Walks headers and switches in page order: switches before the first header
  // are ungrouped, the rest belong to the header above them.
  const computeStats = () => {
    const items = document.querySelectorAll(
      '[data-testid="mod-group-header"], [data-testid="mod-card-switch"]'
    );
    if (!items.length) return null;
    let ungrouped = 0;
    let ungroupedOn = 0;
    const groups = {};
    let cur = null;
    items.forEach((el) => {
      if (el.matches('[data-testid="mod-group-header"]')) {
        cur = getName(el);
        groups[cur] = { count: parseInt(getCount(el), 10) || 0, rendered: 0, on: 0 };
        return;
      }
      const sw = el.closest('.ant-switch') || el.querySelector('.ant-switch') || el;
      const on =
        sw.classList.contains('ant-switch-checked') ||
        sw.getAttribute('aria-checked') === 'true';
      if (cur === null) {
        ungrouped++;
        if (on) ungroupedOn++;
      } else {
        groups[cur].rendered++;
        if (on) groups[cur].on++;
      }
    });

    let total = ungrouped;
    let on = ungroupedOn;
    let partial = false;
    let changed = false;
    Object.keys(groups).forEach((n) => {
      const g = groups[n];
      total += Math.max(g.count, g.rendered);
      if (g.rendered > 0 && g.rendered >= g.count) {
        on += g.on;
        if (grpCache[n] !== g.on) {
          grpCache[n] = g.on;
          changed = true;
        }
      } else if (g.count === 0) {
        // empty group
      } else if (n in grpCache) {
        on += Math.min(grpCache[n], g.count);
      } else {
        partial = true; // closed group that was never opened yet
      }
    });
    if (changed) storage.set(GKEY, JSON.stringify(grpCache));
    return { total, on, partial };
  };

  // Catalog size (fetched from the online catalog, cached)
  const CKEY = 'wh-catalog-count';
  let catalogCount = parseInt(storage.get(CKEY) || '0', 10) || 0;

  const loadCatalog = async (retries = 2) => {
    try {
      const res = await fetch('https://mods.windhawk.net/catalog.json');
      const data = await res.json();
      const mods = data.mods || data;
      const n = Array.isArray(mods) ? mods.length : Object.keys(mods).length;
      if (n > 0) {
        catalogCount = n;
        storage.set(CKEY, String(n));
      }
    } catch {
      if (retries > 0) setTimeout(() => loadCatalog(retries - 1), 15000);
    }
  };
  loadCatalog();

  const setText = (el, v) => {
    if (el && el.textContent !== v) el.textContent = v;
  };

  const updateStats = () => {
    const title = document.querySelector('.wh-page-title');
    if (!title || !isShown(title)) return;
    let box = title.querySelector(':scope > #wh-stats');
    if (!box) {
      box = document.createElement('div');
      box.id = 'wh-stats';
      box.innerHTML =
        '<div class="wh-stat"><span class="wh-stat-ic" style="color:#4a9bff">\uE774</span>' +
        '<div class="wh-stat-tx"><b>Catalog</b><span id="wh-st-cat"></span></div></div>' +
        '<div class="wh-stat"><span class="wh-stat-ic" style="color:#c58af9">\uE71D</span>' +
        '<div class="wh-stat-tx"><b>Installed Mods</b><span id="wh-st-ins"></span></div></div>' +
        '<div class="wh-stat"><span class="wh-stat-ic" style="color:#6ccb5f">\uEC61</span>' +
        '<div class="wh-stat-tx"><b>Enabled</b><span id="wh-st-on"></span></div></div>';
      title.append(box);
    }
    const q = document.querySelector('.wh-toolbar input');
    if (q && q.value) return; // a search is filtering the list
    const st = computeStats();
    if (!st) return;
    setText(box.querySelector('#wh-st-cat'), catalogCount ? catalogCount + ' mods' : 'Loading…');
    setText(box.querySelector('#wh-st-ins'), st.total + ' mods');
    setText(
      box.querySelector('#wh-st-on'),
      st.on + (st.partial ? '+' : '') + ' of ' + st.total
    );
  };

  // Main loop
  const tick = () => {
    ensureStyle();
    updateSidebar();
    ensureTitle();
    ensureToolbar();
    reorderHeader();
    markCardGrid();
    markBottomItems();
    alignToolbar();
    decorateToolbar();
    decorateCards();
    markColumn();
    syncPage();
    updateStats();
  };

  // The observer only watches child list changes; the interval catches
  // attribute-only changes (switch state, aria-expanded) it cannot see.
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
  });

  setInterval(tick, 2000);
  tick();

  // Title bar: drag area + caption buttons, talks to the mod via window.whWindow
  (() => {
    if (document.getElementById('wh-tb')) return;
    const send = (type) => window.whWindow?.(JSON.stringify({ type }));

    // Tell the mod this theme draws its own title bar (retry until the binding exists)
    const announceTitleBar = () => {
      if (window.whWindow) {
        window.whWindow(JSON.stringify({ type: 'titlebar', custom: true }));
      } else {
        setTimeout(announceTitleBar, 500);
      }
    };
    setTimeout(announceTitleBar, 1000);

    const bar = document.createElement('div');
    bar.id = 'wh-tb';

    // The whole top row (sidebar header, search row, empty space) drags the
    // window, except interactive controls. The drag starts only after the mouse
    // moves, so a plain double click is not swallowed by the system move loop.
    const isDragZone = (e) =>
      e.button === 0 && e.clientY < bar.offsetHeight &&
      !e.target.closest('button, input, a, select, textarea, [role="button"], .ant-btn, .ant-input-affix-wrapper, [class*="HeaderLogo"], #wh-sb-toggle');
    let downX = 0, downY = 0, pressed = false;
    document.addEventListener('mousedown', (e) => {
      if (!isDragZone(e)) return;
      pressed = true; downX = e.screenX; downY = e.screenY;
    }, true);
    document.addEventListener('mousemove', (e) => {
      if (!pressed || !(e.buttons & 1)) return;
      if (Math.abs(e.screenX - downX) + Math.abs(e.screenY - downY) > 4) {
        pressed = false;
        send('drag');
      }
    }, true);
    document.addEventListener('mouseup', () => { pressed = false; }, true);
    document.addEventListener('dblclick', (e) => { if (isDragZone(e)) send('maximize'); }, true);

    const mk = (glyph, type, cls) => {
      const b = document.createElement('button');
      b.textContent = glyph;
      b.title = type[0].toUpperCase() + type.slice(1);
      if (cls) b.className = cls;
      b.onclick = () => send(type);
      bar.append(b);
      return b;
    };
    mk('\uE921', 'minimize');
    const maxBtn = mk('\uE922', 'maximize');
    mk('\uE8BB', 'close', 'wh-close');
    document.body.append(bar);

    // Maximize / restore glyph. Heuristic: a maximized window fills the work area.
    const syncMax = () => {
      const max = window.outerWidth >= screen.availWidth - 16 &&
                  window.outerHeight >= screen.availHeight - 16;
      maxBtn.textContent = max ? '\uE923' : '\uE922';
      maxBtn.title = max ? 'Restore' : 'Maximize';
    };
    window.addEventListener('resize', syncMax);
    syncMax();

      const syncFocus = () => bar.classList.toggle('wh-inactive', !document.hasFocus());
    window.addEventListener('focus', syncFocus);
    window.addEventListener('blur', syncFocus);
    syncFocus();

    // Invisible resize handles on the top edge and the top corners.
    // The mod starts the system sizing loop when it gets a "resize" message.
    const mkHandle = (edge, handleCss, cursor) => {
      const el = document.createElement('div');
      el.style.cssText =
        'position:fixed;z-index:2147483647;background:transparent;' + handleCss +
        'cursor:' + cursor + ';';
      el.addEventListener('mousedown', (e) => {
        if (e.button === 0) {
          e.preventDefault();
          window.whWindow?.(JSON.stringify({ type: 'resize', edge }));
        }
      });
      document.documentElement.appendChild(el);
    };
    mkHandle('t', 'top:0;left:8px;right:8px;height:4px;', 'ns-resize');
    mkHandle('tl', 'top:0;left:0;width:8px;height:8px;', 'nwse-resize');
    mkHandle('tr', 'top:0;right:0;width:8px;height:8px;', 'nesw-resize');
  })();
})();
