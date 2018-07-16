import React, { Component } from 'react';
import { Avatar, Badge } from 'quant-ui';


class Detail extends Component {
    render() {
        return (
            <div>
                <Badge count={5} title="Custom hover text">
                    <Avatar shape='square' />
                </Badge>
                <br/><br/>鼠标放在状态点上时显示文字
            </div>
        );
    }
}
export default Detail;