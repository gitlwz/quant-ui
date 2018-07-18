import React, { Component } from 'react';
import { List, Card} from 'quant-ui';

const listData = [
    {
        title:'title 1'
    },
    {
        title:'title 2'
    },
    {
        title:'title 3'
    }
];

class Detail extends Component {

    render() {
        return (
            <List
                grid={{gutter:16,column:3}}
                dataSource={listData}
                footer={<div><b>quant-ui</b> footer part</div>}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.title}>card content</Card>
                    </List.Item>
                )}
            />
        );
    }
}
export default Detail;