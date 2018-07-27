import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import data_1 from './api_1.js';


//普通提示
import Message_normal from './message_normal/Detail.js'
import Message_normalCode from './message_normal/code.js'
//其他提示类型
import Message_others from './message_others/Detail.js'
import Message_othersCode from './message_others/code.js'
//修改延时
import Message_duration from './message_duration/Detail.js'
import Message_durationCode from './message_duration/code.js'
//加载中
import Message_loading from './message_loading/Detail.js'
import Message_loadingCode from './message_loading/code.js'
//Promise 接口
import Message_promise from './message_promise/Detail.js'
import Message_promiseCode from './message_promise/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Message全局提示</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="普通提示" key="1">
                        <Card >
                            <Message_normal />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Message_normalCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="其他提示类型" key="2">
                        <Card >
                            <Message_others />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Message_othersCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="修改延时" key="3">
                        <Card >
                            <Message_duration />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Message_durationCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="加载中" key="4">
                        <Card >
                            <Message_loading />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Message_loadingCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="Promise 接口" key="5">
                        <Card >
                            <Message_promise />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Message_promiseCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="6">
                        <Card >
                            <p>组件提供了一些静态方法，使用方式和参数如下：</p>
                            <ul>
                                <li><p><code>message.success(content, [duration], onClose)</code></p></li>
                                <li><p><code>message.error(content, [duration], onClose)</code></p></li>
                                <li><p><code>message.info(content, [duration], onClose)</code></p></li>
                                <li><p><code>message.warning(content, [duration], onClose)</code></p></li>
                                <li><p><code>message.warn(content, [duration], onClose)</code> // alias of warning</p></li>
                                <li><p><code>message.loading(content, [duration], onClose)</code></p></li>
                            </ul> 
                            <Api data={data} />
                            <p>还提供了全局配置和全局销毁方法：</p> 
                            <ul>
                                <li><p><code>message.config(options)</code></p></li>
                                <li><p><code>message.destroy()</code></p></li>
                            </ul> 
                            <p>组件同时提供 promise 接口</p> 
                            <ul>
                                <li><p><code>message[level](content, [duration]).then(afterClose)</code></p></li>
                                <li><p><code>message[level](content, [duration], onClose).then(afterClose)</code></p></li>
                            </ul>
                            <Api data={data_1} />
                        </Card>
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
