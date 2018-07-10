const code = `
import React, { Component } from 'react';
import { QRCode } from 'quant-ui';
class QRCodeCode extends Component {
  render() {
    return (
      	<div>
            <QRCode value="https://www.baidu.com/"/>
     	</div>
    );
  }
}
export default QRCodeCode;
`;
const api = [
	{
		key:"1",
		parameter:"value",  //字段名
		type:'string',	//类型
		must:'',
		default:'无',							//默认值
		instructions:'扫面二维码出现的值'	//描述
	},
	{
		key:"2",
		parameter:"renderAs",  //字段名
		type:"string ('canvas' 'svg')",	//类型
		must:'',
		default:'canvas',							//默认值
		instructions:'二维码图片类型'	//描述
	},
	{
		key:"3",
		parameter:"size",  //字段名
		type:"number",	//类型
		must:'',
		default:'128',							//默认值
		instructions:'二维码图片大小'	//描述
	},
	{
		key:"4",
		parameter:"bgColor",  //字段名
		type:"string (CSS color)",	//类型
		must:'',
		default:'#FFFFFF',							//默认值
		instructions:'背景颜色'	//描述
	},
	{
		key:"5",
		parameter:"fgColor",  //字段名
		type:"string (CSS color)",	//类型
		must:'',
		default:'#000000',							//默认值
		instructions:'内容颜色'	//描述
	},
	{
		key:"6",
		parameter:"level",  //字段名
		type:"string ('L' 'M' 'Q' 'H')",	//类型
		must:'',
		default:'L',							//默认值
		instructions:'二维码复杂度'	//描述
	}
];

export default {
	code,
	api
}