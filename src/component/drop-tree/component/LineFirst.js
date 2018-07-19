import React, { Component } from 'react';

export default class LineFirst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lineNum: props.lineNum,
        };
    }
    componentWillReceiveProps = (nextProps) => {
      this.setState({
        lineNum:nextProps.lineNum
      })
    };
    lineFirst = (lineNum) => {
        if (lineNum == 0) {
            return null;
        }
        return (
            <tr>
                <td colSpan={lineNum * 2}>
                    <div className="line down"></div>
                </td>
            </tr>
        )
    }
    render() {
        return (
            this.lineFirst(this.state.lineNum)
        )
    }
};
