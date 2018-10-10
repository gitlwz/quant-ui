import 'isomorphic-fetch';
import { stringify } from 'qs';
import language from "../language";
import message from "../message";
import notification from "../notification";
let $ = language.getLanguageData;
const requestHeader = {
    'Accept': 'text/plain;',
    'Content-Type': 'application/json',
    'mode': "cors",
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
}
function parseJSON(response) {
    return response.json();
}
const codeMessage = {
    200: $('服务器成功返回请求的数据。'),
    201: $('新建或修改数据成功。'),
    202: $('一个请求已经进入后台排队（异步任务）。'),
    204: $('删除数据成功。'),
    400: $('发出的请求有错误，服务器没有进行新建或修改数据的操作。'),
    401: $('用户没有权限（令牌、用户名、密码错误）。'),
    403: $('用户得到授权，但是访问是被禁止的。'),
    404: $('发出的请求针对的是不存在的记录，服务器没有进行操作。'),
    406: $('请求的格式不可得。'),
    410: $('请求的资源被永久删除，且不会再得到的。'),
    422: $('当创建一个对象时，发生一个验证错误。'),
    500: $('服务器发生错误，请检查服务器。'),
    502: $('网关错误。'),
    503: $('服务不可用，服务器暂时过载或维护。'),
    504: $('网关超时。'),
};
const frameCodeMessage = {
    101: $("无权限访问"),
    102: $("访问版本不支持"),
    103: $("会话失效"),
    104: $("请求无对应服务"),
    105: $("请求接口错误"),
    106: $("返回对象无法做json对象转换"),
    107: $("请求参数个数错误"),
    108: $("请求参数类型错误"),
    109: $("请求参数无法转换java对象"),
    110: $("后台业务处理遇到未知错误"),
    111: $("entity定义错误，没有主键Id"),
    112: $("数据库无法获得连接"),
    113: $("字段验证发生异常"),
    114: $("服务访问过频"),
}
function checkStatus(response, shownotification) {

    let frameCode = response.headers.get('error_code');
    if (!!frameCode) {
        if (frameCode == 100) {
            const error = new Error();
            error.name = 401;
            error.response = response;
            throw error;
        }

        if (frameCode == 101) {
            const error = new Error();
            error.name = 403;
            error.response = response;
            throw error;
        }

        if (frameCode < 200) {
            const errortext = frameCodeMessage[frameCode]
            shownotification && notification.error({
                message: `${$("请求错误")} ${frameCode}: ${response.url}`,
                description: errortext,
            });
            const error = new Error(errortext);
            error.name = frameCode;
            error.response = response;
            throw error;
        }
    }

    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const errortext = codeMessage[response.status] || response.statusText;
    shownotification && notification.error({
        message: `${$("请求错误")} ${response.status}: ${response.url}`,
        description: errortext,
    });
    const error = new Error(errortext);
    error.name = response.status;
    error.response = response;
    throw error;
}
let request = function (url, newOptions, showMessage = true, shownotification = true) {
    return fetch(url, newOptions)
        .then((response) => checkStatus(response, shownotification))
        .then(parseJSON)
        .then(data => {
            if (data.errorCode == 0) {
                let resData = data;
                if (resData != '' && resData.data != '')
                    resData.data = JSON.parse(resData.data)
                return resData;
            } else {
                showMessage && message.error(data.errorMsg)
                return data
            }
        })
}

function GET(url, params, showMessage, shownotification) {

    return request(url, {
        method: "POST",
        headers: requestHeader,
        body: stringify(params),
        credentials: 'include'
    }, showMessage, shownotification)
}

function POST(url, params, showMessage, shownotification) {
    let _params = { 'params': JSON.stringify(params) }
    return request(url, {
        method: "POST",
        headers: requestHeader,
        body: stringify(_params),
        credentials: 'include',
        'Accept': 'text/plain;',
        'Content-Type': 'application/json',
        'mode': "cors",
    }, showMessage, shownotification)
}

function UploadMethod(url, params, showMessage, shownotification) {
    return request(url, {
        method: "POST",
        body: params,
        credentials: "include"
    }, showMessage, shownotification)
}
function Download(url, fileName, type, entity, params) {
    var argsCount = arguments.length;
    if (argsCount < 4) {
        throw new Error('call export with wrong params.');
    }

    var params = params;

    var requestParams = {
        args: JSON.stringify(params),
        fileName: fileName,
        type: type,
        entity: JSON.stringify(entity)
    }

    var frameName = "downloadFrame_" + Math.floor(Math.random() * 1000);
    var iframe = document.createElement("iframe");
    iframe.name = frameName;
    iframe.style.display = "none";

    var input = document.createElement("input");
    input.type = "hidden";
    input.name = "params";
    input.value = JSON.stringify(requestParams);

    var form = document.createElement("form");
    form.target = frameName;
    form.method = "POST";
    form.action = url;
    form.style.display = "none";

    form.appendChild(input);
    iframe.appendChild(form);

    document.body.appendChild(iframe);
    form.submit();
}
export default {
    request: request,
    GET: GET,
    POST: POST,
    Download: Download,
    UploadMethod: UploadMethod,
}