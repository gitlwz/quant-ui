import React, { Component } from 'react';
import { Icon, Badge } from 'quant-ui';

class Detail extends Component {
    render() {
        return (
            <div>
                <Badge dot>
                    <Icon type="notification" />
                </Badge>&nbsp;&nbsp;&nbsp;
                <Badge count={0} dot>
                    <Icon type="notification" />
                </Badge>&nbsp;&nbsp;&nbsp;
                <Badge dot>
                    <a href="#">Link something</a>
                </Badge>
            </div>
        );
    }
}
export default Detail;