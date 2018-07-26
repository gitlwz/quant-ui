import React, { Component } from 'react';
import { Timeline } from 'quant-ui';

class Detail extends Component {
    render() {
        return (
            <div>
                <Timeline>
                    <Timeline.Item color='green'>2018-7-7</Timeline.Item>
                    <Timeline.Item color='blue'>2025-1-1</Timeline.Item>
                    <Timeline.Item color='red'>2050-12-23</Timeline.Item>
                </Timeline>
            </div>
        )
    }
}

export default Detail;