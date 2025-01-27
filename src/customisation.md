# Customise Cascade to your liking

> [!TIP]
> If you're using Cascade I highly recommend to remove all clutter from the Navigation Bar area. To do so rightclick your bar and go into the customisation settings. You can move all the icons freely which allows you to place your Addons within the Personal Toolbar for example.

<br>

## Colours

By default Cascade loads it's own colours which can be customised to fit your desired by simply changing the [colours include](https://github.com/cascadefox/cascade/tree/main/chrome/includes/cascade-colours.css).
If you want to use Cascade with the Browsers default colours, or custom Firefox Themes like [Firefox Color](https://color.firefox.com) or even Addons like [Adaptive Tab Bar Color](https://github.com/YS-Wong/Adaptive-Tab-Bar-Color) simply remove the [colours include](https://github.com/cascadefox/cascade/tree/main/chrome/includes/cascade-colours.css) from the [userChrome.css](https://github.com/cascadefox/cascade/tree/main/chrome/userChrome.css) file.

> [!NOTE]
> **Are you having issues with the colours not applying?**
>
> A workaround fix for this issue is to remove the colour include from the [main file](https://github.com/cascadefox/cascade/tree/main/chrome/userChrome.css) and use [Firefox Color](https://addons.mozilla.org/en-GB/firefox/addon/firefox-color/) to apply [this custom theme](https://color.firefox.com/?theme=XQAAAAL8AAAAAAAAAABBKYhm849SCia2CaaEGccwS-xMDPr15o6H0LddKi1zZz7p7H23MOXwiWJCP8Eczt9O0cwm8bbmvpd20uiOFG8WawCZcXzraYdfXj2HrWgd4IgJK7QchIStW1KXpQGYxo9DHahUGJEmoKprdWRKoHPzcBH145YsTnnZq5DK71QEUg2RSwksm6Vs6Y7i7Y-4K-wFjfvAbb__jUJAAA) to apply Cascades default colours.

<br>

## Mouse Support

Cascade offers an [alternative config file](https://github.com/cascadefox/cascade/tree/main/chrome/includes/cascade-config-mouse.css) that reintroduces some of the UI elements that are necessary to use Firefox with a mouse. To use these settings simply substitue the regular config include with the one for mouse support.

This config brings back:
* Navigation Buttons
* the URL Bar Bookmark Button
* the Hamburger Menu
* Tab Close Buttons (on hover)

If the buttons inside the URL Bar are off you may need to change the `--uc-page-action-margin` variable in the config as the necessary margin seems to differ depending on ones setup.

<br>

## Sort the UI like you want it

In the [Cascade config](https://github.com/cascadefox/cascade/tree/main/chrome/includes/cascade-config.css) you can set different ways of how the UI elements are layed out. The URL Bar, Tab Bar and Personal Toolbar can be arranged in different stacks; do you want the Toolbar to be on top or the URL and Tab Bar? Tabs on the left with the URL Bar to the right? No problem!

```css
/*  Position of the Personal Toolbar
 *  possible values:
 *  0 – toolbar on top
 *  4 – toolbar on bottom
 */ --uc-toolbar-position: 0;
```

```css
/*  Position of the URL Bar
 *  possible values:
 *  1 – tabs on the right
 *  3 – tabs on the left
 */ --uc-urlbar-position: 1;
```

<details>
<summary>Previews</summary>

Toolbar on the top
![Toolbar on the top](/cascade-toolbar-top.webp)
Toolbar on the bottom
![Toolbar on the bottom](/cascade-toolbar-bottom.webp)
URL bar on the right
![URL Bar on the right](/cascade-urlbar-right.webp)

</details><br>

## URL Bar Customisation

You can freely set your desired URL Bar width from within the [config](https://github.com/cascadefox/cascade/tree/main/chrome/includes/cascade-config.css) where the `min-width` setting is the default URL Bar width and `max-width` is the width of the focused URL Bar. Those can be different in order to make more room for the URL Bar when you actually want to use it.

```css
/*  Width of the URL Bar for the Oneline layout
 *  If enabled the max-width is applied on focus
 *  otherwise the URL Bar will always be it's min-width
 */ --uc-urlbar-min-width: 30vw;
    --uc-urlbar-max-width: 45vw;
```

If you set the `min-width` to `0vw` and the `max-width` to `100vw` you can also completely hide the URL Bar as long as it's not focused.

![Fully hidden URL Bar if unfocused](/cascade-urlbar.webp)

<br>

## Oneline Breakpoint

If you'd like to have Cascade transition into it's Oneline layout on either smaller or larger sizes you can simply do so by changing the breakpoint value in the [responsive include](https://github.com/cascadefox/cascade/tree/main/chrome/includes/cascade-responsive.css) file. If you don't want Cascade to break to the Oneline layout at all remove it from the [userChrome.css](https://github.com/cascadefox/cascade/tree/main/chrome/userChrome.css) file

```css
@media (min-width: 1000px) {

  […]

}
```

<br><br><br>
