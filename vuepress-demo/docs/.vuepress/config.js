module.exports = {
    title: "Senior-FrontEnd-Road",
    description: 'Hello, my friend,justdoit!',
    themeConfig: {
        lastUpdated: 'Last Updated',
        displayAllHeaders: true,
        nav: [
            {
                text: '前端基础',
                items: [
                    { text: 'JS', link: '/notes/javascript/' },
                    { text: 'HTML', link: '/notes/html/' },
                    { text: 'CSS', link: '/notes/css/' }
                ]
            },
            {
                text: '计算机网络',
                items: [
                    { text: 'TCP/IP', link: '/notes/network/TCP-IP/' },
                    { text: 'HTTP', link: '/notes/network/HTTP/' }
                ]
            },
            {
                text: '前端框架',
                items: [
                    { text: 'vue', link: '/notes/vue/' },
                    { text: 'react', link: '/notes/react/' }
                ]
            },
            {
                text: 'Server',
                items: [
                    { text: 'Node', link: '/notes/node/' },
                    { text: 'Linux', link: '/notes/Linux/' },
                    { text: 'Nginx', link: '/notes/Nginx/' },
                    { text: 'Docker', link: '/notes/Docker/' }
                ]
            },
            { text: 'GitHub', link: 'https://github.com/1391020381' }
        ],
        sidebar: [
            {
                title: '指南',
                collapsable: false,
                children: [
                    ["guide/", '介绍']
                ]
            },
            {
                title: 'JavaScript基础',
                collapsable: false,
                children: [
                    ['notes/javascript/', '前言'],
                    ['notes/javascript/prototype', '原型原型链作用域']
                ]
            },
            {
                title: 'Node.js进阶',
                collapsable: false,
                children: [
                    ['notes/node/', 'Node.js基础'],
                    ['notes/node/express', 'Express'],
                    ['notes/node/koa', 'Koa']
                ]
            }
        ]
    }
}