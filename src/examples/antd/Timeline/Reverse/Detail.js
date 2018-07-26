import React, { Component } from 'react';
import { Timeline, Button } from 'quant-ui';

class Detail extends Component {
    state = {
        reverse: false,
    }

    handleClick = () => {
        this.setState({ reverse: !this.state.reverse })
    }

    render() {
        return (
            <div>

            <Timeline pending='loading' reverse={this.state.reverse}>
                <Timeline.Item color='green'>2018-7-7</Timeline.Item>
                <Timeline.Item color='blue'>2025-1-1</Timeline.Item>
                <Timeline.Item color='red'>2050-12-23</Timeline.Item>
            </Timeline>

            <Button onClick={this.handleClick}>reverse</Button>
            </div>
        )
    }
}

export default Detail;