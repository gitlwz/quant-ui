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
//注册新用户
import Form_signin from './form_signin/Detail.js'
import Form_signinCode from './form_signin/code.js'
//高级搜索
import Form_search from './form_search/Detail.js'
import Form_searchCode from './form_search/code.js'
//弹出层中的新建表单
import Form_TipsWindown from './form_TipsWindown/Detail.js'
import Form_TipsWindownCode from './form_TipsWindown/code.js'
//动态增减表单项
import Formitems_addsub from './formitems_addsub/Detail.js'
import Formitems_addsubCode from './formitems_addsub/code.js'
//时间类控件
import Form_time from './form_time/Detail.js'
import Form_timeCode from './form_time/code.js'
//自定义表单控件
import Form_custom from './form_custom/Detail.js'
import Form_customCode from './form_custom/code.js'
//表单数据存储于上层
import Form_datasava_super from './form_datasava_super/Detail.js'
import Form_datasava_superCode from './form_datasava_super/code.js'
//自行处理表单数据
import Form_handledata from './form_handledata/Detail.js'
import Form_handledataCode from './form_handledata/code.js'
//自定义校验
import Form_checkout from './form_checkout/Detail.js'
import Form_checkoutCode from './form_checkout/code.js'
//表单联动
import Form_linkage from './form_linkage/Detail.js'
import Form_linkageCode from './form_linkage/code.js'
//表单布局
import Form_layout from './form_layout/Detail.js'
import Form_layoutCode from './form_layout/code.js'
//动态校验规则
import Form_dynamic_check from './form_dynamic_check/Detail.js'
import Form_dynamic_checkCode from './form_dynamic_check/code.js'
//校验其他组件
import Form_check_others from './form_check_others/Detail.js'
import Form_check_othersCode from './form_check_others/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Form表单</h1>
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
                    <TabPane tab="注册新用户" key="3">
                        <Card >
                            <Form_signin />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Form_signinCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="高级搜索" key="4">
                        <Card >
                            <Form_search />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Form_searchCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="弹出层中的新建表单" key="5">
                        <Card >
                            <Form_TipsWindown />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Form_TipsWindownCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="动态增减表单项" key="6">
                        <Card >
                            <Formitems_addsub />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Formitems_addsubCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="时间类控件" key="7">
                        <Card >
                            <Form_time />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Form_timeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义表单控件" key="8">
                        <Card >
                            <Form_custom />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Form_customCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="表单数据存储于上层组件" key="9">
                        <Card >
                            <Form_datasava_super />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Form_datasava_superCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自行处理表单数据" key="10">
                        <Card >
                            <Form_handledata />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Form_handledataCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义校验" key="11">
                        <Card >
                            <Form_checkout />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Form_checkoutCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="表单联动 " key="12">
                        <Card >
                            <Form_linkage />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Form_linkageCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="表单布局" key="13">
                        <Card >
                            <Form_layout />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Form_layoutCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="动态校验规则" key="14">
                        <Card >
                            <Form_dynamic_check />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Form_dynamic_checkCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="校验其他组件" key="15">
                        <Card >
                            <Form_check_others />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Form_check_othersCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="16">
                        <Api data={data}/>
                    </TabPane>
                </Tabs>

            </div>
                );
            }
        }
        
        export default App;
