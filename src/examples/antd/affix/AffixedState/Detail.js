import React, { Component } from 'react';
import { Button, Affix } from 'quant-ui';
class Detail extends Component {

	render() {
		return (
		<Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
			<Button>120px to affix top</Button>
		</Affix>
		);
	}
}
export default Detail;
