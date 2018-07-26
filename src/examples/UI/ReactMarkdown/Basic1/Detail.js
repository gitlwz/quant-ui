import React, { Component } from 'react';
import { ReactMarkdown ,Input} from 'quant-ui';
const { TextArea } = Input;
class Detail extends Component {
	constructor(props){
		super(props)
		this.state = {
			value:""
		}
	}
	onChange = (e) =>{
		this.setState({
			value:e.target.value
		})
	}
	render() {
		return (
			<div>
				<div style={{marginBottom:"20px"}}>
					<h2>请输入Markdown语法</h2>
					<TextArea onChange = {this.onChange} value={this.state.value} placeholder="请输入Markdown语法" autosize={{minRows:8}} />
				</div>
				<ReactMarkdown source={this.state.value} />
			</div>
		);
	}
}
export default Detail;
