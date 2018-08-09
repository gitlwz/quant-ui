import React, { Component } from 'react';
import { NumberInfo,utils  } from 'quant-ui';
const {currency} = utils
class Detail extends Component {

	render() {
		return (
			<div>
				<NumberInfo
                title="本周访问"
				subTitle={<span>子标题</span>}
				total={currency(12321).format()}
                status="up"
                subTotal={17.1}
				/>
			</div>
		);
	}
}
export default Detail;
