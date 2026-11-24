# macOS theme for Windhawk Skin

This theme gives the Windhawk interface a macOS-inspired look: a dark flat sidebar with a collapsible menu, traffic light window controls, a card grid for installed mods, and System Settings style Settings and About pages. It supports both the dark and the light Windhawk color schemes.

**Author**: [grn15RenS](https://github.com/grn15RenS)

| Dark Mode | Light Mode |
|-----------|-------------|
| ![Installed Mods_Dark](https://github.com/user-attachments/assets/3cacca89-fdb3-4126-ba99-f3e55f7ebca1) | ![Installed Mods_Dark](https://github.com/user-attachments/assets/633f6304-e01c-41aa-9b7f-67f589c8c194) | 

<details>
<summary>More screenshots</summary>

| Section | Screenshot |
|---------|------------|
| Explore | ![Explore](https://github.com/user-attachments/assets/75b7322b-c8b0-48af-8997-03eaf5ad3a63) |
| Mod details | ![Mod details](https://github.com/user-attachments/assets/4df8c1a8-7975-48b5-935c-423ba738ac83) |
| Settings | ![Settings](https://github.com/user-attachments/assets/f59498e9-99fe-4cde-aa6a-9fe720f8198c) |
| About | ![About](https://github.com/user-attachments/assets/a7146fa5-fc80-49db-b52d-91d583cb2810) |

</details>

## Features

- Traffic light window controls (close, minimize, maximize) at the top left. Drag the top edge to move the window, and double-click it to maximize.
- Collapsible sidebar, toggled with the button at the top or with `Ctrl+B`. The state is remembered.
- Sidebar groups list for jumping to a mod group, an update count badge on Home, and a small Catalog / Installed / Enabled stats box.
- Installed mods shown as a responsive card grid, with the author name, an update label, and a "..." menu that holds Remove.
- Redesigned Installed Mods header with a title, subtitle, view toggle, and a New Mod button next to the search field.
- Redesigned mod details page with a segmented tab bar and pill-shaped action buttons.
- Settings and About pages restyled in the System Settings style.
- Blue accent color and rounded corners across the whole UI.

## Notes

> [!IMPORTANT]
> Requires the Windhawk Skin mod with **Remove native title bar** turned on, so the native title bar is replaced by the traffic lights. This option needs Windows 11 22H2 (build 22621) or newer. Without it, you will see both the native title bar and the traffic lights.

> [!NOTE]
> This theme draws a solid background, so the **Window backdrop** setting (Mica, Acrylic, Mica Alt) has no visible effect with it.

> [!NOTE]
> The theme follows the Windhawk color scheme, so it also works in light mode. To switch, open **Settings** in Windhawk and set **Theme** to Dark, Light, or System.

> [!NOTE]
> The theme uses the Plus Jakarta Sans font if it is installed on your PC. Otherwise it falls back to SF Pro or Segoe UI. The font is not bundled with the theme.

> [!NOTE]
> To show the author name on each mod card, the theme downloads the public mod catalog from `mods.windhawk.net`. If the catalog cannot be reached, cards show "Local mod" instead. The version text at the bottom of the sidebar is fixed text in the theme and does not follow your installed Windhawk version.

> [!WARNING]
> The theme depends on the internal structure of the Windhawk UI, so it may break after a Windhawk update.

## Theme selection

The theme is built into the Windhawk Skin mod and can be selected directly from the mod's settings:

- Open the Windhawk Skin mod in Windhawk.
- Go to the "Settings" tab.
- Set **Skin theme** to "Native macOS".
- Turn on **Remove native title bar** and save the settings.
- Restart the Windhawk UI (close it completely and open it again).

## Manual installation

The theme can also be loaded from a file on your PC:

- Download [`native-macos.js`](native-macos.js) from this folder.
- Save it anywhere, for example `%APPDATA%\WindhawkSkin\native-macos.js`.
- Open the Windhawk Skin mod in Windhawk and go to the "Settings" tab.
- Set **Skin file path** to that file. When it is set, it is used instead of **Skin theme**.
- Turn on **Remove native title bar**, save the settings, and restart the Windhawk UI.
