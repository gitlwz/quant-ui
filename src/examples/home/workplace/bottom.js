import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Icon, Avatar, Row, Col, Divider, NumberInfo, utils, Card, List } from 'quant-ui';
import './style.less';
import Echart from './echart.js';
import Quickstart from './quickstart.js';
import Team from './team.js';
const { currency } = utils;
const gridStyle = {
    height: '140px',
    position: 'relative',
};
const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Row type="flex" gutter={16} justify="center" align="top">
                    <Col span={16}  xs={24} sm={20} md={18} lg={16}>
                        <Card title="进行中的项目" extra={<a href="#">更多</a>}>
                            <Card.Grid style={gridStyle}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /><a href="">曲丽丽</a>
                                <br />
                                <span>那是一种内在的东西，他们到达不了，也无法触及的</span>
                                <div className="timepoint">几秒前</div>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /><a href="">曲丽丽</a>
                                <br />
                                <span>那是一种内在的东西，他们到达不了，也无法触及的</span>
                                <div className="timepoint">几秒前</div>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /><a href="">曲丽丽</a>
                                <br />
                                <span>那是一种内在的东西，他们到达不了，也无法触及的</span>
                                <div className="timepoint">几秒前</div>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /><a href="">曲丽丽</a>
                                <br />
                                <span>那是一种内在的东西，他们到达不了，也无法触及的</span>
                                <div className="timepoint">几秒前</div>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /><a href="">曲丽丽</a>
                                <br />
                                <span>那是一种内在的东西，他们到达不了，也无法触及的</span>
                                <div className="timepoint">几秒前</div>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /><a href="">曲丽丽</a>
                                <br />
                                <span>那是一种内在的东西，他们到达不了，也无法触及的</span>
                                <div className="timepoint">几秒前</div>
                            </Card.Grid>
                        </Card>
                        <br />
                        <Card title='动态'>
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={<a href="">{item.title}</a>}
                                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                        />
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                    <Col span={8} xs={24} sm={20} md={18} lg={8}>

                        <Card title='快速开始 / 便捷导航' >
                            <Quickstart />
                        </Card>
                        <br />
                        <Card title='xx指数'>
                            <Echart />
                        </Card>
                        <br />
                        <Card title='团队'>
                            <Team />
                        </Card>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;