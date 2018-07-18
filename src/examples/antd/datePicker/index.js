import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Method from '../../METHOD.js';
import methodData from './method.js'
import Code from '../../Code.js';
import { width } from 'window-size';
import api from '../../page/map/api.js';
//基本
import DataPicker_basic from './dataPicker_basic/Detail.js';
import DataPicker_basicCode from './dataPicker_basic/code.js';
//日期格式
import DataPicker_format from './dataPicker_format/Detail.js';
import DataPicker_formatCode from './dataPicker_format/code.js';
//三种大小
import DataPicker_size from './dataPicker_size/Detail.js';
import DataPicker_sizeCode from './dataPicker_size/code.js';
//日期时间选择
import DataPicker_showtime from './dataPicker_showtime/Detail.js';
import DataPicker_showtimeCode from './dataPicker_showtime/code.js';
//禁用
import DataPicker_forbid from './dataPicker_forbid/Detail.js';
import DataPicker_forbidCode from './dataPicker_forbid/code.js';
//不可选择日期和时间
import DataPicker_time_forbid from './dataPicker_time_forbid/Detail.js';
import DataPicker_time_forbidCode from './dataPicker_time_forbid/code.js';
//自定义日期范围
import DataPicker_custom_data from './dataPicker_custom_data/Detail.js';
import DataPicker_custom_dataCode from './dataPicker_custom_data/code.js';
//预设范围
import DataPicker_preset_scope from './dataPicker_preset_scope/Detail.js';
import DataPicker_preset_scopeCode from './dataPicker_preset_scope/code.js';
//额外的页脚
import DataPicker_extra_footer from './dataPicker_extra_footer/Detail.js';
import DataPicker_extra_footerCode from './dataPicker_extra_footer/code.js';
//受控面板
import DataPicker_controlled_panel from './dataPicker_controlled_panel/Detail.js';
import DataPicker_controlled_panelCode from './dataPicker_controlled_panel/code.js';
//定制日期单元格
import DataPicker_dateRender from './dataPicker_dateRender/Detail.js';
import DataPicker_dateRenderCode from './dataPicker_dateRender/code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>DatePicker日期选择框</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <DataPicker_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DataPicker_basicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="日期格式" key="2">
                        <Card >
                            <DataPicker_format />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DataPicker_formatCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="三种大小" key="3">
                        <Card >
                            <DataPicker_size />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DataPicker_sizeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="日期时间选择" key="4">
                        <Card >
                            <DataPicker_showtime />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DataPicker_showtimeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="禁用" key="5">
                        <Card >
                            <DataPicker_forbid />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DataPicker_forbidCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="不可选择日期和时间" key="6">
                        <Card >
                            <DataPicker_time_forbid />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DataPicker_time_forbidCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="自定义日期范围" key="7">
                        <Card >
                            <DataPicker_custom_data />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DataPicker_custom_dataCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="预设范围" key="8">
                        <Card >
                            <DataPicker_preset_scope />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DataPicker_preset_scopeCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="额外的页脚" key="9">
                        <Card >
                            <DataPicker_extra_footer />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DataPicker_extra_footerCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="受控面板" key="10">
                        <Card >
                            <DataPicker_controlled_panel />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DataPicker_controlled_panelCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="定制日期单元格" key="11">
                        <Card >
                            <DataPicker_dateRender />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={DataPicker_dateRenderCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="12">
                        <p>日期类组件包括以下四种形式。</p>
                        <ul>
                            <li><p>DatePicker</p></li>
                            <li><p>MonthPicker</p></li>
                            <li><p>RangePicker</p></li>
                            <li><p>WeekPicker</p></li>
                        </ul>
                        <h3 >
                            <span>国际化配置</span>
                            <a href="#国际化配置" class="anchor">#</a>
                        </h3>
                        <p>默认配置为 en-US，如果你需要设置其他语言，推荐在入口处使用我们提供的国际化组件,详见：
                            <a href="http://ant.design/components/locale-provider-cn/">LocaleProvider国际化</a>。
                        </p>
                        <p>如有特殊需求（仅修改单一组件的语言），请使用 locale 参数，参考：
                            <a href="https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json">
                                默认配置</a>。
                        </p>
                        <Api data={data} />
                    </TabPane>
                    <TabPane tab='方法' key='13'>
                        <Method data={methodData} />
                    </TabPane>
                </Tabs>

            </div>
        );
    }
}

export default App;
