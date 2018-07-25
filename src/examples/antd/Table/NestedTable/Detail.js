import React, { Component } from 'react';
import { Table, Icon, Badge, Menu, Dropdown } from 'quant-ui';
import './style.less'

const menu = (
    <Menu>
        <Menu.Item>
            Action 1
      </Menu.Item>
        <Menu.Item>
            Action 2
      </Menu.Item>
    </Menu>
);

const expandedRowRender = () => {
    const columns = [
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Status', key: 'state', render: () => <span><Badge status="success" />Finished</span> },
        { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
        {
          title: 'Action',
          dataIndex: 'operation',
          key: 'operation',
          render: () => (
            <span className="table-operation">
              <a href="javascript:;" className='a'>Pause</a>
              <a href="javascript:;"className='a'>Stop</a>
              <Dropdown overlay={menu}>
                <a href="javascript:;">
                  More <Icon type="down" />
                </a>
              </Dropdown>
            </span>
          ),
        },
      ];
  
      const data = [];
      for (let i = 0; i < 3; ++i) {
        data.push({
          key: i,
          date: '2014-12-24 23:12:00',
          name: 'This is production name',
          upgradeNum: 'Upgraded: 56',
        });
      }
      return (
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      );
}


const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation', render: () => <a href="javascript:;">Publish</a> },
];

const data = [];
for (let i = 0; i < 3; ++i) {
    data.push({
        key: i,
        name: 'Screem',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
    });
}


class Detail extends Component {
    render() {
        return (
            <Table
                className="components-table-demo-nested"
                columns={columns}
                expandedRowRender={expandedRowRender}
                dataSource={data}
            />
        )
    }
}

export default Detail;

