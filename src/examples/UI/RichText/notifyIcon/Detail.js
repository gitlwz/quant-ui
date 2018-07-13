import React, { Component } from 'react';
import { HeaderSearch } from 'quant-ui';
import { Editor } from 'react-draft-wysiwyg';
import './style.less';



class Detail extends Component {
	state = {
		editorContent: undefined,
        editorState: '',
    };
	onEditorStateChange = (editorState) =>{
		this.setState({
            editorState,
        });
	}
	onEditorChange = (editorContent) =>{
		this.setState({
            editorContent,
		});
		console.log("&&&&&&7",editorContent)
	}
	imageUploadCallBack = (file) =>new Promise(
        (resolve, reject) => {
            resolve({
				data:{
					link:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1396680571,2063525739&fm=173&app=25&f=JPEG?w=640&h=360&s=C8185C9B8C34B298CC7990C6030030B3"
				}
			})
        }
    )
	render() {
		const { editorContent, editorState } = this.state;
		return (
			<div >
				<Editor 
					wrapperClassName="home-wrapper" //应用于编辑器和工具栏的类
					editorClassName="home-editor"  //在编辑器周围应用的类
					toolbarClassName="home-toolbar" //应用于工具栏周围的类
					wrapperStyle={{}} 				//应用于编辑器和工具栏的样式对象
					editorStyle={{}}					//在编辑器周围应用样式对象
					toolbarStyle={{}}					//应用于工具栏周围的样式对象
					
					//toolbarHidden 如果此属性为true，则隐藏工具栏。
					//toolbarOnFocus  //只有在编辑器聚焦时，工具栏才可见。
					//toolbarCustomButtons  向工具栏添加新选项。

					toolbar ={{
						image: { 
								uploadEnabled:true,
								uploadCallback: this.imageUploadCallBack,
								previewImage:true
							},
					}}             //自定义预先构建的工具栏选项。

					localization={{ locale: 'zh' }}

					onEditorStateChange={this.onEditorStateChange}  //每次编辑器状态发生变化时调用函数，传递的函数参数是EditorState类型的  对象
					onContentStateChange={this.onEditorChange}  //每次编辑器状态发生变化时调用函数，传递的函数参数是RawDraftContentState类型的  对象
				/>
			</div>
		);
	}
}
export default Detail;
