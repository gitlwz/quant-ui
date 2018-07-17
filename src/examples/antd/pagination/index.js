import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
//基本
import Paginationbasic from './paginationbasic/Detail.js'
import PaginationbasicCode from './paginationbasic/code.js'
//更多
import Morepage from './morepage/Detail.js'
import MorepageCode from './morepage/code.js'
//改变
import Changepage from './changepage/Detail.js'
import ChangepageCode from './changepage/code.js'
//跳转
import Pageskip from './pageskip/Detail.js'
import PageskipCode from './pageskip/code.js'
//迷你
import Pagemini from './pagemini/Detail.js'
import PageminiCode from './pagemini/code.js'
//简洁
import Plainpage from './plainpage/Detail.js'
import PlainpageCode from './plainpage/code.js'
//受控
import Pagcontrolled from './pagcontrolled/Detail.js'
import PagcontrolledCode from './pagcontrolled/code.js'
//总数
import Sumpagination from './sumpagination/Detail.js'
import SumpaginationCode from './sumpagination/code.js'
//上一步和下一步
import UpAnddown from './upAnddown/Detail.js'
import UpAnddownCode from './upAnddown/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Pagination分页</h1>

                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                            <Card >
                                <Paginationbasic/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={PaginationbasicCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="更多" key="2">
                            <Card >
                                <Morepage/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={MorepageCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="改变" key="3">
                            <Card >
                                <Changepage/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={ChangepageCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="跳转" key="4">
                            <Card >
                                <Pageskip/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={PageskipCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="迷你" key="5">
                            <Card >
                                <Pagemini/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={PageminiCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="简洁" key="6">
                            <Card >
                                <Plainpage/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={PlainpageCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="受控" key="7">
                            <Card >
                                <Pagcontrolled/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={PagcontrolledCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="总数" key="8">
                            <Card >
                                <Sumpagination/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={SumpaginationCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="上一步和下一步" key="9">
                            <Card >
                                <UpAnddown/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={UpAnddownCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="参数api" key="10">
                        <Api data={data} />
                    </TabPane>
                </Tabs>

            </div>
        );
    }
}

export default App;
