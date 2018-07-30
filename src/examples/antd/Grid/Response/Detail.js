import React, { Component } from 'react';
import { Row, Col } from 'quant-ui';

class Detail extends Component {

    render() {

        return (
           
            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{backgroundColor:'#4A90E2'}}>Col</Col>
                <Col xs={20} sm={16} md={12} lg={8} xl={4} style={{backgroundColor:'lightblue'}}>Col</Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{backgroundColor:'#4A90E2'}} >Col</Col>
            </Row>
               
        );
    }
}

export default Detail;
