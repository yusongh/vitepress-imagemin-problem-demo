import { defineConfig } from 'vitepress'
import imagemin from 'unplugin-imagemin/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vitepress-imagemin-problem-demo",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    plugins: [
      imagemin({
        mode: 'sharp',
        conversion: [
          { from: 'png', to: 'webp' },
        ]
      })
    ]
  }
})
