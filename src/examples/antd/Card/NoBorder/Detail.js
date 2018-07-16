import React, { Component } from 'react';
import { Card } from 'quant-ui';


class Detail extends Component {
    render() {
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title="Card title" bordered={false} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        );
    }
}
export default Detail;