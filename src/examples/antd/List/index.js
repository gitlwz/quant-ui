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
//竖排列表
import VerticalList from './VerticalList/Detail'
import VerticalListCode from './VerticalList/code'
//栅格列表
import GridList from './GridList/Detail'
import GridListCode from './GridList/code'
//响应式格栅列表
import LayoutGridList from './LayoutGridList/Detail'
import LayoutGridListCode from './LayoutGridList/code'



const TabPane = Tabs.TabPane;
class App extends Component {
    // state={
    //     curKey:'1',
    // }
    // onChange=(key)=>{
    //     console.log('key',key);
    //     this.setState({
    //         curKey:key
    //     });
    //     console.log('curKey',this.state.curKey);
    //     console.log('defaultKey',this.defaultActiveKey);
    // }
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
                    <TabPane tab="竖排列表" key="4">
                        <Card >
                            <VerticalList />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={VerticalListCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="栅格列表" key="5">
                        <Card >
                            <GridList />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={GridListCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="响应式栅格列表" key="6">
                        <Card >
                            <LayoutGridList />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={LayoutGridListCode} />
                        </div>
                    </TabPane>

                </Tabs>


            </div>
        );
    }
}

export default App;
