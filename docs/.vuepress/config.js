const path = require("path");

module.exports = {
  scss: {
    data: `
          @import "@lib/assets/sass/_variables.scss";
          @import "@lib/assets/sass/_mixins.scss";
      `
  },

  locales: {
    '/': {
      lang: 'en-US',
      title: 'HTMLCARS',
      description: 'Documentation site for the Vue component library plugin'
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@styles": path.resolve(__dirname, "./styles"),
        "@lib": path.resolve(__dirname, "./../../src")
      }
    }
  },

  theme: "local",
  base: "/htmlcars/",

  themeConfig: {
    repoLabel: 'Contribute!',
    repo: 'https://github.com/xiphoseer/htmlcars',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'main',
    editLinkText: 'Help us improve this page!',
    search: false,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: 'Getting Started', link: '/guide' },
          { text: 'Components', link: '/components/' },
        ],
        sidebar: {
          '/components/': [
            {
              title: 'Components',
              collapsable: false,
              children: ['stardate-component']
            }
          ]
        }
      }
    }
  }
}