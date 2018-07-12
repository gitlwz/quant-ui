import React, { Component } from 'react';
import {Button, Nprogress } from 'quant-ui';
class NProgressCode extends Component {
	nprogressStart = () => {
        Nprogress.start();
    };
    nprogressDone = () => {
        Nprogress.done();
    };
	render() {
		return (
			<div>
				<p>
					<Button icon="caret-right" onClick={this.nprogressStart} />
					<span> Nprogress.start() — 显示进度条</span>
				</p>
				<p style={{marginTop: 20}}>
					<Button icon="caret-right" onClick={this.nprogressDone} />
					<span>  Nprogress.done() — 进度条完成</span>
				</p>
			</div>
		);
	}
}

export default NProgressCode;
