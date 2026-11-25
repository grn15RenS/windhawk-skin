// ==WindhawkMod==
// @id              windhawk-skin
// @name            Windhawk Skin
// @description     Apply your own skin to the Windhawk interface: change its look, layout, and UI components with custom JavaScript and CSS.
// @version         0.1
// @author          grn15RenS
// @include         windhawk-ui.exe
// @compilerOptions -lwinhttp -ldwmapi
// ==/WindhawkMod==

// ==WindhawkModReadme==
/*
# Windhawk Skin

Applies your own skin (a JavaScript file) to the Windhawk interface itself, so you can
change its appearance, layout, and UI components (for example adding a
sidebar, restyling elements, or hiding parts of the UI).

## How it works

The Windhawk UI (`windhawk-ui.exe`) is built on WebView2. This mod:

1. Adds `--remote-debugging-port` to `WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS`
   before the WebView2 environment is created.
2. Connects to the local debug port (`127.0.0.1`) over the Chrome DevTools
   Protocol (WebSocket).
3. Registers your script with `Page.addScriptToEvaluateOnNewDocument` so it
   runs on every page load, and also evaluates it once on the current page
   with `Runtime.evaluate`.

The mod does not ship any script of its own. It only loads the file you point
it to, so you have full control over what gets injected.

## Setup

1. Create a JavaScript file anywhere on disk, for example:
   `%APPDATA%\WindhawkSkin\skin.js`
2. Open the mod settings and set **Script file path** to that file.
   Environment variables such as `%APPDATA%` and `%USERPROFILE%` are
   supported.
3. Restart the Windhawk UI (close it completely and open it again).

If the setting is left empty, no script is injected, because the mod does not ship any script of its own.
Other settings:

- **Remove native title bar**: removes the system title bar, but only when your theme draws its own.
- **Window backdrop**: None, Mica, Acrylic, or Mica Alt (Windows 11 22H2 or newer).
- **Write debug log file**: writes `windhawk-ui-mod.log` in the temp folder.

Restart the Windhawk UI after changing these settings.

## Debug port

The mod opens a local debug port (default `19222`). If another program on your
PC already uses that port, change **Debug port** in the mod settings to any
free number from 1024 to 65535, then restart the Windhawk UI.

To inspect elements, open `http://127.0.0.1:<port>` in a Chromium-based browser
while the Windhawk UI is running, and pick the page from the list.

## Themes

Instead of writing your own skin, you can pick a ready-made one in **Skin
theme**. The mod then:

1. Downloads the skin from GitHub (`raw.githubusercontent.com`) over HTTPS.
2. Saves a copy in `%LOCALAPPDATA%\WindhawkSkin\themes`.
3. Uses that copy when GitHub cannot be reached.

If **Skin file path** is set, your own file is used and no theme is
downloaded. If both are empty, nothing is applied.

Themes run with full access to the Windhawk UI, just like your own script.
Only the files in the Themes folder of the repository are downloaded.

## Writing your script

- The file is read as UTF-8 (a BOM is stripped automatically).
- The script is evaluated several times during startup, because the page may
  still be loading. **Add an install guard** so it does not run twice:

```js
(() => {
  if (window.__myUiModInstalled) return;
  window.__myUiModInstalled = true;

  const style = document.createElement('style');
  style.textContent = 'body { background: #222; }';
  document.documentElement.appendChild(style);

  // your JavaScript here
})();
```

- Edit the script file and restart the Windhawk UI to apply the changes.

## Window bridge (for skin authors)

Your script can send messages to the mod with `window.whWindow(message)`.
The message must be a JSON string made with `JSON.stringify`, so that it has
no extra spaces.

| Message | Effect |
| --- | --- |
| `{"type":"titlebar","custom":true}` | Tells the mod that the skin draws its own title bar. Needed for **Remove native title bar** to take effect. |
| `{"type":"close"}` | Closes the window. |
| `{"type":"minimize"}` | Minimizes the window. |
| `{"type":"maximize"}` | Maximizes the window, or restores it if already maximized. |
| `{"type":"drag"}` | Starts moving the window. Send it on `mousedown` of your title bar. |

Example:

```js
const send = (type, extra) =>
  window.whWindow(JSON.stringify({ type, ...extra }));

send('titlebar', { custom: true });

document.querySelector('#my-titlebar').addEventListener('mousedown', (e) => {
  if (e.button === 0) send('drag');
});
document.querySelector('#my-close').onclick = () => send('close');
```

## Notes

- Injection only happens in the main UI process, not in the
  `--runtime-broker` process.
- The mod retries up to 30 times if the page is not ready or a stale page from
  a previous session closes.
- Check the Windhawk log for messages such as `Script loaded from`,
  `WebSocket connected`, and `Cannot read script file` when troubleshooting.
- The Windhawk UI may change between versions, so scripts that depend on its
  internal DOM structure can break after an update. The mod also finds the
  Windhawk main window by its class name (`WindhawkTauriMainUI`), so if that
  name changes in a future version, the backdrop and title bar options can
  stop working.

## Security

The remote debugging port is bound to the local machine, but any local
process can talk to it while the UI is open. Only use scripts you wrote or
trust, since the injected code runs with full access to the Windhawk UI.

## Requirements

- Windows with the WebView2 runtime (the same one Windhawk UI already uses).
- Windows 11 22H2 (build 22621) or newer for the **Window backdrop** and
  **Remove native title bar** options. On older versions, your skin script and
  the debug port still work, but these two options have no effect.
*/
// ==/WindhawkModReadme==

// ==WindhawkModSettings==
/*
- theme: none
  $name: Skin theme
  $description: Ready-made skin that is downloaded from GitHub and cached on your PC. Used only when Skin file path is empty. Restart the Windhawk UI to apply.
  $options:
  - none: None
  - native-winui: Native WinUI
  - native-macos: Native macOS
- scriptPath: ""
  $name: Skin file path
  $description: Full path to your own skin (a JavaScript file). When set, it is used instead of the selected theme. Leave empty to use the theme. Environment variables such as %USERPROFILE% are allowed. Restart the Windhawk UI to apply.
- removeTitleBar: false
  $name: Remove native title bar
  $description: Removes the system title bar, but only when the skin draws its own. Otherwise the native title bar stays. Needs Windows 11 22H2 or newer.
- backdrop: mica
  $name: Window backdrop
  $description: System backdrop drawn behind the transparent UI. Needs Windows 11 22H2 or newer and a transparent CSS theme. Restart the Windhawk UI to apply.
  $options:
  - none: None (transparent only)
  - mica: Mica
  - acrylic: Acrylic
  - micaAlt: Mica Alt
- debugPort: 19222
  $name: Debug port
  $description: Local port used to reach the Windhawk UI over the Chrome DevTools Protocol, and for inspecting elements. Change it if 19222 is already used by another program. Use a number from 1024 to 65535. Restart the Windhawk UI to apply.
- debugLog: false
  $name: Write debug log file
  $description: Writes the mod log to windhawk-ui-mod.log in the temp folder.
*/
// ==/WindhawkModSettings==

