import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';


//基本列表
import BasicList from './BasicList/Detail.js';
import BasicListCode from './BasicList/code.js';
//简单列表
import SimpleList from './SimpleList/Detail'
import SimpleListCode from './SimpleList/code'
//加载更多
// import LoadMore from './LoadMore/Detail'
// import LoadMoreCode from './LoadMore/code'


const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>List列表</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="简单列表" key="1">
                        <Card >
                            <SimpleList />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={SimpleListCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="基础列表" key="2">
                        <Card >
                            <BasicList />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicListCode} />
                        </div>
                    </TabPane>
                    {/* <TabPane tab="加载更多" key="3">
                        <Card >
                            <LoadMore />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={LoadMoreCode} />
                        </div>
                    </TabPane> */}


                </Tabs>


            </div>
        );
    }
}

export default App;
