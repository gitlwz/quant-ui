import React, { Component } from 'react';
import { Table } from 'quant-ui';
const columns = [{
  title: '参数',
  dataIndex: 'parameter',
  key: 'parameter',
}, {
  title: '类型',
  dataIndex: 'type',
  key: 'type',
},
{
  title: '是否必须',
  dataIndex: 'must',
  key: 'must',
},{
  title: '默认值',
  dataIndex: 'default',
  key: 'default',
}, 
 {
  title: '说明',
  dataIndex: 'instructions',
  key: 'instructions',
}];

class API extends Component {
	render() {
		return (
                <div style={{marginTop:"30px",'backgroundColor':"#fff"}}>
                    <Table bordered pagination={false} dataSource={this.props.api} columns={columns} />
                </div>   
		 	)
	}
}

export default API;
