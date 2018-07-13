import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import "./style.less";
Editor.draftToHtml = draftToHtml;
export default Editor;