import React, { Component } from 'react';
import {Timeline,Icon} from 'quant-ui';

class Detail extends Component {
    render() {
        return (
            <Timeline>
                <Timeline.Item>2018-7-7</Timeline.Item>
        <Timeline.Item dot={<Icon type="clock-circle-o" />} color='red'>{(new Date()).getTime()}</Timeline.Item>
                <Timeline.Item>2025-1-1</Timeline.Item>
                <Timeline.Item >2050-12-23</Timeline.Item>
            </Timeline>
            
        )
    }
}

export default Detail;