#include <windows.h>
#include <winhttp.h>
#include <atomic>
#include <dwmapi.h>
#include <string>
#include <stdarg.h>
#include <stdio.h>

// Cached value of the "debugLog" setting
static std::atomic<bool> g_fileLog{false};

// Log to the Windhawk log, and optionally to a file in %TEMP%
static void ModLog(const wchar_t* fmt, ...) {
    wchar_t msg[1024];
    va_list ap;
    va_start(ap, fmt);
    _vsnwprintf(msg, ARRAYSIZE(msg) - 1, fmt, ap);
    va_end(ap);
    msg[ARRAYSIZE(msg) - 1] = 0;

    // Always write to the Windhawk log
    Wh_Log(L"%s", msg);

    // File logging is opt-in; the Windhawk log always works
    if (!g_fileLog) return;

    static SRWLOCK lock = SRWLOCK_INIT;
    wchar_t path[MAX_PATH];
    DWORD n = GetTempPathW(ARRAYSIZE(path), path);
    if (n == 0 || n >= ARRAYSIZE(path)) return;
    wcscat_s(path, ARRAYSIZE(path), L"windhawk-ui-mod.log");

    SYSTEMTIME st;
    GetLocalTime(&st);
    wchar_t line[1280];
    swprintf(line, ARRAYSIZE(line), L"%02d:%02d:%02d.%03d [pid %lu] %s\r\n",
             st.wHour, st.wMinute, st.wSecond, st.wMilliseconds,
             GetCurrentProcessId(), msg);

    char utf8[4096];
    int len = WideCharToMultiByte(CP_UTF8, 0, line, -1, utf8, sizeof(utf8), nullptr, nullptr);
    if (len <= 1) return;

    AcquireSRWLockExclusive(&lock);
    HANDLE f = CreateFileW(path, FILE_APPEND_DATA, FILE_SHARE_READ | FILE_SHARE_WRITE | FILE_SHARE_DELETE,
                           nullptr, OPEN_ALWAYS, FILE_ATTRIBUTE_NORMAL, nullptr);
    if (f != INVALID_HANDLE_VALUE) {
        DWORD written = 0;
        WriteFile(f, utf8, (DWORD)(len - 1), &written, nullptr);
        CloseHandle(f);
    }
    ReleaseSRWLockExclusive(&lock);
}

// From here on, every Wh_Log call in this mod goes through ModLog
#undef Wh_Log
#define Wh_Log(...) ModLog(__VA_ARGS__)

// Debug port used to reach the Windhawk UI page (set in the mod settings)
static int g_debugPort = 0;

// Ask WebView2 to open a local debug port. This must run before the
// WebView2 environment is created, so it is called from Wh_ModInit.
static void EnableDebugPort() {
    int port = Wh_GetIntSetting(L"debugPort");
    if (port < 1024 || port > 65535) {
        Wh_Log(L"Invalid debug port %d, using 19222", port);
        port = 19222;
    }
    g_debugPort = port;

    WCHAR args[2048];
    if (!GetEnvironmentVariableW(L"WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS",
                                 args, ARRAYSIZE(args))) {
        args[0] = 0;
    }

    WCHAR extra[64];
    wsprintfW(extra, L" --remote-debugging-port=%d", g_debugPort);
    wcscat_s(args, ARRAYSIZE(args), extra);
    SetEnvironmentVariableW(L"WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS", args);
    Wh_Log(L"Debug port enabled: %d", g_debugPort);
}

std::atomic<bool> g_stop{false};
std::atomic<HINTERNET> g_ws{nullptr};
HANDLE g_thread = nullptr;

// Escape a string for use inside a JSON string value
static std::string JsonEscape(const char* s) {
    std::string out;
    for (; *s; s++) {
        unsigned char c = (unsigned char)*s;
        if (c == '"') out += "\\\"";
        else if (c == '\\') out += "\\\\";
        else if (c == '\n') out += "\\n";
        else if (c == '\r') out += "\\r";
        else if (c == '\t') out += "\\t";
        else if (c < 0x20) {
            char buf[8];
            wsprintfA(buf, "\\u%04x", c);
            out += buf;
        } else out += (char)c;
    }
    return out;
}

// Read the page list from the local debug port
static bool HttpGetJson(std::string& out) {
    out.clear();
    HINTERNET s = WinHttpOpen(L"WindhawkUiMod", WINHTTP_ACCESS_TYPE_NO_PROXY,
                              WINHTTP_NO_PROXY_NAME, WINHTTP_NO_PROXY_BYPASS, 0);
    HINTERNET c = s ? WinHttpConnect(s, L"127.0.0.1", (INTERNET_PORT)g_debugPort, 0) : nullptr;
    HINTERNET r = c ? WinHttpOpenRequest(c, L"GET", L"/json", nullptr,
                                         WINHTTP_NO_REFERER,
                                         WINHTTP_DEFAULT_ACCEPT_TYPES, 0)
                    : nullptr;
    if (r && WinHttpSendRequest(r, WINHTTP_NO_ADDITIONAL_HEADERS, 0,
                                WINHTTP_NO_REQUEST_DATA, 0, 0, 0) &&
        WinHttpReceiveResponse(r, nullptr)) {
        char buf[2048];
        DWORD n = 0;
        while (WinHttpReadData(r, buf, sizeof(buf), &n) && n > 0) {
            out.append(buf, n);
        }
    }
    if (r) WinHttpCloseHandle(r);
    if (c) WinHttpCloseHandle(c);
    if (s) WinHttpCloseHandle(s);
    return !out.empty();
}

