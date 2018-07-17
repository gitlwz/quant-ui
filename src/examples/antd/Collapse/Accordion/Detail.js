//一次只能展示一个面板

import React, { Component } from 'react';
import { Collapse } from 'quant-ui';

const Panel = Collapse.Panel;

const text = [
    'dog,dog,dog',
    'cat,cat,cat',
    'flamingo,flamingo,flamingo'
]
class Detail extends Component {

    render() {
        return (
            <Collapse accordion>
                <Panel header="This is panel header 1" key="1">
                    <p>{text[1]}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>{text[2]}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>{text[0]}</p>
                </Panel>
            </Collapse>
        );
    }
}
export default Detail;