import React, { Component } from 'react';
import { Tabs, Icon } from 'quant-ui';

const TabPane = Tabs.TabPane;

class Detail extends Component {
    render() {
        return (

            <Tabs defaultActiveKey="1">
                <TabPane tab={<span><Icon type='smile'/>Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab={<span><Icon type='android'/>Tab 2</span>} key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab={<span><Icon type='apple'/>Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
        )
    }
}

export default Detail;

