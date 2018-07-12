export default {
    menus: [    // 菜单相关路由
        { key: '/app/home', title: '首页', icon: 'mobile', component: 'Home' },
        { 
            key: '/app/ui', title: 'UI', icon: 'scan',
            subs: [
                { key: '/app/ui/QRCode', title: '二维码生成', component: 'QRCode'},
                { key: '/app/ui/Copy', title: '右键复制', component: 'Copy'},
                { key: '/app/ui/nprogress', title: '顶部进度条', component: 'NProgress'},
                { key: '/app/ui/SlidingValidation', title: '滑动验证', component: 'SlidingValidation'},
            ],
        },
        { 
            key: '/app/util', title: '方法', icon: 'tool',
            subs: [
                { key: '/app/util/webSocket', title: 'webSocket链接', component: 'webSocket'},
            ],
        },{ 
            key: '/app/page', title: '页面', icon: 'database',
            subs: [
                { key: '/app/page/404', title: '404', component: 'NotFound'},
                { key: '/app/page/map', title: '腾讯地图', component: 'Map'},
                { key: '/app/page/react-amap', title: '高德地图', component: 'reactAmap'},
            ],
        },
    ],
    others: []  // 非菜单相关路由
}