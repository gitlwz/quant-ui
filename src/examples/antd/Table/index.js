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
//选择和操作
import SelectAndOperate from './SelectAndOperate/Detail'
import SelectAndOperateCode from './SelectAndOperate/code'
//自定义选择
import CustomSelect from './CustomSelect/Detail'
import CustomeSelectCode from './CustomSelect/code'


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
                    <TabPane tab="选择和操作" key='4'>
                        <Card>
                            <SelectAndOperate />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={SelectAndOperateCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义选择" key='5'>
                        <Card>
                            <CustomSelect />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={CustomeSelectCode} />
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