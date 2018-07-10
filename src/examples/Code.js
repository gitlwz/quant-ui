import React, { Component } from 'react';
import {Collapse } from 'quant-ui';
const Panel = Collapse.Panel;
class Code extends Component {
	render() {
		return (
                <Collapse bordered={false}  >
                    <Panel header="代码" key="1">
                        <pre style={{'backgroundColor': '#eee','fontSize': '16px'}}>{this.props.code}</pre>
                    </Panel>
                </Collapse>
		 	)
	}
}

export default Code;
