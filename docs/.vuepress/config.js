module.exports = {
  title: 'Welder',
  description: '我是一个小焊工~',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'VuePress', link: 'https://vuepress.vuejs.org/' },
    ],
    sidebar: [
      '/',
      '/about/',
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          '/guide/'
        ]
      }
    ]
  }
}