import React, { Component } from 'react';
import { Tabs, Radio } from 'quant-ui';

const TabPane = Tabs.TabPane;

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'small',
        }
    }

    handleChange = (e) => {
        var size = e.target.value;
        this.setState({ size })
    }

    render() {
        const Button = Radio.Button;
        const Group = Radio.Group;
        const { size } = this.state;
        return (
            <div>
                <Group onChange={this.handleChange} >
                    <Button value= 'small'>small</Button>
                    <Button value='default'>default</Button>
                    <Button value='large'>large</Button>
                </Group>
                <Tabs defaultActiveKey="1" size={size} style={{ height: 200 }}>
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

