import React, { Component } from 'react'
import Icon from "../icon";
import screenfull from "../screenfull";
export class index extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    screenFull = () => {
        if (screenfull.enabled) {
            if (screenfull.isFullscreen) {
                screenfull.exit();
            } else {
                screenfull.request(this.refs["content"]);
            }
        }
    }
    render() {
        return (
            <div className="hover-shadow quant-gridcard">
                <div className="quant-gridcard-dragHandle ">
                    <span className="quant-gridcard-title react-grid-dragHandle">{this.props.title}</span>
                    <div className="quant-gridcard-controls">
                        <Icon onClick={this.screenFull} style={{cursor: 'pointer'}} type="fullscreen" theme="outlined" />
                        <Icon onClick={this.props.onClose} style={{marginLeft:"8px",cursor: 'pointer'}} type="close" theme="outlined" />
                    </div>
                </div>
                <div ref="content" className="quant-gridcard-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default index
