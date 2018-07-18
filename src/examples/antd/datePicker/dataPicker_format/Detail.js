import React, { Component } from 'react';
import { DatePicker } from 'quant-ui';
import moment from 'moment';
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
class Detail extends Component {

    render() {
        return (
            <div>
                <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                <br /><br />
                <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
                <br /><br />
                <RangePicker
                    defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                    format={dateFormat}
                />
            </div>
        );
    }
}
export default Detail;