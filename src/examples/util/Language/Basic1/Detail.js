import React, { Component } from 'react';
import { language ,Button} from 'quant-ui';
const $ = language.getLanguageData;


language.setLanguageData({
	'en_US':{
		"你好！":"hello！",
		"语言":"language",
	},
	'ja_JP':{
		"你好！":"あろは",
		"语言":"じ",
	}
})
class Detail extends Component {

	zhClick = () =>{
		language.setCurrentLanguage("zh_CN")
		language.refreshLanguage()
	}
	enClick = () =>{
		language.setCurrentLanguage("en_US")
		language.refreshLanguage()
	}
	jaClick = () =>{
		language.setCurrentLanguage("ja_JP")
		language.refreshLanguage()
	}
	render() {
		return (
			<div>
				<Button onClick={this.zhClick}>中文</Button>
				<Button onClick={this.enClick}>英文</Button>
				<Button onClick={this.jaClick}>日语</Button>
				<div>
					{$("你好！")} 
					<br /><br />
					{$("语言")}
				</div>
			</div>
			
		);
	}
}
export default Detail;
