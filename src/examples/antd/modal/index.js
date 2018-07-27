import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

//基本
import Modal_basic from './modal_basic/Detail.js'
import Modal_basiCode from './modal_basic/code.js'
//异步关闭
import Modal_asyn from './modal_asyn/Detail.js'
import Modal_asynCode from './modal_asyn/code.js'
//自定义页脚
import Modal_footer from './modal_footer/Detail.js'
import Modal_footerCode from './modal_footer/code.js'
//确认对话框
import Modal_confirm from './modal_confirm/Detail.js'
import Modal_confirmCode from './modal_confirm/code.js'
//确认对话框1   延时
import Modal_confirm_1 from './modal_confirm_1/Detail.js'
import Modal_confirm_1Code from './modal_confirm_1/code.js'
//信息提示
import Modal_info from './modal_info/Detail.js'
import Modal_infoCode from './modal_info/code.js'
//国际化
import Modal_localized from './modal_localized/Detail.js'
import Modal_localizedCode from './modal_localized/code.js'
//手动移除
import Modal_manual from './modal_manual/Detail.js'
import Modal_manualCode from './modal_manual/code.js'
//自定义位置
import Modal_position from './modal_position/Detail.js'
import Modal_positionCode from './modal_position/code.js'
//自定义页脚按钮属性
import Modal_footer_auto from './modal_footer_auto/Detail.js'
import Modal_footer_autoCode from './modal_footer_auto/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Modal对话框</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Modal_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Modal_basiCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="异步关闭" key="2">
                        <Card >
                            <Modal_asyn />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Modal_asynCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义页脚" key="3">
                        <Card >
                            <Modal_footer />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Modal_footerCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="确认对话框" key="4">
                        <Card >
                            <Modal_confirm />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Modal_confirmCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="确认对话框1" key="5">
                        <Card >
                            <Modal_confirm_1 /><br />
                            <p>onCancel/onOk 返回 promise 可以延迟关闭</p>
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Modal_confirm_1Code} />
                        </div>
                    </TabPane>
                    <TabPane tab="信息提示" key="6">
                        <Card >
                            <Modal_info />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Modal_infoCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="国际化" key="7">
                        <Card >
                            <Modal_localized />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Modal_localizedCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="手动移除" key="8">
                        <Card >
                            <Modal_manual />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Modal_manualCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义位置" key="9">
                        <Card >
                            <Modal_position />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Modal_positionCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义页脚按钮属性" key="10">
                        <Card >
                            <Modal_footer_auto />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Modal_footer_autoCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="11">
                        <Api data={data} />
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