// Open a WebSocket to the page and keep it alive while the UI runs
static HINTERNET ConnectPageSocket(const std::string& pageId,
                                   HINTERNET* outSession,
                                   HINTERNET* outConnect) {
    std::wstring path = L"/devtools/page/";
    path.append(pageId.begin(), pageId.end());

    HINTERNET s = WinHttpOpen(L"WindhawkUiMod", WINHTTP_ACCESS_TYPE_NO_PROXY,
                              WINHTTP_NO_PROXY_NAME, WINHTTP_NO_PROXY_BYPASS, 0);
    HINTERNET c = s ? WinHttpConnect(s, L"127.0.0.1", (INTERNET_PORT)g_debugPort, 0) : nullptr;
    HINTERNET r = c ? WinHttpOpenRequest(c, L"GET", path.c_str(), nullptr,
                                         WINHTTP_NO_REFERER,
                                         WINHTTP_DEFAULT_ACCEPT_TYPES, 0)
                    : nullptr;
    HINTERNET ws = nullptr;
    if (r && WinHttpSetOption(r, WINHTTP_OPTION_UPGRADE_TO_WEB_SOCKET, nullptr, 0) &&
        WinHttpSendRequest(r, WINHTTP_NO_ADDITIONAL_HEADERS, 0,
                           WINHTTP_NO_REQUEST_DATA, 0, 0, 0) &&
        WinHttpReceiveResponse(r, nullptr)) {
        ws = WinHttpWebSocketCompleteUpgrade(r, 0);
    }
    if (r) WinHttpCloseHandle(r);
    *outSession = s;
    *outConnect = c;
    return ws;
}

// Resolve the script file path from the mod settings
static std::wstring GetScriptPath() {
    PCWSTR setting = Wh_GetStringSetting(L"scriptPath");
    std::wstring raw = setting ? setting : L"";
    Wh_FreeStringSetting(setting);
    if (raw.empty()) return raw;  // empty means "use the selected theme"

    WCHAR expanded[MAX_PATH];
    DWORD n = ExpandEnvironmentStringsW(raw.c_str(), expanded, ARRAYSIZE(expanded));
    if (n == 0 || n > ARRAYSIZE(expanded)) {
        return raw;
    }
    return expanded;
}

// Read a whole file as UTF-8 text
static bool ReadTextFile(const std::wstring& path, std::string& out) {
    HANDLE f = CreateFileW(path.c_str(), GENERIC_READ,
                           FILE_SHARE_READ | FILE_SHARE_WRITE, nullptr,
                           OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, nullptr);
    if (f == INVALID_HANDLE_VALUE) return false;

    out.clear();
    char buf[4096];
    DWORD n = 0;
    while (ReadFile(f, buf, sizeof(buf), &n, nullptr) && n > 0) {
        out.append(buf, n);
    }
    CloseHandle(f);

    // Strip the UTF-8 BOM that Notepad may add
    if (out.size() >= 3 && (unsigned char)out[0] == 0xEF &&
        (unsigned char)out[1] == 0xBB && (unsigned char)out[2] == 0xBF) {
        out.erase(0, 3);
    }
    return !out.empty();
}

// Where the themes are downloaded from: https://<host><prefix><theme>/<theme>.js
static const wchar_t kThemeHost[] = L"raw.githubusercontent.com";
static const wchar_t kThemePathPrefix[] = L"/grn15RenS/windhawk-skin/main/Themes/";

// Download a file over HTTPS into memory
static bool DownloadFile(const std::wstring& path, std::string& out) {
    out.clear();
    HINTERNET s = WinHttpOpen(L"WindhawkSkin", WINHTTP_ACCESS_TYPE_AUTOMATIC_PROXY,
                              WINHTTP_NO_PROXY_NAME, WINHTTP_NO_PROXY_BYPASS, 0);
    if (s) WinHttpSetTimeouts(s, 5000, 5000, 10000, 10000);
    HINTERNET c = s ? WinHttpConnect(s, kThemeHost, INTERNET_DEFAULT_HTTPS_PORT, 0) : nullptr;
    HINTERNET r = c ? WinHttpOpenRequest(c, L"GET", path.c_str(), nullptr,
                                         WINHTTP_NO_REFERER,
                                         WINHTTP_DEFAULT_ACCEPT_TYPES,
                                         WINHTTP_FLAG_SECURE)
                    : nullptr;
    bool ok = false;
    if (r && WinHttpSendRequest(r, WINHTTP_NO_ADDITIONAL_HEADERS, 0,
                                WINHTTP_NO_REQUEST_DATA, 0, 0, 0) &&
        WinHttpReceiveResponse(r, nullptr)) {
        DWORD status = 0;
        DWORD size = sizeof(status);
        if (WinHttpQueryHeaders(r, WINHTTP_QUERY_STATUS_CODE | WINHTTP_QUERY_FLAG_NUMBER,
                                WINHTTP_HEADER_NAME_BY_INDEX, &status, &size,
                                WINHTTP_NO_HEADER_INDEX) &&
            status == 200) {
            char buf[4096];
            DWORD n = 0;
            while (WinHttpReadData(r, buf, sizeof(buf), &n) && n > 0) {
                out.append(buf, n);
                if (out.size() > 4 * 1024 * 1024) {
                    out.clear();
                    break;
                }
            }
            ok = !out.empty();
        } else {
            Wh_Log(L"Download failed with HTTP status %lu", status);
        }
    }
    if (r) WinHttpCloseHandle(r);
    if (c) WinHttpCloseHandle(c);
    if (s) WinHttpCloseHandle(s);

    // Strip the UTF-8 BOM, if any
    if (ok && out.size() >= 3 && (unsigned char)out[0] == 0xEF &&
        (unsigned char)out[1] == 0xBB && (unsigned char)out[2] == 0xBF) {
        out.erase(0, 3);
    }
    return ok;
}

// Folder where downloaded themes are cached (created if missing)
static std::wstring GetThemeCacheDir() {
    WCHAR base[MAX_PATH];
    DWORD n = ExpandEnvironmentStringsW(L"%LOCALAPPDATA%\\WindhawkSkin", base, ARRAYSIZE(base));
    if (n == 0 || n > ARRAYSIZE(base)) return L"";
    CreateDirectoryW(base, nullptr);
    std::wstring dir = std::wstring(base) + L"\\themes";
    CreateDirectoryW(dir.c_str(), nullptr);
    return dir;
}

// Write a whole file, replacing the old one
static bool WriteTextFile(const std::wstring& path, const std::string& data) {
    HANDLE f = CreateFileW(path.c_str(), GENERIC_WRITE, 0, nullptr,
                           CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, nullptr);
    if (f == INVALID_HANDLE_VALUE) return false;
    DWORD written = 0;
    BOOL ok = WriteFile(f, data.data(), (DWORD)data.size(), &written, nullptr);
    CloseHandle(f);
    return ok && written == data.size();
}

