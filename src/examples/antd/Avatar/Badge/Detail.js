import React, { Component } from 'react';
import { Avatar, Badge } from 'quant-ui';

class Detail extends Component {
    render() {
        return (
            <div>
                <span style={{ marginRight: 24 }}>
                    <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
                </span>
                <span>
                    <Badge dot><Avatar shape="square" icon="user" /></Badge>
                </span>
            </div>
        );
    }
}
export default Detail;