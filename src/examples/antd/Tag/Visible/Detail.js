import React, { Component } from 'react';
import { Tag, Button } from 'quant-ui';


class Detail extends Component {
    state = {
        visible: true,
    }
    render() {
        return (
            <div>
                <Tag
                    closable
                    visible={this.state.visible}
                    onClose={() => this.setState({ visible: false })}
                >
                    Movies
                </Tag>
                <br /><br />
                <Button
                    size="small"
                    onClick={() => this.setState({ visible: !this.state.visible })}
                >
                    Toggle
        </Button>
            </div>
        )
    }
}

export default Detail;

