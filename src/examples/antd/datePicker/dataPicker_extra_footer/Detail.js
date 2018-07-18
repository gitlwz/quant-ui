import React, { Component } from 'react';
import { DatePicker } from 'quant-ui';

const { RangePicker, MonthPicker } = DatePicker;

class Detail extends Component {
    render() {
        return (
            <div>
                <DatePicker renderExtraFooter={() => 'extra footer'} />
                &nbsp;
                <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
                <br /><br />
                <RangePicker renderExtraFooter={() => 'extra footer'} />
                <br /><br />
                <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
                <br /><br />
                <MonthPicker renderExtraFooter={() => 'extra footer'} placeholder="Select month" />
            </div>
        );
    }
}
export default Detail;