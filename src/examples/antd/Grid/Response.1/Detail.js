import React, { Component } from 'react';
import { Row, Col } from 'quant-ui';

class Detail extends Component {

    render() {

        return (
            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{backgroundColor:'#4A90E2'}}>Col</Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{backgroundColor:'lightblue'}}>Col</Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{backgroundColor:'#4A90E2'}}>Col</Col>
            </Row>
                          
        );
    }
}

export default Detail;
