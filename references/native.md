# Mobile and desktop apps

Read this for iOS, Android, desktop (Windows, macOS, Linux), Electron, Flutter, React Native, or any cross-platform app. For native iOS and Android depth, Impeccable carries native variants of its audit and adapt references when installed.

Follow the platform's conventions before inventing patterns. Users judge the app against the other apps on the device.

## Touch platforms

- **Targets:** 44×44 pt on iOS, 48×48 dp on Android, at least 8 px between neighbors. Extend the hit area beyond the glyph.
- **Safe areas:** respect notches, home indicators, status bars, and gesture areas. Use edge-to-edge on Android with proper insets. Reserve space for the keyboard and scroll the focused field into view.
- **Navigation:** 3–5 destinations in a bottom bar or tab bar; deeper hierarchy by push navigation with a visible back path. Honor the system back gesture and swipe-back. Keep the primary action reachable by thumb.
- **Text:** support Dynamic Type (iOS) and font scaling (Android) up to at least 200% without clipping. Use system fonts unless the brand requires otherwise.
- **Gestures:** every gesture needs a visible alternative. Do not rely on long-press or swipe alone for critical actions.
- **Feedback:** immediate pressed state, haptics sparingly for confirmation, skeletons close to the final layout.
- **Inputs:** set keyboard type, autofill hints, and return-key behavior. Avoid forcing zoom: inputs at 16 px or larger on mobile web.
- **Resilience:** offline, slow network, interrupted flows, permission denied, and first-run states are part of the design.

## Desktop

- **Keyboard first:** full keyboard path, visible focus, shortcuts for frequent actions shown in menus and tooltips, standard shortcuts (copy, paste, undo, find, save) never overridden.
- **Windowing:** define a minimum size; layouts must adapt when the window resizes or splits. Remember window size and position when it helps.
- **Density:** pointer precision allows compact rows (32–36 px) and tables; keep 24 px minimum targets.
- **Platform chrome:** use native menus, context menus, drag and drop, and file dialogs where the platform has them. Match platform title bar and dialog button order.
- **Display:** crisp at 1x, 2x, and fractional scaling; no blur from non-integer sizes. Respect system theme, accent color, and high-contrast mode.
- **Long tasks:** show progress with cancel, and keep the window responsive.

## Cross-platform

Share the design tokens and flows, not the chrome. Let navigation, dialogs, pickers, and system controls follow each platform. Test the smallest and largest supported screen, both orientations where supported, and light and dark.
