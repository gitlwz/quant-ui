import React, { Component } from 'react';
import { Popover, Button } from 'quant-ui';

class Detail extends Component {
    state={
        visible:false,
    }

    hide=()=>{
        this.setState({
            visible:false,
        })
    }

    handleVisibleVhange=(visible)=>{
        this.setState({visible})
    }

    render() {
        return (
            <Popover
            content={<span onClick={this.hide}>close</span>}
            title="Title"
            trigger="click"
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleVhange}
            >
            <Button type ="primary">click me</Button>
            </Popover>
        );
    }
}
export default Detail;
