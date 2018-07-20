import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
//基本使用
import Mention_basic from './mention_basic/Detail.js';
import Mention_basicCode from './mention_basic/code.js';
//向上展开
import Mention_spread_up from './mention_spread_up/Detail.js';
import Mention_spread_upCode from './mention_spread_up/code.js';
//异步加载
import Mention_async from './mention_async/Detail.js';
import Mention_asyncCode from './mention_async/code.js';
//自定义建议
import Mention_custom from './mention_custom/Detail.js';
import Mention_customCode from './mention_custom/code.js';
//头像
import Mention_icon from './mention_icon/Detail.js';
import Mention_iconCode from './mention_icon/code.js';
//受控模式
import Mention_controlled from './mention_controlled/Detail.js';
import Mention_controlledCode from './mention_controlled/code.js';
//配合form使用
import Mention_form from './mention_form/Detail.js';
import Mention_formCode from './mention_form/code.js';
//多行
import Mention_multi_line from './mention_multi_line/Detail.js';
import Mention_multi_lineCode from './mention_multi_line/code.js';
//建议渲染父节点
import Mention_applytTo_father from './mention_applytTo_father/Detail.js';
import Mention_applytTo_fatherCode from './mention_applytTo_father/code.js';
//无效和只读
import Mention_disabled_readOnly from './mention_disabled_readOnly/Detail.js';
import Mention_disabled_readOnlyCode from './mention_disabled_readOnly/code.js';
//自定义触发字符
import Mention_trigger_chars from './mention_trigger_chars/Detail.js';
import Mention_trigger_charsCode from './mention_trigger_chars/code.js';
import Code from '../../Code.js';
import Method from '../../METHOD.js';
import methodData from './method.js'
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
                    <TabPane tab="向上展开" key="2">
                        <Card >
                            <Mention_spread_up />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Mention_spread_upCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="异步加载" key="3">
                        <Card >
                            <Mention_async />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Mention_asyncCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义建议" key="4">
                        <Card >
                            <Mention_custom />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Mention_customCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="头像" key="5">
                        <Card >
                            <Mention_icon />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Mention_iconCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="受控模式" key="6">
                        <Card >
                            <Mention_controlled />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Mention_controlledCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="配合Form使用" key="7">
                        <Card >
                            <Mention_form />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Mention_formCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="多行" key="8">
                        <Card >
                            <Mention_multi_line />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Mention_multi_lineCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="建议渲染父节点" key="9">
                        <Card >
                            <Mention_applytTo_father />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Mention_applytTo_fatherCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="无效和只读" key="10">
                        <Card >
                            <Mention_disabled_readOnly />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Mention_disabled_readOnlyCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义触发字符" key="11">
                        <Card >
                            <Mention_trigger_chars />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Mention_trigger_charsCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="12">
                        <Api data={data} />
                    </TabPane>
                    <TabPane tab="方法" key="13">
                        <Method data={methodData} />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default App;
