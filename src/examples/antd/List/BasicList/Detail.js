//一次只能展示一个面板

import React, { Component } from 'react';
import { List, Avatar } from 'quant-ui';


const data = [
    {
        title: 'title 1 '
    },
    {
        title: 'title 2'
    },
    {
        title: 'title 3'
    },
]
class Detail extends Component {

    render() {
        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://hbimg.b0.upaiyun.com/296b1c5b3f0fc19508d31b2aaab0c01a1bed3e87135c4-qmnajD_fw658" />}
                            title={<a href="https://www.npmjs.com/package/quant-ui">{item.title}</a>}
                            description="new new new"
                        />
                    </List.Item>
                )}
            />
        );
    }
}
export default Detail;