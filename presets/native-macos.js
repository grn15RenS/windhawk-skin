(() => {
  if (window.__whGroupsInstalled) return;
  window.__whGroupsInstalled = true;

  // ===== CSS: edit freely, then reopen Windhawk =====
  const css = String.raw`
/* =====================================================================
   1. BASE: variables, transparency, glass, radii
   ===================================================================== */
:root {
  --r-xl: 24px;
  --r-lg: 16px;
  --r-md: 12px;
  --r-sm: 8px;
  --header-row-h: 40px;
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

/* Large containers: 16px */
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

/* Controls: 12px */
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

/* Small elements: 8px */
.ant-tag,
.ant-badge-count,
.ant-dropdown-menu-item,
.ant-select-item,
.ant-segmented-item,
.ant-tooltip-inner,
.ant-checkbox-inner {
  border-radius: var(--r-sm) !important;
}

/* Modal */
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

/* Select popup list */
.ant-select-dropdown {
  border-radius: var(--r-md) !important;
  padding: 4px !important;
  overflow: hidden;
}

/* Number input */
.ant-input-number,
.ant-input-number-input-wrap,
.ant-input-number-input {
  border-radius: var(--r-md) !important;
}

.ant-input-number {
  overflow: hidden;
}

/* Glass look: border, top highlight, shadow */
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

/* =====================================================================
   2. CONTROLS: switch, buttons, inputs, scrollbar, fonts
   ===================================================================== */

/* Switch: macOS style, blue when on */
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

/* Primary buttons: flat blue */
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

/* Search bar */
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

/* Scrollbar */
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

/* Font */
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

/* Letter spacing on pages without mod cards */
#root:not(:has([data-testid="mod-card-title"])) :is(h1, h2, h3, h4, h5, .ant-typography, .ant-tabs-tab) {
  letter-spacing: 0.02em !important;
}

/* Mod details header */
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

/* =====================================================================
   3. LAYOUT: content area, card grid, details page
   ===================================================================== */
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

/* Card grid (mod list only) */
#root div:has(> .ant-card [data-testid="mod-card-title"]) {
  display: grid !important;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)) !important;
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

/* Mod details page: no card effect */
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

/* =====================================================================
   4. SIDEBAR
   ===================================================================== */
[data-testid="app-header"] {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  bottom: auto !important;
  width: 200px !important;
  height: calc(100vh - 64px) !important;
  max-height: calc(100vh - 64px) !important;
  min-height: 0 !important;
  box-sizing: border-box;
  display: flex !important;
  flex-direction: column !important;
  flex-wrap: nowrap !important;
  justify-content: flex-start !important;
  align-items: stretch !important;
  gap: 10px;
  padding: 24px 14px !important;
  background: rgba(255, 255, 255, 0.03) !important;
  border: none !important;
  border-right: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 0 !important;
  z-index: 50;
  overflow-x: clip !important;
  overflow-y: auto !important;
  overscroll-behavior: contain;
  scrollbar-width: none;
  transition: width 0.25s ease;
}

[data-testid="app-header"]::-webkit-scrollbar {
  display: none;
}

html.wh-collapsed [data-testid="app-header"] {
  width: 64px !important;
}

/* Nothing in the sidebar may shrink, so it scrolls instead */
[data-testid="app-header"] > * {
  flex: 0 0 auto !important;
  min-height: auto !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}

/* Old built-in footer is off; the fixed footer is body::after below */
[data-testid="app-header"]::after {
  display: none !important;
}

/* Toggle button (top right of the sidebar) */
#wh-sb-toggle2 {
  position: fixed;
  top: 14px;
  left: 152px; /* 200 - 14 - 34 */
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
  transition: left 0.25s ease, background 0.2s ease, color 0.2s ease;
}

#wh-sb-toggle2:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

html.wh-collapsed #wh-sb-toggle2 {
  left: 15px;
}

/* Logo: icon on top, text below, centered */
[class*="AppHeader__HeaderLogo"] {
  width: 100%;
}

[class*="AppHeader__HeaderLogo"]:not([class*="HeaderLogoButton"]) {
  position: static !important;
  height: auto !important;
  padding: 16px 0 14px !important;
  border-bottom: none !important;
  display: flex !important;
  justify-content: center !important;
  transition: padding 0.25s ease;
}

html.wh-collapsed [class*="AppHeader__HeaderLogo"]:not([class*="HeaderLogoButton"]) {
  padding-top: 40px !important;
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

/* Menu */
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

/* Active item: solid blue pill */
[class*="AppHeader__HeaderButtonsWrapper"] .ant-btn.ant-btn-primary {
  background: #0a84ff !important;
  color: #fff !important;
}

[class*="AppHeader__HeaderButtonsWrapper"] .ant-btn.ant-btn-primary .anticon {
  color: #fff !important;
}

/* Update count badge on Home */
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

/* Groups list */
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

/* Stats box */
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

/* Version footer: fixed at the bottom */
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

/* ----- Collapsed state ----- */
html.wh-collapsed [data-testid="app-header"] {
  height: 100vh !important;
  max-height: 100vh !important;
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

/* =====================================================================
   5. HOME HEADER: title, search row, banner, New Mod, view toggle
   ===================================================================== */
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

/* Title block (Featured header excluded) */
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

/* Original text hidden, replaced by "Installed Mods" */
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

/* Search + filter + view toggle + New Mod (Explore keeps vertical margins) */
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

/* Update banner */
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

/* New Mod: original hidden, our button lives in the search row */
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

/* View toggle: segmented control (grid | list) */
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

/* =====================================================================
   6. MOD CARD
   ===================================================================== */
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
  border-radius: var(--r-lg) !important;
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

/* Cursor spotlight */
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

/* Toggle: top right */
[data-testid="mod-card-switch"] {
  position: absolute !important;
  top: 12px;
  right: 16px;
}

/* Hide the "edited locally" icon */
[aria-label="Mod was edited locally"] {
  display: none !important;
}

/* Description (must come before the title rule) */
.ant-card-body p,
.ant-card-body .ant-typography,
[class*="ModCard"] .ant-typography {
  font-size: 14px !important;
  line-height: 1.55 !important;
  color: rgba(255, 255, 255, 0.65) !important;
}

/* Title */
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

/* ----- Footer: [by author] [update label] ........ Details  ... ----- */
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

/* Remove: always hidden, the "..." menu clicks it through script */
[class*="ModCardActionsContainer"] .ant-btn[data-testid="mod-card-remove"] {
  display: none !important;
}

/* Details */
[class*="ModCardActionsContainer"] [data-testid="mod-card-details"] {
  flex: none !important;
  padding: 0 6px 0 10px !important;
}

/* Details arrow */
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

/* Debug-logging dot */
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

/* Author text */
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

/* "Update available" label */
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

/* "..." button and its menu */
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

/* ----- Ribbon (Explore keeps it; Home uses the footer label) ----- */
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
  `;
  // ===== END OF CSS =====

  const ensureStyle = () => {
    if (document.getElementById('wh-custom-css')) return;
    const parent = document.head || document.documentElement;
    if (!parent) return;
    const style = document.createElement('style');
    style.id = 'wh-custom-css';
    style.textContent = css;
    parent.append(style);
  };

  // ===== Groups list =====
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

  const select = (name) => {
    const headers = getHeaders();
    const target = headers.find((h) => getName(h) === name);
    if (!target) return;

    // Close all other open groups
    headers.forEach((h) => {
      if (h !== target && isOpen(h)) getCaret(h).click();
    });

    // Open the selected group
    if (!isOpen(target)) getCaret(target).click();

    // Scroll after the layout has settled
    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
  };

  let nav = null;
  let last = null;

  const ensureNav = () => {
    if (nav && nav.isConnected) return true;
    const host = document.querySelector('[data-testid="app-header"]');
    const menu = host && host.querySelector('[class*="AppHeader__HeaderButtonsWrapper"]');
    if (!menu) return false;
    nav = document.createElement('div');
    nav.id = 'wh-groups-nav';
    menu.after(nav);
    last = null;
    return true;
  };

  const render = () => {
    const items = getHeaders().map((h) => ({ name: getName(h), count: getCount(h) }));
    const key = items.map((i) => i.name + ':' + i.count).join('|');
    if (key === last) return;
    last = key;
    nav.replaceChildren();
    if (!items.length) return; // empty nav is hidden by CSS (:empty)

    const label = document.createElement('div');
    label.textContent = 'GROUPS';
    label.style.cssText =
      'padding:6px 12px;font-size:11px;font-weight:600;letter-spacing:.08em;color:rgba(255,255,255,.4)';
    nav.append(label);

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
      b.onclick = () => select(name);
      nav.append(b);
    });
  };

  // ===== Collapsible sidebar =====
  const STORAGE_KEY = 'wh-sidebar-collapsed';
  let collapsed = false;
  try {
    collapsed = localStorage.getItem(STORAGE_KEY) === '1';
  } catch (e) {}

  const applyCollapsed = () => {
    if (!document.documentElement) return;
    document.documentElement.classList.toggle('wh-collapsed', collapsed);
  };

  const toggleSidebar = () => {
    collapsed = !collapsed;
    applyCollapsed();
    try {
      localStorage.setItem(STORAGE_KEY, collapsed ? '1' : '0');
    } catch (e) {}
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

  // ===== Stats, Home badge, tooltips =====
  const stats = { catalog: null, installed: null, enabled: null, updates: 0 };

  const isOn = (s) =>
    s.matches('[aria-checked="true"], .ant-switch-checked') ||
    !!s.querySelector('[aria-checked="true"], .ant-switch-checked');

  const readStats = () => {
    const switches = document.querySelectorAll('[data-testid="mod-card-switch"]');
    if (!switches.length) return; // not on Home (or still loading)
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

  // Catalog: total count and author lookup by mod name
  const catalogByName = {};
  const loadCatalog = async (retries = 2) => {
    try {
      const res = await fetch('https://mods.windhawk.net/catalog.json');
      const data = await res.json();
      const mods = data.mods || data;
      stats.catalog = Array.isArray(mods) ? mods.length : Object.keys(mods).length;
      (Array.isArray(mods) ? mods : Object.values(mods)).forEach((m) => {
        const md = (m && m.metadata) || m;
        if (md && md.name) {
          catalogByName[String(md.name).trim().toLowerCase()] = { author: md.author };
        }
      });
      lastStatsKey = null;
    } catch (e) {
      if (retries > 0) setTimeout(() => loadCatalog(retries - 1), 15000);
    }
  };

  const ensureBadge = () => {
    const btns = document.querySelectorAll(
      '[class*="AppHeader__HeaderButtonsWrapper"] .ant-btn:not([data-testid="create-new-mod"])'
    );
    btns.forEach((b) => {
      const c = b.cloneNode(true);
      c.querySelectorAll('.wh-nav-badge').forEach((n) => n.remove());
      const label = c.textContent.trim();
      if (label && b.title !== label) b.title = label; // tooltip when collapsed
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

  // ===== New Mod button inside the search row =====
  const placeNewMod = () => {
    const sf = document.querySelector('[class*="SearchFilterContainer"]');
    const old = document.querySelector('[data-testid="create-new-mod"]');
    let mine = document.getElementById('wh-newmod2');

    // pages without a search bar: no button
    if (!sf || !old) {
      if (mine) mine.remove();
      return;
    }
    if (mine && mine.parentNode === sf) return;

    if (!mine) {
      mine = document.createElement('button');
      mine.id = 'wh-newmod2';
      mine.type = 'button';
      mine.innerHTML = '<span class="wh-nm-plus">+</span><span>New Mod</span>';
      mine.onclick = () => {
        document.querySelector('[data-testid="create-new-mod"]')?.click();
      };
    }
    sf.append(mine);
  };

  const tweakText = () => {
    document.querySelectorAll('.ant-input-affix-wrapper input').forEach((inp) => {
      if (/^Search for mods/i.test(inp.placeholder) && inp.placeholder !== 'Search for mods...') {
        inp.placeholder = 'Search for mods...';
      }
    });
  };

  // ===== Mod card footer: author, update label, "..." menu =====
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

      // "by author" text
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

      // "Update available" label, read from the original ribbon
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

      // "..." button
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

  // ===== Main loop =====
  const tick = () => {
    ensureStyle();
    applyCollapsed();
    ensureToggle();
    readStats();
    ensureBadge();
    if (ensureNav()) render();
    ensureStats();
    placeNewMod();
    tweakText();
    enhanceCards();
  };

  // React to DOM changes right away instead of waiting for a timer
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

  // Card spotlight follows the cursor
  document.addEventListener(
    'mousemove',
    (e) => {
      const card = e.target.closest && e.target.closest('.ant-card-bordered');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', e.clientX - r.left + 'px');
      card.style.setProperty('--my', e.clientY - r.top + 'px');
    },
    { passive: true }
  );

  window.addEventListener('resize', schedule);

  loadCatalog();

  // Safety net in case a change is missed
  setInterval(tick, 2000);
  tick();
})();