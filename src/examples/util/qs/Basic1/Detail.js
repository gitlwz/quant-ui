import React, { Component } from 'react';
import { qs,Button } from 'quant-ui';
let {stringify,parse } = qs;
class Detail extends Component {
    state = {
        obj:{a:1,b:2},
    }
    click1 = (e) =>{
        this.setState({
            obj:stringify(this.state.obj),
        })
    }
    click2 = (e) =>{
        this.setState({
            obj:parse(this.state.obj),
        })
    }
	render() {
		return (
			<div>
                <Button onClick={this.click1}>对象序列化</Button> 
                <Button onClick={this.click2}>解析</Button>  
				{JSON.stringify(this.state.obj)}
			</div>
		);
	}
}
export default Detail;
