import React, { Component } from 'react';
import { Input,md5 } from 'quant-ui';

class Detail extends Component {
    state = {
        password:""
    }
    onChange = (e) =>{
        this.setState({
            password:md5(e.target.value)
        })
    }
	render() {
		return (
			<div>
				<Input placeholder="请输入" onChange={this.onChange}/>
                <br/>
                <br/>
                加密后：{this.state.password}
			</div>
		);
	}
}
export default Detail;
