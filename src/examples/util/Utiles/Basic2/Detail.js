import React, { Component } from 'react';
import {utils} from 'quant-ui';
const {currency} = utils
class Detail extends Component {
	render() {
		return (
			<div>
				<h2>currency方法</h2>
				<h3>currency.add( value )</h3>
				<h3>currency.subtract( value )</h3>
				<h3>currency.multiply( number )</h3>
				<h3>currency.divide( number )</h3>
				<h3>currency.distribute( number )</h3>
				<h3>currency.format([ boolean ])</h3>
				<h3>currency.dollars</h3>
				<h3>currency.cents</h3>
			</div>
		);
	}
}
export default Detail;
