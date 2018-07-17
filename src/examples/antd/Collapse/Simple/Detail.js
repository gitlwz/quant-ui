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
            <Collapse bordered={false} defaultActiveKey={['flamingo']}>
                <Panel header="This is panel header 1" key="cat">
                    <p style={{paddingLeft:24}}>{text[1]}</p>
                </Panel>
                <Panel header="This is panel header 2" key="flamingo">
                    <p style={{paddingLeft:24}}>{text[2]}</p>
                </Panel>
                <Panel header="This is panel header 3" key="dog">
                    <p style={{paddingLeft:24}}>{text[0]}</p>
                </Panel>
            </Collapse>
        );
    }
}
export default Detail;