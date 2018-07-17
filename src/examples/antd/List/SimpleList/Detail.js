import React, { Component } from 'react';
import { List } from 'quant-ui';


const data = [
    'dog,dog,dog',
    'cat,cat,cat',
    'flamingo,flamingo,flamingo'
]
class Detail extends Component {

    render() {
        return (
            < div >
                <h3 style={{ marginBottom: 16 }}>Default Size</h3>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
                <h3 style={{ margin: '16px 0' }}>Small Size</h3>
                <List
                    size="small"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
                <h3 style={{ margin: '16px 0' }}>Large Size</h3>
                <List
                    size="large"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div >
        );
    }
}
export default Detail;