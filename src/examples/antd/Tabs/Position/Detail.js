import React, { Component } from 'react';
import { Tabs, Select } from 'quant-ui';

const TabPane = Tabs.TabPane;
const Option = Select.Option;

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabPosition: 'top',
        }
    }

    handleChange = (tabPosition) => {
        this.setState({ tabPosition })
    }

    render() {
        
        
        return (
            <div>
                <Select value={this.state.tabPosition} onChange={this.handleChange} dropdownMatchSelectWidth={false}>
                    <Option value='top'>top</Option>
                    <Option value='bottom'>bottom</Option>
                    <Option value='left'>left</Option>
                    <Option value='right'>right</Option>
                </Select>
                <Tabs defaultActiveKey="1" tabPosition={this.state.tabPosition}>
                    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                </Tabs>
            </div >
        )
    }
}

export default Detail;

