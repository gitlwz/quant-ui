import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';

import Basic from './Basic/Detail'
import BasicCode from './Basic/code'
//引入jsx风格的api
import JsxStyle from './JsxStyle/Detail'
import JsxStyleCode from './JsxStyle/code'
//可选择
import Selectable from './Selectable/Detail'
import SelectableCode from './Selectable/code'
//选择和操作
import SelectAndOperate from './SelectAndOperate/Detail'
import SelectAndOperateCode from './SelectAndOperate/code'
//自定义选择
import CustomSelect from './CustomSelect/Detail'
import CustomeSelectCode from './CustomSelect/code'
//筛选排序
import FilterAndSort from './FilterAndSort/Detail'
import FilterAndSortCode from './FilterAndSort/code'
//搜索
import Search from './Search/Detail'
import SearchCode from './Search/code'
//远程加载数据
import Ajax from './Ajax/Detail'
import AjaxCode from './Ajax/code'
//大小
import Size from './Size/Detail'
import SizeCode from './Size/code'
//边框
import Border from './BorderTitleAndFooter/Detail'
import BorderCode from './BorderTitleAndFooter/code'
//表格扩展
import ExpandRow from './ExpandRow/Detail'
import ExpandRowCode from './ExpandRow/code'
//表格扩展
import ColSpanRowSpan from './ColSpanAndRowSpan/Detail'
import ColSpanRowSpanCode from './ColSpanAndRowSpan/code'
//树形数据
import TreeStructure from './TreeStructure/Detail'
import TreeStructureCode from './TreeStructure/code'
//固定表头
import FixedHeader from './FixedHeader/Detail'
import FixedHeaderCode from './FixedHeader/code'
//固定列
import FixedCol from './FixedCol/Detail'
import FixedColCode from './FixedCol/code'
//固定头和列
import FixedHeaderAndCol from './FixedHeaderAndCol/Detail'
import FixedHeaderAndColCode from './FixedHeaderAndCol/code'

//表头分组
import TableHeader from './TableHeader/Detail'
import TableHeaderCode from './TableHeader/code'
//可编辑表格
import EditTable from './EditTable/Detail'
import EditTableCode from './EditTable/code'
//可编辑行
import EditableRow from './EditableRow/Detail'
import EditableRowCode from './EditableRow/code'

const TabPane = Tabs.TabPane;

class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Table 表格</h1>
                <Tabs tabPosition={'right'}>
                    <TabPane tab="基础" key='1'>
                        <Card>
                            <Basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="Jsx风格的API" key='2'>
                        <Card>
                            <JsxStyle />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={JsxStyleCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="可选择" key='3'>
                        <Card>
                            <Selectable />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={SelectableCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="选择和操作" key='4'>
                        <Card>
                            <SelectAndOperate />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={SelectAndOperateCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义选择" key='5'>
                        <Card>
                            <CustomSelect />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={CustomeSelectCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="筛选排序" key='6'>
                        <Card>
                            <FilterAndSort />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={FilterAndSortCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义筛选菜单" key='7'>
                        <Card>
                            <Search />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={SearchCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="远程加载数据" key='8'>
                        <Card>
                            <Ajax />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={AjaxCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="大小" key='9'>
                        <Card>
                            <Size />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={SizeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab='边框，表头&&表' key='10'>
                        <Card>
                            <Border />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BorderCode} />
                        </div>
                    </TabPane>
                    <TabPane tab='扩展行' key='11'>
                        <Card>
                            <ExpandRow />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ExpandRowCode} />
                        </div>
                    </TabPane>
                    <TabPane tab='行/列合并' key='12'>
                        <Card>
                            <ColSpanRowSpan />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={ColSpanRowSpanCode} />
                        </div>
                    </TabPane>
                    <TabPane tab='树形结构数据展示' key='13'>
                        <Card>
                            <TreeStructure />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TreeStructureCode} />
                        </div>
                    </TabPane>
                    <TabPane tab='固定表头' key='14'>
                        <Card>
                            <FixedHeader />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={FixedHeaderCode} />
                        </div>
                    </TabPane>
                    <TabPane tab='固定列' key='15'>
                        <Card>
                            <FixedCol />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={FixedColCode} />
                        </div>
                    </TabPane>
                    <TabPane tab='固定头和列' key='16'>
                        <Card>
                            <FixedHeaderAndCol />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={FixedHeaderAndColCode} />
                        </div>
                    </TabPane>
                    <TabPane tab='表头分组' key='17'>
                        <Card>
                            <TableHeader />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TableHeaderCode} />
                        </div>
                    </TabPane>
                    <TabPane tab='可编辑表格' key='18'>
                        <Card>
                            <EditTable />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={EditTableCode} />
                        </div>
                    </TabPane>
                    <TabPane tab='可编辑行' key='19'>
                        <Card>
                            <EditableRow />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={EditableRowCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="api" key='20'>
                        <Api data={data} />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default App;