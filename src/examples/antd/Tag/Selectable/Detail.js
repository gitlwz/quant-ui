import React, { Component } from 'react';
import { Tag } from 'quant-ui';

const { CheckableTag } = Tag;

class MyTag extends Component {
    state = { checked: true };

    handleChange = (checked) => {
        this.setState({ checked });
    }
    render() {
        return (
            <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />
        )
    }
}

class Detail extends Component {
    render() {
        return (
            <div>
                <MyTag>Tag 1</MyTag>
                <MyTag>Tag 2</MyTag>
                <MyTag>Tag 3</MyTag>
            </div>
        )
    }
}

export default Detail;

