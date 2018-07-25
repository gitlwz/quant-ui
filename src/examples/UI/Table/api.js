
const api = [
	{
		title: "API",
		api: [
			{
				key: "1",
				parameter: "dataSource",  //字段名
				instructions: '数据数组',	//描述
				type: '[]',	//类型
				default: "-",							//默认值
				must: 'true',
			},
			{
				key: "2",
				parameter: "columns",  //字段名
				instructions: '当前配置项',	//描述
				type: '[]',	//类型
				default: "-",							//默认值
				must: 'true',
			},{
				key: "3",
				parameter: "showSelection",  //字段名
				instructions: '是否显示勾选列',	//描述
				type: 'Boole',	//类型
				default: "false",							//默认值
				must: 'false',
			},{
				key: "3.1",
				parameter: "drop",  //字段名
				instructions: '列是否可拖动(固定列不可拖动)',	//描述
				type: 'Boole',	//类型
				default: "false",							//默认值
				must: 'false',
			},{
				key: "4",
				parameter: "defaultRowKeys",  //字段名
				instructions: '默认选中项',	//描述
				type: '[]',	//类型
				default: "[]",							//默认值
				must: 'false',
			},{
				key: "5",
				parameter: "onSelectChange",  //字段名
				instructions: '选中项发生变化的时的回调',	//描述
				type: 'function(selectedRowKeys,rowValue)',	//类型
				default: "-",							//默认值
				must: 'false',
			},{
				key: "5",
				parameter: "onSelect",  //字段名
				instructions: '用户手动选择/取消选择某列的回调',	//描述
				type: 'function(record, selected, selectedRows, nativeEvent)',	//类型
				default: "-",							//默认值
				must: 'false',
			},{
				key: "6",
				parameter: "onSelectAll",  //字段名
				instructions: '用户手动选择/取消选择所有列的回调',	//描述
				type: 'function(selected, selectedRows, changeRow)',	//类型
				default: "-",							//默认值
				must: 'false',
			},{
				key: "6",
				parameter: "cellOnChange",  //字段名
				instructions: '表格数据变化回调',	//描述
				type: 'function(newValue, oldValue, record,index,column)',	//类型
				default: "-",							//默认值
				must: 'false',
			}
		]
	},{
		title: "columns",
		api: [
			{
				key: "1",
				parameter: "API",  //字段名
				instructions: '当前列单元格操作配置',	//描述
				type: '{}',	//类型
				default: "-",							//默认值
				must: 'false',
			},
			{
				key: "2",
				parameter: "props",  //字段名
				instructions: '主要用于合并单元格操作',	//描述
				type: 'Function(text ： 当前文本,record： 当前行数据,index：  index索引,dataIndex： 当前dataIndex值,collocate：  当前columns配置,len:数据长度)',	//类型
				default: "-",							//默认值
				must: 'false',
			},{
				key: "3",
				parameter: "type",  //字段名
				instructions: '单元格属性',	//描述
				type: 'string : 0、1、2、3、4、5',	//类型
				default: "0",							//默认值
				must: 'false',
				children:[{
					key: "0",
					parameter: "0",  //字段名
					instructions: '文本展示单元格',	//描述
				},{
					key: "1",
					parameter: "1",  //字段名
					instructions: '文本输入单元格',	//描述
				},{
					key: "2",
					parameter: "2",  //字段名
					instructions: '数字输入单元格',	//描述
				},{
					key: "3",
					parameter: "3",  //字段名
					instructions: '下拉选择单元格 需要制定 option (尽量设置宽度)',	//描述
				},{
					key: "4",
					parameter: "4",  //字段名
					instructions: '模糊匹配单元格 需要制定 autoption(尽量设置宽度)',	//描述
				},{
					key: "5",
					parameter: "5",  //字段名
					instructions: '日期单元格',	//描述
				}]
			},{
				key: "4",
				parameter: "show",  //字段名
				instructions: '是否显示此列数据',	//描述
				type: '',	//类型
				default: "true",							//默认值
				must: 'false',
			},
		]
	},{
		title:"refs方法",
		api:[
			{
				key: "1",
				parameter: "getDataSource",  //字段名
				instructions: '获取当前dataSource表格数据',	//描述
				type: 'function',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "2",
				parameter: "getColumns",  //字段名
				instructions: '获取列配置项',	//描述
				type: 'function',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "3",
				parameter: "getAPI",  //字段名
				instructions: '获取表格配置',	//描述
				type: 'function',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "4",
				parameter: "getSelectedRowKeys",  //字段名
				instructions: '获取选中项keys',	//描述
				type: 'function',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "5",
				parameter: "getRowDataBySelectedAll",  //字段名
				instructions: '获得所有选中的数据',	//描述
				type: 'function',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "6",
				parameter: "getRowDataByKeys",  //字段名
				instructions: '获取数据通过keys',	//描述
				type: 'function(keys)',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "7",
				parameter: "setDataSource",  //字段名
				instructions: '设置当前数据',	//描述
				type: 'function(dataSource,callback)',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "8",
				parameter: "setColumns",  //字段名
				instructions: '设置当前配置项',	//描述
				type: 'function(columns,callback)',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "9",
				parameter: "setAPI",  //字段名
				instructions: '设置当前表格api',	//描述
				type: 'function(API,callback)',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "9.1",
				parameter: "setSelectedKeys",  //字段名
				instructions: '设置当前选中数据',	//描述
				type: 'function(keys,callback)',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "10",
				parameter: "clearRowData",  //字段名
				instructions: '清除所有数据',	//描述
				type: 'function(callback)',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "11",
				parameter: "saveCellData",  //字段名
				instructions: '设置某单元格数据',	//描述
				type: 'function(rowId,dataIndex,cellValue,callback)',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "12",
				parameter: "addLastRow",  //字段名
				instructions: '添加一行数据在末尾',	//描述
				type: 'function(rowData,callback)',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "13",
				parameter: "addBeforeRow",  //字段名
				instructions: '添加一行数据在首位',	//描述
				type: 'function(rowData,callback)',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "14",
				parameter: "deleteRow",  //字段名
				instructions: '根据key删除一行',	//描述
				type: 'function(keys,callback)',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "15",
				parameter: "deleteRow",  //字段名
				instructions: '根据key删除一行',	//描述
				type: 'function(keys,callback)',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "16",
				parameter: "addSelectedKeys",  //字段名
				instructions: '添加当前选中数据',	//描述
				type: 'function(keys,callback)',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "17",
				parameter: "addDisabled",  //字段名
				instructions: '添加不可操作单元格',	//描述
				type: 'function(key,column,callback)',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "18",
				parameter: "removeDisabled",  //字段名
				instructions: '移除不可操作单元格',	//描述
				type: 'function(key,column,callback)',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "19",
				parameter: "editDisable",  //字段名
				instructions: '修改不可操作单元格',	//描述
				type: 'function(disableds,callback)',	//类型
				default: "-",							//默认值
				must: '-',
			},{
				key: "20",
				parameter: "removeAllDisabled",  //字段名
				instructions: '移除所有不可操作数据',	//描述
				type: 'function(callback)',	//类型
				default: "-",							//默认值
				must: '-',
			}
		]
	}
];

export default {
	api
}