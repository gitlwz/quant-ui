import compare from "./compare"
import throttle from "./compare"
import debounce from "./debounce"
import currency from "./currency"
import parseQueryString from "./parseQueryString"
import stringfyQueryString from "./stringfyQueryString"
import getExplore from "./getExplore"
import getOS from "./getOS"
import getCookie from "./getCookie"
import removeCookie from "./removeCookie"
import setCookie from "./setCookie"
import interchange from "./interchange"
import digitUppercase from "./digitUppercase"
import getTimeDistance from "./getTimeDistance"
import isEmail from "./isEmail"
import isIdCard from "./isIdCard"
import isPhoneNum from "./isPhoneNum"

export default {
    compare,   //深比较
    throttle,   //函数节流
    debounce,   //函数防抖
    currency,   //浮点数字处理
    parseQueryString, //url参数转对象
    stringfyQueryString, //对象序列化
    getExplore,         //获取浏览器类型和版本号
    getOS,              //获取操作系统类型
    getCookie,          //根据name读取Cookie
    removeCookie,       //根据name删除Cookie
    setCookie,          //添加Cookie
    interchange,
    digitUppercase,      //数字转中文大写
    getTimeDistance,      //获取时间间隔
    isEmail,               //判断是否为邮箱地址
    isIdCard,               //判断是否为身份证号
    isPhoneNum,             //判断是否为手机号

};