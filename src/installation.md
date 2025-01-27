# Installation

1. Type `about:config` into your URL bar. Click on the **I accept the risk** button if you're shown a warning.
2. Seach for **`toolkit.legacyUserProfileCustomizations.stylesheets`** and set it to **`true`**.
3. Go to your profile folder:
  - Linux: `$HOME/.mozilla/firefox/######.default-release/`
  - MacOS: `Users/[USERNAME]/Library/Application Support/Firefox/Profiles/######.default-release`
  - Windows: `C:\Users\[USERNAME]\AppData\Roaming\Mozilla\Firefox\Profiles\######.default-release`
4. Copy the `chrome` folder into your profile and restart<sup>1</sup> Firefox.
5. Customise everything to your liking. (*optional*)

<sup>1) If you're running into trouble with a restart seemingly not working you can navigate to `about:profiles` and click the »*Restart Normally*«-Button.</sup>

<br>

> [!IMPORTANT]
> **Attention Windows users**
>
> It seems like `flexbox` (within the Firefox UI) is inheritly broken on Windows. In order to fix the One-Line layout on windows please substitute the [responsive include](https://github.com/cascadefox/cascade/tree/main/chrome/includes/cascade-responsive.css) with the [version for windows](https://github.com/cascadefox/cascade/tree/main/chrome/includes/cascade-responsive-windows-fix.css). This will ensure that the layout doesn't break **but** since it can't use `flexbox` the UI reordering does **not** work.<br>
