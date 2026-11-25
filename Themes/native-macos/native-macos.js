/*
macOS theme for Windhawk Skin

This theme gives the Windhawk interface a macOS-inspired look: a dark flat
sidebar with a collapsible menu, traffic light window controls, a card grid
for installed mods, and System Settings style Settings and About pages. It
supports both the dark and the light Windhawk color schemes.

Author: [grn15RenS](https://github.com/grn15RenS)
*/

(() => {
  if (window.__whGroupsInstalled) return;
  window.__whGroupsInstalled = true;

  const css = String.raw`
/* 1. Base: variables, transparency, glass, radii */
:root {
  --r-xl: 24px;
  --r-lg: 16px;
  --r-md: 12px;
  --r-sm: 8px;
  --header-row-h: 40px;
  --card-min: 340px;
  --font-ui: "Plus Jakarta Sans", "Plus Jakarta Sans Medium", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI Variable Text", "Segoe UI", sans-serif;
  --light-size: 14px;
  --light-gap: 9px;
  --light-icon: 9px;
  --light-center-y: 31px; /* lines up with the collapse button */
}

body {
  background: rgb(10, 10, 12) !important;
}

.ant-layout,
.ant-layout-content,
.ant-layout-header,
.ant-layout-sider,
.ant-layout-sider-children {
  background: transparent !important;
}

.ant-layout-sider,
.ant-layout-header,
.ant-card,
.ant-modal-content,
.ant-drawer-content,
.ant-dropdown-menu,
.ant-popover-inner {
  background-color: rgba(30, 30, 30, 0.35) !important;
  backdrop-filter: blur(20px) saturate(140%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(140%) !important;
}

.ant-card,
.ant-alert,
.ant-drawer-content,
.ant-dropdown-menu,
.ant-popover-inner,
.ant-collapse,
.ant-table-wrapper .ant-table,
.ant-list-bordered {
  border-radius: var(--r-lg) !important;
  overflow: hidden;
}

.ant-card-head {
  border-radius: var(--r-lg) var(--r-lg) 0 0 !important;
}

.ant-card-body {
  border-radius: 0 0 var(--r-lg) var(--r-lg) !important;
  padding: 16px 18px !important;
}

.ant-btn,
.ant-input,
.ant-input-affix-wrapper,
.ant-input-number,
.ant-select-selector,
.ant-picker,
.ant-segmented,
.ant-tabs-tab,
.ant-input-group-addon {
  border-radius: var(--r-md) !important;
}

.ant-tag,
.ant-badge-count,
.ant-dropdown-menu-item,
.ant-select-item,
.ant-segmented-item,
.ant-tooltip-inner,
.ant-checkbox-inner {
  border-radius: var(--r-sm) !important;
}

.ant-modal-container,
.ant-modal-content {
  border-radius: var(--r-xl) !important;
  overflow: hidden;
}

.ant-modal .ant-alert {
  border-radius: var(--r-md) !important;
}

.ant-modal-header {
  background: transparent !important;
}

.ant-modal-mask {
  background: rgba(0, 0, 0, 0.45) !important;
}

.ant-modal-container {
  background-color: rgba(28, 28, 30, 0.82) !important;
}

.ant-select-dropdown {
  border-radius: var(--r-md) !important;
  padding: 4px !important;
  overflow: hidden;
}

.ant-input-number-input-wrap,
.ant-input-number-input {
  border-radius: var(--r-md) !important;
}

.ant-input-number {
  overflow: hidden;
}

.ant-card,
.ant-modal-container,
.ant-modal-content,
.ant-drawer-content {
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.10),
    0 8px 32px rgba(0, 0, 0, 0.45) !important;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 40%
  ) !important;
}

/* 2. Controls and typography: switch, buttons, inputs, scrollbar, fonts */

/* macOS-style switch */
.ant-switch {
  background: rgba(120, 120, 128, 0.32) !important;
  transition: background 0.25s ease !important;
}

.ant-switch:hover:not(.ant-switch-disabled) {
  background: rgba(120, 120, 128, 0.45) !important;
}

.ant-switch.ant-switch-checked,
.ant-switch.ant-switch-checked:hover:not(.ant-switch-disabled) {
  background: #0a84ff !important;
}

.ant-switch .ant-switch-handle::before {
  background: #ffffff !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35) !important;
}

.ant-btn-primary:not(.ant-btn-background-ghost),
.ant-btn-variant-solid:not(.ant-btn-background-ghost) {
  background-image: none !important;
  background-color: #0a84ff !important;
  border: none !important;
  box-shadow: none !important;
  border-radius: var(--r-sm) !important;
}

.ant-btn-primary:not(.ant-btn-background-ghost):hover,
.ant-btn-variant-solid:not(.ant-btn-background-ghost):hover {
  background-color: #3395ff !important;
  filter: none !important;
  transform: none !important;
}

.ant-btn-primary:not(.ant-btn-background-ghost):active,
.ant-btn-variant-solid:not(.ant-btn-background-ghost):active {
  background-color: #0071e3 !important;
  filter: none !important;
}

.ant-btn-background-ghost {
  background-image: none !important;
  box-shadow: none !important;
}

.ant-btn-default {
  transition: background-color 0.2s ease, border-color 0.2s ease !important;
}

.ant-input-affix-wrapper {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
}

.ant-input-affix-wrapper > input.ant-input,
.ant-input-affix-wrapper > input.ant-input:hover,
.ant-input-affix-wrapper > input.ant-input:focus {
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  outline: none !important;
}

.ant-input-affix-wrapper-focused,
.ant-input-affix-wrapper:focus-within {
  border-color: #0a84ff !important;
  box-shadow: 0 0 0 3px rgba(10, 132, 255, 0.25) !important;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.35);
  background-clip: padding-box;
}

.wh-cscroll-thumb {
  border-radius: 999px !important;
}

body,
button,
input,
select,
textarea,
.ant-btn,
.ant-input,
.ant-select,
.ant-modal,
.ant-card {
  font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Medium", "SF Pro", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI Variable Text", Inter, "Segoe UI", sans-serif !important;
  -webkit-font-smoothing: antialiased;
}

html body #root,
html body #root :is(button, input, select, textarea, h1, h2, h3, h4, h5, h6, p, span, div, a, label, li, td, th):not(:is(code, pre, kbd, samp) *) {
  font-family: var(--font-ui) !important;
}

.ant-card-body,
.ant-card-body p,
.ant-card-body .ant-typography,
.ant-typography,
.ant-modal-body,
.ant-input,
.ant-btn {
  letter-spacing: 0.01em;
}

h1, h2 {
  font-weight: 600 !important;
  letter-spacing: -0.02em !important;
}

#root:not(:has([data-testid="mod-card-title"])) :is(h1, h2, h3, h4, h5, .ant-typography, .ant-tabs-tab) {
  letter-spacing: 0.02em !important;
}

[class*="ModDetailsHeader__CardTitleFirstLine"] > div,
[class*="ModMetadataLine__MetadataLineWrapper"],
[class*="ModMetadataLine__MetadataLineWrapper"] .ant-typography {
  letter-spacing: 0.02em !important;
}

.ant-badge-dot {
  width: 6px !important;
  height: 6px !important;
  min-width: 6px !important;
  box-shadow: none !important;
}

/* 3. Layout: content area, card grid */
#root {
  box-sizing: border-box;
  padding-left: 200px !important;
  transition: padding-left 0.25s ease;
}

html.wh-collapsed #root {
  padding-left: 64px !important;
}

#root .ant-layout-content,
#root .ant-layout-content > div,
#root [class*="Home"],
#root [class*="Content"],
#root [class*="Container"]:not([class*="ModCard"]):not([class*="Actions"]) {
  max-width: none !important;
}

#root .ant-layout-content {
  position: relative !important;
  width: 100% !important;
  padding: 24px 32px !important;
  background-color: rgba(255, 255, 255, 0.04) !important;
}

#root .ant-layout-content > div {
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

#root div:has(> .ant-card [data-testid="mod-card-title"]) {
  display: grid !important;
  grid-template-columns: repeat(auto-fill, minmax(var(--card-min), 1fr)) !important;
  gap: 16px !important;
  justify-content: stretch !important;
  justify-items: stretch !important;
  align-items: stretch !important;
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

#root div:has(> .ant-card [data-testid="mod-card-title"]) > .ant-card {
  width: 100% !important;
  max-width: none !important;
  min-width: 0 !important;
  margin: 0 !important;
  height: 100% !important;
}

[class*="ModsBrowserLocal__ModsContainer"] > div:has(.ant-card) {
  width: 100% !important;
  max-width: none !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

/* grid marked by the script (cards wrapped in a ribbon) */
#root .wh-card-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fill, minmax(var(--card-min), 1fr)) !important;
  gap: 16px !important;
  justify-content: stretch !important;
  justify-items: stretch !important;
  align-items: stretch !important;
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

#root .wh-card-grid > * {
  width: auto !important;
  max-width: none !important;
  min-width: 0 !important;
  margin: 0 !important;
}

#root .wh-card-grid .ant-ribbon-wrapper {
  height: 100%;
}

#root .wh-card-grid .ant-card {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
}

/* 4. Settings page (System Settings style) */
#root [data-testid="settings-page"] {
  --set-bg: rgba(255, 255, 255, 0.05);
  --set-line: rgba(255, 255, 255, 0.09);
  --set-radius: 12px;
  --set-gap: 16px;
  width: 100% !important;
  max-width: 720px !important;
  padding: calc(var(--light-center-y) - 13px) 0 32px !important;
  box-sizing: border-box !important;
  margin: 0 auto !important;
}

#root [data-testid="settings-page"] [class*="Settings__SettingsList"] {
  display: flex !important;
  flex-direction: column !important;
  background: transparent !important;
  border: none !important;
}

#root [data-testid="settings-page"] [class*="Settings__SettingsList"] > [data-key] {
  position: relative;
  padding: 0 !important;
  background: var(--set-bg) !important;
  border: 0 solid var(--set-line) !important;
  border-left-width: 1px !important;
  border-right-width: 1px !important;
}

/* group start: items 1, 3, 5 */
#root [data-testid="settings-page"] [class*="Settings__SettingsList"] > [data-key]:is(:nth-child(1), :nth-child(3), :nth-child(5)) {
  border-top-width: 1px !important;
  border-top-left-radius: var(--set-radius);
  border-top-right-radius: var(--set-radius);
}

/* group end: items 2, 4, 5 */
#root [data-testid="settings-page"] [class*="Settings__SettingsList"] > [data-key]:is(:nth-child(2), :nth-child(4), :nth-child(5)) {
  border-bottom-width: 1px !important;
  border-bottom-left-radius: var(--set-radius);
  border-bottom-right-radius: var(--set-radius);
  margin-bottom: var(--set-gap) !important;
}

#root [data-testid="settings-page"] [class*="Settings__SettingsList"] > [data-key]:is(:nth-child(2), :nth-child(4))::before {
  content: "";
  position: absolute;
  top: 0;
  left: 16px;
  right: 16px;
  height: 1px;
  background: var(--set-line);
}

#root [data-testid="settings-page"] [class*="SettingRow-sc-"] {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  gap: 10px !important;
  width: 100% !important;
  padding: 12px 16px !important;
  box-sizing: border-box !important;
}

#root [data-testid="settings-page"] [class*="SettingRow-sc-"]:has(.ant-switch, .ant-select, .ant-segmented, .ant-radio-group) {
  flex-direction: row !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 24px !important;
}

#root [data-testid="settings-page"] [class*="SettingRow-sc-"]:has(.ant-switch, .ant-select, .ant-segmented, .ant-radio-group) > :first-child {
  flex: 1 1 auto !important;
  min-width: 0 !important;
}

#root [data-testid="settings-page"] [class*="SettingRow-sc-"]:has(.ant-switch, .ant-select, .ant-segmented, .ant-radio-group) > :not(:first-child) {
  flex: none !important;
  margin: 0 !important;
}

#root [data-testid="settings-page"] .windhawk-row-meta-title {
  margin: 0 0 2px !important;
  font-size: 16px !important;
  font-weight: 600 !important;
}

#root [data-testid="settings-page"] .windhawk-row-meta-description {
  font-size: 14px !important;
  line-height: 1.4 !important;
  opacity: 0.65;
}

#root [data-testid="settings-page"]::before {
  content: attr(data-wh-title);
  display: block;
  line-height: 22px;
  margin: 0 0 40px;
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

/* 5. About page (macOS style) */
#root [data-testid="about-page"] {
  --set-bg: rgba(255, 255, 255, 0.05);
  --set-line: rgba(255, 255, 255, 0.09);
  --set-radius: 12px;
  --about-w: 560px;
  width: 100% !important;
  max-width: var(--about-w) !important;
  margin: 0 auto !important;
  padding: 44px 0 32px !important;
  box-sizing: border-box !important;
}

#root [data-testid="about-page"] [class*="About__AboutContent"] {
  display: flex !important;
  flex-direction: column !important;
  gap: 16px !important;
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

#root [data-testid="about-page"] [class*="About__ContentSection"]:first-child {
  text-align: center !important;
  margin: 0 0 12px !important;
  padding: 0 !important;
}

#root [data-testid="about-page"] [class*="About__ContentSection"]:first-child h1 {
  margin: 0 0 6px !important;
  font-size: 30px !important;
  font-weight: 700 !important;
  letter-spacing: -0.02em !important;
}

#root [data-testid="about-page"] [class*="About__ContentSection"]:first-child h3 {
  margin: 2px 0 !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  opacity: 0.7;
}

#root [data-testid="about-page"] [class*="About__ContentSection"]:not(:first-child) {
  margin: 0 !important;
  padding: 0 !important;
  text-align: left !important;
  background: var(--set-bg) !important;
  border: 1px solid var(--set-line) !important;
  border-radius: var(--set-radius) !important;
  overflow: hidden;
}

#root [data-testid="about-page"] [class*="About__ContentSection"]:not(:first-child) > h1 {
  margin: 0 !important;
  padding: 14px 16px 10px !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  letter-spacing: 0.06em !important;
  text-transform: uppercase;
  text-align: left !important;
  opacity: 0.55;
}

#root [data-testid="about-page"] [class*="About__ContentSection"]:not(:first-child) > div {
  margin: 0 !important;
  padding: 0 16px !important;
}

#root [data-testid="about-page"] [class*="About__ContentSection"]:not(:first-child) > div > div {
  position: relative;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 16px !important;
  margin: 0 !important;
  padding: 11px 0 !important;
  border-top: 1px solid var(--set-line);
  font-size: 13px !important;
  line-height: 1.4 !important;
  text-align: left !important;
}

#root [data-testid="about-page"] [class*="About__ContentSection"]:not(:first-child) > div > div:not(:has(> a)) {
  opacity: 0.65;
}

#root [data-testid="about-page"] [class*="About__ContentSection"]:not(:first-child) > div > div > a {
  color: rgba(255, 255, 255, 0.92) !important;
  font-weight: 500 !important;
  text-decoration: none !important;
}

#root [data-testid="about-page"] [class*="About__ContentSection"]:not(:first-child) > div > div > a::after {
  content: "";
  position: absolute;
  inset: 0;
}

#root [data-testid="about-page"] .wh-about-desc {
  margin-left: auto;
  min-width: 0;
  text-align: right;
  opacity: 0.6;
}

#root [data-testid="about-page"] [class*="About__ContentSection"]:not(:first-child) > div > div:has(> a)::after {
  content: "";
  width: 11px;
  height: 11px;
  box-sizing: border-box;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
  background: linear-gradient(to bottom right, transparent calc(50% - 1px), currentColor calc(50% - 1px), currentColor calc(50% + 1px), transparent calc(50% + 1px));
  margin-right: 2px;
  flex: none;
  position: relative;
  z-index: 1;
  pointer-events: none;
  opacity: 0.55;
}

#root [data-testid="about-page"] [class*="About__ContentSection"]:not(:first-child) > div > div:has(> a):not(:has(> .wh-about-desc))::after {
  margin-left: auto;
}

#root [data-testid="about-page"] .wh-about-logo {
  display: block !important;
  width: 72px !important;
  height: 72px !important;
  margin: 0 auto 14px !important;
  object-fit: contain;
}

#root [data-testid="about-page"] .wh-about-logo img,
#root [data-testid="about-page"] .wh-about-logo svg {
  width: 100% !important;
  height: 100% !important;
}

/* 6. Sidebar: logo stays fixed, only the menu scrolls. --sb-logo-h is set by the script */
html body [data-testid="app-header"] {
  position: fixed !important;
  top: var(--sb-logo-h, 140px) !important;
  left: 0 !important;
  bottom: auto !important;
  width: 200px !important;
  height: calc(100vh - 64px - var(--sb-logo-h, 140px)) !important;
  max-height: calc(100vh - 64px - var(--sb-logo-h, 140px)) !important;
  min-height: 0 !important;
  box-sizing: border-box;
  display: flex !important;
  flex-direction: column !important;
  flex-wrap: nowrap !important;
  justify-content: flex-start !important;
  align-items: stretch !important;
  gap: 10px;
  padding: 8px 14px 24px !important;
  background: rgba(255, 255, 255, 0.03) !important;
  border: none !important;
  border-right: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 0 !important;
  z-index: 50;
  overflow-x: clip !important;
  overflow-y: auto !important;
  overscroll-behavior: contain;
  scrollbar-width: auto !important;
  transition: width 0.25s ease;
}

html body [data-testid="app-header"]::-webkit-scrollbar {
  display: block !important;
  width: 0 !important;
  height: 0 !important;
}

html body [data-testid="app-header"]::-webkit-scrollbar-track {
  background: transparent !important;
}

html body [data-testid="app-header"]::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.22) !important;
  background-clip: border-box !important;
  border: none !important;
  border-radius: 999px !important;
}

html body [data-testid="app-header"]::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.4) !important;
}

/* no double scrollbars */
html body [data-testid="app-header"] * {
  scrollbar-width: none !important;
}

html body [data-testid="app-header"] *::-webkit-scrollbar {
  display: none !important;
}

html body [data-testid="app-header"] .wh-cscroll-track,
html body [data-testid="app-header"] .wh-cscroll-thumb {
  display: none !important;
}

html body [data-testid="app-header"] [class*="AppHeader__HeaderButtonsWrapper"],
html body [data-testid="app-header"] #wh-groups-nav,
html body [data-testid="app-header"] #wh-stats {
  overflow: visible !important;
  max-height: none !important;
}

[data-testid="app-header"] > * {
  flex: 0 0 auto !important;
  min-height: auto !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}

[data-testid="app-header"]::after {
  display: none !important;
}

#wh-sb-toggle2 {
  position: fixed;
  top: 14px;
  left: 152px;
  z-index: 99999;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: left 0.25s ease, top 0.25s ease, background 0.2s ease, color 0.2s ease;
}

#wh-sb-toggle2:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

html.wh-collapsed #wh-sb-toggle2 {
  left: 15px;
  top: 30px;
}

#wh-lights {
  position: fixed;
  top: calc(var(--light-center-y) - var(--light-size) / 2);
  left: 16px;
  z-index: 99999;
  display: flex;
  gap: var(--light-gap);
  transition: top 0.25s ease, left 0.25s ease, gap 0.25s ease;
}

html.wh-collapsed #wh-lights {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  top: 10px;
  left: 8px;
  gap: 6px;
}

.wh-light {
  width: var(--light-size);
  height: var(--light-size);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.6);
  cursor: default;
  transition: filter 0.1s ease;
}

.wh-light:active {
  filter: brightness(0.75);
}

.wh-light-close { background: #ff5f57; }
.wh-light-minimize { background: #febc2e; }
.wh-light-maximize { background: #28c840; }

#wh-lights.wh-inactive:not(:hover) .wh-light {
  background: rgba(255, 255, 255, 0.22);
  border-color: rgba(255, 255, 255, 0.1);
}

.wh-light svg {
  width: var(--light-icon);
  height: var(--light-icon);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.1s ease;
}

.wh-light svg path {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4;
  stroke-linecap: round;
}

.wh-light-maximize svg path {
  fill: currentColor;
  stroke: none;
}

#wh-lights:hover .wh-light svg {
  opacity: 1;
}

[class*="AppHeader__HeaderLogo"] {
  width: 100%;
}

html body [data-testid="app-header"] [class*="AppHeader__HeaderLogo"]:not([class*="HeaderLogoButton"]) {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 200px !important;
  height: auto !important;
  box-sizing: border-box !important;
  display: flex !important;
  justify-content: center !important;
  z-index: 51 !important;
  padding: 54px 0 14px !important; /* 30px default + 24px sidebar padding that no longer applies */
  background: rgba(255, 255, 255, 0.03) !important;
  border-right: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-bottom: none !important;
  transition: padding 0.25s ease, width 0.25s ease !important;
}

html.wh-collapsed body [data-testid="app-header"] [class*="AppHeader__HeaderLogo"]:not([class*="HeaderLogoButton"]) {
  padding-top: 64px !important;
  width: 64px !important;
}

[class*="AppHeader__HeaderLogoButton"] {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  gap: 8px !important;
  height: auto !important;
  padding: 0 !important;
  font-size: 20px !important;
  line-height: 1.1 !important;
  font-weight: 800 !important;
  white-space: nowrap;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  transition: font-size 0.2s ease, padding 0.25s ease, gap 0.25s ease, background-color 0.2s ease !important;
}

[class*="AppHeader__HeaderLogoButton"]:hover,
[class*="AppHeader__HeaderLogoButton"]:focus,
[class*="AppHeader__HeaderLogoButton"]:active {
  background: transparent !important;
}

[class*="AppHeader__HeaderLogoButton"],
[class*="AppHeader__HeaderLogoButton"] * {
  letter-spacing: 0.01em !important;
}

[class*="AppHeader__HeaderLogoButton"] > :first-child,
[class*="AppHeader__HeaderLogoButton"] img,
[class*="AppHeader__HeaderLogoButton"] svg {
  width: 46px !important;
  height: 46px !important;
  min-width: 46px !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  object-fit: contain;
  flex-shrink: 0;
}

[class*="AppHeader__HeaderButtonsWrapper"] {
  display: flex !important;
  flex-direction: column !important;
  align-items: stretch !important;
  gap: 2px !important;
  width: 100%;
}

[class*="AppHeader__HeaderButtonsWrapper"] .ant-badge {
  display: block !important;
  width: 100%;
}

[class*="AppHeader__HeaderButtonsWrapper"] .ant-btn {
  position: relative;
  flex: 0 0 auto !important;
  width: 100% !important;
  height: 34px !important;
  padding: 0 12px !important;
  justify-content: flex-start !important;
  gap: 10px !important;
  font-size: 14px !important;
  border-color: transparent !important;
  background: transparent !important;
  box-shadow: none !important;
  color: rgba(255, 255, 255, 0.75) !important;
  border-radius: 10px !important;
  transition: font-size 0.2s ease, padding 0.25s ease, gap 0.25s ease, background-color 0.2s ease !important;
}

[class*="AppHeader__HeaderButtonsWrapper"] .ant-btn .anticon {
  color: rgba(255, 255, 255, 0.7) !important;
}

[class*="AppHeader__HeaderButtonsWrapper"] .ant-btn:hover {
  background: rgba(255, 255, 255, 0.08) !important;
  color: #fff !important;
}

[class*="AppHeader__HeaderButtonsWrapper"] .ant-btn.ant-btn-primary {
  background: #0a84ff !important;
  color: #fff !important;
}

[class*="AppHeader__HeaderButtonsWrapper"] .ant-btn.ant-btn-primary .anticon {
  color: #fff !important;
}

.wh-nav-badge {
  margin-left: auto;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
}

#wh-groups-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 10px;
  margin-bottom: 24px;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.10);
  white-space: nowrap;
  transition: opacity 0.2s ease, visibility 0s linear 0s;
}

#wh-groups-nav:empty {
  display: none;
}

#wh-stats {
  position: relative;
  margin-top: auto;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  transition: opacity 0.2s ease, visibility 0s linear 0s;
}

#wh-stats::before {
  content: "";
  position: absolute;
  top: -14px;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.10);
}

#wh-stats .wh-stat-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

#wh-stats .wh-stat-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

#wh-stats .wh-stat-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

#wh-stats .c-catalog { background: #0a84ff; }
#wh-stats .c-installed { background: #bf5af2; }
#wh-stats .c-enabled {
  background: #30d158;
  box-shadow: 0 0 6px rgba(48, 209, 88, 0.6);
}

#wh-stats .wh-stat-value {
  font-weight: 600;
  color: #fff;
  font-variant-numeric: tabular-nums;
}

/* version footer, pinned to the bottom */
body::after {
  content: "Windhawk v2.0 Alpha 8\A by Ramen Software";
  white-space: pre-line;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 200px;
  height: 64px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 11px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.03);
  border-top: 1px solid rgba(255, 255, 255, 0.10);
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 50;
  pointer-events: none;
  transition: width 0.25s ease, opacity 0.15s ease;
}

/* collapsed */
html.wh-collapsed [data-testid="app-header"] {
  width: 64px !important;
  height: 100vh !important;
  max-height: 100vh !important;
}

html.wh-collapsed body [data-testid="app-header"]::-webkit-scrollbar {
  display: none !important;
}

html.wh-collapsed body::after {
  width: 64px;
  opacity: 0;
}

html.wh-collapsed [class*="AppHeader__HeaderLogoButton"] {
  font-size: 0 !important;
  justify-content: center !important;
  gap: 0 !important;
  padding: 4px 0 0 0 !important;
  margin: 0 !important;
}

html.wh-collapsed [class*="AppHeader__HeaderLogoButton"] > :not(:first-child) {
  display: none !important;
}

html.wh-collapsed [class*="AppHeader__HeaderLogoButton"] > :first-child,
html.wh-collapsed [class*="AppHeader__HeaderLogoButton"] img,
html.wh-collapsed [class*="AppHeader__HeaderLogoButton"] svg {
  width: 32px !important;
  height: 32px !important;
  min-width: 32px !important;
}

html.wh-collapsed [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn {
  font-size: 0 !important;
  padding: 0 !important;
  gap: 0 !important;
  justify-content: center !important;
}

html.wh-collapsed [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn .anticon,
html.wh-collapsed [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn .ant-btn-icon,
html.wh-collapsed [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn svg {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 16px !important;
  width: 16px !important;
  height: 16px !important;
  margin: 0 !important;
}

html.wh-collapsed .wh-nav-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  margin: 0;
  min-width: 14px;
  height: 14px;
  padding: 0 4px;
  font-size: 9px;
}

html.wh-collapsed #wh-groups-nav,
html.wh-collapsed #wh-stats {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease, visibility 0s linear 0.15s;
}

/* 7. Home header: title, search row, banner, New Mod, view toggle */
[class*="ModsBrowserLocal__ModsContainer"] {
  padding-top: 26px !important;
  display: grid !important;
  grid-template-columns: auto minmax(0, 1fr) !important;
  column-gap: 20px !important;
  row-gap: 16px !important;
  align-items: start !important;
  align-content: start !important;
}

[class*="ModsBrowserLocal__ModsContainer"] > * {
  grid-column: 1 / -1 !important;
  min-width: 0 !important;
}

[class*="ModsBrowserLocal__ModsContainer"] > [class*="ModsBrowserLocal__SectionHeader"]:not(:has(svg[data-icon="star"])) {
  grid-column: 1 !important;
  grid-row: 1 !important;
  align-self: center !important;
  min-height: var(--header-row-h);
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  justify-content: center !important;
  gap: 2px !important;
  margin: 0 !important;
}

[class*="ModsBrowserLocal__SectionHeader"] h2 {
  margin: 0 !important;
  font-size: 20px !important;
  line-height: 1.2 !important;
  white-space: nowrap !important;
}

[class*="ModsBrowserLocal__SectionIcon"] {
  display: none !important;
}

[class*="ModsBrowserLocal__ModsContainer"] > [class*="ModsBrowserLocal__SectionHeader"]:not(:has(svg[data-icon="star"])) h2 {
  font-size: 0 !important;
  line-height: 1 !important;
}

[class*="ModsBrowserLocal__ModsContainer"] > [class*="ModsBrowserLocal__SectionHeader"]:not(:has(svg[data-icon="star"])) h2::after {
  content: "Installed Mods";
  font-family: "Plus Jakarta Sans", "Segoe UI", sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #fff;
}

[class*="ModsBrowserLocal__ModsContainer"] > [class*="ModsBrowserLocal__SectionHeader"]:not(:has(svg[data-icon="star"]))::after {
  content: "Manage your installed Windhawk mods";
  font-family: "Plus Jakarta Sans", "Segoe UI", sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
}

[class*="SearchFilterContainer"] {
  margin-top: 29px !important;
  margin-bottom: 30px !important;
  margin-right: 0 !important;
}

[class*="ModsBrowserLocal__ModsContainer"] > [class*="ModsBrowserLocal__SearchFilterContainer"] {
  grid-column: 2 !important;
  grid-row: 1 !important;
  align-self: center !important;
  align-items: center !important;
  min-height: var(--header-row-h);
  margin: 0 !important;
}

.ant-alert-info {
  position: relative !important;
  margin-bottom: 4px !important;
  background: rgba(10, 132, 255, 0.10) !important;
  border: 1px solid rgba(10, 132, 255, 0.25) !important;
}

.ant-alert-info:has(.ant-btn) {
  padding-right: 48px !important;
}

.ant-alert-info .ant-btn.ant-btn-primary:not(.ant-btn-background-ghost) {
  background-color: rgba(255, 255, 255, 0.04) !important;
  border: 1px solid rgba(10, 132, 255, 0.45) !important;
  color: #fff !important;
  border-radius: var(--r-md) !important;
  height: 30px !important;
  padding: 0 14px !important;
  font-weight: 500 !important;
}

.ant-alert-info .ant-btn.ant-btn-primary:not(.ant-btn-background-ghost):hover {
  background-color: rgba(10, 132, 255, 0.18) !important;
  border-color: rgba(10, 132, 255, 0.7) !important;
}

.ant-alert-info:has(.ant-btn)::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 20px;
  width: 7px;
  height: 7px;
  border-top: 1.8px solid rgba(255, 255, 255, 0.7);
  border-right: 1.8px solid rgba(255, 255, 255, 0.7);
  transform: translateY(-50%) rotate(45deg);
  pointer-events: none;
}

/* original New Mod button hidden, replaced by the one in the search row */
[class*="CreateNewModButton__ButtonContainer"] {
  display: none !important;
}

#wh-newmod2 {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 32px;
  margin-left: 12px;
  padding: 0 14px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--r-md);
  background-color: #0a84ff;
  color: #fff;
  font-family: "Plus Jakarta Sans", "Segoe UI", sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

#wh-newmod2:hover {
  background-color: #3395ff;
}

#wh-newmod2:active {
  background-color: #0071e3;
}

#wh-newmod2 .wh-nm-plus {
  font-size: 17px;
  font-weight: 500;
  line-height: 1;
}

[data-testid="mods-view-toggle"] {
  position: relative !important;
  width: 72px !important;
  min-width: 72px !important;
  padding: 0 !important;
  overflow: hidden !important;
}

[data-testid="mods-view-toggle"] svg {
  display: none !important;
}

[data-testid="mods-view-toggle"]::before,
[data-testid="mods-view-toggle"]::after {
  content: "" !important;
  position: absolute !important;
  inset: 3px auto 3px auto !important;
  width: 30px !important;
  border-radius: 9px !important;
  background-color: transparent;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: 14px 14px !important;
  opacity: 0.45 !important;
  transition: background-color 0.2s ease, opacity 0.2s ease;
  pointer-events: none;
}

[data-testid="mods-view-toggle"]::before {
  left: 3px !important;
  background-image:
    linear-gradient(#fff, #fff),
    linear-gradient(#fff, #fff),
    linear-gradient(#fff, #fff),
    linear-gradient(#fff, #fff) !important;
  background-size: 5px 5px !important;
  background-position: 9px 7px, 16px 7px, 9px 14px, 16px 14px !important;
}

[data-testid="mods-view-toggle"]::after {
  right: 3px !important;
  background-image:
    linear-gradient(#fff, #fff),
    linear-gradient(#fff, #fff),
    linear-gradient(#fff, #fff),
    linear-gradient(#fff, #fff),
    linear-gradient(#fff, #fff),
    linear-gradient(#fff, #fff) !important;
  background-size:
    2px 2px, 2px 2px, 2px 2px,
    10px 2px, 10px 2px, 10px 2px !important;
  background-position:
    8px 6px, 8px 12px, 8px 18px,
    12px 6px, 12px 12px, 12px 18px !important;
}

[data-testid="mods-view-toggle"]:not(:has(svg[data-icon="grip-vertical"]))::before,
[data-testid="mods-view-toggle"]:has(svg[data-icon="grip-vertical"])::after {
  background-color: rgba(10, 132, 255, 0.30) !important;
  opacity: 1 !important;
}

/* 8. Mod card */
.ant-card-bordered {
  position: relative;
  background-color: rgba(26, 26, 28, 0.72) !important;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 30%
  ) !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    0 1px 2px rgba(0, 0, 0, 0.30) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-top-color: rgba(255, 255, 255, 0.10) !important;
  transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.ant-card-bordered:hover {
  background-color: rgba(32, 32, 35, 0.78) !important;
  border-color: rgba(255, 255, 255, 0.14) !important;
  transform: translateY(-1px);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 4px 12px rgba(0, 0, 0, 0.30) !important;
}

.ant-card-bordered:has([data-testid="mod-card-title"])::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background: radial-gradient(
    220px circle at var(--mx, 50%) var(--my, 50%),
    rgba(255, 255, 255, 0.10),
    transparent 70%
  );
  transition: opacity 0.25s ease;
}

.ant-card-bordered:has([data-testid="mod-card-title"]):hover::before {
  opacity: 1;
}

[data-testid="mod-card-switch"] {
  position: absolute !important;
  top: 12px;
  right: 16px;
}

[aria-label="Mod was edited locally"] {
  display: none !important;
}

/* description must come before the title rule (same specificity, later wins) */
.ant-card-body p,
.ant-card-body .ant-typography,
[class*="ModCard"] .ant-typography {
  font-size: 14px !important;
  line-height: 1.55 !important;
  color: rgba(255, 255, 255, 0.65) !important;
}

[data-testid="mod-card-title"] .ant-typography {
  max-width: calc(100% - 64px);
}

[data-testid="mod-card-title"],
[data-testid="mod-card-title"] .ant-typography,
.ModCard__ModCardTitle,
[class*="ModCard__ModCardTitle-"] {
  font-size: 17px !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em !important;
  color: #fff !important;
}

[data-testid="mod-card-title"],
[data-testid="mod-card-title"] * {
  font-family: "Plus Jakarta Sans", "Segoe UI", sans-serif !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em !important;
}

[class*="ModCardActionsContainer"] {
  display: flex !important;
  align-items: center !important;
  justify-content: flex-start !important;
  margin: 14px 0 0 0 !important;
  padding-top: 10px !important;
  border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
}

[class*="ModCardActionsContainer"] .ant-btn {
  display: inline-flex !important;
  align-items: center !important;
  height: 26px !important;
  padding: 0 10px !important;
  margin: 0 !important;
  font-size: 12px !important;
  background: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
  color: rgba(255, 255, 255, 0.6) !important;
}

[class*="ModCardActionsContainer"] .ant-btn:hover {
  background: rgba(255, 255, 255, 0.08) !important;
  color: #ffffff !important;
}

/* Remove is always hidden, the "..." menu clicks it through the script */
[class*="ModCardActionsContainer"] .ant-btn[data-testid="mod-card-remove"] {
  display: none !important;
}

[class*="ModCardActionsContainer"] [data-testid="mod-card-details"] {
  flex: none !important;
  padding: 0 6px 0 10px !important;
}

[class*="ModCardActionsContainer"] .ant-btn:not([data-testid="mod-card-remove"])::after {
  content: "";
  display: inline-block;
  width: 5px;
  height: 5px;
  margin-left: -5px !important;
  border-top: 1.5px solid currentColor;
  border-right: 1.5px solid currentColor;
  transform: translateY(1px) rotate(45deg) !important;
  font-size: 16px;
  line-height: 1;
}

[class*="ModCardActionsContainer"] .ant-badge {
  position: relative;
  flex: none !important;
  margin: 0 !important;
}

[class*="ModCardActionsContainer"] .ant-badge .ant-badge-dot {
  background: rgba(255, 255, 255, 0.35) !important;
  width: 5px !important;
  height: 5px !important;
  min-width: 5px !important;
  top: 4px !important;
  right: 0 !important;
  inset-inline-end: 0 !important;
  transform: none !important;
}

.wh-meta {
  flex: 1 1 auto;
  min-width: 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}

.wh-meta:has(+ .wh-update) {
  flex: 0 1 auto;
}

.wh-update {
  flex: 1 1 auto;
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  font-size: 12px;
  color: #ffb340;
}

.wh-update::before {
  content: "•";
  margin: 0 2px 0 6px;
  color: rgba(255, 255, 255, 0.35);
}

.wh-dot {
  flex: none;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ffb340;
}

.wh-more {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  margin-left: 4px;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.65);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.wh-more:hover {
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
}

.wh-more-menu {
  position: fixed;
  z-index: 100000;
  min-width: 140px;
  padding: 4px;
  border-radius: 12px;
  background: rgba(32, 32, 35, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.wh-more-menu button {
  display: block;
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #ff6961;
  font-family: "Plus Jakarta Sans", "Segoe UI", sans-serif;
  font-size: 13px;
  text-align: left;
  cursor: pointer;
}

.wh-more-menu button:hover {
  background: rgba(255, 69, 58, 0.14);
}

/* ribbon: Explore keeps it, Home uses the footer label */
.ant-ribbon:has(> .ant-ribbon-content:empty) {
  display: none !important;
}

.ant-ribbon:has(> .ant-ribbon-content:not(:empty)) {
  top: auto !important;
  bottom: 18px !important;
  right: 16px !important;
  inset-inline-end: 16px !important;
  margin: 0 !important;
  box-sizing: border-box !important;
  height: 26px !important;
  line-height: 24px !important;
  padding: 0 12px !important;
  font-size: 12px !important;
  border-radius: 999px !important;
  display: inline-flex !important;
  align-items: center !important;
  z-index: 2;
}

.ant-ribbon-wrapper:not(:has([data-testid="mod-card-switch"])) .ant-ribbon:has(> .ant-ribbon-content:not(:empty)) {
  top: 12px !important;
  bottom: auto !important;
}

.ant-ribbon-wrapper:not(:has([data-testid="mod-card-switch"])):has(.ant-ribbon-content:not(:empty)) [data-testid="mod-card-title"] .ant-typography {
  max-width: calc(100% - 84px) !important;
}

.ant-ribbon-corner {
  display: none !important;
}

#root .ant-ribbon-wrapper:has([data-testid="mod-card-switch"]) > .ant-ribbon,
#root .ant-ribbon-wrapper:has([data-testid="mod-card-switch"]) [data-testid="mod-card-title"] .ant-ribbon {
  display: none !important;
}

/* 9. Mod details page */
:root {
  --md-fill: rgba(255, 255, 255, 0.08);
  --md-fill-hover: rgba(255, 255, 255, 0.14);
  --md-line: rgba(255, 255, 255, 0.12);
  --md-ink: rgba(255, 255, 255, 0.92);
  --md-ink-2: rgba(255, 255, 255, 0.6);
  --md-title: 34px;
  --md-btn-h: 38px;
  --md-accent: #0a84ff;
  --md-back-top: 8px;
  --md-donate: #ff453a;
  --md-donate-text: #ff7a72;
  --md-danger: #ff453a;
}

html body[data-theme="light"] {
  --md-fill: rgba(0, 0, 0, 0.06);
  --md-fill-hover: rgba(0, 0, 0, 0.1);
  --md-line: rgba(0, 0, 0, 0.1);
  --md-ink: rgba(0, 0, 0, 0.88);
  --md-ink-2: rgba(0, 0, 0, 0.55);
  --md-donate: #e5251b;
  --md-donate-text: #c4170f;
  --md-danger: #d70015;
}

.ant-tabs-nav:has([data-testid^="mod-details-tab-"]) {
  margin: 0 0 20px !important;
}

.ant-tabs-nav:has([data-testid^="mod-details-tab-"])::before {
  display: none !important;
}

.ant-tabs-nav-list:has([data-testid^="mod-details-tab-"]) > .ant-tabs-ink-bar {
  display: none !important;
}

html body .ant-tabs-nav-list:has([data-testid^="mod-details-tab-"]) {
  --tab-bg: rgba(255, 255, 255, 0.06);
  --tab-active: rgba(255, 255, 255, 0.16);
  --tab-text: rgba(255, 255, 255, 0.65);
  --tab-text-active: #fff;
  box-sizing: border-box !important;
  flex: none !important;
  justify-content: space-between !important;
  width: 100% !important;
  gap: 4px !important;
  padding: 4px !important;
  border-radius: 999px !important;
  background: var(--tab-bg);
}

html body .ant-tabs-tab:has([data-testid^="mod-details-tab-"]) {
  flex: none !important;
  justify-content: center !important;
  min-height: 38px;
  margin: 0 !important;
  padding: 0 22px !important;
  border-radius: 999px !important;
  font-size: 15px !important;
  font-weight: 500 !important;
  color: var(--tab-text) !important;
  transition: background 0.15s ease, color 0.15s ease;
}

.ant-tabs-tab:has([data-testid^="mod-details-tab-"]) .ant-tabs-tab-btn {
  color: inherit !important;
  text-shadow: none !important;
}

.ant-tabs-tab:has([data-testid^="mod-details-tab-"]):hover {
  color: var(--tab-text-active) !important;
}

.ant-tabs-tab.ant-tabs-tab-active:has([data-testid^="mod-details-tab-"]) {
  background: var(--tab-active);
  color: var(--tab-text-active) !important;
  box-shadow: inset 0 0 0 1px rgba(10, 132, 255, 0.5);
}

html body .ant-card-head-title:has([data-testid="mod-details-back"]) {
  display: block !important;
  flex: 1 1 100% !important;
  width: 100% !important;
  max-width: none !important;
  min-width: 0 !important;
  overflow: visible !important;
  white-space: normal !important;
}

html body [class*="ModDetailsHeader__ModDetailsHeaderWrapper"] {
  position: relative;
  display: block !important;
}

html body .ant-card-meta:has([class*="ModDetailsView__ModVersionRadioGroup"]) {
  display: block !important;
}

html body .ant-card-meta-section:has([class*="ModDetailsView__ModVersionRadioGroup"]) {
  display: grid !important;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  white-space: normal !important;
}

html body [class*="ModDetailsHeader__ModDetailsHeaderWrapper"],
html body .ant-card-meta:has([class*="ModDetailsView__ModVersionRadioGroup"]),
html body .ant-card-meta-section:has([class*="ModDetailsView__ModVersionRadioGroup"]) {
  width: 100% !important;
  max-width: none !important;
  min-width: 0 !important;
  box-sizing: border-box;
}

/* flatten the middle wrappers so everything becomes a grid item */
html body .ant-card-meta-section:has([class*="ModDetailsView__ModVersionRadioGroup"]) > .ant-card-meta-title,
html body .ant-card-meta-section:has([class*="ModDetailsView__ModVersionRadioGroup"]) > .ant-card-meta-description,
html body [class*="ModDetailsHeader__CardTitleFirstLine"],
html body .ant-card-meta-section div:has(> [class*="ModMetadataLine__MetadataLineWrapper"]) {
  display: contents !important;
}

/* local mods have no version pills, leave room for the back button */
html body [class*="ModDetailsHeader__ModDetailsHeaderWrapper"]:not(:has([class*="ModDetailsView__ModVersionRadioGroup"])) {
  padding-top: calc(var(--md-back-top) + 38px) !important;
}

html body [data-testid="mod-details-back"] {
  position: absolute !important;
  top: var(--md-back-top) !important;
  left: 0;
  z-index: 2;
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  width: 34px !important;
  height: 34px !important;
  min-width: 34px !important;
  padding: 0 !important;
  border-radius: 50% !important;
  background: var(--md-fill) !important;
  border: 1px solid var(--md-line) !important;
  box-shadow: none !important;
  color: var(--md-ink) !important;
  font-size: 0 !important;
}

[data-testid="mod-details-back"]:hover {
  background: var(--md-fill-hover) !important;
}

html body [data-testid="mod-details-back"] > * {
  display: none !important;
}

html body [data-testid="mod-details-back"]::after {
  content: "";
  width: 9px;
  height: 9px;
  border-left: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: translateX(2px) rotate(45deg);
}

html body [class*="ModDetailsView__ModVersionRadioGroup"] {
  grid-column: 1 / -1;
  grid-row: 1;
  justify-self: start;
  display: inline-flex !important;
  gap: 8px !important;
  margin: 0 0 18px 46px;
  padding: 0 !important;
  background: transparent !important;
  border-radius: 0 !important;
}

html body [class*="ModDetailsView__ModVersionRadioGroup"] .ant-radio-button-wrapper {
  height: 34px !important;
  line-height: 32px !important;
  padding: 0 16px !important;
  border: 1px solid var(--md-line) !important;
  border-radius: 999px !important;
  background: var(--md-fill) !important;
  box-shadow: none !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  color: var(--md-ink-2) !important;
  transition: background 0.15s ease, color 0.15s ease;
}

[class*="ModDetailsView__ModVersionRadioGroup"] .ant-radio-button-wrapper::before {
  display: none !important;
}

[class*="ModDetailsView__ModVersionRadioGroup"] .ant-radio-button-wrapper:hover {
  color: var(--md-ink) !important;
}

html body [class*="ModDetailsView__ModVersionRadioGroup"] .ant-radio-button-wrapper-checked {
  background: rgba(10, 132, 255, 0.2) !important;
  border-color: rgba(10, 132, 255, 0.45) !important;
  color: #6ab6ff !important;
  box-shadow: none !important;
}

html body[data-theme="light"] [class*="ModDetailsView__ModVersionRadioGroup"] .ant-radio-button-wrapper-checked {
  background: rgba(10, 132, 255, 0.14) !important;
  color: #0a63d6 !important;
  box-shadow: none !important;
}

html body [class*="ModDetailsHeader__CardTitleFirstLine"] > div:first-child {
  grid-column: 1 / 3;
  grid-row: 2;
  margin: 0 0 8px !important;
  font-size: var(--md-title) !important;
  font-weight: 700 !important;
  line-height: 1.15 !important;
  letter-spacing: -0.02em !important;
  color: var(--md-ink);
  white-space: normal !important;
}

html body [class*="ModPageButtons__ModPageButtonsWrapper"] {
  grid-column: 3;
  grid-row: 2;
  justify-self: end;
  display: flex !important;
  align-items: center;
  gap: 10px !important;
  margin: 0 0 8px !important;
}

html body [class*="ModPageButtons__ModPageButtonsWrapper"] > * {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  height: var(--md-btn-h) !important;
  min-width: var(--md-btn-h) !important;
  padding: 0 12px !important;
  border-radius: 12px !important;
  background: var(--md-fill) !important;
  border: 1px solid var(--md-line) !important;
  color: var(--md-ink) !important;
  order: 1;
  cursor: pointer;
}

/* first element = Visit Link */
html body [class*="ModPageButtons__ModPageButtonsWrapper"] > :first-child {
  order: 2;
  width: auto !important;
  gap: 8px;
  padding: 0 20px !important;
  border-radius: 999px !important;
  background: linear-gradient(180deg, #3b9cff, var(--md-accent)) !important;
  border-color: transparent !important;
  color: #fff !important;
  box-shadow: 0 4px 14px rgba(10, 132, 255, 0.4);
}

html body [class*="ModPageButtons__ModPageButtonsWrapper"] > :first-child::before {
  content: "Visit Link";
  font-size: 14px;
  font-weight: 600;
}

html body [class*="ModDetailsHeader__CardTitleModId"] {
  display: block !important;
  grid-column: 1 / -1;
  grid-row: 3;
  justify-self: start;
  margin: 0 0 4px !important;
  padding: 0 !important;
  border: none !important;
  border-radius: 0 !important;
  background: transparent !important;
  font-size: 14px !important;
  line-height: 1.4 !important;
  color: var(--md-ink-2) !important;
  white-space: nowrap;
}

html body [class*="ModDetailsHeader__CardTitleModId"]::before {
  content: "ID: ";
}

/* old class for the ID chip, kept hidden in case it still renders */
html body [class*="ModDetailsHeader__CardTitleId"] {
  display: none !important;
}

html body [class*="ModMetadataLine__MetadataLineWrapper"] {
  grid-column: 1 / -1 !important;
  grid-row: 4 !important;
  display: flex !important;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 0 10px !important;
  font-size: 14px !important;
  color: var(--md-ink-2) !important;
}

html body [class*="ModDetailsHeader__CardTitleDescription"] {
  grid-column: 1 / -1;
  grid-row: 5;
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 2 !important;
  overflow: hidden !important;
  white-space: normal !important;
  text-overflow: clip !important;
  max-width: 100%;
  line-height: 1.5 !important;
  margin: 0 0 18px !important;
  font-size: 15px !important;
  color: var(--md-ink-2) !important;
}

html body [class*="ModDetailsHeader__CardTitleButtons-"] {
  grid-column: 1 / 3;
  grid-row: 6;
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
  margin: 0 0 22px !important;
}

html body [data-testid="mod-action-update"] {
  display: inline-flex !important;
  gap: 6px;
}

html body [data-testid="mod-action-update"] .ant-btn {
  height: var(--md-btn-h) !important;
  padding: 0 22px !important;
  border-radius: 999px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  background: linear-gradient(180deg, #3b9cff, var(--md-accent)) !important;
  box-shadow: 0 4px 14px rgba(10, 132, 255, 0.4) !important;
}

html body [data-testid="mod-action-update"] .ant-btn.ant-btn-icon-only {
  width: var(--md-btn-h) !important;
  padding: 0 !important;
}

html body [class*="ModDetailsHeader__CardTitleButtons-"] > button.ant-btn:not([data-testid="mod-action-enable"]) {
  height: var(--md-btn-h) !important;
  padding: 0 22px !important;
  border-radius: 999px !important;
  background: var(--md-fill) !important;
  border: 1px solid var(--md-line) !important;
  box-shadow: none !important;
  color: var(--md-ink) !important;
  font-size: 14px !important;
  font-weight: 500 !important;
}

[class*="ModDetailsHeader__CardTitleButtons-"] > button.ant-btn:not([data-testid="mod-action-enable"]):hover {
  background: var(--md-fill-hover) !important;
}

/* red Remove, must stay below the gray rule above */
html body [class*="ModDetailsHeader__CardTitleButtons-"] > button[data-testid="mod-action-remove"].ant-btn {
  color: var(--md-danger) !important;
}

html body [class*="ModDetailsHeader__CardTitleButtons-"] > button[data-testid="mod-action-remove"].ant-btn:hover {
  background: color-mix(in srgb, var(--md-danger) 14%, transparent) !important;
}

html body [class*="ModDetailsHeader__CardTitleButtons-"] > button[data-testid="mod-action-enable"] {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  height: var(--md-btn-h) !important;
  padding: 0 22px !important;
  border: none !important;
  border-radius: 999px !important;
  background: linear-gradient(180deg, #3b9cff, var(--md-accent)) !important;
  box-shadow: 0 4px 14px rgba(10, 132, 255, 0.4) !important;
  color: #fff !important;
  font-size: 14px !important;
  font-weight: 600 !important;
}

html body [class*="ModDetailsHeader__CardTitleButtons-"] > button[data-testid="mod-action-enable"]:hover {
  filter: brightness(1.1);
}

html body [class*="ModDetailsHeader__CardTitleButtons-"] > a[class*="ModDetailsHeader__DonateButton"] {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: var(--md-btn-h) !important;
  padding: 0 20px !important;
  border-radius: 999px !important;
  background: color-mix(in srgb, var(--md-donate) 14%, transparent) !important;
  border: 1px solid color-mix(in srgb, var(--md-donate) 40%, transparent) !important;
  box-shadow: none !important;
  color: var(--md-donate-text) !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  text-decoration: none !important;
}

html body [class*="ModDetailsHeader__CardTitleButtons-"] > a[class*="ModDetailsHeader__DonateButton"]:hover {
  background: color-mix(in srgb, var(--md-donate) 24%, transparent) !important;
}

html body [class*="ModDetailsHeader__CardTitleButtons-"] > a[class*="ModDetailsHeader__DonateButton"] svg {
  color: var(--md-donate) !important;
  fill: currentColor !important;
}

html body [class*="ModDetailsHeader__RatingLine"] {
  grid-column: 3;
  grid-row: 6;
  justify-self: end;
  display: inline-flex !important;
  align-items: center;
  gap: 8px;
  height: var(--md-btn-h);
  margin: 0 0 22px !important;
  padding: 0 8px 0 16px !important;
  border-radius: 999px;
  background: var(--md-fill);
  border: 1px solid var(--md-line);
}

[class*="ModDetailsHeader__RatingLine"] .ant-rate {
  font-size: 14px !important;
}

html body [data-testid="mod-details-reviews"] {
  height: 28px !important;
  padding: 0 12px !important;
  border-radius: 999px !important;
  font-size: 14px !important;
  color: var(--md-ink-2) !important;
}

[data-testid="mod-details-reviews"]:hover {
  background: var(--md-fill) !important;
  color: var(--md-ink) !important;
}

/* details page: no card effect */
#root .ant-card:not(:has([data-testid="mod-card-title"])) {
  background-color: transparent !important;
  background-image: none !important;
  border: none !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border-radius: 0 !important;
  width: 100% !important;
  max-width: none !important;
}

#root .ant-card:not(:has([data-testid="mod-card-title"])):hover {
  background-color: transparent !important;
  border-color: transparent !important;
}

/* 10. Light theme (used when Windhawk is on the light scheme) */
html body[data-theme="light"] {
  --lt-bg: rgb(238, 238, 242);
  --lt-ink: rgba(0, 0, 0, 0.88);
  --lt-ink-2: rgba(0, 0, 0, 0.6);
  --lt-ink-3: rgba(0, 0, 0, 0.45);
  --lt-line: rgba(0, 0, 0, 0.09);
  --lt-fill: rgba(0, 0, 0, 0.045);
  --lt-card: rgba(255, 255, 255, 0.78);
  --lt-card-hover: rgba(255, 255, 255, 0.95);
  background: var(--lt-bg) !important;
}

html body[data-theme="light"] .ant-layout-sider,
html body[data-theme="light"] .ant-layout-header,
html body[data-theme="light"] .ant-modal-content,
html body[data-theme="light"] .ant-drawer-content,
html body[data-theme="light"] .ant-dropdown-menu,
html body[data-theme="light"] .ant-popover-inner {
  background-color: rgba(255, 255, 255, 0.75) !important;
}

html body[data-theme="light"] .ant-modal-container {
  background-color: rgba(246, 246, 248, 0.9) !important;
}

html body[data-theme="light"] .ant-modal-mask {
  background: rgba(0, 0, 0, 0.25) !important;
}

html body[data-theme="light"] .ant-drawer-content {
  border: 1px solid var(--lt-line) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18) !important;
  background-image: none !important;
}

html body[data-theme="light"] #root .ant-layout-content {
  background-color: rgba(255, 255, 255, 0.5) !important;
}

html body[data-theme="light"] .ant-input-affix-wrapper {
  background: var(--lt-fill) !important;
  border: 1px solid var(--lt-line) !important;
}

html body[data-theme="light"] [data-testid="app-header"] {
  background: var(--lt-fill) !important;
  border-right: 1px solid var(--lt-line) !important;
}

html body[data-theme="light"] [data-testid="app-header"] [class*="AppHeader__HeaderLogo"]:not([class*="HeaderLogoButton"]) {
  background: var(--lt-fill) !important;
  border-right: 1px solid var(--lt-line) !important;
}

html body[data-theme="light"] #wh-sb-toggle2 {
  color: var(--lt-ink-2);
}

html body[data-theme="light"] #wh-sb-toggle2:hover {
  background: var(--lt-fill);
  color: var(--lt-ink);
}

html body[data-theme="light"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn:not(.ant-btn-primary) {
  color: var(--lt-ink) !important;
}

html body[data-theme="light"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn:not(.ant-btn-primary) .anticon {
  color: var(--lt-ink-2) !important;
}

html body[data-theme="light"] [class*="AppHeader__HeaderButtonsWrapper"] .ant-btn:not(.ant-btn-primary):hover {
  background: rgba(0, 0, 0, 0.06) !important;
  color: #000 !important;
}

html body[data-theme="light"] .wh-nav-badge {
  background: rgba(0, 0, 0, 0.12);
  color: var(--lt-ink);
}

html body[data-theme="light"] .ant-btn-primary .wh-nav-badge {
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
}

/* dark colors of the groups list are set inline by the script, hence !important here */
html body[data-theme="light"] #wh-groups-nav {
  border-top: 1px solid var(--lt-line);
}

html body[data-theme="light"] #wh-groups-nav > div {
  color: var(--lt-ink-3) !important;
}

html body[data-theme="light"] #wh-groups-nav > button {
  color: var(--lt-ink) !important;
}

html body[data-theme="light"] #wh-groups-nav > button:hover {
  background: rgba(0, 0, 0, 0.06) !important;
}

html body[data-theme="light"] #wh-groups-nav > button > span:last-child {
  background: rgba(0, 0, 0, 0.08) !important;
  color: var(--lt-ink-2) !important;
}

html body[data-theme="light"] #wh-stats {
  background: var(--lt-fill);
  border: 1px solid var(--lt-line);
  color: var(--lt-ink-2);
}

html body[data-theme="light"] #wh-stats::before {
  background: rgba(0, 0, 0, 0.10);
}

html body[data-theme="light"] #wh-stats .wh-stat-value {
  color: var(--lt-ink);
}

html body[data-theme="light"]::after {
  color: var(--lt-ink-3);
  background: var(--lt-fill);
  border-top: 1px solid var(--lt-line);
  border-right: 1px solid var(--lt-line);
}

html body[data-theme="light"] #wh-lights.wh-inactive:not(:hover) .wh-light {
  background: rgba(0, 0, 0, 0.12);
  border-color: rgba(0, 0, 0, 0.08);
}

html body[data-theme="light"] [class*="ModsBrowserLocal__ModsContainer"] > [class*="ModsBrowserLocal__SectionHeader"]:not(:has(svg[data-icon="star"])) h2::after {
  color: var(--lt-ink);
}

html body[data-theme="light"] [class*="ModsBrowserLocal__ModsContainer"] > [class*="ModsBrowserLocal__SectionHeader"]:not(:has(svg[data-icon="star"]))::after {
  color: var(--lt-ink-2);
}

html body[data-theme="light"] .ant-alert-info .ant-btn.ant-btn-primary:not(.ant-btn-background-ghost) {
  background-color: rgba(0, 0, 0, 0.04) !important;
  color: var(--lt-ink) !important;
}

html body[data-theme="light"] .ant-alert-info:has(.ant-btn)::after {
  border-top-color: rgba(0, 0, 0, 0.6);
  border-right-color: rgba(0, 0, 0, 0.6);
}

html body[data-theme="light"] #wh-newmod2 {
  border: 1px solid rgba(0, 0, 0, 0.12);
}

html body[data-theme="light"] .ant-card-bordered {
  background-color: var(--lt-card) !important;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 30%) !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 1px 2px rgba(0, 0, 0, 0.08) !important;
  border: 1px solid var(--lt-line) !important;
  border-top-color: rgba(0, 0, 0, 0.06) !important;
}

html body[data-theme="light"] .ant-card-bordered:hover {
  background-color: var(--lt-card-hover) !important;
  border-color: rgba(0, 0, 0, 0.14) !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 4px 12px rgba(0, 0, 0, 0.12) !important;
}

html body[data-theme="light"] .ant-card-bordered:has([data-testid="mod-card-title"])::before {
  background: radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(0, 0, 0, 0.06), transparent 70%);
}

html body[data-theme="light"] [class*="ModCard__ModCardTitle-"] {
  color: var(--lt-ink) !important;
}

html body[data-theme="light"] [class*="ModCard"] .ant-typography {
  color: var(--lt-ink-2) !important;
}

html body[data-theme="light"] [class*="ModCardActionsContainer"] {
  border-top: 1px solid var(--lt-line) !important;
}

html body[data-theme="light"] [class*="ModCardActionsContainer"] .ant-btn {
  color: var(--lt-ink-2) !important;
}

html body[data-theme="light"] [class*="ModCardActionsContainer"] .ant-btn:hover {
  background: rgba(0, 0, 0, 0.07) !important;
  color: #000 !important;
}

html body[data-theme="light"] [class*="ModCardActionsContainer"] .ant-badge .ant-badge-dot {
  background: rgba(0, 0, 0, 0.35) !important;
}

html body[data-theme="light"] .wh-meta {
  color: var(--lt-ink-3);
}

html body[data-theme="light"] .wh-update::before {
  color: rgba(0, 0, 0, 0.35);
}

html body[data-theme="light"] .wh-more {
  background: rgba(0, 0, 0, 0.06);
  color: var(--lt-ink-2);
}

html body[data-theme="light"] .wh-more:hover {
  background: rgba(0, 0, 0, 0.12);
  color: #000;
}

html body[data-theme="light"] .wh-more-menu {
  background: rgba(250, 250, 252, 0.97);
  border: 1px solid var(--lt-line);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
}

html body[data-theme="light"] #root [data-testid="settings-page"],
html body[data-theme="light"] #root [data-testid="about-page"] {
  --set-bg: rgba(255, 255, 255, 0.65);
  --set-line: rgba(0, 0, 0, 0.09);
}

html body[data-theme="light"] #root [data-testid="about-page"] [class*="About__ContentSection"]:not(:first-child) > div > div > a {
  color: var(--lt-ink) !important;
}

html body[data-theme="light"] .ant-card-body :is(p, .ant-typography):not([data-testid="mod-card-title"], [data-testid="mod-card-title"] *, [class*="ModCard"] *) {
  color: rgba(0, 0, 0, 0.75) !important;
}

html body[data-theme="light"] .ant-tabs-nav-list:has([data-testid^="mod-details-tab-"]) {
  --tab-bg: rgba(0, 0, 0, 0.06);
  --tab-active: rgba(255, 255, 255, 0.95);
  --tab-text: rgba(0, 0, 0, 0.6);
  --tab-text-active: rgba(0, 0, 0, 0.9);
}

html body[data-theme="light"] .ant-tabs-tab.ant-tabs-tab-active:has([data-testid^="mod-details-tab-"]) {
  box-shadow: inset 0 0 0 1px rgba(10, 132, 255, 0.5), 0 1px 3px rgba(0, 0, 0, 0.12);
}

html body[data-theme="light"] *::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.25);
  background-clip: padding-box;
}

html body[data-theme="light"] *::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.45);
  background-clip: padding-box;
}

html body[data-theme="light"] .wh-cscroll-thumb {
  background: rgba(0, 0, 0, 0.3) !important;
}

html body[data-theme="light"] [data-testid="app-header"]::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.28) !important;
}

html body[data-theme="light"] [data-testid="app-header"]::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.5) !important;
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

  // groups
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

  const selectGroup = (name) => {
    const headers = getHeaders();
    const target = headers.find((h) => getName(h) === name);
    if (!target) return;

    // close the other groups
    headers.forEach((h) => {
      if (h !== target && isOpen(h)) getCaret(h).click();
    });

    if (!isOpen(target)) getCaret(target).click();

    // scroll after the layout settles
    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
  };

  let groupsNav = null;
  let lastGroupsKey = null;

  const ensureNav = () => {
    if (groupsNav && groupsNav.isConnected) return true;
    const host = document.querySelector('[data-testid="app-header"]');
    const menu = host && host.querySelector('[class*="AppHeader__HeaderButtonsWrapper"]');
    if (!menu) return false;
    groupsNav = document.createElement('div');
    groupsNav.id = 'wh-groups-nav';
    menu.after(groupsNav);
    lastGroupsKey = null;
    return true;
  };

  const renderGroups = () => {
    const items = getHeaders().map((h) => ({ name: getName(h), count: getCount(h) }));
    const key = items.map((i) => i.name + ':' + i.count).join('|');
    if (key === lastGroupsKey) return;
    lastGroupsKey = key;
    groupsNav.replaceChildren();
    if (!items.length) return;

    const label = document.createElement('div');
    label.textContent = 'GROUPS';
    label.style.cssText =
      'padding:6px 12px;font-size:11px;font-weight:600;letter-spacing:.08em;color:rgba(255,255,255,.4)';
    groupsNav.append(label);

    items.forEach(({ name, count }) => {
      const b = document.createElement('button');
      b.style.cssText =
        'display:flex;align-items:center;justify-content:space-between;gap:8px;' +
        'text-align:left;height:30px;padding:0 12px 0 18px;border:none;border-radius:10px;' +
        'background:transparent;color:rgba(255,255,255,.75);font:inherit;font-size:14px;cursor:pointer;';

      const text = document.createElement('span');
      text.textContent = name;

      const badge = document.createElement('span');
      badge.textContent = count;
      badge.style.cssText =
        'min-width:20px;height:20px;padding:0 6px;box-sizing:border-box;' +
        'display:inline-flex;align-items:center;justify-content:center;' +
        'border-radius:999px;background:rgba(255,255,255,.10);' +
        'font-size:11px;font-weight:600;line-height:1;color:rgba(255,255,255,.7);';

      b.append(text, badge);
      b.onmouseenter = () => (b.style.background = 'rgba(255,255,255,.08)');
      b.onmouseleave = () => (b.style.background = 'transparent');
      b.onclick = () => selectGroup(name);
      groupsNav.append(b);
    });
  };

  // sidebar collapse
  const STORAGE_KEY = 'wh-sidebar-collapsed';
  let collapsed = false;
  try {
    collapsed = localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    // storage can be blocked, start expanded
  }

  const applyCollapsed = () => {
    if (!document.documentElement) return;
    document.documentElement.classList.toggle('wh-collapsed', collapsed);
  };

  const toggleSidebar = () => {
    collapsed = !collapsed;
    applyCollapsed();
    try {
      localStorage.setItem(STORAGE_KEY, collapsed ? '1' : '0');
    } catch {
      // the state just won't persist
    }
  };

  const ensureToggle = () => {
    if (!document.querySelector('[data-testid="app-header"]')) return;
    if (document.getElementById('wh-sb-toggle2')) return;

    const btn = document.createElement('button');
    btn.id = 'wh-sb-toggle2';
    btn.type = 'button';
    btn.title = 'Toggle sidebar (Ctrl+B)';
    btn.setAttribute('aria-label', 'Toggle sidebar');
    btn.innerHTML =
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:block;pointer-events:none"><rect x="3" y="4" width="18" height="16" rx="4"/><path d="M9 4v16"/></svg>';
    btn.onclick = toggleSidebar;
    document.body.append(btn);
  };

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && !e.shiftKey && !e.altKey && e.key.toLowerCase() === 'b') {
      e.preventDefault();
      toggleSidebar();
    }
  });

  // traffic lights
  const sendWindow = (type, extra) => {
    if (typeof window.whWindow !== 'function') return;
    try {
      window.whWindow(JSON.stringify(Object.assign({ type }, extra)));
    } catch {
      // host call failed, nothing useful to do from here
    }
  };

  const LIGHT_ICONS = {
    close: '<svg viewBox="0 0 12 12"><path d="M3.5 3.5l5 5M8.5 3.5l-5 5"/></svg>',
    minimize: '<svg viewBox="0 0 12 12"><path d="M3 6h6"/></svg>',
    maximize: '<svg viewBox="0 0 12 12"><path d="M3 3h4L3 7zM9 9H5l4-4z"/></svg>',
  };

  const ensureWindowControls = () => {
    if (!document.body) return;
    if (document.getElementById('wh-lights')) return;

    // drag zone along the top edge, raise DRAG_H if it feels too small
    const DRAG_H = 44;
    const isDragZone = (e) =>
      e.button === 0 && e.clientY < DRAG_H &&
      !e.target.closest('button, input, a, select, textarea, [role="button"], .ant-btn, .ant-input-affix-wrapper, .ant-switch, #wh-lights, #wh-sb-toggle2');
    let dragPressed = false, dragX = 0, dragY = 0;
    document.addEventListener('mousemove', (e) => {
      if (!dragPressed || !(e.buttons & 1)) return;
      if (Math.abs(e.screenX - dragX) + Math.abs(e.screenY - dragY) > 4) {
        dragPressed = false;
        sendWindow('drag');
      }
    }, true);
    document.addEventListener('mouseup', () => { dragPressed = false; }, true);
    document.addEventListener('dblclick', (e) => {
      if (isDragZone(e)) sendWindow('maximize');
    }, true);
    document.addEventListener('mousedown', (e) => {
      if (!isDragZone(e)) return;
      dragPressed = true; dragX = e.screenX; dragY = e.screenY;
    });

    const lights = document.createElement('div');
    lights.id = 'wh-lights';
    [
      ['close', 'Close'],
      ['minimize', 'Minimize'],
      ['maximize', 'Maximize'],
    ].forEach(([type, label]) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'wh-light wh-light-' + type;
      b.setAttribute('aria-label', label);
      b.innerHTML = LIGHT_ICONS[type];
      b.onclick = () => sendWindow(type);
      lights.append(b);
    });

    document.body.append(lights);

    const syncFocus = () => lights.classList.toggle('wh-inactive', !document.hasFocus());
    window.addEventListener('focus', syncFocus);
    window.addEventListener('blur', syncFocus);
    syncFocus();

    // tell the mod that this skin draws its own title bar
    const announceTitleBar = () => {
      if (typeof window.whWindow === 'function') {
        sendWindow('titlebar', { custom: true });
      } else {
        setTimeout(announceTitleBar, 500);
      }
    };
    setTimeout(announceTitleBar, 1000);

    // invisible resize handles on the top edge and corners
    const mkHandle = (edge, rules, cursor) => {
      const el = document.createElement('div');
      el.style.cssText =
        'position:fixed;z-index:2147483647;background:transparent;' + rules +
        'cursor:' + cursor + ';';

      el.addEventListener('mousedown', (e) => {
        if (e.button === 0) {
          e.preventDefault();
          sendWindow('resize', { edge });
        }
      });

      document.documentElement.appendChild(el);
    };

    mkHandle('t', 'top:0;left:8px;right:8px;height:4px;', 'ns-resize');
    mkHandle('tl', 'top:0;left:0;width:8px;height:8px;', 'nwse-resize');
    mkHandle('tr', 'top:0;right:0;width:8px;height:8px;', 'nesw-resize');
  };

  // stats + badge
  const stats = { catalog: null, installed: null, enabled: null, updates: 0 };

  const isOn = (s) =>
    s.matches('[aria-checked="true"], .ant-switch-checked') ||
    !!s.querySelector('[aria-checked="true"], .ant-switch-checked');

  const readStats = () => {
    const switches = document.querySelectorAll('[data-testid="mod-card-switch"]');
    if (!switches.length) return;
    const q = document.querySelector('.ant-input-affix-wrapper input');
    if (q && q.value) return; // a search is filtering the list
    stats.installed = switches.length;
    stats.enabled = [...switches].filter(isOn).length;
    const alertEl = document.querySelector('.ant-alert-info');
    const m = alertEl && alertEl.textContent.match(/available for (\d+)/i);
    stats.updates = m ? Number(m[1]) : 0;
  };

  let statsEl = null;
  let lastStatsKey = null;

  // catalog: total count and author lookup by mod name
  const catalogByName = {};
  const loadCatalog = async (retries = 2) => {
    try {
      const res = await fetch('https://mods.windhawk.net/catalog.json');
      const data = await res.json();
      const mods = data.mods || data;
      const list = Array.isArray(mods) ? mods : Object.values(mods);
      stats.catalog = list.length;
      list.forEach((m) => {
        const md = (m && m.metadata) || m;
        if (md && md.name) {
          catalogByName[String(md.name).trim().toLowerCase()] = { author: md.author };
        }
      });
      lastStatsKey = null;
      schedule();
    } catch {
      // offline or blocked: retry a couple of times, otherwise carry on without catalog data
      if (retries > 0) setTimeout(() => loadCatalog(retries - 1), 15000);
    }
  };

  const syncNavButtons = () => {
    const btns = document.querySelectorAll(
      '[class*="AppHeader__HeaderButtonsWrapper"] .ant-btn:not([data-testid="create-new-mod"])'
    );
    btns.forEach((b) => {
      const label = [...b.childNodes]
        .filter((n) => !(n.classList && n.classList.contains('wh-nav-badge')))
        .map((n) => n.textContent)
        .join('')
        .trim();
      if (label && b.title !== label) b.title = label; // tooltip when the sidebar is collapsed
      if (label !== 'Home') return;
      let badge = b.querySelector('.wh-nav-badge');
      if (stats.updates > 0) {
        if (!badge) {
          badge = document.createElement('span');
          badge.className = 'wh-nav-badge';
          b.append(badge);
        }
        const t = String(stats.updates);
        if (badge.textContent !== t) badge.textContent = t;
      } else if (badge) {
        badge.remove();
      }
    });
  };

  const ensureStats = () => {
    const host = document.querySelector('[data-testid="app-header"]');
    if (!host) return;
    if (!statsEl || !statsEl.isConnected) {
      statsEl = document.createElement('div');
      statsEl.id = 'wh-stats';
      host.append(statsEl);
      lastStatsKey = null;
    }
    const key = [stats.catalog, stats.installed, stats.enabled].join('|');
    if (key === lastStatsKey) return;
    lastStatsKey = key;
    const rows = [
      ['c-catalog', 'Catalog', stats.catalog],
      ['c-installed', 'Installed', stats.installed],
      ['c-enabled', 'Enabled', stats.enabled],
    ];
    statsEl.replaceChildren(
      ...rows.map(([cls, label, val]) => {
        const row = document.createElement('div');
        row.className = 'wh-stat-row';
        const l = document.createElement('span');
        l.className = 'wh-stat-label';
        const dot = document.createElement('span');
        dot.className = 'wh-stat-dot ' + cls;
        l.append(dot, label);
        const v = document.createElement('span');
        v.className = 'wh-stat-value';
        v.textContent = val == null ? '—' : String(val);
        row.append(l, v);
        return row;
      })
    );
  };

  // New Mod button in the search row
  const placeNewMod = () => {
    const searchRow = document.querySelector('[class*="SearchFilterContainer"]');
    const original = document.querySelector('[data-testid="create-new-mod"]');
    let button = document.getElementById('wh-newmod2');

    if (!searchRow || !original) {
      if (button) button.remove();
      return;
    }
    if (button && button.parentNode === searchRow) return;

    if (!button) {
      button = document.createElement('button');
      button.id = 'wh-newmod2';
      button.type = 'button';
      button.innerHTML = '<span class="wh-nm-plus">+</span><span>New Mod</span>';
      button.onclick = () => {
        document.querySelector('[data-testid="create-new-mod"]')?.click();
      };
    }
    searchRow.append(button);
  };

  const fixSearchPlaceholder = () => {
    document.querySelectorAll('.ant-input-affix-wrapper input').forEach((inp) => {
      if (/^Search for mods/i.test(inp.placeholder) && inp.placeholder !== 'Search for mods...') {
        inp.placeholder = 'Search for mods...';
      }
    });
  };

  // card footer: author, update label, "..." menu
  let menuEl = null;
  const closeMenu = () => {
    if (menuEl) {
      menuEl.remove();
      menuEl = null;
    }
  };
  document.addEventListener('click', closeMenu);
  document.addEventListener('scroll', closeMenu, true);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  const openMenu = (btn) => {
    closeMenu();
    const r = btn.getBoundingClientRect();
    menuEl = document.createElement('div');
    menuEl.className = 'wh-more-menu';
    const item = document.createElement('button');
    item.type = 'button';
    item.textContent = 'Remove';
    item.onclick = (e) => {
      e.stopPropagation();
      closeMenu();
      btn.closest('[class*="ModCardActionsContainer"]')
        ?.querySelector('[data-testid="mod-card-remove"]')
        ?.click();
    };
    menuEl.append(item);
    menuEl.style.top = r.bottom + 6 + 'px';
    menuEl.style.right = window.innerWidth - r.right + 'px';
    document.body.append(menuEl);
  };

  const enhanceCards = () => {
    document.querySelectorAll('[class*="ModCardActionsContainer"]').forEach((box) => {
      if (!box.querySelector('[data-testid="mod-card-remove"]')) return;
      const card = box.closest('.ant-card');
      if (!card) return;

      const title =
        card.querySelector('[data-testid="mod-card-title"]')?.textContent.trim() || '';
      let meta = box.querySelector('.wh-meta');
      if (!meta) {
        meta = document.createElement('span');
        meta.className = 'wh-meta';
        box.prepend(meta);
      }
      const info = catalogByName[title.toLowerCase()];
      const text = info && info.author ? 'by ' + info.author : 'Local mod';
      if (meta.textContent !== text) meta.textContent = text;

      // update label is read from the original ribbon
      const wrap = card.closest('.ant-ribbon-wrapper');
      const ribbonText =
        wrap?.querySelector(':scope > .ant-ribbon .ant-ribbon-content')?.textContent.trim() || '';
      let upd = box.querySelector('.wh-update');
      if (ribbonText) {
        if (!upd) {
          upd = document.createElement('span');
          upd.className = 'wh-update';
          upd.innerHTML = '<i class="wh-dot"></i><span class="wh-update-text"></span>';
          meta.after(upd);
        }
        const t = upd.querySelector('.wh-update-text');
        if (t.textContent !== ribbonText) t.textContent = ribbonText;
      } else if (upd) {
        upd.remove();
      }

      if (!box.querySelector('.wh-more')) {
        const more = document.createElement('button');
        more.type = 'button';
        more.className = 'wh-more';
        more.setAttribute('aria-label', 'More actions');
        more.innerHTML =
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="pointer-events:none"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>';
        more.onclick = (e) => {
          e.stopPropagation();
          openMenu(more);
        };
        box.append(more);
      }
    });
  };

  // mark the card grid container (derived from native-winui)
  // gridDepth = levels between a card and its list container, learned from lists with >1 card
  let gridDepth = 1;
  const markCardGrid = () => {
    const keep = new Set();
    const cards = [...document.querySelectorAll('#root .ant-card')].filter(
      (c) =>
        c.querySelector('[data-testid="mod-card-title"]') &&
        !c.parentElement.closest('.ant-card') &&
        c.getClientRects().length > 0
    );
    // containers that must never become a grid; every neighbouring pair reaches the
    // same container, so remember the verdict (the querySelector scans its whole subtree)
    const verdicts = new Map();
    const bad = (el) => {
      if (!el) return true;
      if (!verdicts.has(el)) {
        verdicts.set(
          el,
          el.id === 'root' ||
            el === document.body ||
            el.matches('[class*="ModsBrowserLocal__ModsContainer"]') ||
            !!el.querySelector('[data-testid="mod-group-header"], [class*="SectionHeader"], .ant-tabs')
        );
      }
      return verdicts.get(el);
    };

    for (let i = 0; i + 1 < cards.length; i++) {
      let box = cards[i].parentElement;
      while (box && !box.contains(cards[i + 1])) box = box.parentElement;
      if (bad(box)) continue;
      let n = cards[i], d = 0;
      while (n && n !== box) { n = n.parentElement; d++; }
      if (n === box) gridDepth = d;
      keep.add(box);
    }
    // single-card list: climb gridDepth levels
    cards.forEach((c) => {
      let a = c;
      for (let i = 0; i < gridDepth && a; i++) a = a.parentElement;
      if (bad(a)) return;
      keep.add(a);
    });

    document.querySelectorAll('.wh-card-grid').forEach((el) => {
      if (!keep.has(el)) el.classList.remove('wh-card-grid');
    });
    keep.forEach((el) => el.classList.add('wh-card-grid'));
  };

  // settings title taken from the active menu button
  const markSettingsTitle = () => {
    const page = document.querySelector('[data-testid="settings-page"]');
    if (!page) return;
    const active = document.querySelector(
      '[class*="AppHeader__HeaderButtonsWrapper"] .ant-btn.ant-btn-primary:not([data-testid="create-new-mod"])'
    );
    const t = (active && active.title) || 'Settings';
    if (page.getAttribute('data-wh-title') !== t) page.setAttribute('data-wh-title', t);
  };

  // about: wrap the " - ..." text in a span so it can be right-aligned
  const markAboutRows = () => {
    document
      .querySelectorAll('[data-testid="about-page"] [class*="About__ContentSection"]:not(:first-child) > div > div')
      .forEach((row) => {
        if (row.dataset.whRow) return;
        row.dataset.whRow = '1';
        const a = row.querySelector(':scope > a');
        if (!a) return;
        const texts = [...row.childNodes].filter((n) => n.nodeType === 3);
        const t = texts
          .map((n) => n.textContent)
          .join('')
          .replace(/^\s*[-\u2013\u2014]\s*/, '')
          .trim();
        texts.forEach((n) => n.remove());
        if (t) {
          const span = document.createElement('span');
          span.className = 'wh-about-desc';
          span.textContent = t;
          a.after(span);
        }
      });
  };

  // about: copy the sidebar logo above the title
  const markAboutLogo = () => {
    const sec = document.querySelector(
      '[data-testid="about-page"] [class*="About__ContentSection"]:first-child'
    );
    if (!sec || sec.querySelector('.wh-about-logo')) return;
    const src = document.querySelector('[class*="AppHeader__HeaderLogoButton"] > :first-child');
    if (!src) return;
    const clone = src.cloneNode(true);
    clone.classList.add('wh-about-logo');
    sec.prepend(clone);
  };

  // measure the logo area height for --sb-logo-h
  let logoRO = null;
  let logoObserved = null;
  const syncSidebarLogo = () => {
    const logo = document.querySelector(
      '[data-testid="app-header"] [class*="AppHeader__HeaderLogo"]:not([class*="HeaderLogoButton"])'
    );
    if (!logo || logo === logoObserved) return;
    logoObserved = logo;
    if (logoRO) logoRO.disconnect();
    logoRO = new ResizeObserver(() => {
      const h = Math.ceil(logo.getBoundingClientRect().height);
      if (h > 0) document.documentElement.style.setProperty('--sb-logo-h', h + 'px');
    });
    logoRO.observe(logo);
  };

  const tick = () => {
    ensureStyle();
    ensureWindowControls();
    applyCollapsed();
    ensureToggle();
    readStats();
    syncNavButtons();
    if (ensureNav()) renderGroups();
    ensureStats();
    placeNewMod();
    fixSearchPlaceholder();
    enhanceCards();
    markCardGrid();
    markSettingsTitle();
    markAboutRows();
    markAboutLogo();
    syncSidebarLogo();
  };

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

  // card spotlight follows the cursor; mouse events can outpace the frame rate,
  // so the layout read and style write happen once per frame
  let spotCard = null;
  let spotX = 0;
  let spotY = 0;
  let spotQueued = false;
  document.addEventListener(
    'mousemove',
    (e) => {
      const card = e.target.closest && e.target.closest('.ant-card-bordered');
      if (!card) return;
      spotCard = card;
      spotX = e.clientX;
      spotY = e.clientY;
      if (spotQueued) return;
      spotQueued = true;
      requestAnimationFrame(() => {
        spotQueued = false;
        const r = spotCard.getBoundingClientRect();
        spotCard.style.setProperty('--mx', spotX - r.left + 'px');
        spotCard.style.setProperty('--my', spotY - r.top + 'px');
      });
    },
    { passive: true }
  );

  window.addEventListener('resize', schedule);

  loadCatalog();

  // the observer above ignores attribute changes (a mod switch being toggled, for example),
  // so poll as well; going through schedule() merges this with observer-triggered runs
  // and holds it back while the window is hidden
  setInterval(schedule, 2000);
  tick();
})();
