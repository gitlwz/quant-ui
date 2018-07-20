import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
//基本
import Rate_basic from './rate_basic/Detail.js'
import Rate_basicCode from './rate_basic/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Rate 评分</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Rate_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Rate_basicCode} />
                        </div>
                    </TabPane>
                </Tabs>

            </div>
        );
    }
}

export default App;
