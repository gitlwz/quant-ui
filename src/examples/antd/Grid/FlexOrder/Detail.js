import React, { Component } from 'react';
import { Row, Col } from 'quant-ui';

class Detail extends Component {

    render() {

        return (
            <div>
                <Row type="flex">
                <Col style={{backgroundColor:'lightblue'}}span={6} order={4}>1 col-order-4</Col>
                <Col style={{backgroundColor:'#4A90E2'}}span={6} order={3}>2 col-order-3</Col>
                <Col style={{backgroundColor:'lightblue'}} span={6} order={2}>3 col-order-2</Col>
                <Col style={{backgroundColor:'#4A90E2'}}span={6} order={1}>4 col-order-1</Col>
                </Row>
            </div>
        );
    }
}

export default Detail;
