import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
//顶部导航
import ShowOnTop from './showOntop/Detail.js'
import ShowOnTopCode from './showOntop/code.js'
//内嵌菜单
import Insitemenu from './insitemenu/Detail.js'
import InsitemenuCode from './insitemenu/code.js'
//缩进内嵌菜单
import Flexmenu from './flexmenu/Detail.js'
import FlexmenuCode from './flexmenu/code.js'
//只展开当前父级菜单
import Parentmenu from './parentmenu/Detail.js'
import ParentmenuCode from './parentmenu/code.js'
//垂直菜单
import Verticalmenu from './verticalmenu/Detail.js'
import VerticalmenuCode from './verticalmenu/code.js'
//主题
import Theme from './theme/Detail.js'
import ThemeCode from './theme/code.js'
//切换菜单类型
import Menutype from './menutype/Detail.js'
import MenutypeCode from './menutype/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Menu导航菜单</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="顶部导航" key="1">
                            <Card >
                                <ShowOnTop/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={ShowOnTopCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="内嵌菜单" key="2">
                            <Card >
                                <Insitemenu/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={InsitemenuCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="缩起内嵌菜单" key="3">
                            <Card >
                                <Flexmenu/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={FlexmenuCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="只展开当前父级菜单" key="4">
                            <Card >
                                <Parentmenu/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={ParentmenuCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="垂直菜单" key="5">
                            <Card >
                                <Verticalmenu/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={VerticalmenuCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="主题" key="6">
                            <Card >
                                <Theme/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={ThemeCode} />
                            </div>
                    </TabPane>
                    <TabPane tab="切换菜单类型" key="7">
                            <Card >
                                <Menutype/>
                            </Card>
                            <div style={{ marginTop: "30px" }}>
                                <Code data={MenutypeCode} />
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
