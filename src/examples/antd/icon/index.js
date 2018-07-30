import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';


import Icon_detail from './icon_detail/Detail.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <div>
                    <h1>Icon图标</h1>
                    <Card >
                        <Icon_detail />
                    </Card>
                </div>
                <div>
                    <h1>API</h1>
                    <p>由于图标字体本质上还是文字，可以使用 <code>style</code> 和 <code>className</code> 设置图标的大小和颜色。</p>
                    <Api data={data} />
                </div>

            </div>
        );
    }
}

export default App;
