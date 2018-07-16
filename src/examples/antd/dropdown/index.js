import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
//基本下拉框
import Dropdownbasic from './dropdownbasic/Detail.js';
import DropdownbasicCode from './dropdownbasic/code.js';

import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Dropdown下拉菜单</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Dropdownbasic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DropdownbasicCode} />
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
