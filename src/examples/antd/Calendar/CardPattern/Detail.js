import React, { Component } from 'react';
import {Calendar } from 'quant-ui';


class Detail extends Component {

    render() {
        return (
            <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar fullscreen={false}/>
            </div>
        );
    }
}
export default Detail;