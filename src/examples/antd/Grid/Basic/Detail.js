import React, { Component } from 'react';
import { Row, Col } from 'quant-ui';

class Detail extends Component {

    render() {

        return (
            <div>
                <Row style={{backgroundColor:'lightblue', margin:10}}>
                    <Col style={{backgroundColor:'#4A90E2'}}span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                <Row style={{backgroundColor:'lightblue', margin:10}}>
                    <Col span={8}>col-8</Col>
                    <Col style={{backgroundColor:'#4A90E2'}} span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
                <Row style={{backgroundColor:'lightblue', margin:10}}>
                    <Col span={6}>col-6</Col>
                    <Col style={{backgroundColor:'#4A90E2'}} span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col style={{backgroundColor:'#4A90E2'}} span={6}>col-6</Col>
                </Row>
            </div>
        );
    }
}

export default Detail;
