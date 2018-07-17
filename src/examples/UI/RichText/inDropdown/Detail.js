import React, { Component } from 'react';
import { Editor } from 'quant-ui';
const draftToHtml = Editor.draftToHtml;


class Detail extends Component {
	state = {
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
	}
	render() {
		const { editorContent, editorState } = this.state;
		return (
			<div >
				<Editor 
					wrapperClassName="home-wrapper" //应用于编辑器和工具栏的类
					editorClassName="home-editor"  //在编辑器周围应用的类
					toolbarClassName="home-toolbar" //应用于工具栏周围的类
					toolbar={{
						inline: { inDropdown: true },
						list: { inDropdown: true },
						textAlign: { inDropdown: true },
						link: { inDropdown: true },
						history: { inDropdown: true },
					  }}            //自定义预先构建的工具栏选项。
					onEditorStateChange={this.onEditorStateChange}  //每次编辑器状态发生变化时调用函数，传递的函数参数是EditorState类型的  对象
					onContentStateChange={this.onEditorChange}  //每次编辑器状态发生变化时调用函数，传递的函数参数是RawDraftContentState类型的  对象
				/>
				<br/><br/>
				<h2>同步转换HTML</h2>
				<pre>{draftToHtml(editorContent)}</pre>
			</div>
		);
	}
}
export default Detail;
