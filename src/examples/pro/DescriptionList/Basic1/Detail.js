import React, { Component } from 'react';
import { DescriptionList } from 'quant-ui';
const { Description } = DescriptionList;

class Detail extends Component {

	render() {
		return (
			<DescriptionList size="large" title="title">
				<Description term="Firefox">
					A free, open source, cross-platform,
					graphical web browser developed by the
					Mozilla Corporation and hundreds of
					volunteers.
   				 </Description>
				<Description term="Firefox">
					A free, open source, cross-platform,
					graphical web browser developed by the
					Mozilla Corporation and hundreds of
					volunteers.
    			</Description>
				<Description term="Firefox">
					A free, open source, cross-platform,
					graphical web browser developed by the
					Mozilla Corporation and hundreds of
					volunteers.
    			</Description>
			</DescriptionList>
		);
	}
}
export default Detail;