// Load the selected theme: download it, or use the cached copy when offline
static std::string LoadThemeScript() {
    PCWSTR setting = Wh_GetStringSetting(L"theme");
    std::wstring theme = setting ? setting : L"";
    Wh_FreeStringSetting(setting);
    if (theme.empty() || theme == L"none") return "";

    // The name becomes part of a URL and a file path, so allow only safe characters
    for (wchar_t ch : theme) {
        bool valid = (ch >= L'a' && ch <= L'z') || (ch >= L'0' && ch <= L'9') ||
                     ch == L'-' || ch == L'_';
        if (!valid) {
            Wh_Log(L"Invalid theme name: %s", theme.c_str());
            return "";
        }
    }

    std::wstring fileName = theme + L".js";
    std::wstring dir = GetThemeCacheDir();
    std::string text;
    if (DownloadFile(std::wstring(kThemePathPrefix) + theme + L"/" + fileName, text)) {
        Wh_Log(L"Theme downloaded: %s", fileName.c_str());
        if (!dir.empty()) WriteTextFile(dir + L"\\" + fileName, text);
    } else if (!dir.empty() && ReadTextFile(dir + L"\\" + fileName, text)) {
        Wh_Log(L"Download failed, using the cached theme: %s", fileName.c_str());
    } else {
        Wh_Log(L"Theme is not available: %s", fileName.c_str());
    }
    return text;
}

// Load the script from the user's file, or from the selected theme when no file is set

// Load the script from disk; no built-in copy is kept in the mod
static std::string LoadScript() {
    std::wstring path = GetScriptPath();
    if (path.empty()) {
        return LoadThemeScript();
    }
    std::string text;
    if (ReadTextFile(path, text)) {
        Wh_Log(L"Script loaded from: %s", path.c_str());
    } else {
        Wh_Log(L"Cannot read script file (missing or empty): %s", path.c_str());
    }
    return text;
}

// Cached values of the "backdrop" and "removeTitleBar" settings
static std::atomic<int> g_backdropType{2};
static std::atomic<bool> g_removeTitleBar{false};

// Map the "backdrop" setting to a DWMWA_SYSTEMBACKDROP_TYPE value.
// Returns -1 when no DWM backdrop should be applied.
static int GetBackdropType() {
    PCWSTR s = Wh_GetStringSetting(L"backdrop");
    int type = 2;  // Mica
    if (s) {
        if (!wcscmp(s, L"none")) type = -1;
        else if (!wcscmp(s, L"acrylic")) type = 3;
        else if (!wcscmp(s, L"micaAlt")) type = 4;
        Wh_FreeStringSetting(s);
    }
    return type;
}

// Read the mod settings into the cached values
static void LoadSettings() {
    g_backdropType = GetBackdropType();
    g_removeTitleBar = Wh_GetIntSetting(L"removeTitleBar") != 0;
    g_fileLog = Wh_GetIntSetting(L"debugLog") != 0;
}

// Defined further down; declared here because MicaEnumProc calls it
static void SyncCustomTitleBar(HWND hwnd);
// Apply the Mica backdrop to the top-level windows of this process
static BOOL CALLBACK MicaEnumProc(HWND hwnd, LPARAM) {
    DWORD pid = 0;
    GetWindowThreadProcessId(hwnd, &pid);
    if (pid != GetCurrentProcessId()) return TRUE;

    // Only the main window needs the backdrop
    WCHAR cls[128] = L"";
    GetClassNameW(hwnd, cls, ARRAYSIZE(cls));
    if (wcscmp(cls, L"WindhawkTauriMainUI") != 0 || !IsWindowVisible(hwnd)) {
        return TRUE;
    }

    int type = g_backdropType;
    if (type < 0) {
        // No backdrop wanted, but the custom title bar must still be synced
        SyncCustomTitleBar(hwnd);
        return TRUE;
    }

    BOOL dark = TRUE;
    DwmSetWindowAttribute(hwnd, 20 /*DWMWA_USE_IMMERSIVE_DARK_MODE*/, &dark, sizeof(dark));
    DwmSetWindowAttribute(hwnd, 38 /*DWMWA_SYSTEMBACKDROP_TYPE*/, &type, sizeof(type));

    MARGINS m = {-1, -1, -1, -1};
    static HWND s_extended = nullptr;
    if (s_extended != hwnd) {
        s_extended = hwnd;
        DwmExtendFrameIntoClientArea(hwnd, &m);
    }
    // Let the backdrop show through the native title bar
    // (DWMWA_CAPTION_COLOR = 35, DWMWA_COLOR_NONE = 0xFFFFFFFE)
    COLORREF capNone = 0xFFFFFFFE;
    DwmSetWindowAttribute(hwnd, 35, &capNone, sizeof(capNone));
    SyncCustomTitleBar(hwnd);
    return TRUE;
}

// ---- Custom title bar: the client area is extended over the native title bar.
// Left/right/bottom frame stays, so resize and shadow keep working.
static WNDPROC g_origWndProc = nullptr;
// Set when the theme reports that it draws its own title bar
static std::atomic<bool> g_themeHasTitleBar{false};
static HWND g_subHwnd = nullptr;
static LONG_PTR g_origStyle = 0;
static const UINT WM_WH_SUBCLASS = WM_APP + 0x51;  // wParam: 1 = install, 0 = remove
static const UINT WM_WH_DRAG = WM_APP + 0x52;
static const UINT WM_WH_RESIZE = WM_APP + 0x53;  // wParam: HTTOP, HTTOPLEFT or HTTOPRIGHT

