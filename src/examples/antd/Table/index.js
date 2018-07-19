import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';

import Basic from './Basic/Detail'
import BasicCode from './Basic/code'
//引入jsx风格的api
import JsxStyle from './JsxStyle/Detail'
import JsxStyleCode from './JsxStyle/code'
//可选择
import Selectable from './Selectable/Detail'
import SelectableCode from './Selectable/code'


const TabPane = Tabs.TabPane;

class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Table 表格</h1>
                <Tabs tabPosition={'right'}>
                    <TabPane tab="基础" key='1'>
                        <Card>
                            <Basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="Jsx风格的API" key='2'>
                        <Card>
                            <JsxStyle />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={JsxStyleCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="可选择" key='3'>
                        <Card>
                            <Selectable />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={SelectableCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="api" key='11'>
                        <Api data={data} />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default App;