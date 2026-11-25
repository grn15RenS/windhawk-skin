# Windows 11 theme for Windhawk Skin

This theme gives the Windhawk interface a Windows 11 look in the WinUI 3 style: transparent surfaces that let the Mica or Acrylic backdrop show through, a collapsible NavigationView sidebar, Fluent caption buttons, a card grid for installed mods, and a toolbar with search and a New Mod button. It supports both the dark and the light Windhawk color schemes.

**Author**: [grn15RenS](https://github.com/grn15RenS)

| Dark Mode | Light Mode |
|-----------|-------------|
| ![Installed Mods_Dark](https://github.com/user-attachments/assets/791c4867-7d6c-44cb-9a96-26598993b21d) | ![Installed Mods_Light](https://github.com/user-attachments/assets/f3052832-81c9-46aa-a982-f497f3dfb879) |

| Mica | Acrylic | Mica Alt |
|-----|-------|----------|
| ![Mica](https://github.com/user-attachments/assets/0b531b47-f07d-49f8-87d0-81a583809c96) | ![Acrylic](https://github.com/user-attachments/assets/70666648-3a46-497d-9f92-f27afc120e7b) | ![MicaAlt](https://github.com/user-attachments/assets/42a02c40-ceda-4a3e-b6aa-c45ab988a5e3) |

## Features

- Fluent caption buttons (minimize, maximize, close) at the top right. Drag the top row to move the window, double-click it to maximize, and resize from the top edge or the top corners.
- Collapsible sidebar, toggled with the hamburger button or with `Ctrl+B`. The state is remembered.
- Sidebar groups list for jumping to a mod group, with a count badge for each group. Settings and About stay at the bottom, and About shows a version label.
- Catalog / Installed / Enabled stats next to the Installed Mods title.
- Installed mods shown as a card grid with two columns, or three columns on very wide windows.
- Toolbar in the title bar row with the search field, filter and list or sort buttons, and a New Mod button.
- Buttons, inputs, toggle switches, flyouts, segmented controls, and scrollbars restyled to match WinUI.
- Blue accent color and small rounded corners across the whole UI.

## Notes

> [!IMPORTANT]
> Requires the Windhawk Skin mod with **Remove native title bar** turned on, so the native title bar is replaced by the caption buttons of the theme. This option needs Windows 11 22H2 (build 22621) or newer. Without it, you will see both the native title bar and the caption buttons.

> [!NOTE]
> The surfaces of this theme are transparent, so the **Window backdrop** setting (Mica, Acrylic, Mica Alt) shows through the sidebar, cards, and toolbar. The backdrop effect is only visible in dark mode, so set **Theme** to Dark in the Windhawk settings to see it. With no backdrop, the window shows a plain tinted background.

> [!NOTE]
> The theme follows the Windhawk color scheme, so it also works in light mode. To switch, open **Settings** in Windhawk and set **Theme** to Dark, Light, or System.

> [!NOTE]
> The theme uses the Segoe UI Variable font, with Segoe UI as the fallback, and the Segoe Fluent Icons font for the icons. Both come with Windows 11. On older systems the icons fall back to Segoe MDL2 Assets.

> [!NOTE]
> The Catalog count in the stats is downloaded from `mods.windhawk.net`, so it shows "Loading…" until the download succeeds. The Enabled count shows a trailing `+` until every group has been opened at least once. The version text next to About is fixed text in the theme and does not follow your installed Windhawk version.

> [!WARNING]
> The theme depends on the internal structure of the Windhawk UI, so it may break after a Windhawk update.

## Theme selection

The theme is built into the Windhawk Skin mod and can be selected directly from the mod's settings:

- Open the Windhawk Skin mod in Windhawk.
- Go to the "Settings" tab.
- Set **Skin theme** to "Native WinUI".
- Turn on **Remove native title bar** and save the settings.
- Restart the Windhawk UI (close it completely and open it again).

## Manual installation

The theme can also be loaded from a file on your PC:

- Download [`native-winui.js`](native-winui.js) from this folder.
- Save it anywhere, for example `%APPDATA%\WindhawkSkin\native-winui.js`.
- Open the Windhawk Skin mod in Windhawk and go to the "Settings" tab.
- Set **Skin file path** to that file. When it is set, it is used instead of **Skin theme**.
- Turn on **Remove native title bar**, save the settings, and restart the Windhawk UI.
