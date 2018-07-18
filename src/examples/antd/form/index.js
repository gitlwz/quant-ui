import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
//水平登录栏
import Form_level_login from './form_level_login/Detail.js'
import Form_level_loginCode from './form_level_login/code.js'
//登录框
import Form_login from './form_login/Detail.js'
import Form_loginCode from './form_login/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Icon图标</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="水平登录栏" key="1">
                        <Card >
                            <Form_level_login />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Form_level_loginCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="登录框" key="2">
                        <Card >
                            <Form_login />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Form_loginCode} />
                        </div>
                    </TabPane>
                </Tabs>

            </div>
                );
            }
        }
        
        export default App;
