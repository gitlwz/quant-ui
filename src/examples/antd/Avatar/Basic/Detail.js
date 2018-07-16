import React, {Component} from 'react';
import {Avatar} from 'quant-ui';
class Detail extends Component {
    render() {
        return (
            <div>
                <div>
                    <Avatar size="large" icon="user" />
                    <Avatar icon="user" />
                    <Avatar size="small" icon="user" />
                </div>
                <br/>
                <div>
                    <Avatar shape="square" size="large" icon="user" />
                    <Avatar shape="square" icon="user" />
                    <Avatar shape="square" size="small" icon="user" />
                </div>
            </div>
        );
    }
}
export default Detail;