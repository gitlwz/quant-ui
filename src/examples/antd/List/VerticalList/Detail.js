import React, { Component } from 'react';
import { List, Avatar, Icon } from 'quant-ui';

const listData = [];
for (let i = 1; i < 30; i++) {
    listData.push({
        href: '#',
        title: `quant-ui ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'quant-ui',
        content: `flamingo-flamingo-flamingo,dog-dog-dog   `
    })
}

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class Detail extends Component {

    render() {
        return (
            <List
                itemLayout="vertical"
                size="middle"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 4,
                }}
                dataSource={listData}
                footer={<div><b>quant-ui</b> footer part</div>}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                        extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        );
    }
}
export default Detail;