const { ua } = require('./ua.js');

module.exports = {
  title: '知木兮',
  description: '记录个人博客，见证成长',
  head: [['link', { rel: 'icon', href: '/img/logo.png' }], [...ua]],
  port: 3000,
  base: '/blog/',
  markdown: {
    lineNumbers: true, // 代码显示行号
  },
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    sidebar: 'auto',
    repo: 'https://github.com/o-QinYin-o/blog',
    repoLabel: 'Github',
    nav: [
      {
        text: '前端面试总结',
        link: '/interview/',
      },
      {
        text: '博文',
        items: [
          { text: 'Python', link: '/python/' },
          { text: 'Golang', link: '/golang/' },
          { text: 'Web', link: '/web/' },
        ],
      },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/o-QinYin-o/blog' },
    ],
    sidebar: {
      '/python/': [
        {
          title: 'Python基础知识',
          collapsable: false, // 是否可折叠，默认可折叠true
          children: ['python1', 'python2', 'python3'],
        },
        {
          title: 'Python Web',
          collapsable: false,
          children: ['python4', 'python5', 'python6'],
        },
      ],
      '/golang/': ['', 'golang1', 'golang2', 'golang3'],
      '/web/': ['', 'web1'],
    },
    sidebarDepth: 2, // 侧边栏显示深度，默认为1，即显示一级标题
  },
};
