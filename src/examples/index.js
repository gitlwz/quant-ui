/**
 * 路由组件出口文件
 */
import Home from './home/home';

//ui
import QRCode from './UI/QRCode';
import Copy from './UI/Copy'
import NProgress from './UI/NProgress'
import SlidingValidation from './UI/SlidingValidation' //滑动验证
//util
import webSocket from './util/webSocket'


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

    NotFound,
    Map,
    reactAmap
}