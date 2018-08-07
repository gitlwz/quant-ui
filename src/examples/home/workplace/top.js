import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Icon, Avatar, Row, Col, Divider, NumberInfo, utils } from 'quant-ui';
import './style.less';
const { currency } = utils;
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item>
                        <Link to="/home">
                            首页
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        工作台
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span={4}>
                            <Avatar className="Avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </Col>
                        <Col span={9} xs={24} sm={20} md={16} lg={9}>
                            <h3><span>早安，曲丽丽，祝你开心每一天！</span></h3>
                            <br />
                            <span>交互专家 | 蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</span>
                        </Col>
                        <Col span={3} align="middle" >
                            <NumberInfo
                                subTitle={<span>项目数</span>}
                                total={56}
                            />
                        </Col>
                        <Col span={1} align="middle">
                            <Divider type="vertical" style={{ height: '40px' }} />
                        </Col>
                        <Col span={3} align="middle">
                            <NumberInfo
                                subTitle={<span>团队内排名</span>}
                                total={'8 / 26'}
                            />
                        </Col>
                        <Col span={1} align="middle">
                            <Divider type="vertical" style={{ height: '40px' }} />
                        </Col>
                        <Col span={3} align="middle">
                            <NumberInfo
                                subTitle={<span>项目访问</span>}
                                total={2223}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default App;