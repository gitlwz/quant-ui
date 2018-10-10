import React, { Component } from 'react';
import { request, Button } from 'quant-ui';
const { POST,Download } = request;
class Detail extends Component {
    componentWillMount = () => {

    }
    sendPost = () => {
        POST("/quantdo/logon", { "userName": "gfadmin", "password": "123qwe!" })
    }
    Download = () => {
       Download("/quantdo/export/defaultMarginSetService/findByQuery","默认保证金率设置.xls","excel",{},[{exchID: undefined, productID: undefined, tradeType: undefined}])
    }
    render() {
        return <div>
            <Button onClick={this.sendPost}>发送请求</Button>
            <Button onClick={this.Download}>下载导出</Button>
        </div>;
    }
}
export default Detail;
