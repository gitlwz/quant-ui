import React, { Component } from 'react';
import { DatePicker } from 'quant-ui';

import moment from 'moment';

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';

class Detail extends Component {

    render() {
        return (
            <div>
                <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
                <br /><br />
                <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
                <br /><br />
                <RangePicker
                    defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
                    disabled
                />
            </div>
        );
    }
}
export default Detail;