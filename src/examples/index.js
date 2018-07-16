/**
 * 路由组件出口文件
 */
import Home from './home/home';

//ui
import QRCode from './UI/QRCode';
import Copy from './UI/Copy'
import NProgress from './UI/NProgress'
import SlidingValidation from './UI/SlidingValidation' //滑动验证
import NoticeIcon from './UI/NoticeIcon' //通知菜单
import HeaderSearch from './UI/HeaderSearch' //顶部搜索框
import RichText from './UI/RichText' //富文本

//util
import webSocket from './util/webSocket'

//antd
import Button from './antd/button'
import Icon from './antd/icon'

/*-------Navigation start ----------*/
import Affix from './antd/affix'
import Breadcrumb from './antd/breadcrumb'
/*-------END ----------*/

/*----DataDisplay start ---------*/

import Avatar from './antd/Avatar'

/*-------END ----------------*/

//page
import NotFound from './page/NotFound'
import Map from './page/map'   //地图
import reactAmap from './page/reactAmap'   //地图

export default {
    Home,
    QRCode,
    Copy,
    NProgress,
    SlidingValidation,
    webSocket,
    NoticeIcon,
    HeaderSearch,
    RichText,

    //antd

    /*----DataDisplay start ---------*/
    Avatar,
    /*-------END ----------------*/
    Button,
    Icon,
    /*-------Navigation start ----------*/
    Affix,
    Breadcrumb,
     /*-------END ----------------*/

    NotFound,
    Map,
    reactAmap
}