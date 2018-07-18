import React, { Component } from 'react';
import { Popover, Button } from 'quant-ui';

const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
)

class Detail extends Component {

    render() {
        return (
            <div>
                <Popover content={content} title="Title" trigger='hover' >
                    <Button type="primary" style={{margin:10}}>Hover me </Button>
                </Popover>
                <Popover content={content} title="Title" trigger='focus'>
                    <Button type="primary" style={{margin:10}}>Focus me </Button>
                </Popover>
                <Popover content={content} title="Title" trigger='click'>
                    <Button type="primary" style={{margin:10}}>Click me </Button>
                </Popover>
            </div>
        );
    }
}
export default Detail;
