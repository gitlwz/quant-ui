import React, { Component } from 'react';
import { Tabs } from 'quant-ui';
import './style.less'
const TabPane = Tabs.TabPane;

class Detail extends Component {
    render() {
        return (
            <div className='card-container'>
                <Tabs defaultActiveKey="1" type='card'>
                    <TabPane tab="Tab 1" key="1">
                        <div className='content'>
                            <p>Content of Tab Pane 1</p>
                            <p>Content of Tab Pane 1</p>
                            <p>Content of Tab Pane 1</p>
                        </div>
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        <div className='content'>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                        </div>
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        <div className='content'>
                            <p>Content of Tab Pane 3</p>
                            <p>Content of Tab Pane 3</p>
                            <p>Content of Tab Pane 3</p>
                        </div>
                    </TabPane>
                </Tabs>
            </div>

        )
    }
}

export default Detail;

