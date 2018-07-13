import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
//按钮类型
import Buttontype from './Buttontype/Detail.js';
import ButtontypeCode from './Buttontype/code.js';
//图标按钮
import IconButton from './IconButton/Detail.js';
import IconButtonCode from './IconButton/code.js';
//按钮尺寸
import Buttonsize from './Buttonsize/Detail.js';
import ButtonsizeCode from './Buttonsize/code.js';
//不可以用状态
import DisabledState from './DisabledState/Detail.js';
import DisabledStateCode from './DisabledState/code.js';
//加载中状态
import LoadingState from './LoadingState/Detail.js';
import LoadingStateCode from './LoadingState/code.js';
//按钮组合
import ButtonCombination from './ButtonCombination/Detail.js';
import ButtonCombinationCode from './ButtonCombination/code.js';
//幽灵按钮
import GhostButtons from './GhostButtons/Detail.js';
import GhostButtonsCode from './GhostButtons/code.js';

import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>button按钮组件</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="按钮类型" key="1">
                        <Card >
                            <Buttontype />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ButtontypeCode} />
                        </div>
                    </TabPane>

                    <TabPane tab="图标按钮" key="2">
                        <Card >
                            <IconButton />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={IconButtonCode} />
                        </div>
                    </TabPane>

                    <TabPane tab="按钮尺寸" key="3">
                        <Card >
                            <Buttonsize />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ButtonsizeCode} />
                        </div>
                    </TabPane>
                    
                    <TabPane tab="不可用状态" key="4">
                        <Card >
                            <DisabledState />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DisabledStateCode} />
                        </div>
                    </TabPane>

                    <TabPane tab="加载中状态" key="5">
                        <Card >
                            <LoadingState />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={LoadingStateCode} />
                        </div>
                    </TabPane>

                    <TabPane tab="按钮组合" key="6">
                        <Card >
                            <ButtonCombination />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ButtonCombinationCode} />
                        </div>
                    </TabPane>

                    <TabPane tab="幽灵按钮" key="7">
                        <Card >
                            <GhostButtons />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={GhostButtonsCode} />
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
