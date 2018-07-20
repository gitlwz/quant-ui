import React, { Component } from 'react';
import { Rate  } from 'quant-ui';

class Detail extends Component {

	render() {
		return (
			<Rate allowHalf defaultValue={2.5} />
		);
	}
}

export default Detail;
