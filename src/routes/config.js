export default {
    menus: [    // 菜单相关路由
        { key: '/app/home', title: '首页', icon: 'mobile', component: 'Home' },
        { 
            key: '/app/ui', title: 'UI', icon: 'scan',
            subs: [
                { key: '/app/ui/QRCode', title: '二维码生成', component: 'QRCode'},
                { key: '/app/ui/Copy', title: '右键复制', component: 'Copy'},
            ],
        },
        { 
            key: '/app/util', title: '方法', icon: 'tool',
            subs: [
                { key: '/app/util/webSocket', title: 'webSocket链接', component: 'webSocket'},
            ],
        },
    ],
    others: []  // 非菜单相关路由
}