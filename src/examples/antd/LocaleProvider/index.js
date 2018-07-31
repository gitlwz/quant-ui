import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

import Locale from './Locale/Detail'
import LocaleCode from './Locale/code'
import AllComponents from './AllComponents/Detail'
import AllComponentsCode from './AllComponents/code'

import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>LocaleProvider国际化</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="国际化" key="1">
                        <Card >
                            <Locale />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={LocaleCode} />
                        </div>
                    </TabPane>
                    
                    <TabPane tab="自定义样式" key="2">
                        <Card >
                            <AllComponents />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AllComponentsCode} />
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
