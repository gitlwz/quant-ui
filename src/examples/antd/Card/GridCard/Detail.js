import React, { Component } from 'react';
import { Card } from 'quant-ui';

const gridStyle = {
    width: '30%',
    textAlign: 'center',
};

class Detail extends Component {
    state = {
        loading: true,
    }
    handleClick = () => {
        this.setState({ loading: !this.state.loading });
    }
    render() {
        return (
            <Card title="Card Title">
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
            </Card>
        );
    }
}
export default Detail;