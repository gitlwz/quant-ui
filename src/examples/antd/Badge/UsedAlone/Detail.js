import React, { Component } from 'react';
import {Badge } from 'quant-ui';

class Detail extends Component {
    render() {
        return (
            <div>
                <Badge count={25} />&nbsp;&nbsp;
                <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />&nbsp;&nbsp;
                <Badge count={109} style={{ backgroundColor: '#52c41a' }} />
            </div>
        );
    }
}
export default Detail;