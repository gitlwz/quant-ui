import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

import Buttontype from './Buttontype/Detail.js';
import ButtontypeCode from './Buttontype/code.js';

import IconButton from './IconButton/Detail.js';
import IconButtonCode from './IconButton/code.js';

import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>button按钮组件</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="按钮类型" key="1">
                        <Card >
                            <Buttontype />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ButtontypeCode} />
                        </div>
                    </TabPane>

                    <TabPane tab="图标尺寸" key="2">
                        <Card >
                            <IconButton />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={IconButtonCode} />
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
