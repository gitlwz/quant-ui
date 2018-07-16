import React, { Component } from 'react';
import { Card } from 'quant-ui';

const { Meta } = Card;

class Detail extends Component {
    render() {
        return (
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="EasonChan" src="https://www.go.asia/wp-content/uploads/2012/07/eason-chan.jpg" />}
            >
                <Meta
                    title="Eason Chan"
                    description="www.sina.com.cn"
                />
            </Card>
        );
    }
}
export default Detail;