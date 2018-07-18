import React, { Component } from 'react';
import { DatePicker } from 'quant-ui';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}

class Detail extends Component {

    render() {
        return (
            <div>
                <DatePicker onChange={onChange} />
                <br /><br />
                <MonthPicker onChange={onChange} placeholder="Select month" />
                <br /><br />
                <RangePicker onChange={onChange} />
                <br /><br />
                <WeekPicker onChange={onChange} placeholder="Select week" />
            </div>
        );
    }
}
export default Detail;