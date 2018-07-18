import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
//基本
import Cascaderbasic from './cascaderbasic/Detail.js'
import CascaderbasicCode from './cascaderbasic/code.js'
//默认值
import Cascdefault from './cascdefault/Detail.js'
import CascdefaultCode from './cascdefault/code.js'
//自定义显示
import CustomizeDis from './customizeDis/Detail.js'
import CustomizeDisCode from './customizeDis/code.js'
//移入展开
import CascshiftIn from './cascshiftIn/Detail.js'
import CascshiftInCode from './cascshiftIn/code.js'
//禁止选项
import Cascforbid from './cascforbid/Detail.js'
import CascforbidCode from './cascforbid/code.js'
//选择即改变
import Choice_change from './choice_change/Detail.js'
import Choice_changeCode from './choice_change/code.js'
//大小
import Cascadersize from './cascadersize/Detail.js'
import CascadersizeCode from './cascadersize/code.js'
//自定义已选项
import Cascadercustom_selected from './cascadercustom_selected/Detail.js'
import Cascadercustom_selectedCode from './cascadercustom_selected/code.js'
//搜索
import Cascader_search from './cascader_search/Detail.js'
import Cascader_searchCode from './cascader_search/code.js'
//动态加载选项
import Cascader_load from './cascader_load/Detail.js'
import Cascader_loadCode from './cascader_load/code.js'
//自定义字段名
import Cascadercustom_fieldName from './cascadercustom_fieldName/Detail.js'
import Cascadercustom_fieldNameCode from './cascadercustom_fieldName/code.js'

import Code from '../../Code.js';
import { width } from 'window-size';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Cascader级联选择</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Cascaderbasic />
                        </Card>
                        <div style={{ marginTop: "30px"}}>
                            <Code data={CascaderbasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="默认值" key="2">
                        <Card >
                            <Cascdefault />
                        </Card>
                        <div style={{ marginTop: "30px"}}>
                            <Code data={CascdefaultCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="可以自定义显示" key="3">
                        <Card >
                            <CustomizeDis />
                        </Card>
                        <div style={{ marginTop: "30px"}}>
                            <Code data={CustomizeDisCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="移入展开" key="4">
                        <Card >
                            <CascshiftIn />
                        </Card>
                        <div style={{ marginTop: "30px"}}>
                            <Code data={CascshiftInCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="禁止选项" key="5">
                        <Card >
                            <Cascforbid />
                        </Card>
                        <div style={{ marginTop: "30px"}}>
                            <Code data={CascforbidCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="选择即改变" key="6">
                        <Card >
                            <Choice_change />
                        </Card>
                        <div style={{ marginTop: "30px"}}>
                            <Code data={Choice_changeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="大小" key="7">
                        <Card >
                            <Cascadersize />
                        </Card>
                        <div style={{ marginTop: "30px"}}>
                            <Code data={CascadersizeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义已选项" key="8">
                        <Card >
                            <Cascadercustom_selected />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Cascadercustom_selectedCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="搜索" key="9">
                        <Card >
                            <Cascader_search />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Cascader_searchCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="动态加载选项" key="10">
                        <Card >
                            <Cascader_load />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Cascader_loadCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义字段名" key="11">
                        <Card >
                            <Cascadercustom_fieldName />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Cascadercustom_fieldNameCode} />
                        </div>
                    </TabPane>
                </Tabs>

            </div>
        );
    }
}

export default App;
