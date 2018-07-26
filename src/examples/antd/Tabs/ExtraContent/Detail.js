import React, { Component } from 'react';
import { Tabs ,Button} from 'quant-ui';

const TabPane = Tabs.TabPane;

const ExtraOperation=(<Button>More Operation</Button>)
class Detail extends Component {
    render() {
        return (

            <Tabs defaultActiveKey="1" tabBarExtraContent={ExtraOperation}>
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
        )
    }
}

export default Detail;

