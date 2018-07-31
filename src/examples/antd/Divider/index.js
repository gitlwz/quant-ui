import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

import Horizontal from './Horizontal/Detail'
import HorizontalCode from './Horizontal/code'
import Vertical from './Vertical/Detail'
import VerticalCode from './Vertical/code'
import Position from './PositionOfTitle/Detail'
import PositionCode from './PositionOfTitle/code'

import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Divider分割线</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="水平分割线" key="1">
                        <Card >
                            <Horizontal />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={HorizontalCode} />
                        </div>
                    </TabPane>
                    
                    <TabPane tab="竖直分割线" key="2">
                        <Card >
                            <Vertical />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={VerticalCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="标题位置" key="3">
                        <Card >
                            <Position />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={PositionCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="16">
                        <Api data={data} />
                    </TabPane>
                </Tabs>

            </div>
        );
    }
}

export default App;
