import React, { Component } from 'react';
import { Row, Col } from 'quant-ui';

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class Detail extends Component {

    render() {

        return (
            <div>
                <p>Align Top</p>
                <Row type="flex" justify="center" align="top">
                <Col style={{backgroundColor:'#4A90E2'}} span={4}><DemoBox value={100}>col-4</DemoBox></Col>
                <Col style={{backgroundColor:'lightblue'}}span={4}><DemoBox value={50}>col-4</DemoBox></Col>
                <Col style={{backgroundColor:'#4A90E2'}}span={4}><DemoBox value={120}>col-4</DemoBox></Col>
                <Col style={{backgroundColor:'lightblue'}} span={4}><DemoBox value={80}>col-4</DemoBox></Col>
                </Row>

                <p>Align Center</p>
                <Row type="flex" justify="space-around" align="middle">
                <Col style={{backgroundColor:'lightblue'}} span={4}><DemoBox value={100}>col-4</DemoBox></Col>
                <Col style={{backgroundColor:'#4A90E2'}}span={4}><DemoBox value={50}>col-4</DemoBox></Col>
                <Col style={{backgroundColor:'lightblue'}} span={4}><DemoBox value={120}>col-4</DemoBox></Col>
                <Col style={{backgroundColor:'#4A90E2'}}span={4}><DemoBox value={80}>col-4</DemoBox></Col>
                </Row>

                <p>Align Bottom</p>
                <Row type="flex" justify="space-between" align="bottom">
                <Col style={{backgroundColor:'#4A90E2'}}span={4}><DemoBox value={100}>col-4</DemoBox></Col>
                <Col style={{backgroundColor:'lightblue'}} span={4}><DemoBox value={50}>col-4</DemoBox></Col>
                <Col style={{backgroundColor:'#4A90E2'}}span={4}><DemoBox value={120}>col-4</DemoBox></Col>
                <Col style={{backgroundColor:'lightblue'}} span={4}><DemoBox value={80}>col-4</DemoBox></Col>
                </Row>
            </div>
        );
    }
}

export default Detail;
