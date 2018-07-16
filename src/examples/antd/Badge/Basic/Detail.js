import React, { Component } from 'react';
import { Avatar,Badge } from 'quant-ui';


class Detail extends Component {

    render() {
        return (
            <div>
                <Badge count={5}>
                    <Avatar shape="square" />
                </Badge>&nbsp;&nbsp;&nbsp;&nbsp;
                <Badge count={0} showZero>
                    <Avatar shape="square" />
                </Badge>
            </div>
        );
    }
}
export default Detail;