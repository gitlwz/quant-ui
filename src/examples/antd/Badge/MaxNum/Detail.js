import React, { Component } from 'react';
import { Avatar,Badge } from 'quant-ui';

class Detail extends Component {
    render() {
        return (
            <div>
                <Badge count={99}>
                    <Avatar shape="square" />
                </Badge>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Badge count={100}>
                    <Avatar shape="square" />
                </Badge>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Badge count={99} overflowCount={10}>
                    <Avatar shape="square" />
                </Badge>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Badge count={1000} overflowCount={999}>
                    <Avatar shape="square" />
                </Badge>
            </div>
        );
    }
}
export default Detail;