static LRESULT CALLBACK CustomTitleWndProc(HWND hwnd, UINT msg, WPARAM wp, LPARAM lp) {
    if (msg == WM_NCCALCSIZE && wp) {
        NCCALCSIZE_PARAMS* p = (NCCALCSIZE_PARAMS*)lp;
        LONG origTop = p->rgrc[0].top;
        LRESULT r = CallWindowProcW(g_origWndProc, hwnd, msg, wp, lp);
        p->rgrc[0].top = origTop;
        if (false) {  // strip disabled: top resize is handled by the skin overlay
            // Keep a thin non-client strip at the top so the window can be resized from the top edge
            UINT dpiTop = GetDpiForWindow(hwnd);
            // Use a 1px strip (scaled by DPI) so it is almost invisible
            int thin = MulDiv(2, dpiTop, 96);
            p->rgrc[0].top += thin < 1 ? 1 : thin;
        }
        if (IsZoomed(hwnd)) {
            // A maximized window overhangs the screen by the frame thickness
            UINT dpi = GetDpiForWindow(hwnd);
            p->rgrc[0].top += GetSystemMetricsForDpi(SM_CYSIZEFRAME, dpi) +
                              GetSystemMetricsForDpi(SM_CXPADDEDBORDER, dpi);
        }
        return r;
    }
    if (false && msg == WM_NCHITTEST && !IsZoomed(hwnd)) {  // disabled: skin overlay handles it
        // Report the top strip as a resize border (with corners)
        RECT rc;
        GetWindowRect(hwnd, &rc);
        UINT dpiHit = GetDpiForWindow(hwnd);
        int strip = MulDiv(2, dpiHit, 96);
        if (strip < 1) strip = 1;
        int x = (short)LOWORD(lp);
        int y = (short)HIWORD(lp);
        if (y >= rc.top && y < rc.top + strip) {
            // Corners stay wide so they are easy to grab
            int corner = GetSystemMetricsForDpi(SM_CYSIZEFRAME, dpiHit) * 3;
            if (x < rc.left + corner) return HTTOPLEFT;
            if (x >= rc.right - corner) return HTTOPRIGHT;
            return HTTOP;
        }
    }
    if (msg == WM_NCACTIVATE) {
        // Pass lParam = -1 so the system does not repaint the non-client frame
        // when the window gets or loses activation
        return CallWindowProcW(g_origWndProc, hwnd, msg, wp, (LPARAM)-1);
    }    
    if (msg == WM_WH_RESIZE) {
        // Start the system sizing loop from the top edge or a top corner
        POINT pt;
        GetCursorPos(&pt);
        ReleaseCapture();
        SendMessageW(hwnd, WM_NCLBUTTONDOWN, wp,
                     MAKELPARAM((short)pt.x, (short)pt.y));
        return 0;
    }
    if (msg == WM_WH_DRAG) {
        // Runs on the UI thread: drop the web view's mouse capture, then start
        // the system move loop as if the caption had been clicked
        POINT pt;
        GetCursorPos(&pt);
        ReleaseCapture();
        SendMessageW(hwnd, WM_NCLBUTTONDOWN, HTCAPTION,
                     MAKELPARAM((short)pt.x, (short)pt.y));
        return 0;
    }
    if (msg == WM_WH_SUBCLASS) {
        // Runs on the window's own thread, so the procedure swap is safe
        if (wp && !g_subHwnd) {
            g_origWndProc = (WNDPROC)SetWindowLongPtrW(hwnd, GWLP_WNDPROC, (LONG_PTR)CustomTitleWndProc);
            g_subHwnd = hwnd;
            Wh_Log(L"Custom title bar installed on %p", hwnd);
        } else if (!wp && g_subHwnd == hwnd) {
            SetWindowLongPtrW(hwnd, GWLP_WNDPROC, (LONG_PTR)g_origWndProc);
            g_subHwnd = nullptr;
            if (g_origStyle) SetWindowLongPtrW(hwnd, GWL_STYLE, g_origStyle);
            Wh_Log(L"Custom title bar removed from %p", hwnd);
        }
        SetWindowPos(hwnd, nullptr, 0, 0, 0, 0,
                     SWP_NOMOVE | SWP_NOSIZE | SWP_NOZORDER | SWP_NOACTIVATE | SWP_FRAMECHANGED);
        return 0;
    }
    return CallWindowProcW(g_origWndProc, hwnd, msg, wp, lp);
}

// True only on Windows 11 22H2 or newer (build 22621), where the system
// backdrop attribute exists. Set once in Wh_ModInit.
static bool g_backdropOk = false;

static bool DetectBackdropSupport() {
    typedef LONG (WINAPI *RtlGetVersion_t)(OSVERSIONINFOW*);
    HMODULE nt = GetModuleHandleW(L"ntdll.dll");
    RtlGetVersion_t fn =
        nt ? (RtlGetVersion_t)GetProcAddress(nt, "RtlGetVersion") : nullptr;
    if (!fn) return false;
    OSVERSIONINFOW vi = {sizeof(vi)};
    if (fn(&vi) != 0) return false;
    Wh_Log(L"Windows build: %lu", vi.dwBuildNumber);
    return vi.dwBuildNumber >= 22621;
}

// Install or remove the subclass depending on the toggle and the theme flag
static void SyncCustomTitleBar(HWND hwnd) {
    bool want = g_removeTitleBar && g_themeHasTitleBar.load();
    if (want && !g_subHwnd) {
        // Hide the system caption buttons by dropping WS_CAPTION (WS_THICKFRAME stays)
        LONG_PTR st = GetWindowLongPtrW(hwnd, GWL_STYLE);
        g_origStyle = st;
        SetWindowLongPtrW(hwnd, GWL_STYLE, st & ~(LONG_PTR)WS_CAPTION);
        g_origWndProc = (WNDPROC)SetWindowLongPtrW(hwnd, GWLP_WNDPROC, (LONG_PTR)CustomTitleWndProc);
        g_subHwnd = hwnd;
        Wh_Log(L"Custom title bar installed on %p", hwnd);
        SetWindowPos(hwnd, nullptr, 0, 0, 0, 0,
                     SWP_NOMOVE | SWP_NOSIZE | SWP_NOZORDER | SWP_NOACTIVATE | SWP_FRAMECHANGED);
    } else if (!want && g_subHwnd == hwnd) {
        DWORD_PTR removeRes = 0;
        SendMessageTimeoutW(hwnd, WM_WH_SUBCLASS, 0, 0, SMTO_ABORTIFHUNG, 1000, &removeRes);
    }
}

static void ApplyMica() {
    // Backdrop attribute only exists on Windows 11 22H2 and newer
    if (!g_backdropOk) return;
    EnumWindows(MicaEnumProc, 0);
}

// Re-apply the window attributes periodically: DWM resets the caption color
// when the window changes activation state
static HANDLE g_keepThread = nullptr;
static DWORD WINAPI KeepAppliedThread(LPVOID) {
    while (!g_stop) {
        Sleep(500);
        ApplyMica();
    }
    return 0;
}

// Handle one message from window.whWindow. The payload is a JSON string
// embedded in the CDP event, so its quotes arrive escaped (\")
static void HandleThemeMessage(const char* json) {
    if (strstr(json, "\\\"type\\\":\\\"titlebar\\\"")) {
        bool custom = strstr(json, "\\\"custom\\\":true") != nullptr;
        g_themeHasTitleBar = custom;
        Wh_Log(L"Theme title bar flag: %d", custom ? 1 : 0);
    } else {
        HWND main = FindWindowW(L"WindhawkTauriMainUI", nullptr);
        if (!main) return;
        if (strstr(json, "\\\"type\\\":\\\"close\\\"")) {
            PostMessageW(main, WM_CLOSE, 0, 0);
        } else if (strstr(json, "\\\"type\\\":\\\"minimize\\\"")) {
            PostMessageW(main, WM_SYSCOMMAND, SC_MINIMIZE, 0);
        } else if (strstr(json, "\\\"type\\\":\\\"maximize\\\"")) {
            PostMessageW(main, WM_SYSCOMMAND, IsZoomed(main) ? SC_RESTORE : SC_MAXIMIZE, 0);
        } else if (strstr(json, "\\\"type\\\":\\\"resize\\\"")) {
            int ht = HTTOP;
            if (strstr(json, "\\\"edge\\\":\\\"tl\\\"")) ht = HTTOPLEFT;
            else if (strstr(json, "\\\"edge\\\":\\\"tr\\\"")) ht = HTTOPRIGHT;
            PostMessageW(main, WM_WH_RESIZE, (WPARAM)ht, 0);
        } else if (strstr(json, "\\\"type\\\":\\\"drag\\\"")) {
            PostMessageW(main, WM_WH_DRAG, 0, 0);
        } else {
            Wh_Log(L"Theme message (unknown): %.200S", json);
        }
    }
}

