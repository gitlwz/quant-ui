export default {
    menus: [    // 菜单相关路由
        { key: '/app/home', title: '首页', icon: 'qd0',
          subs: [
              {
                  key: '/app/home/process', title: "进度页", component: 'Home',
              }, 
              {
                  key: '/app/home/workplace', title: "工作台", component: 'Workplace',
              },
              {
                  key: '/app/home/analysis', title: "分析页", component: 'Analysis',
              },
              {
                  key: '/app/home/monitor', title: "监控页", component: 'Monitor',
              }
          ],
        },
        {
            key: '/app/antd', title: 'antd', icon: 'qdantdesign',
            subs: [
                {
                    key: '/app/antd/General', title: 'General组件', icon: 'qdgeneral',
                    subs: [
                        { key: '/app/antd/General/button', title: 'button组件', component: 'Button' },
                        { key: '/app/antd/General/Icon', title: 'Icon图标', component: 'Icon' },
                    ],
                },
                {
                    key:'/app/antd/Layout',title:'Layout组件',icon:'qdiconlayout',
                    subs:[
                        {key:'/app/antd/Layout/Grid',title:'Grid栅栏',component:'Grid'},
                        {key:'/app/antd/Layout/Layout',title:'Layout布局',component:'Layout'},

                    ]
                },
                /*-------------Navigation start ------------------*/
                {
                    key: '/app/antd/Navigation', title: 'Navigation组件', icon: 'qdnavigationdirectio',//2018.7.14新增加的

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
                    key: '/app/antd/DataEntry', title: 'Data Entry组件', icon: 'qd21',
                    subs: [
                        { key: '/app/antd/DataEntry/AutoComplete', title: 'AutoComplete自动完成', component: 'AutoComplete' },
                        { key: '/app/antd/DataEntry/Cascader', title: 'Cascader级联选择', component: 'Cascader' },
                        { key: '/app/antd/DataEntry/Checkbox', title: 'Checkbox多选框', component: 'Checkbox' },
                        { key: '/app/antd/DataEntry/DatePicker', title: 'DatePicker日期选择框', component: 'DatePicker' },
                        { key: '/app/antd/DataEntry/Form', title: 'Form表单', component: 'Form' },
                        { key: '/app/antd/DataEntry/Input', title: 'Input输入框', component: 'Input' },
                        { key: '/app/antd/DataEntry/InputNumber', title: 'InputNumber数字输入框', component: 'InputNumber' },
                        { key: '/app/antd/DataEntry/Mention', title: 'Mention提及', component: 'Mention' },
                        { key: '/app/antd/DataEntry/Rate', title: 'Rate评分', component: 'Rate' },
                        { key: '/app/antd/DataEntry/Radio', title: 'Radio单选框', component: 'Radio' },
                        { key: '/app/antd/DataEntry/Select', title: 'Select选择器', component: 'Select' },
                        { key: '/app/antd/DataEntry/Slider', title: 'Slider滑动输入条', component: 'Slider' },
                        { key: '/app/antd/DataEntry/Switch', title: 'Switch开关', component: 'Switch' },
                        { key: '/app/antd/DataEntry/TreeSelect', title: 'TreeSelect树选择', component: 'TreeSelect' },
                        { key: '/app/antd/DataEntry/TimePicker', title: 'TimePicker时间选择框', component: 'TimePicker' },
                        { key: '/app/antd/DataEntry/Transfer', title: 'Transfer穿梭框', component: 'Transfer' },
                        { key: '/app/antd/DataEntry/Upload', title: 'Upload上传', component: 'Upload' },

                    ]
                },
                /*-------------END ------------------*/
                /*-------------Feedback start ------------------*/
                {
                    key: '/app/antd/Feedback', title: 'Feedback组件', icon: 'qd23',
                    subs: [
                        { key: '/app/antd/DataEntry/Alert', title: 'Alert警告提示', component: 'Alert' },
                        { key: '/app/antd/DataEntry/Drawer', title: 'Drawer抽屉', component: 'Drawer' },
                        { key: '/app/antd/DataEntry/Modal', title: 'Modal对话框', component: 'Modal' },
                        { key: '/app/antd/DataEntry/Message', title: 'Message全局提示', component: 'Message' },
                        { key: '/app/antd/DataEntry/Notification', title: 'Notification通知提醒框', component: 'Notification' },
                        { key: '/app/antd/DataEntry/Progress', title: 'Progress进度条', component: 'Progress' },
                        { key: '/app/antd/DataEntry/Popconfirm', title: 'Popconfirm气泡确认框', component: 'Popconfirm' },
                        { key: '/app/antd/DataEntry/Spin', title: 'Spin加载中', component: 'Spin' },
                    ]
                },
                /*-------------END ------------------*/
                /*-------------Data Display start ------------------*/
                {
                    key: '/app/antd/Data Display', title: '展示组件', icon: 'qddisplay',//2018.7.14新增加的

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
                        { key: '/app/antd/DataDisplay/Table', title: 'Table表格', component: 'Table' },
                        { key: '/app/antd/DataDisplay/Tabs', title: 'Tabs标签页', component: 'Tabs' },
                        { key: '/app/antd/DataDisplay/Tags', title: 'Tags标签', component: 'Tags' },
                        { key: '/app/antd/DataDisplay/Timeline', title: 'Timeline时间轴', component: 'Timeline' },
                        { key: '/app/antd/DataDisplay/Tree', title: 'Tree树形控件', component: 'Tree' },
                    ],

                },
                /*-------------END ------------------*/
                
                {
                    key:'/app/antd/Other',title:'Other组件',icon:'qdother',
                    subs:[
                        {key:'/app/antd/Other/Anchor',title:'Anchor锚点',component:'Anchor'},
                        {key:'/app/antd/Other/BackTop',title:'BackTop回到顶部',component:'BackTop'},
                        {key:'/app/antd/Other/Divider',title:'Divider分割线',component:'Divider'},
                        {key:'/app/antd/Other/LocaleProvider',title:'LocaleProvider国际化',component:'LocaleProvider'},


                    ]
                },
            ],
        },
        {
            key: '/app/ui', title: 'UI', icon: 'qd7',
            subs: [
                { key: '/app/ui/QRCode', title: '二维码生成', component: 'QRCode' },
                { key: '/app/ui/Copy', title: '右键复制', component: 'Copy' },
                { key: '/app/ui/nprogress', title: '顶部进度条', component: 'NProgress' },
                { key: '/app/ui/SlidingValidation', title: '滑动验证', component: 'SlidingValidation' },
                
                { key: '/app/ui/RichText', title: '富文本', component: 'RichText' },
				{ key: '/app/ui/ContextMenu', title: '环境菜单', component: 'ContextMenu' },
                { key: '/app/ui/DropTree', title: '拖拽树形图', component: 'DropTree' },
                { key: '/app/ui/color', title: '拾色器', component: 'Color' },
                { key: '/app/ui/Table', title: '复杂table', component: 'QTable' },
                { key: '/app/ui/ReactMarkdown', title: 'Markdown语法翻译', component: 'ReactMarkdown' },
                { key: '/app/ui/Resizable', title: '尺寸改变', component: 'Resizable' },
                
                
            ],
        },
        {
            key: '/app/animation', title: '动画', icon: 'qd19',
            subs: [
                { key: '/app/animation/basicAnimations', title: '基础动画', component: 'BasicAnimations' },
            ],
        },
        {
            key: '/app/pro', title: '功能组件', icon: 'qd16',
            subs: [
                { key: '/app/pro/Authorized', title: 'Authorized权限', component: 'Authorized' },
                { key: '/app/pro/Login', title: 'Login登录', component: 'Login' },
                { key: '/app/pro/Ellipsis', title: 'Ellipsis文本自动省略号', component: 'Ellipsis' },
                { key: '/app/pro/GlobalFooter', title: 'GlobalFooter全局页脚', component: 'GlobalFooter' },
                { key: '/app/pro/DescriptionList', title: 'DescriptionList描述列表', component: 'DescriptionList' },
                { key: '/app/pro/FooterToolbar', title: 'FooterToolbar底部工具栏', component: 'FooterToolbar' },
                { key: '/app/pro/NumberInfo', title: 'NumberInfo数据文本', component: 'NumberInfo' },
                { key: '/app/pro/Trend', title: 'Trend趋势标记', component: 'Trend' },
                { key: '/app/pro/AvatarList', title: 'AvatarList用户头像列表', component: 'AvatarList' },
                { key: '/app/pro/TagSelect', title: 'TagSelect标签选择器', component: 'TagSelect' },
                { key: '/app/pro/HeaderSearch', title: 'HeaderSearch顶部搜索框', component: 'HeaderSearch' },
                { key: '/app/pro/CountDown', title: 'CountDown倒计时', component: 'CountDown' },
                { key: '/app/pro/NoticeIcon', title: 'NoticeIcon通知菜单', component: 'NoticeIcon' },
                { key: '/app/pro/Result', title: 'Result结果页', component: 'Result' },
                { key: '/app/pro/Ip', title: 'Ip地址输入', component: 'Ip' },
                { key: '/app/pro/Strength', title: 'Strength密码强度', component: 'Strength' },
                { key: '/app/pro/MoveModal', title: 'MoveModal移动弹出框', component: 'MoveModal' },
                
                

            ],
        }, 
        {
            key: '/app/util', title: '方法', icon: 'qd22',
            subs: [
                { key: '/app/util/webSocket', title: 'webSocket链接', component: 'webSocket' },
                { key: '/app/util/Language', title: 'Language多语言', component: 'Language' },
                { key: '/app/util/Screenfull', title: 'Screenfull全屏', component: 'Screenfull' },
                { key: '/app/util/Theme', title: 'Theme主题', component: 'Theme' },
                { key: '/app/util/Utiles', title: 'Utiles方法', component: 'Utiles' },
                
                
            ],
        }, {
            key: '/app/page', title: '页面', icon: 'qd1',
            subs: [
                { key: '/app/page/404', title: '404', component: 'NotFound' },
                { key: '/app/page/map', title: '腾讯地图', component: 'Map' },
                { key: '/app/page/react-amap', title: '高德地图', component: 'reactAmap' },
            ],
        }, {
            key: '/app/charts', title: '可视化', icon: 'qdbar',
            subs: [
                { key: '/app/charts/Line', title: '折线图', component: 'Line'},
                { key: '/app/charts/Bar', title: '柱状图', component: 'Bar'},
                { key: '/app/charts/Scatter', title: '散点图', component: 'Scatter'},
                { key: '/app/charts/Diagram', title: '关系图', component: 'Diagram' },
                { key: '/app/charts/Diagram1', title: '关系图-复杂', component: 'Diagram1' },
                { key: '/app/charts/Diagram2', title: '组织图', component: 'Diagram2' },
                { key: '/app/charts/Dcharts', title: '3D图', component: 'Dcharts' },
                { key: '/app/charts/DropCharts', title: '可拖拽图表', component: 'DropCharts' },
                { key: '/app/charts/Dynamic_timeCharts', title: '动态数据+时间坐标轴', component: 'Dynamic_timeCharts'},
                { key: '/app/charts/K_line_graph', title: 'k线图', component: 'K_line_graph' },
                { key: '/app/charts/Gauge', title: '仪表盘', component: 'Gauge'},
                { key: '/app/charts/Pie_custom', title: '南丁格尔图', component: 'Pie_custom'},
            ],
        },
    ],
    others: []  // 非菜单相关路由
}