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
    },
    {
        title:'title 4'
    },
    {
        title:'title 5'
    },
    {
        title:'title 6'
    }
];

class Detail extends Component {

    render() {
        return (
            <List
                grid={{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3}}
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