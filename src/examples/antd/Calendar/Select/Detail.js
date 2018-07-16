import React, { Component } from 'react';
import { Calendar, Alert } from 'quant-ui';
import moment from 'moment';


class Detail extends Component {
    state = {
        value: moment('1974-7-7'),
        selectedValue: moment('1974-7-7'),
    }

    onSelect = (value) => {
        this.setState({
            value,
            selectedValue: value,
        });
    }

    onPanelChange = (value) => {
        this.setState({ value });
    }

    render() {
        const { value, selectedValue } = this.state;
        return (
            <div>
                <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
                <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
            </div>
        );
    }
}
export default Detail;