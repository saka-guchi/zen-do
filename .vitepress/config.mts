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
          // 英語版のフッターにリンクを追加
          message: 'Released under the MIT License. <br> <a href="/zen-do/terms">Terms of Service</a> | <a href="/zen-do/refund">Refund Policy</a>',
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
          // 日本語版のフッターにリンクを追加
          message: 'MIT License のもとで公開されています。 <br> <a href="/zen-do/ja/terms">利用規約</a> | <a href="/zen-do/ja/refund">返金ポリシー</a>',
          copyright: 'Copyright © 2026 Zen-Do Development'
        }
      }
    }
  }
})