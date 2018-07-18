import React, { Component } from 'react';
import { Checkbox } from 'quant-ui';
const CheckboxGroup = Checkbox.Group;

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
];

class Detail extends Component {
    render() {
        return (
            <div >
                <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
                <br /> <br />
                <CheckboxGroup options={options} defaultValue={['Pear']} onChange={onChange} />
                <br /> <br />
                <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={onChange} />
            </div >
        );
    }
}
export default Detail;