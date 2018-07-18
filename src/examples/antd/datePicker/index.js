import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Method from '../../METHOD.js';
import methodData from './method.js'
import Code from '../../Code.js';
import { width } from 'window-size';
import api from '../../page/map/api.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>DatePicker日期选择框</h1>
                <Tabs tabPosition={"right"}>
                
            
                </Tabs>

            </div>
        );
    }
}

export default App;