// Re-evaluates the theme a few times while the page is still loading.
// Runs on its own thread so the CDP reader does not have to wait for it.
struct ReevalCtx {
    HINTERNET ws;
    std::string esc;
};
static DWORD WINAPI ReevalThread(LPVOID param) {
    ReevalCtx* ctx = (ReevalCtx*)param;
    for (int i = 0; i < 10 && !g_stop; i++) {
        Sleep(1500);
        ApplyMica();
        // Unique id per request, otherwise CDP rejects it as a duplicate
        std::string m =
            "{\"id\":" + std::to_string(100 + i) +
            ",\"method\":\"Runtime.evaluate\",\"params\":{\"expression\":\"" +
            ctx->esc + "\"}}";
        WinHttpWebSocketSend(ctx->ws, WINHTTP_WEB_SOCKET_UTF8_MESSAGE_BUFFER_TYPE,
                             (PVOID)m.data(), (DWORD)m.size());
    }
    delete ctx;
    return 0;
}

static DWORD InjectOnce(const std::string& script) {
    // Wait until the debug port lists the page
    std::string pageId;
    for (int i = 0; i < 600 && !g_stop; i++) {
        std::string body;
        if (HttpGetJson(body)) {
            const char* tag = "/devtools/page/";
            size_t p = body.find(tag);
            if (p != std::string::npos) {
                size_t start = p + strlen(tag);
                size_t end = body.find('"', start);
                if (end != std::string::npos) {
                    pageId = body.substr(start, end - start);
                    break;
                }
            }
        }
        Sleep(100);
    }
    if (pageId.empty()) {
        Wh_Log(L"No page found on the debug port");
        return 0;
    }

    HINTERNET session = nullptr, connect = nullptr;
    HINTERNET ws = ConnectPageSocket(pageId, &session, &connect);
    if (!ws) {
        Wh_Log(L"WebSocket connection failed: %lu", GetLastError());
        if (connect) WinHttpCloseHandle(connect);
        if (session) WinHttpCloseHandle(session);
        return 0;
    }
    g_ws = ws;
    Wh_Log(L"WebSocket connected");

    // Bridge for themes: window.whWindow(string) arrives as Runtime.bindingCalled.
    // Registered before the script is sent so the theme can call it.
    std::string mb =
        "{\"id\":4,\"method\":\"Runtime.addBinding\","
        "\"params\":{\"name\":\"whWindow\"}}";
    WinHttpWebSocketSend(ws, WINHTTP_WEB_SOCKET_UTF8_MESSAGE_BUFFER_TYPE,
                         (PVOID)mb.data(), (DWORD)mb.size());
    // bindingCalled events are only delivered while the Runtime domain is enabled
    std::string me =
        "{\"id\":5,\"method\":\"Runtime.enable\"}";
    WinHttpWebSocketSend(ws, WINHTTP_WEB_SOCKET_UTF8_MESSAGE_BUFFER_TYPE,
                         (PVOID)me.data(), (DWORD)me.size());

    std::string esc = JsonEscape(script.c_str());
    // Run on every new document, and once on the current page
    std::string m1 =
        "{\"id\":1,\"method\":\"Page.addScriptToEvaluateOnNewDocument\","
        "\"params\":{\"source\":\"" + esc + "\"}}";
    std::string m2 =
        "{\"id\":2,\"method\":\"Runtime.evaluate\","
        "\"params\":{\"expression\":\"" + esc + "\"}}";
    WinHttpWebSocketSend(ws, WINHTTP_WEB_SOCKET_UTF8_MESSAGE_BUFFER_TYPE,
                         (PVOID)m1.data(), (DWORD)m1.size());
    WinHttpWebSocketSend(ws, WINHTTP_WEB_SOCKET_UTF8_MESSAGE_BUFFER_TYPE,
                         (PVOID)m2.data(), (DWORD)m2.size());

    // Make the WebView2 default background transparent so Mica shows through
    std::string m3 =
        "{\"id\":3,\"method\":\"Emulation.setDefaultBackgroundColorOverride\","
        "\"params\":{\"color\":{\"r\":0,\"g\":0,\"b\":0,\"a\":0}}}";
    WinHttpWebSocketSend(ws, WINHTTP_WEB_SOCKET_UTF8_MESSAGE_BUFFER_TYPE,
                         (PVOID)m3.data(), (DWORD)m3.size());
    ApplyMica();

    // The page may still be loading; evaluate again from a helper thread.
    // The install guard in the script prevents duplicates.
    ReevalCtx* ctx = new ReevalCtx{ws, esc};
    HANDLE reevalThread = CreateThread(nullptr, 0, ReevalThread, ctx, 0, nullptr);

    // Keep the socket open; the script registration lives as long as it does
    char buf[4096];
    while (!g_stop) {
        DWORD read = 0;
        WINHTTP_WEB_SOCKET_BUFFER_TYPE type;
        DWORD err = WinHttpWebSocketReceive(ws, buf, sizeof(buf) - 1, &read, &type);
        if (err != NO_ERROR || type == WINHTTP_WEB_SOCKET_CLOSE_BUFFER_TYPE) break;
        buf[read] = 0;
        if (g_fileLog) Wh_Log(L"CDP reply (%lu bytes): %.400S", read, buf);
        if (strstr(buf, "Runtime.bindingCalled") && strstr(buf, "whWindow")) {
            HandleThemeMessage(buf);
        }
    }

    // Connection lost: let the keeper thread remove the custom title bar
    g_themeHasTitleBar = false;
    // The helper thread still uses the socket, so wait for it before closing
    if (reevalThread) {
        WaitForSingleObject(reevalThread, 20000);
        CloseHandle(reevalThread);
    }

    HINTERNET h = g_ws.exchange(nullptr);
    if (h) WinHttpCloseHandle(h);
    if (connect) WinHttpCloseHandle(connect);
    if (session) WinHttpCloseHandle(session);
    return 0;
}

// Keep trying: a stale page from the previous session may close at any time
DWORD WINAPI InjectThread(LPVOID) {
    std::string script = LoadScript();
    if (script.empty()) {
        return 0;
    }
    for (int attempt = 1; attempt <= 30 && !g_stop; attempt++) {
        Wh_Log(L"Injection attempt %d", attempt);
        InjectOnce(script);
        Sleep(1000);
    }
    return 0;
}

