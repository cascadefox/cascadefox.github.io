import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cascade Docs",
  description: "A responsive One-Line CSS Theme for Firefox",
  srcDir: "./src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Install", link: "/installation" },
      { text: "Guide", link: "/customisation" },
    ],

    sidebar: [
      {
        items: [
          { text: "About", link: "/about" },
          { text: "Installation", link: "/installation" },
          { text: "Customisation", link: "/customisation" },
          { text: "Integrations", link: "/integrations" },
          { text: "Keyboard Shortcuts", link: "/shortcuts" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/cascadefox" }],

    footer: {
      message: "Released under the MIT license.",
      copyright: "Copyright © 2022-present",
    },
  },
});
