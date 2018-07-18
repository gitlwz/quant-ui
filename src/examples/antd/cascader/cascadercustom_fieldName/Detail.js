import React, { Component } from 'react';
import { Cascader } from 'quant-ui';

const options = [{
    code: 'zhejiang',
    name: 'Zhejiang',
    items: [{
        code: 'hangzhou',
        name: 'Hangzhou',
        items: [{
            code: 'xihu',
            name: 'West Lake',
        }],
    }],
}, {
    code: 'jiangsu',
    name: 'Jiangsu',
    items: [{
        code: 'nanjing',
        name: 'Nanjing',
        items: [{
            code: 'zhonghuamen',
            name: 'Zhong Hua Men',
        }],
    }],
}];

function onChange(value) {
    console.log(value);
}

class Detail extends Component {
    render() {
        return (
            <Cascader
                options={options}
                onChange={onChange}
                placeholder="Please select"
                fieldNames={{ label: 'name', value: 'code', children: 'items' }}
            />
        );
    }
}
export default Detail;