import React, { Component } from 'react';
import { Tag } from 'quant-ui';


class Detail extends Component {
    preventDefault=(e)=>{
        e.preventDefault();
    }

    log=(e)=>{
        console.log('---',e);
    }
    render() {
        return (
            <div>
                <Tag>tag 1</Tag>
                <Tag  closable onClose={this.log}>tag 2</Tag>
                <Tag closable onClose={this.preventDefault}>prevent</Tag>
            </div>
        )
    }
}

export default Detail;

