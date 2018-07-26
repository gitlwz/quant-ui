import React, { Component } from 'react';
import { Tabs, Radio } from 'quant-ui';

const TabPane = Tabs.TabPane;

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'top',
        }
    }

    handleChange = (e) => {
        var mode = e.target.value;
        this.setState({ mode })
    }

    render() {
        const Button = Radio.Button;
        const Group = Radio.Group;
        const { mode } = this.state;
        return (
            <div>
                <Group onChange={this.handleChange} >
                    <Button value='left'>Vertical</Button>
                    <Button value='top'>Horizontal</Button>
                </Group>
                <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 200 }}>
                    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                    <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                    <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
                    <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
                    <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
                    <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
                    <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane>
                </Tabs>
            </div >
        )
    }
}

export default Detail;

