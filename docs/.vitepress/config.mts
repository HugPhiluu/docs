import { defineConfig } from 'vitepress'
import { getSidebar } from 'vitepress-plugin-auto-sidebar'

export default defineConfig({
  title: "PhilDocs",
  description: "A collection of documentation!",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/VRChat/markdown-examples' }
    ],

    sidebar: getSidebar({
      contentRoot: './docs',         // points to your docs folder
      contentDirs: ['./VRChat'],       // index everything in docs/
      collapsible: true,
      collapsed: true
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
