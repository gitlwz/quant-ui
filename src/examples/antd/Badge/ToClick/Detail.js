import React, { Component } from 'react';
import {Avatar,Badge } from 'quant-ui';

class Detail extends Component {
    render() {
        return (
            <a href="#">
                <Badge count={5}>
                    <Avatar shape="square" />
                </Badge>
            </a>
        );
    }
}
export default Detail;