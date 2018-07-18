import React, { Component } from 'react';
import { Checkbox } from 'quant-ui';

function onChange(e) {
    console.log('checked =' + e.target.checked);
}
class Detail extends Component {
    render() {
        return (
            <div>
                <Checkbox defaultChecked={false} disabled />
                <br />
                <Checkbox defaultChecked disabled />
            </div>
        );
    }
}
export default Detail;