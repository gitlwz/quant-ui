import React, { Component } from 'react';
import { Result } from 'quant-ui';

class Detail extends Component {

    render() {
        return (
            <Result
                type="success"
                title={<div style={{ background: '#7dbcea', color: '#fff' }}>标题</div>}
                description={<div style={{ background: 'rgba(16, 142, 233, 1)', color: '#fff' }}>结果描述</div>}
                extra="其他补充信息，自带灰底效果"
                actions={<div style={{ background: '#3ba0e9', color: '#fff' }}>操作建议，一般放置按钮组</div>}
            />

        );
    }
}
export default Detail;
