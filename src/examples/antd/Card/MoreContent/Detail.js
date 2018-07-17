import React, { Component } from 'react';
import { Card, Icon, Avatar } from 'quant-ui';

const { Meta } = Card;

class Detail extends Component {
    render() {
        return (
            <Card
                style={{ width: 300 }}
                cover={<img alt="example" src="http://img.zcool.cn/community/01e894577f210a0000018c1be8f9f9.png@1280w_1l_2o_100sh.png" />}
                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
                <Meta
                    avatar={<Avatar src="https://hbimg.b0.upaiyun.com/296b1c5b3f0fc19508d31b2aaab0c01a1bed3e87135c4-qmnajD_fw658" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        );
    }
}
export default Detail;