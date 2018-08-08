import React, { Component } from 'react';
import { Row, Col, Card, Timeline, Icon, CountDown  } from "quant-ui"
class App extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div className="text1">{this.props.title}</div>
                <div className="text2">
                    <span>{this.props.number}</span>
                    <em className="textY">{this.props.unit}</em>
                </div>
            </div>
        );
    }
}

export default App;
