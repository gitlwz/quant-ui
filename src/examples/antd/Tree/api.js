
const api = [
    {
        title: "Tree props",
        api: [
            {
                key: "1",
                parameter: "autoExpandParent",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'true',							//默认值
                instructions: ' 是否自动展开父节点	'	//描述
            },
            {
                key: "2",
                parameter: "checkable",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 节点前添加 Checkbox 复选框		'	//描述
            },
            {
                key: "3",
                parameter: "checkedKeys	",  //字段名
                type: "string[] | {checked: string[], halfChecked: string[]}	",	//类型
                must: '',				//是否必填
                default: '[]',							//默认值
                instructions: ' 受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点key，则子节点自动选中；相应当子节点key都传入，父节点也自动选中。当设置checkable和checkStrictly，它是一个有checked和halfChecked属性的对象，并且父子节点的选中与否不再关联	'	//描述
            },
            {
                key: "4",
                parameter: "checkStrictly",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' checkable状态下节点选择完全受控（父子节点选中状态不再关联）		'	//描述
            },
            {
                key: "5",
                parameter: "defaultCheckedKeys",  //字段名
                type: "string[]",	//类型
                must: '',				//是否必填
                default: '[]',							//默认值
                instructions: ' 默认选中复选框的树节点'	//描述
            },
            {
                key: "6",
                parameter: "defaultExpandAll",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 默认展开所有树节点	'	//描述
            },
            {
                key: "7",
                parameter: "defaultExpandedKeys",  //字段名
                type: "string[]	",	//类型
                must: '',				//是否必填
                default: '[]',							//默认值
                instructions: ' 默认展开指定的树节点	'	//描述
            },
            {
                key: "8",
                parameter: "defaultExpandParent",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'true',							//默认值
                instructions: ' 默认展开父节点	'	//描述
            },
            {
                key: "9",
                parameter: "defaultSelectedKeys	",  //字段名
                type: "string[]	",	//类型
                must: '',				//是否必填
                default: '[]',							//默认值
                instructions: ' 默认选中的树节点	'	//描述
            },
            {
                key: "10",
                parameter: "disabled",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 将树禁用	'	//描述
            },
            {
                key: "11",
                parameter: "draggable",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 设置节点可拖拽（IE>8）'	//描述
            },
            {
                key: "12",
                parameter: "expandedKeys	",  //字段名
                type: "string[]",	//类型
                must: '',				//是否必填
                default: '[]',							//默认值
                instructions: ' （受控）展开指定的树节点'	//描述
            },
            {
                key: "13",
                parameter: "checkable",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 节点前添加 Checkbox 复选框		'	//描述
            },
            {
                key: "14",
                parameter: "filterTreeNode",  //字段名
                type: "function(node)",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' 按需筛选树节点（高亮），返回true'	//描述
            },
            {
                key: "15",
                parameter: "loadData",  //字段名
                type: "function(node)",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' 异步加载数据	'	//描述
            },
            {
                key: "16",
                parameter: "loadedKeys",  //字段名
                type: "string[]	",	//类型
                must: '',				//是否必填
                default: '[]',							//默认值
                instructions: ' （受控）已经加载的节点，需要配合 loadData 使用'	//描述
            },
            {
                key: "17",
                parameter: "multiple",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 支持点选多个节点（节点本身）'	//描述
            },
            {
                key: "18",
                parameter: "selectedKeys",  //字段名
                type: "string[]	",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' （受控）设置选中的树节点'	//描述
            },
            {
                key: "19",
                parameter: "showIcon",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式'	//描述
            },
            {
                key: "20",
                parameter: "onDragEnd",  //字段名
                type: "function({event, node})",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' dragend 触发时调用'	//描述
            },
            {
                key: "21",
                parameter: "showLine",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 是否展示连接线	'	//描述
            },
            {
                key: "22",
                parameter: "onCheck",  //字段名
                type: "function(checkedKeys, e:{checked: bool, checkedNodes, node, event})",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' 点击复选框触发		'	//描述
            },
            {
                key: "23",
                parameter: "onDragEnter",  //字段名
                type: "function({event, node, expandedKeys})",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' dragenter 触发时调用		'	//描述
            },
            {
                key: "24",
                parameter: "onDragLeave",  //字段名
                type: "function({event, node})",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' dragleave 触发时调用	'	//描述
            },
            {
                key: "25",
                parameter: "onDragOver",  //字段名
                type: "function({event, node})",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' 	dragover 触发时调用	'	//描述
            },
            {
                key: "26",
                parameter: "onDragStart",  //字段名
                type: "function({event, node})",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' 开始拖拽时调用		'	//描述
            },
            {
                key: "27",
                parameter: "onDrop",  //字段名
                type: "function({event, node, dragNode, dragNodesKeys})",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' drop 触发时调用		'	//描述
            },
            {
                key: "28",
                parameter: "onExpand",  //字段名
                type: "function(expandedKeys, {expanded: bool, node})",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' 展开/收起节点时触发		'	//描述
            },
            {
                key: "29",
                parameter: "onLoad",  //字段名
                type: "function(loadedKeys, {event, node})",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' 节点加载完毕时触发		'	//描述
            },
            
        ]
    },
    {
        title: "TreeNode.props",
        api: [
            {
                key: "1",
                parameter: "disableCheckbox	",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 禁掉 checkbox'	//描述
            },
            {
                key: "2",
                parameter: "disabled",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 禁掉响应				'	//描述
            },
            {
                key: "3",
                parameter: "icon	",  //字段名
                type: "ReactNode/Function(props):ReactNode",	//类型
                must: '',				//是否必填
                default: '-',							//默认值
                instructions: ' 自定义图标。可接收组件，props 为当前节点 props	'	//描述
            },
            {
                key: "4",
                parameter: "isLeaf	",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'false',							//默认值
                instructions: ' 设置为叶子节点(设置了loadData时有效)	'	//描述
            },
            {
                key: "5",
                parameter: "key	",  //字段名
                type: "string",	//类型
                must: '',				//是否必填
                default: '内部计算出的节点位置',							//默认值
                instructions: ' 被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！	'	//描述
            },
            {
                key: "6",
                parameter: "selectable	",  //字段名
                type: "boolean",	//类型
                must: '',				//是否必填
                default: 'true',							//默认值
                instructions: ' 设置节点是否可被选中	'	//描述
            },
            {
                key: "7",
                parameter: "title	",  //字段名
                type: "string|ReactNode",	//类型
                must: '',				//是否必填
                default: '---',							//默认值
                instructions: ' 标题	'	//描述
            },
        ]
    },
    {
        title: "DirectoryTree.props",
        api: [
            {
                key: "1",
                parameter: "expandAction	",  //字段名
                type: "string",	//类型
                must: '',				//是否必填
                default: 'click',							//默认值
                instructions: " 目录展开逻辑，可选 false 'click' 'doubleClick'"	//描述
            },
        ]
    }

];

export default {
    api
}