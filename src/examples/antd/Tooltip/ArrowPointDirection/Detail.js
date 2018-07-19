import React, { Component } from 'react';
import { Popover, Button } from 'quant-ui';
import { Tooltip } from 'antd';

class Detail extends Component {

    render() {
        return (
            <div>
                <Tooltip placement="topLeft" title="Prompt Text">
                    <Button>Align edge / 边缘对齐</Button>
                </Tooltip>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
                    <Button>Arrow points to center / 箭头指向中心</Button>
                </Tooltip>
            </div>
        );
    }
}
export default Detail;
