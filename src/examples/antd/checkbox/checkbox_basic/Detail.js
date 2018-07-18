import React, { Component } from 'react';
import { Checkbox } from 'quant-ui';

function onChange(e) {
    console.log('checked ='+e.target.checked);
}
class Detail extends Component {
    render() {
        return (
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
        );
    }
}
export default Detail;