// Hook on the WebView2 environment export. It is used to reach the environment
// and controller objects; all calls are passed through to the originals.
typedef HRESULT (WINAPI *CreateEnvInternal_t)(void*, void*, void*, void*, void*, void*);
static CreateEnvInternal_t g_origCreateEnv = nullptr;

static bool IsReadable(const void* p) {
    MEMORY_BASIC_INFORMATION mbi;
    return p && VirtualQuery(p, &mbi, sizeof(mbi)) && mbi.State == MEM_COMMIT &&
           !(mbi.Protect & (PAGE_NOACCESS | PAGE_GUARD));
}

// True if the address lies inside EmbeddedBrowserWebView.dll. Rejects vtable
// slots that point somewhere unexpected (e.g. on a different runtime).
static bool IsInEbw(const void* addr) {
    HMODULE ebw = GetModuleHandleW(L"EmbeddedBrowserWebView.dll");
    if (!ebw || !addr) return false;
    HMODULE owner = nullptr;
    if (!GetModuleHandleExW(GET_MODULE_HANDLE_EX_FLAG_FROM_ADDRESS |
                                GET_MODULE_HANDLE_EX_FLAG_UNCHANGED_REFCOUNT,
                            (LPCWSTR)addr, &owner)) {
        return false;
    }
    return owner == ebw;
}

// True if the window is the wry WebView host window
static bool IsWryWebView(HWND h) {
    WCHAR cls[64] = L"";
    if (!h || !IsWindow(h) || !GetClassNameW(h, cls, ARRAYSIZE(cls))) {
        return false;
    }
    return wcscmp(cls, L"WRY_WEBVIEW") == 0;
}

// ---- Transparent background: environment -> controller -> put_DefaultBackgroundColor ----
// IID of ICoreWebView2Controller2
static const GUID IID_Controller2 = {0xc979903e, 0xd4ca, 0x4228,
                                     {0x92, 0xeb, 0x47, 0xee, 0x3f, 0xa9, 0x6e, 0xab}};

// put_DefaultBackgroundColor(this, COREWEBVIEW2_COLOR). All 4 argument registers
// are forwarded unchanged to the original function.
typedef HRESULT (WINAPI *PutBg_t)(void*, UINT64, UINT64, UINT64);
static PutBg_t g_origPutBg = nullptr;
// The only controller whose background color is overridden
static void* g_ctrl = nullptr;
static HRESULT WINAPI PutBgHook(void* self, UINT64 a, UINT64 b, UINT64 c) {

    // Leave other controllers and unsupported Windows versions untouched
    if (self != g_ctrl || !g_backdropOk) {
        return g_origPutBg(self, a, b, c);
    }
    // Clear the alpha byte so the DWM backdrop shows through
    UINT64 forced = a & ~(UINT64)0xFF;
    Wh_Log(L"Background color forced: 0x%llX -> 0x%llX",
           (unsigned long long)a, (unsigned long long)forced);
    return g_origPutBg(self, forced, b, c);
}

// Controller completed handler: Invoke(this, HRESULT, ICoreWebView2Controller*)
typedef HRESULT (WINAPI *HandlerInvoke_t)(void*, HRESULT, void*);
static HandlerInvoke_t g_origCtrlInvoke = nullptr;
static HRESULT WINAPI CtrlInvokeHook(void* self, HRESULT hr, void* controller) {
    Wh_Log(L"Controller handler: hr=0x%08X controller=%p", (unsigned)hr, controller);
    if (SUCCEEDED(hr) && IsReadable(controller) && IsReadable(*(void***)controller)) {
        typedef HRESULT (WINAPI *QI_t)(void*, const GUID*, void**);
        typedef ULONG (WINAPI *Release_t)(void*);
        void** vt = *(void***)controller;
        void* c2 = nullptr;
        HRESULT qhr = ((QI_t)vt[0])(controller, &IID_Controller2, &c2);
        Wh_Log(L"QueryInterface Controller2: hr=0x%08X c2=%p", (unsigned)qhr, c2);
        if (SUCCEEDED(qhr) && c2 && IsReadable(*(void***)c2)) {
            void** vt2 = *(void***)c2;
            Wh_Log(L"Controller2 vtable=%p slot26=%p slot27=%p", vt2, vt2[26], vt2[27]);
            // Remember the newest controller; PutBgHook only overrides this one
            if (g_backdropOk && IsInEbw(vt2[27])) {
                g_ctrl = c2;
            }
            static bool s_putHooked = false;
            if (!s_putHooked && g_ctrl == c2) {
                s_putHooked = true;
                Wh_SetFunctionHook(vt2[27], (void*)PutBgHook, (void**)&g_origPutBg);
                Wh_ApplyHookOperations();
            }
            // Call once ourselves with alpha 0: the first call may have happened
            // before the hook was active
            if (g_origPutBg && g_ctrl == c2) {
                g_origPutBg(c2, 0x00000000ULL, 0, 0);
            }
            ((Release_t)vt2[2])(c2);
        }
    }
    return g_origCtrlInvoke(self, hr, controller);
}

// Environment method: CreateCoreWebView2Controller(this, HWND parent, handler)
typedef HRESULT (WINAPI *CreateCtrl_t)(void*, HWND, void*);
static CreateCtrl_t g_origCreateCtrl = nullptr;
static HRESULT WINAPI CreateCtrlHook(void* self, HWND parent, void* handler) {
    Wh_Log(L"Env CreateCoreWebView2Controller: env=%p parent=%p handler=%p",
           self, parent, handler);
    static bool s_hooked = false;
    if (!s_hooked && !g_origCtrlInvoke && IsWryWebView(parent) && IsReadable(handler) && IsReadable(*(void***)handler)) {
        void** hv = *(void***)handler;
        s_hooked = true;
        Wh_Log(L"Hooking controller handler Invoke at %p", hv[3]);
        Wh_SetFunctionHook(hv[3], (void*)CtrlInvokeHook, (void**)&g_origCtrlInvoke);
        Wh_ApplyHookOperations();
    }
    return g_origCreateCtrl(self, parent, handler);
}

