import React, { Component } from 'react';
import { Mention } from 'quant-ui';

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
class Detail extends Component {
	state = {
		suggestions: [],
		loading: false,
	}

	fetchSuggestions = (value, callback) => {
		setTimeout(() => {
			callback(users.filter(item => item.indexOf(value) !== -1));
		}, 500);
	}

	onSearchChange = (value) => {
		this.fetchSuggestions(value, (suggestions) => {
			this.setState({
				suggestions,
				loading: false,
			});
		});
		this.setState({
			loading: true,
		});
	}

	render() {
		const { suggestions, loading } = this.state;
		return (
			<Mention
				style={{ width: '100%' }}
				loading={loading}
				suggestions={suggestions}
				onSearchChange={this.onSearchChange}
			/>
		);
	}
}

export default Detail;
