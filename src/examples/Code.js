import React, { Component } from 'react';
import {Collapse } from 'quant-ui';
const Panel = Collapse.Panel;
class Code extends Component {
	render() {
		return (
                <Collapse bordered={false}  >
                    <Panel header="代码" key="1">
                        <div dangerouslySetInnerHTML = {{__html:this.props.code}} ></div>
                    </Panel>
                </Collapse>
		 	)
	}
}

export default Code;
