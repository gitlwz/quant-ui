import React, { Component } from 'react';
import { Editor } from 'quant-ui';
import PropTypes from 'prop-types';
const draftToHtml = Editor.draftToHtml;
const EditorState = Editor.EditorState;
const Modifier = Editor.Modifier;

class CustomOption extends Component {
	static propTypes = {
		onChange: PropTypes.func,
		editorState: PropTypes.object,
	};

	addStar = () => {
		const { editorState, onChange } = this.props;
		const contentState = Modifier.replaceText(
			editorState.getCurrentContent(),
			editorState.getSelection(),
			'⭐',
			editorState.getCurrentInlineStyle(),
		);
		onChange(EditorState.push(editorState, contentState, 'insert-characters'));
	};

	render() {
		return (
			<div onClick={this.addStar}>⭐</div>
		);
	}
}
class Detail extends Component {
	state = {
		editorState: '',
	};
	render() {
		const { editorContent, editorState } = this.state;
		return (
			<div >
				<Editor
					wrapperClassName="home-wrapper" //应用于编辑器和工具栏的类
					editorClassName="home-editor"  //在编辑器周围应用的类
					toolbarClassName="home-toolbar" //应用于工具栏周围的类
					toolbarCustomButtons={[<CustomOption />]}
				/>
				<br /><br />
				<h2>同步转换HTML</h2>
				<pre>{draftToHtml(editorContent)}</pre>
			</div>
		);
	}
}
export default Detail;
