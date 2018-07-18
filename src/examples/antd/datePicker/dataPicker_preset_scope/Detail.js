import React, { Component } from 'react';
import { DatePicker } from 'quant-ui';

import moment from 'moment';

const RangePicker = DatePicker.RangePicker;

function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

class Detail extends Component {
    render() {
        return (
            <div>
                <RangePicker
                    ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                    onChange={onChange}
                />
                <br /><br />
                <RangePicker
                    ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                    showTime
                    format="YYYY/MM/DD HH:mm:ss"
                    onChange={onChange}
                />
            </div>
        );
    }
}
export default Detail;