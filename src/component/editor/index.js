import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { EditorState, Modifier } from 'draft-js';
import "./style.less";
Editor.draftToHtml = draftToHtml;
Editor.EditorState = EditorState;
Editor.Modifier = Modifier;
export default Editor;