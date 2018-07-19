import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
//基本使用
import Input_basic from './input_basic/Detail.js'
import Input_basicCode from './input_basic/code.js'
//三种大小
import Input_size from './input_size/Detail.js'
import Input_sizeCode from './input_size/code.js'
//  前置后置标签
import Input_label from './input_label/Detail.js'
import Input_labelCode from './input_label/code.js'
//搜索框
import Input_search from './input_search/Detail.js'
import Input_searchCode from './input_search/code.js'
//输入框组合
import Input_group from './input_group/Detail.js'
import Input_groupCode from './input_group/code.js'
//文本域
import Input_textarea from './input_textarea/Detail.js'
import Input_textareaCode from './input_textarea/code.js'
//适应文本高度的文本域
import Input_auto_textarea from './input_auto_textarea/Detail.js'
import Input_auto_textareaCode from './input_auto_textarea/code.js'
//输入时格式化展示
import Input_format_show from './input_format_show/Detail.js'
import Input_format_showCode from './input_format_show/code.js'
//前缀和后缀
import Input_affix from './input_affix/Detail.js'
import Input_affixCode from './input_affix/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Input 输入框</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本使用" key="1">
                        <Card >
                            <Input_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Input_basicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="三种大小" key="2">
                        <Card >
                            <Input_size />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Input_sizeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="前置/后置标签" key="3">
                        <Card >
                            <Input_label />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Input_labelCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="搜索框" key="4">
                        <Card >
                            <Input_search />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Input_searchCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="输入框组合" key="5">
                        <Card >
                            <Input_group />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Input_groupCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="文本域" key="6">
                        <Card >
                            <Input_textarea />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Input_textareaCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="适应文本高度的文本域" key="7">
                        <Card >
                            <Input_auto_textarea />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Input_auto_textareaCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="输入时格式化展示" key="8">
                        <Card >
                            <Input_format_show />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Input_format_showCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="前缀和后缀" key="9">
                        <Card >
                            <Input_affix />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Input_affixCode} />
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
