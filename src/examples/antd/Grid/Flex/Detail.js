import React, { Component } from 'react';
import { Row, Col } from 'quant-ui';

class Detail extends Component {

    render() {

        return (
            <div>
                <p>sub-element align left</p>
                <Row type="flex" justify="start" style={{margin:10}}>
                <Col style={{backgroundColor:'lightblue'}} span={4}>col-4</Col>
                <Col style={{backgroundColor:'#00A0E9'}}span={4}>col-4</Col>
                <Col style={{backgroundColor:'lightblue'}} span={4}>col-4</Col>
                <Col style={{backgroundColor:'#00A0E9'}}span={4}>col-4</Col>
                </Row>

                <p>sub-element align center</p>
                <Row type="flex" justify="center" style={{margin:10}}>
                <Col style={{backgroundColor:'#00A0E9'}}span={4}>col-4</Col>
                <Col style={{backgroundColor:'lightblue'}} span={4}>col-4</Col>
                <Col style={{backgroundColor:'#00A0E9'}}span={4}>col-4</Col>
                <Col style={{backgroundColor:'lightblue'}} span={4}>col-4</Col>
                </Row>

                <p>sub-element align right</p>
                <Row type="flex" justify="end" style={{margin:10}}>
                <Col style={{backgroundColor:'lightblue'}} span={4}>col-4</Col>
                <Col style={{backgroundColor:'#00A0E9'}}span={4}>col-4</Col>
                <Col style={{backgroundColor:'lightblue'}} span={4}>col-4</Col>
                <Col style={{backgroundColor:'#00A0E9'}}span={4}>col-4</Col>
                </Row>

                <p>sub-element monospaced arrangement</p>
                <Row type="flex" justify="space-between" style={{margin:10}}>
                <Col style={{backgroundColor:'#00A0E9'}}span={4}>col-4</Col>
                <Col style={{backgroundColor:'lightblue'}} span={4}>col-4</Col>
                <Col style={{backgroundColor:'#00A0E9'}}span={4}>col-4</Col>
                <Col style={{backgroundColor:'lightblue'}} span={4}>col-4</Col>
                </Row>

                <p>sub-element align full</p>
                <Row type="flex" justify="space-around" style={{margin:10}}>
                <Col style={{backgroundColor:'lightblue'}}span={4}>col-4</Col>
                <Col style={{backgroundColor:'#00A0E9'}}span={4}>col-4</Col>
                <Col style={{backgroundColor:'lightblue'}}span={4}>col-4</Col>
                <Col style={{backgroundColor:'#00A0E9'}}span={4}>col-4</Col>
                </Row>
            </div>
        );
    }
}

export default Detail;
