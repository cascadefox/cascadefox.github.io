# Integrations

## Catppuccin

![Cascade Catppuccin Preview](cascade-ctp.webp)

This simply offers premade colour configs for [Catppuccin](https://github.com/catppuccin/catppuccin). There are variants for each dark mode flavour — [Mocha](https://github.com/cascadefox/cascade/tree/main/integrations/catppuccin/cascade-mocha.css), [Macchiato](https://github.com/cascadefox/cascade/tree/main/integrations/catppuccin/cascade-macchiato.css) and [Frappé](https://github.com/cascadefox/cascade/tree/main/integrations/catppuccin/cascade-frappe.css) — all of them come with Latte as their light mode.

<details>
<summary>Individual Previews</summary>

![Catppuccin Mocha](cascade-ctp-mocha.webp)
![Catppuccin Macchiato](cascade-ctp-macchiato.webp)
![Catppuccin Frappé](cascade-ctp-frappe.webp)
![Catppuccin Latte](cascade-ctp-latte.webp)

</details>

<br>

## Rosé Pine

![Cascade Rosé Pine Preview](cascade-rosepine.webp)

Similar to Catppuccin these are premade colour configs for [Rosé Pine](https://github.com/rose-pine/rose-pine-theme). Featuring the [Default Palette](https://github.com/cascadefox/cascade/tree/main/integrations/rose-pine/cascade-rose-pine.css) as well as [Moon](https://github.com/cascadefox/cascade/tree/main/integrations/rose-pine/cascade-moon.css) with Dawn as light mode for both.

<br>

### How to set it up
1. Copy your desired colour config from [integrations/catppuccin](https://github.com/cascadefox/cascade/tree/main/integrations/catppuccin) or [integrations/rose-pine](https://github.com/cascadefox/cascade/tree/main/integrations/rose-pine) into the [includes](https://github.com/cascadefox/cascade/tree/main/chrome/includes) folder
2. Replace the colour include in the [userChrome.css](https://github.com/cascadefox/cascade/tree/main/chrome/userChrome.css) with your desired flavour file

> Alternatively you can also just copy the contents of your desired flavour config into the colour config file.

<br>

## Tab Center Reborn — Vertical Tabs

![Tab Center Reborn Vertical Tabs Preview](cascade-tcr.webp)

### How to set it up
1. Download the [Tab Center Reborn Addon](https://addons.mozilla.org/en-GB/firefox/addon/tabcenter-reborn/)
2. Copy the contents of [integrations/tabcenter-reborn/tabcenter-reborn.css](https://github.com/cascadefox/cascade/tree/main/integrations/tabcenter-reborn/tabcenter-reborn.css) into the Addons settings
3. Import the [integrations/tabcenter-reborn/cascade-tcr.css](https://github.com/cascadefox/cascade/tree/main/integrations/tabcenter-reborn/cascade-tcr.css) into the [userChrome.css](https://github.com/cascadefox/cascade/tree/main/chrome/userChrome.css)

<br>

## Side View

[Mozilla's Side View](https://addons.mozilla.org/en-GB/firefox/addon/side-view/) is an Addon that allows you to open a second Website within the Sidebar of your Browser. Cascades integration gets rid of the header, moves the »*Close*«-Button to the bottom, and allows the sidebar to be up to 50% of your browsers width.

### How to set it up
1. Download the [Side View Addon](https://addons.mozilla.org/en-GB/firefox/addon/side-view/)
2. Import the [integrations/side-view/cascade-sideview.css](https://github.com/cascadefox/cascade/tree/main/integrations/side-view/cascade-sideview.css) into the [userChrome.css](https://github.com/cascadefox/cascade/tree/main/chrome/userChrome.css)
