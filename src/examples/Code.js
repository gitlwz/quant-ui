import React, { Component } from 'react';
import {Collapse } from 'quant-ui';
const Panel = Collapse.Panel;
class Code extends Component {
	render() {
		return (
                <Collapse defaultActiveKey={['1']} bordered={false}  >
                    <Panel header="代码" key="1">
                        <div dangerouslySetInnerHTML = {{__html:this.props.data.code}} ></div>
                    </Panel>
                </Collapse>
		 	)
	}
}

export default Code;
