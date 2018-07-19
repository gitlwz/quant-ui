//Tooltip可以代替系统默认的title提示，提供一个 按钮/文字/操作 的文案解释
import React, { Component } from 'react';
import { Tooltip } from 'quant-ui';

class Detail extends Component {

    render() {
        return (
            <Tooltip title="prompt text" placement="bottom">
                <span>Tooltip will show when mouse enter.</span>
            </Tooltip>
        );
    }
}
export default Detail;
