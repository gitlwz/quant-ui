import React, { Component } from 'react';
import { NumberInfo,utils  } from 'quant-ui';
const {currency} = utils
class Detail extends Component {

	render() {
		return (
			<div>
				<NumberInfo
				subTitle={<span>本周访问</span>}
				total={currency(12321).format()}
				status="up"
				subTotal={17.1}
				/>
			</div>
		);
	}
}
export default Detail;
