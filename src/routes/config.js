export default {
    menus: [    // 菜单相关路由
        { key: '/app/home', title: '首页', icon: 'mobile', component: 'Home' },
        {
            key: '/app/antd', title: 'antd', icon: 'mobile',
            subs: [
                {
                    key: '/app/antd/General', title: 'General组件', icon: 'mobile',
                    subs: [
                        { key: '/app/antd/General/button', title: 'button组件', component: 'Button' },
                        { key: '/app/antd/General/Icon', title: 'Icon图标', component: 'Icon' },
                    ],
                },
                {
                    key: '/app/antd/Navigation', title: 'Navigation组件', icon: 'mobile',//2018.7.14新增加的

                    subs: [
                        { key: '/app/antd/Navigation/affix', title: 'Affix固钉', component: 'Affix' },
                        { key: '/app/antd/Navigation/Breadcrumb', title: 'Breadcrumb面包屑', component: 'Breadcrumb' },
                    ]
                },

                /*-------------Data Display start ------------------*/
                {
                    key: '/app/antd/Data Display', title: '展示组件', icon: 'mobile',//2018.7.14新增加的

                    subs: [
                        { key: '/app/antd/DataDisplay/Avatar', title: 'Avatar组件', component: 'Avatar' },
                        
                    ]
                },
                 /*-------------END ------------------*/
               
            ],
        },
        {
            key: '/app/ui', title: 'UI', icon: 'scan',
            subs: [
                { key: '/app/ui/QRCode', title: '二维码生成', component: 'QRCode' },
                { key: '/app/ui/Copy', title: '右键复制', component: 'Copy' },
                { key: '/app/ui/nprogress', title: '顶部进度条', component: 'NProgress' },
                { key: '/app/ui/SlidingValidation', title: '滑动验证', component: 'SlidingValidation' },
                { key: '/app/ui/NoticeIcon', title: '通知菜单', component: 'NoticeIcon' },
                { key: '/app/ui/HeaderSearch', title: '顶部搜索框', component: 'HeaderSearch' },
                { key: '/app/ui/RichText', title: '富文本', component: 'RichText' },
            ],
        },
        {
            key: '/app/util', title: '方法', icon: 'tool',
            subs: [
                { key: '/app/util/webSocket', title: 'webSocket链接', component: 'webSocket' },
            ],
        }, {
            key: '/app/page', title: '页面', icon: 'database',
            subs: [
                { key: '/app/page/404', title: '404', component: 'NotFound' },
                { key: '/app/page/map', title: '腾讯地图', component: 'Map' },
                { key: '/app/page/react-amap', title: '高德地图', component: 'reactAmap' },
            ],
        },
    ],
    others: []  // 非菜单相关路由
}