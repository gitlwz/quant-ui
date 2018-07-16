import React, { Component } from 'react';
import { BackTop } from 'quant-ui';
import "./style.less"
import history from "./history.js"
class Detail extends Component {
	
	render() {
		return (
			<div className="history">
                    {
                        history.map(({title,code})=>{
                            return(
                                <div>
                                    <h1>{title}</h1>
                                    <div dangerouslySetInnerHTML = {{__html:code}} ></div>
                                </div>
                            )
                        })
                    }
                    <BackTop visibilityHeight="1"/>
			</div>
		);
	}
}

export default Detail;
