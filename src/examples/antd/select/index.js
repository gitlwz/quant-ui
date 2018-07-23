import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

//基本使用
import Select_basic from './select_basic/Detail.js'
import Select_basicCode from './select_basic/code.js'
//带搜索框
import Select_search from './select_search/Detail.js'
import Select_searchCode from './select_search/code.js'
//多选
import Select_multi from './select_multi/Detail.js'
import Select_multiCode from './select_multi/code.js'
//三种大小
import Select_size from './select_size/Detail.js'
import Select_sizeCode from './select_size/code.js'
//标签
import Select_tags from './select_tags/Detail.js'
import Select_tagsCode from './select_tags/code.js'
//分组
import Select_group from './select_group/Detail.js'
import Select_groupCode from './select_group/code.js'
//联动
import Select_linkage from './select_linkage/Detail.js'
import Select_linkageCode from './select_linkage/code.js'
//获得选项文本内容
import Select_labelInValue from './select_labelInValue/Detail.js'
import Select_labelInValueCode from './select_labelInValue/code.js'
//自动分词
import Select_auto from './select_auto/Detail.js'
import Select_autoCode from './select_auto/code.js'
//搜索框：与远端数据结合
import Select_SearchInput from './select_SearchInput/Detail.js'
import Select_SearchInputCode from './select_SearchInput/code.js'
//搜索用户
import Select_UserRemote from './select_UserRemote/Detail.js'
import Select_UserRemoteCode from './select_UserRemote/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Select选择器</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本使用" key="1">
                        <Card >
                            <Select_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Select_basicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="带搜索框" key="2">
                        <Card >
                            <Select_search />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Select_searchCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="多选" key="3">
                        <Card >
                            <Select_multi />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Select_multiCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="三种大小" key="4">
                        <Card >
                            <Select_size />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Select_sizeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="标签" key="5">
                        <Card >
                            <Select_tags />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Select_tagsCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="分组" key="6">
                        <Card >
                            <Select_group />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Select_groupCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="联动" key="7">
                        <Card >
                            <Select_linkage />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Select_linkageCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="获取选项的文本" key="8">
                        <Card >
                            <Select_labelInValue />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Select_labelInValueCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自动分词" key="9">
                        <Card >
                            <Select_auto />
                            <br/>
                            <h3>试下复制 <strong>露西,杰克</strong> 到输入框里。</h3>
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Select_autoCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="搜索框：与远端数据结合" key="10">
                        <Card >
                            <Select_SearchInput />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Select_SearchInputCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="搜索用户" key="11">
                        <Card >
                            <Select_UserRemote />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Select_UserRemoteCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="12">
                        <Api data={data} />
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
