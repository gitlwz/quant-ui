/**
 * 路由组件出口文件
 */
import Home from './home/home';

//ui
import QRCode from './UI/QRCode';
import Copy from './UI/Copy'


//util
import webSocket from './util/webSocket'
export default {
    Home,
    QRCode,
    Copy,

    webSocket
}