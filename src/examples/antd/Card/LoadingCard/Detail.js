import React, { Component } from 'react';
import { Card, Button } from 'quant-ui';


class Detail extends Component {
    state = {
        loading: true,
    }
    handleClick = () => {
        this.setState({ loading: !this.state.loading });
    }
    render() {
        return (
            <div>
                <Card  loading={this.state.loading} title="Card title" style={{width:400}}>
                    Whatever content
                </Card>
                <Button onClick={this.handleClick} style={{ marginTop: 16 }}>Toggle loading</Button>
            </div>
        );
    }
}
export default Detail;