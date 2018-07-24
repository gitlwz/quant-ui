import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

//基本
import Slider_basic from './slider_basic/Detail.js'
import Slider_basicCode from './slider_basic/code.js'
//带有输入框的滑块
import Slider_input from './slider_input/Detail.js'
import Slider_inputCode from './slider_input/code.js'
//带icon的滑块
import Slider_icon from './slider_icon/Detail.js'
import Slider_iconCode from './slider_icon/code.js'
//自定义提示
import Slider_prompt from './slider_prompt/Detail.js'
import Slider_promptCode from './slider_prompt/code.js'
//事件
import Slider_events from './slider_events/Detail.js'
import Slider_eventsCode from './slider_events/code.js'
//带标签的滑块
import Slider_label from './slider_label/Detail.js'
import Slider_labelCode from './slider_label/code.js'
//垂直
import Slider_vertical from './slider_vertical/Detail.js'
import Slider_verticalCode from './slider_vertical/code.js'
import Code from '../../Code.js';
import Method from '../../METHOD.js';
import methodData from './method.js'
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Slider滑动输入条</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本使用" key="1">
                        <Card >
                            <Slider_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Slider_basicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="带有输入框的滑块" key="2">
                        <Card >
                            <Slider_input />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Slider_inputCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="带icon的滑块" key="3">
                        <Card >
                            <Slider_icon />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Slider_iconCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义提示" key="4">
                        <Card >
                            <Slider_prompt />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Slider_promptCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="事件" key="5">
                        <Card >
                            <Slider_events />
                            <br />
                            <h3>
                                当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。
                                <br />
                                在 onmouseup 时，会触发 onAfterChange 事件，并把当前值作为参数传入。
                            </h3>
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Slider_eventsCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="带标签的滑块" key="6">
                        <Card >
                            <Slider_label />
                            <br />
                            <h3>
                                <p>
                                    使用 <code>marks</code> 属性标注分段式滑块，使用 <code>value</code> / <code>defaultValue</code> 指定滑块位置。当 <code>included=false</code> 时，表明不同标记间为并列关系。当 <code>step=null</code> 时，Slider 的可选值仅有 <code>marks</code> 标出来的部分。
                                </p>
                            </h3>
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Slider_labelCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="垂直" key="7">
                        <Card >
                            <Slider_vertical />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Slider_verticalCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="8">
                        <Api data={data} />
                    </TabPane>
                    <TabPane tab="方法" key="9">
                        <Method data={methodData} />
                    </TabPane>
                </Tabs>

            </div>
        );
    }
}

export default App;
