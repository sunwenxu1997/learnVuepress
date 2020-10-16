const path = require('path')
//全局文档的标题和描述
module.exports = {
    title: '谁在花里花哨',
    description: 'Just playing around',
    base: '/', // 项目根路径
    head: [ // head 标签中的额外内容
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }] // 这个是标签页 logo
    ],
    themeConfig: {
        logo: '/favicon.ico',
        smoothScroll: true, //点击侧边栏滚动到指定位置的滚动效果
        nextLinks: true, // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        prevLinks: true, // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        lastUpdated: 'Last Updated', //最后更新时间
        // navbar: false, //禁用所有导航栏
        // 头部右侧导航栏链接
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: '指南',
                link: '/guide/',
            },
            {
                text: '百度',
                link: 'https://www.baidu.com',
                target: '_blank'
            },
            // {
            //     text: '语言',
            //     ariaLabel: 'Language Menu',
            //     items: [{
            //             text: '简体中文',
            //             link: '/language/chinese/'
            //         },
            //         {
            //             text: 'English',
            //             link: '/language/english/'
            //         }
            //     ]
            // }
        ],
        //侧边栏
        sidebar: {
            '/guide/': [{
                    title: '指南',
                    collapsable: false,
                    children: [
                        '',
                        '/guide/getting-started',
                        '/guide/markdown'
                    ]
                },
                {
                    title: '其他_1',
                    collapsable: false,
                    path:'/guide/other-one',
                },
                {
                    title: '其他_2',
                    collapsable: false,
                    path:'/guide/other-two',
                }
            ],
            '/foo/': [{
                title: 'foo',
                collapsable: true,
                children: [
                    '/foo/foo-one',
                    '/foo/foo-two'
                ]
            }]
        }
    },
    markdown: { //markdown 配置
        lineNumbers: false //代码块是否显示行号
    },
    // locales: { // 多语言可参考官网配置，主要是每个语言单独拆开成文件夹然后把不同语言的文章放进去
    //     // 键名是该语言所属的子路径
    //     // 作为特例，默认语言可以使用 '/' 作为其路径。
    //     '/': {
    //         lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //         title: 'VuePress',
    //         description: 'Vue-powered Static Site Generator'
    //     },
    //     '/zh/': {
    //         lang: 'zh-CN',
    //         title: 'VuePress',
    //         description: 'Vue 驱动的静态网站生成器'
    //     }
    // }
}