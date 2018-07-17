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
import Ellipsis from './UI/Ellipsis' //文本自动省略
import CountDown from "./UI/CountDown" //自动计时
//util
import webSocket from './util/webSocket'
import Language from './util/Language'
import Screenfull from './util/screenfull'
//antd
import Button from './antd/button'
import Icon from './antd/icon'

/*-------Navigation start ----------*/
import Affix from './antd/affix'
import Breadcrumb from './antd/breadcrumb'
import Dropdown from './antd/dropdown'
import Menu from './antd/menu'
import Pagination from './antd/pagination'
import Steps from './antd/steps'
/*-------END ----------*/
/*-------AutoComplete start ----------*/
import AutoComplete from './antd/autoComplete'
/*-------END ----------*/
/*----DataDisplay start ---------*/

import Avatar from './antd/Avatar'
import Badge from './antd/Badge'
import Calendar from './antd/Calendar'
import Card from './antd/Card'
import Carousel from './antd/Carousel'
import Collapse from './antd/Collapse'
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
    
    NoticeIcon,
    HeaderSearch,
    RichText,
    Ellipsis,
    CountDown,

    //util
    webSocket,
    Language,
    Screenfull,
    //antd

    /*----DataDisplay start ---------*/
    Avatar,
    Badge,
    Calendar,
    Card,
    Carousel,
    Collapse,
    /*-------END ----------------*/
    Button,
    Icon,
    /*-------Navigation start ----------*/
    Affix,
    Breadcrumb,
    Dropdown,
    Menu,
    Pagination,
    Steps,
     /*-------END ----------------*/
    AutoComplete,
    NotFound,
    Map,
    reactAmap
}