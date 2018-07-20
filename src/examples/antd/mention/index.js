import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
//基本使用
import Mention_basic from './mention_basic/Detail.js';
import Mention_basicCode from './mention_basic/code.js';
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Mention提及</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本使用" key="1">
                        <Card >
                            <Mention_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Mention_basicCode} />
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default App;
