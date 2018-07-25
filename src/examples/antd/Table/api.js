const api=[
    {
        title:'Table API',
        api:[
            {
                key:'1',
                parameter:'bordered',
                type:'boolean',
                must:'-',
                default:'false',
                instructions:''
            },
            {
                key:'2',
                parameter:'childrenColumnName',
                type:'string',
                must:'-',
                default:'children',
                instructions:'指定树形结构的列名'
            },
            {
                key:'3',
                parameter:'columns',
                type:'ColumnProps[]',
                must:'-',
                default:'-',
                instructions:'表格列的配置描述，具体项见下表'
            },
            {
                key:'4',
                parameter:'components',
                type:'object',
                must:'-',
                default:'-',
                instructions:'覆盖默认的 table 元素'
            },
            {
                key:'5',
                parameter:'dataSource',
                type:'any[]	',
                must:'-',
                default:'-',
                instructions:'数据数组	'
            },
            {
                key:'6',
                parameter:'defaultExpandAllRows',
                type:'boolean',
                must:'-',
                default:'false',
                instructions:'初始时，是否展开所有行'
            },{
                key:'7',
                parameter:'defaultExpandedRowKeys',
                type:'string[]	',
                must:'-',
                default:'-',
                instructions:'默认展开的行	'
            },
            {
                key:'8',
                parameter:'expandedRowKeys',
                type:'string[]	',
                must:'-',
                default:'-',
                instructions:'展开的行，控制属性'
            },
            {
                key:'9',
                parameter:'expandedRowRender',
                type:'Function(record, index, indent, expanded):ReactNode',
                must:'-',
                default:'-',
                instructions:'额外的展开行'
            },
            {
                key:'10',
                parameter:'expandRowByClick',
                type:'boolean',
                must:'-',
                default:'false',
                instructions:'通过点击行来展开子行'
            },
            {
                key:'11',
                parameter:'indentSize',
                type:'number',
                must:'-',
                default:'15',
                instructions:'展示树形数据时，每层缩进的宽度，以 px 为单位'
            },
            {
                key:'12',
                parameter:'loading',
                type:'boolean|object',
                must:'-',
                default:'false',
                instructions:'页面是否加载中'
            },
            {
                key:'13',
                parameter:'footer',
                type:'Function(currentPageData)',
                must:'-',
                default:'-',
                instructions:'表格尾部	'
            },
            {
                key:'14',
                parameter:'locale',
                type:'object',
                must:'-',
                default:`filterConfirm: '确定' 
                filterReset: '重置' 
                emptyText: '暂无数据' 
                默认值`,
                instructions:'默认文案设置，目前包括排序、过滤、空数据文案'
            },
            {
                key:'15',
                parameter:'pagination',
                type:'object',
                must:'-',
                default:'-',
                instructions:'分页器，参考配置项或 pagination，设为 false 时不展示和进行分页'
            },
            {
                key:'16',
                parameter:'rowClassName',
                type:'Function(record, index):string	',
                must:'-',
                default:'-',
                instructions:'表格行的类名	'
            },
            {
                key:'17',
                parameter:'rowKey',
                type:'string|Function(record):string',
                must:'-',
                default:'key',
                instructions:'表格行 key 的取值，可以是字符串或一个函数'
            },
            {
                key:'18',
                parameter:'rowSelection',
                type:'object',
                must:'-',
                default:'null',
                instructions:'列表项是否可选择，配置项'
            },
            {
                key:'19',
                parameter:'scroll',
                type:'{ x: number | true, y: number }',
                must:'-',
                default:'-',
                instructions:'设置横向或纵向滚动，也可用于指定滚动区域的宽和高，建议为 x 设置一个数字，如果要设置为 true，需要配合样式 .ant-table td { white-space: nowrap; }'
            },
            {
                key:'20',
                parameter:'showHeader',
                type:'boolean',
                must:'-',
                default:'true',
                instructions:'是否显示表头	'
            },
            {
                key:'21',
                parameter:'size',
                type:'string',
                must:'-',
                default:'default',
                instructions:'正常或迷你类型，default or small	'
            },
            {
                key:'22',
                parameter:'title',
                type:'Function(currentPageData)',
                must:'-',
                default:'-',
                instructions:'表格标题	'
            },
            {
                key:'23',
                parameter:'onChange',
                type:'Function(pagination, filters, sorter)',
                must:'-',
                default:'-',
                instructions:'分页、排序、筛选变化时触发'
            },
            {
                key:'24',
                parameter:'onExpand',
                type:'Function(expanded, record)',
                must:'-',
                default:'-',
                instructions:'点击展开图标时触发	'
            },
            {
                key:'25',
                parameter:'onExpandedRowsChange',
                type:'Function(expandedRows)	',
                must:'-',
                default:'-',
                instructions:'展开的行变化时触发	'
            },
            {
                key:'26',
                parameter:'onHeaderRow',
                type:'Function(column, index)',
                must:'-',
                default:'-',
                instructions:'设置头部行属性	'
            },
            {
                key:'27',
                parameter:'onRow',
                type:'Function(record, index)',
                must:'-',
                default:'-',
                instructions:'设置行属性'
            },
           
        ]
    },
    {
        title:'Column',
        api:[
            {
                key:'1',
                parameter:'align',
                type:"'left' | 'right' | 'center'",
                must:'-',
                default:'left',
                instructions:'设置列内容的对齐方式	'
            },
            {
                key:'2',
                parameter:'className',
                type:'string',
                must:'-',
                default:'-',
                instructions:'列的 className'
            },
            {
                key:'3',
                parameter:'colSpan',
                type:'number',
                must:'-',
                default:'-',
                instructions:'表头列合并,设置为 0 时，不渲染'
            },
            {
                key:'4',
                parameter:'dataIndex',
                type:'string',
                must:'-',
                default:'-',
                instructions:'列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法'
            },
            {
                key:'5',
                parameter:'filterDropdown',
                type:'ReactNode',
                must:'-',
                default:'-',
                instructions:'可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互'
            },
            {
                key:'6',
                parameter:'filterDropdownVisible',
                type:'boolean',
                must:'-',
                default:'-',
                instructions:'用于控制自定义筛选菜单是否可见'
            },{
                key:'7',
                parameter:'filtered',
                type:'boolean',
                must:'-',
                default:'false',
                instructions:'标识数据是否经过过滤，筛选图标会高亮'
            },
            {
                key:'8',
                parameter:'filteredValue',
                type:'string[]	',
                must:'-',
                default:'-',
                instructions:'筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组'
            },
            {
                key:'9',
                parameter:'filterIcon',
                type:'ReactNode|(filtered: boolean) => ReactNode',
                must:'-',
                default:'false',
                instructions:'自定义 filter 图标'
            },
            {
                key:'10',
                parameter:'filterMultiple',
                type:'boolean',
                must:'-',
                default:'true',
                instructions:'是否多选	'
            },
            {
                key:'11',
                parameter:'filters',
                type:'object[]	',
                must:'-',
                default:'-',
                instructions:'表头的筛选菜单项	'
            },
            {
                key:'12',
                parameter:'fixed',
                type:'boolean|object',
                must:'-',
                default:'false',
                instructions:"列是否固定，可选 true(等效于 left) 'left' 'right'"
            },
            {
                key:'13',
                parameter:'key',
                type:'string',
                must:'-',
                default:'-',
                instructions:'React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性'
            },
            {
                key:'14',
                parameter:'render',
                type:'Function(text, record, index) {}',
                must:'-',
                default:'-',
                instructions:'生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格行/列合并'
            },
            {
                key:'15',
                parameter:'sorter',
                type:'Function|boolean',
                must:'-',
                default:'-',
                instructions:'排序函数，本地排序使用一个函数(参考 Array.sort 的 compareFunction)，需要服务端排序可设为 true'
            },
            {
                key:'16',
                parameter:'sortOrder',
                type:'boolean|string',
                must:'-',
                default:'-',
                instructions:"排序的受控属性，外界可用此控制列的排序，可设置为 'ascend' 'descend' false"
            },
            {
                key:'17',
                parameter:'title',
                type:'string|ReactNode	',
                must:'-',
                default:'-',
                instructions:"列头显示文字"
            },
            {
                key:'18',
                parameter:'width',
                type:'string|number',
                must:'-',
                default:'-',
                instructions:"列宽度"
            },
            {
                key:'19',
                parameter:'onCell',
                type:'Function(record)	',
                must:'-',
                default:'-',
                instructions:"设置单元格属性"
            },
            {
                key:'20',
                parameter:'onFilter',
                type:'Function',
                must:'-',
                default:'-',
                instructions:"本地模式下，确定筛选的运行函数	"
            },
            {
                key:'21',
                parameter:'onFilterDropdownVisibleChange',
                type:'function(visible) {}',
                must:'-',
                default:'-',
                instructions:"自定义筛选菜单可见变化时调用	"
            },
            {
                key:'22',
                parameter:'onHeaderCell',
                type:'Function(column)	',
                must:'-',
                default:'-',
                instructions:"设置头部单元格属性"
            },


        ]
    },
    {
        title:'ColumnGroup',
        api:[
            {
                key:'1',
                parameter:'title',
                type:"string | ReactNode",
                must:'-',
                default:'-',
                instructions:'列头显示文字		'
            },
        ]
    },
    {
        title:'pagination',
        api:[
            {
                key:'1',
                parameter:'position',
                type:"'top'| 'bottom' | 'both' ",
                must:'-',
                default:'bottom',
                instructions:'指定分页显示的位置'
            },
        ]
    },
    {
        title:'rowSelection',
        api:[
            {
                key:'1',
                parameter:'columnWidth',
                type:"string | number",
                must:'-',
                default:'-',
                instructions:'自定义列表选择框宽度	'
            },
            {
                key:'2',
                parameter:'fixed',
                type:"boolean",
                must:'-',
                default:'-',
                instructions:'把选择框列固定在左边	'
            },
            {
                key:'3',
                parameter:'getCheckboxProps',
                type:"Function(record)",
                must:'-',
                default:'-',
                instructions:'选择框的默认属性配置	'
            },
            {
                key:'4',
                parameter:'hideDefaultSelections',
                type:"boolean",
                must:'-',
                default:'false',
                instructions:'去掉『全选』『反选』两个默认选项'
            },
            {
                key:'5',
                parameter:'selectedRowKeys',
                type:"string[]",
                must:'-',
                default:'[]',
                instructions:'指定选中项的 key 数组，需要和 onChange 进行配合'
            },
            {
                key:'6',
                parameter:'selections',
                type:"object[]|boolean",
                must:'-',
                default:'true',
                instructions:'自定义选择项 配置项, 设为 true 时使用默认选择项'
            },
            {
                key:'7',
                parameter:'type',
                type:"string",
                must:'-',
                default:'checkbox',
                instructions:'多选/单选，checkbox or radio'
            },
            
            {
                key:'8',
                parameter:'onChange',
                type:"Function(selectedRowKeys, selectedRows)",
                must:'-',
                default:'-',
                instructions:'选中项发生变化的时的回调	'
            },
            {
                key:'9',
                parameter:'onSelect',
                type:"Function(record, selected, selectedRows, nativeEvent)",
                must:'-',
                default:'-',
                instructions:'用户手动选择/取消选择某列的回调'
            },
            {
                key:'10',
                parameter:'onSelectAll',
                type:"Function(selected, selectedRows, changeRows)",
                must:'-',
                default:'-',
                instructions:'用户手动选择/取消选择所有列的回调'
            },
            {
                key:'11',
                parameter:'onSelectInvert',
                type:"Function(selectedRows)",
                must:'-',
                default:'-',
                instructions:'用户手动选择反选的回调'
            },
        ]
    },
    {
        title:'selection',
        api:[
            {
                key:'1',
                parameter:'key',
                type:"string",
                must:'-',
                default:'-',
                instructions:'React 需要的 key，建议设置'
            },
            {
                key:'2',
                parameter:'text',
                type:"string|React.ReactNode	",
                must:'-',
                default:'-',
                instructions:'选择项显示的文字	'
            },
            {
                key:'3',
                parameter:'onSelect',
                type:"Function(changeableRowKeys)",
                must:'-',
                default:'-',
                instructions:'选择项点击回调'
            },
        ]
    }
]

export default{
    api
}