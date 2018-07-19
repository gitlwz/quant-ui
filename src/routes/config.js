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
                /*-------------Navigation start ------------------*/
                {
                    key: '/app/antd/Navigation', title: 'Navigation组件', icon: 'mobile',//2018.7.14新增加的

                    subs: [
                        { key: '/app/antd/Navigation/affix', title: 'Affix固钉', component: 'Affix' },
                        { key: '/app/antd/Navigation/Breadcrumb', title: 'Breadcrumb面包屑', component: 'Breadcrumb' },
                        { key: '/app/antd/Navigation/Dropdown', title: 'Dropdown下拉菜单', component: 'Dropdown' },
                        { key: '/app/antd/Navigation/Menu', title: 'Menu导航菜单', component: 'Menu' },
                        { key: '/app/antd/Navigation/Pagination', title: 'Pagination分页', component: 'Pagination' },
                        { key: '/app/antd/Navigation/Steps', title: 'Steps步骤条', component: 'Steps' },
                    ]
                },
                 /*-------------END ------------------*/
                /*-------------Data Entry start ------------------*/
                {
                    key: '/app/antd/DataEntry', title: 'Data Entry组件', icon: 'mobile',
                    subs: [
                        { key: '/app/antd/DataEntry/AutoComplete', title: 'AutoComplete自动完成', component: 'AutoComplete' },
                        { key: '/app/antd/DataEntry/Cascader', title: 'Cascader级联选择', component: 'Cascader' },
                        { key: '/app/antd/DataEntry/Checkbox', title: 'Checkbox多选框', component: 'Checkbox' },
                        { key: '/app/antd/DataEntry/DatePicker', title: 'DatePicker日期选择框', component: 'DatePicker' },
                        { key: '/app/antd/DataEntry/Form', title: 'Form表单', component: 'Form' },
                        { key: '/app/antd/DataEntry/Input', title: 'Input输入框', component: 'Input' },
                        { key: '/app/antd/DataEntry/InputNumber', title: 'InputNumber数字输入框', component: 'InputNumber' },
                        
                    ]
                },
                /*-------------END ------------------*/
                /*-------------Data Display start ------------------*/
                {
                    key: '/app/antd/Data Display', title: '展示组件', icon: 'mobile',//2018.7.14新增加的

                    subs: [
                        { key: '/app/antd/DataDisplay/Avatar', title: 'Avatar组件', component: 'Avatar' },
                        { key: '/app/antd/DataDisplay/Badge', title: 'Badge徽标数', component: 'Badge' },
                        { key: '/app/antd/DataDisplay/Calendar', title: 'Calendar日历', component: 'Calendar' },
                        { key: '/app/antd/DataDisplay/Card', title: 'Card卡片', component: 'Card' },
                        { key: '/app/antd/DataDisplay/Carousel', title: 'Carousel走马灯', component: 'Carousel' },
                        { key: '/app/antd/DataDisplay/Collapse', title: 'Collapse折叠面板', component: 'Collapse' },
                        { key: '/app/antd/DataDisplay/List', title: 'List列表', component: 'List' },
                        { key: '/app/antd/DataDisplay/PopOver', title: 'PopOver气泡卡片', component: 'PopOver' },
                        { key: '/app/antd/DataDisplay/Tooltip', title: 'Tooltip文字提示', component: 'Tooltip' },





                    ],
                    

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
                { key: '/app/ui/Ellipsis', title: '文本自动省略号', component: 'Ellipsis' },
                { key: '/app/ui/RichText', title: '富文本', component: 'RichText' },
                { key: '/app/ui/CountDown', title: '倒计时', component: 'CountDown' },
                { key: '/app/ui/DropTree', title: '拖拽树形图', component: 'DropTree' },
            ],
        },
        {
            key: '/app/util', title: '方法', icon: 'tool',
            subs: [
                { key: '/app/util/webSocket', title: 'webSocket链接', component: 'webSocket' },
                { key: '/app/util/Language', title: 'Language多语言', component: 'Language' },
                { key: '/app/util/Screenfull', title: 'Screenfull全屏', component: 'Screenfull' },
                { key: '/app/util/Theme', title: 'Theme主题', component: 'Theme' },
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