// Environment10::CreateCoreWebView2ControllerWithOptions (slot 21):
// (this, parent, options, handler).
// All arguments are forwarded unchanged to the original function.
typedef HRESULT (WINAPI *CreateCtrlOpt_t)(void*, void*, void*, void*, void*, void*);
static CreateCtrlOpt_t g_origCreateCtrlOpt = nullptr;
static HRESULT WINAPI CreateCtrlOptHook(void* a1, void* a2, void* a3,
                                        void* a4, void* a5, void* a6) {
    Wh_Log(L"Env CreateCoreWebView2ControllerWithOptions: env=%p parent=%p options=%p handler=%p",
           a1, a2, a3, a4);
    static bool s_hooked = false;
    // Only hook the handler if the arguments look like (HWND, options, handler)
    if (!s_hooked && !g_origCtrlInvoke && IsWryWebView((HWND)a2) &&
        IsReadable(a4) && IsReadable(*(void***)a4)) {
        s_hooked = true;
        void** hv = *(void***)a4;
        Wh_Log(L"Hooking controller handler Invoke (via options) at %p", hv[3]);
        Wh_SetFunctionHook(hv[3], (void*)CtrlInvokeHook, (void**)&g_origCtrlInvoke);
        Wh_ApplyHookOperations();
    }
    return g_origCreateCtrlOpt(a1, a2, a3, a4, a5, a6);
}

// Environment completed handler: Invoke(this, HRESULT, ICoreWebView2Environment*)
static HandlerInvoke_t g_origEnvInvoke = nullptr;
static HRESULT WINAPI EnvInvokeHook(void* self, HRESULT hr, void* env) {
    Wh_Log(L"Environment handler: hr=0x%08X env=%p", (unsigned)hr, env);
    static bool s_hooked = false;
    if (!s_hooked && SUCCEEDED(hr) && IsReadable(env) && IsReadable(*(void***)env)) {
        void** ev = *(void***)env;
        s_hooked = true;
        // Hook CreateCoreWebView2ControllerWithOptions (Environment10, slot 21)
        if (IsReadable(&ev[22]) && IsInEbw(ev[21])) {
            Wh_Log(L"Env slots: 20=%p 21=%p 22=%p", ev[20], ev[21], ev[22]);
            Wh_SetFunctionHook(ev[21], (void*)CreateCtrlOptHook,
                               (void**)&g_origCreateCtrlOpt);
        }
        Wh_Log(L"Hooking env CreateCoreWebView2Controller at %p", ev[3]);
        if (IsInEbw(ev[3])) {
            Wh_SetFunctionHook(ev[3], (void*)CreateCtrlHook, (void**)&g_origCreateCtrl);
        }
        Wh_ApplyHookOperations();
    }
    return g_origEnvInvoke(self, hr, env);
}

static void HookEnvHandler(void* handler) {
    if (!IsReadable(handler) || !IsReadable(*(void***)handler)) return;
    void** vt = *(void***)handler;
    Wh_Log(L"Hooking environment handler Invoke at %p", vt[3]);
    Wh_SetFunctionHook(vt[3], (void*)EnvInvokeHook, (void**)&g_origEnvInvoke);
    Wh_ApplyHookOperations();
}

static HRESULT WINAPI CreateEnvHook(void* a1, void* a2, void* a3,
                                    void* a4, void* a5, void* a6) {

    // a5 is the environment completed handler
    static bool s_envHandlerHooked = false;
    if (!s_envHandlerHooked) {
        s_envHandlerHooked = true;
        HookEnvHandler(a5);
    }
    return g_origCreateEnv(a1, a2, a3, a4, a5, a6);
}

// Install the hook right after the WebView2 runtime DLL is loaded
static bool g_ebwHooked = false;
static void TryHookEbw(HMODULE m) {
    if (g_ebwHooked || !m) return;
    WCHAR path[MAX_PATH];
    if (!GetModuleFileNameW(m, path, ARRAYSIZE(path))) return;
    const WCHAR* name = wcsrchr(path, L'\\');
    name = name ? name + 1 : path;
    if (_wcsicmp(name, L"EmbeddedBrowserWebView.dll") != 0) return;
    void* fn = (void*)GetProcAddress(m, "CreateWebViewEnvironmentWithOptionsInternal");
    if (!fn) return;
    g_ebwHooked = true;
    Wh_Log(L"Hooking CreateWebViewEnvironmentWithOptionsInternal at %p", fn);
    Wh_SetFunctionHook(fn, (void*)CreateEnvHook, (void**)&g_origCreateEnv);
    Wh_ApplyHookOperations();
}

typedef HMODULE (WINAPI *LoadLibraryExW_t)(LPCWSTR, HANDLE, DWORD);
static LoadLibraryExW_t g_origLoadLibraryExW = nullptr;
static HMODULE WINAPI LoadLibraryExW_hook(LPCWSTR file, HANDLE h, DWORD flags) {
    HMODULE m = g_origLoadLibraryExW(file, h, flags);
    TryHookEbw(m);
    return m;
}

BOOL Wh_ModInit() {
    LoadSettings();
    Wh_Log(L"Mod loaded, pid %lu", GetCurrentProcessId());
    g_backdropOk = DetectBackdropSupport();
    Wh_Log(L"Backdrop supported: %d", g_backdropOk ? 1 : 0);
    if (GetModuleHandleW(L"EmbeddedBrowserWebView.dll")) {
        // The controller already exists, so the hooks cannot catch it
        Wh_Log(L"WebView2 already loaded: restart the Windhawk UI to apply");
    }
    Wh_Log(L"Command line: %s", GetCommandLineW());

    // Inject only from the main UI process, not the runtime broker
    if (!wcsstr(GetCommandLineW(), L"--runtime-broker")) {
        // Watch for the WebView2 runtime DLL being loaded
        Wh_SetFunctionHook((void*)LoadLibraryExW, (void*)LoadLibraryExW_hook,
                           (void**)&g_origLoadLibraryExW);
        EnableDebugPort();
        g_thread = CreateThread(nullptr, 0, InjectThread, nullptr, 0, nullptr);
        g_keepThread = CreateThread(nullptr, 0, KeepAppliedThread, nullptr, 0, nullptr);
    }
    return TRUE;
}

void Wh_ModSettingsChanged() {
    LoadSettings();
    // Apply the new backdrop and title bar state right away
    ApplyMica();
}

void Wh_ModUninit() {
    g_stop = true;
    HINTERNET h = g_ws.exchange(nullptr);
    if (h) WinHttpCloseHandle(h);
    if (g_thread) {
        WaitForSingleObject(g_thread, 3000);
        CloseHandle(g_thread);
        g_thread = nullptr;
    }
    if (g_keepThread) {
        WaitForSingleObject(g_keepThread, 3000);
        CloseHandle(g_keepThread);
        g_keepThread = nullptr;
    }
    if (g_subHwnd && IsWindow(g_subHwnd)) {
        SendMessageTimeoutW(g_subHwnd, WM_WH_SUBCLASS, 0, 0, SMTO_ABORTIFHUNG, 1000, nullptr);
    }
    Wh_Log(L"Mod unloaded");
}
