import React, { Component } from 'react';
import { DropTree } from 'quant-ui';
class Detail extends Component {

	render() {
		return (
			<div>
				<button onClick={()=>{
					this.refs.droptree.onReset()
				}}>点我</button>
				<DropTree  ref="droptree"/>
			</div>
		);
	}
}

export default Detail;
