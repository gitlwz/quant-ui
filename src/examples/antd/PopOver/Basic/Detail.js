import React, { Component } from 'react';
import { Popover, Button } from 'quant-ui';

const content=(
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
)

class Detail extends Component {

	render() {
		return (
			<Popover content={content} title="Title">
                <Button type="primary">Hover me </Button>
            </Popover>
		);
	}
}
export default Detail;
