import React, { Component } from 'react';
import { Row, Col } from 'quant-ui';

class Detail extends Component {

    render() {

        return (
            <div>
                <Row >
                <Col style={{backgroundColor:'#4A90E2'}} span={8}>col-8</Col>
                <Col style={{backgroundColor:'#4A90E2'}} span={8} offset={8}>col-8</Col>
                </Row>
                <Row style={{margin:10}}>
                <Col style={{backgroundColor:'#4A90E2'}} span={6} offset={6}>col-6 col-offset-6</Col>
                <Col style={{backgroundColor:'#4A90E2'}} span={6} offset={6}>col-6 col-offset-6</Col>
                </Row>
                <Row>
                <Col style={{backgroundColor:'#4A90E2'}} span={12} offset={6}>col-12 col-offset-6</Col>
                </Row>
            </div>
        );
    }
}

export default Detail;
