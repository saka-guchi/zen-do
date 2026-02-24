import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Zen-Do",
  base: '/zen-do/',

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: 'A suite of AI utility tools for Windows to streamline your workflow',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' }
        ],
        sidebar: [
          {
            text: 'Products',
            items: [
              { text: 'ZenClip', link: '/zenclip' },
              { text: 'ZenCull', link: '/zencull' }
            ]
          }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2026 Zen-Do Development'
        }
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      description: '日常のワークフローを削ぎ落とし、本質に集中するAIツール群',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' }
        ],
        sidebar: [
          {
            text: 'プロダクト',
            items: [
              { text: 'ZenClip', link: '/ja/zenclip' },
              { text: 'ZenCull', link: '/ja/zencull' }
            ]
          }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2026 Zen-Do Development'
        }
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: '[https://github.com/あなたのユーザー名/zen-do](https://github.com/あなたのユーザー名/zen-do)' }
    ]
  }
})