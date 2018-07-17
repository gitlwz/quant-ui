import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

import NotifyIcon from './notifyIcon/Detail.js';
import NotifyIconCode from './notifyIcon/code.js';

import ToolbarCustomButtons from './toolbarCustomButtons/Detail.js';
import ToolbarCustomButtonsCode from './toolbarCustomButtons/code.js';

import InDropdown from './inDropdown/Detail.js';
import InDropdownCode from './inDropdown/code.js';


import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>富文本</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本用法" key="1">
                        <Card >
                            <NotifyIcon />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={NotifyIconCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="添加新选项" key="2">
                        <Card >
                            <ToolbarCustomButtons />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ToolbarCustomButtonsCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="工具栏下拉" key="3">
                        <Card >
                            <InDropdown />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={InDropdownCode} />
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
