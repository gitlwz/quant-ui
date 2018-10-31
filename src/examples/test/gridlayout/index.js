import React, { Component } from 'react';
import { Card, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

import Basic1 from './Basic1/Detail.js';
import Basic1Code from './Basic1/code.js';

import Basic2 from './Basic2/Detail.js';
import Basic2Code from './Basic2/code.js';

import Basic3 from './Basic3/Detail.js';
import Basic3Code from './Basic3/code.js';

import Basic4 from './Basic4/Detail.js';
import Basic4Code from './Basic4/code.js';

import Basic5 from './Basic5/Detail.js';
import Basic5Code from './Basic5/code.js';

import Basic6 from './Basic6/Detail.js';
import Basic6Code from './Basic6/code.js';

import Basic7 from './Basic7/Detail.js';
import Basic7Code from './Basic7/code.js';

import Basic8 from './Basic8/Detail.js';
import Basic8Code from './Basic8/code.js';

import Basic9 from './Basic9/Detail.js';
import Basic9Code from './Basic9/code.js';

import Basic10 from './Basic10/Detail.js';
import Basic10Code from './Basic10/code.js';

import Basic11 from './Basic11/Detail.js';
import Basic11Code from './Basic11/code.js';

import Basic12 from './Basic12/Detail.js';
import Basic12Code from './Basic12/code.js';

import Basic13 from './Basic13/Detail.js';
import Basic13Code from './Basic13/code.js';

import Basic14 from './Basic14/Detail.js';
import Basic14Code from './Basic14/code.js';

import Basic15 from './Basic15/Detail.js';
import Basic15Code from './Basic15/code.js';
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>AvatarList用户头像列表</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Basic1 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic1Code} />
                        </div>
                    </TabPane>
                    <TabPane tab="橱窗" key="2">
                        <Card >
                            <Basic2 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic2Code} />
                        </div>
                    </TabPane>
                    <TabPane tab="基本" key="3">
                        <Card >
                            <Basic3 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic3Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="无拖动/调整大小（仅限布局）" key="4">
                        <Card >
                            <Basic4 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic4Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="凌乱的布局自动更正" key="5">
                        <Card >
                            <Basic5 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic5Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="子项布局定义" key="6">
                        <Card >
                            <Basic6 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic6Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="静态元素" key="7">
                        <Card >
                            <Basic7 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic7Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="添加/删除元素" key="8">
                        <Card >
                            <Basic8 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic8Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="将布局保存到LocalStorage" key="9">
                        <Card >
                            <Basic9 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic9Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="将响应布局保存到LocalStorage" key="10">
                        <Card >
                            <Basic10 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic10Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="最小和最大宽度/高度" key="11">
                        <Card >
                            <Basic11 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic11Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="动态最小和最大宽度/高度" key="12">
                        <Card >
                            <Basic12 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic12Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="无垂直压实（自由移动）" key="13">
                        <Card >
                            <Basic13 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic13Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="防止碰撞" key="14">
                        <Card >
                            <Basic14 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic14Code} />
                        </div>
                    </TabPane>

                    <TabPane tab="工具箱" key="15">
                        <Card >
                            <Basic15 />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Basic15Code} />
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
