import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "7h3's Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "7h3y055.github.io/blog",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#eff1f5",       // Latte Base
          lightgray: "#ccd0da",   // Latte Surface
          gray: "#bcc0cc",        // Latte Overlay
          darkgray: "#4c4f69",    // Latte Text
          dark: "#d20f39",        // Latte Red (Headers)
          secondary: "#1e66f5",   // Latte Blue (Links)
          tertiary: "#40a02b",    // Latte Green (Graph Nodes)
          highlight: "rgba(30, 102, 245, 0.1)",
          textHighlight: "#df8e1d88",
        },
        darkMode: {
          light: "#1e1e2e",       // Mocha Base (Background)
          lightgray: "#313244",   // Mocha Surface
          gray: "#45475a",        // Mocha Overlay
          darkgray: "#cdd6f4",    // Mocha Text
          dark: "#f38ba8",        // Mocha Red (Headers)
          secondary: "#89b4fa",   // Mocha Blue (Links/Graph)
          tertiary: "#a6e3a1",    // Mocha Green (Graph Nodes)
          highlight: "rgba(137, 180, 250, 0.15)",
          textHighlight: "#f9e2af88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config