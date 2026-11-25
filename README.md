# windhawk-skin

Ready-made skins (themes) for the **Windhawk Skin** mod, which applies your own JavaScript skin to the Windhawk interface itself.

## What is this?

**Windhawk Skin** is a [Windhawk](https://windhawk.net) mod that targets `windhawk-ui.exe`. The Windhawk UI is built on WebView2, so the mod injects a JavaScript file (a *skin*) into it. A skin can change the look, layout, and UI components of Windhawk, for example restyling elements, adding a sidebar, or hiding parts of the UI.

## Themes

There are currently only 2 themes available. More may be added later.

| Theme | Description |
| --- | --- |
| [`native-winui`](Themes/native-winui) | A native Windows 11 (WinUI) look |
| [`native-macos`](Themes/native-macos) | A macOS-style look |

Each theme has its own folder in [`Themes/`](Themes) with the skin `.js` file, a readme, and screenshots.

## Installation

1. Install [Windhawk](https://windhawk.net).
2. Add the **Windhawk Skin** mod, using the code in [`Source/windhawk-skin.wh.cpp`](Source/windhawk-skin.wh.cpp).
3. In the mod settings, choose the theme you want to use.
4. Reopen the Windhawk window so the skin is applied.

> [!NOTE]
> Windhawk Skin is still in early development (version 0.1), so some things may be rough or change between versions.

## Creating your own skin

See [`Styling-guide.md`](Styling-guide.md) for how a skin works and how to style the Windhawk UI.

Contributions are welcome: if you made a theme, feel free to open a pull request that adds it to the `Themes/` folder.

## License

Released under the [MIT License](LICENSE).
