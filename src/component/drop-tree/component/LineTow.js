import React, { Component } from 'react';

export default class LineTow extends Component {
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
    lineTow = (lineNum) => {
        if (lineNum == 0) {
            return null;
        }
        let line = []
        for (let i = 0; i < lineNum * 2; i++) {
            if (i == 0) {
                line.push(
                    <td key = {"lineTd" + i} className="line left">&nbsp;</td>
                )
                continue;
            }
            if (i == (lineNum * 2 - 1)) {
                line.push(
                    <td key = {"lineTd" + i} className="line right">&nbsp;</td>
                )
                continue;
            }
            if (i % 2 == 0) { //偶数
                line.push(
                    <td key = {"lineTd" + i} className="line left top">&nbsp;</td>
                )
            } else {
                line.push(
                    <td key = {"lineTd" + i} className="line right top">&nbsp;</td>
                )
            }

        }
        return (
            <tr>
                {line}
            </tr>
        )
    }
    render() {
        return (
            this.lineTow(this.state.lineNum)
        )
    }
};
