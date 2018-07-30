import React, { Component } from 'react';
import { Row, Col } from 'quant-ui';

class Detail extends Component {

    render() {

        return (
            <div>
                <Row>
                <Col style={{backgroundColor:'#4A90E2'}} span={18} push={6}>col-18 col-push-6</Col>
                <Col style={{backgroundColor:'lightblue'}} span={6} pull={18}>col-6 col-pull-18</Col>
                </Row>
            </div>
        );
    }
}

export default Detail;
