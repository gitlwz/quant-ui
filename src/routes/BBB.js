import React, { Component } from 'react';
import { Link } from 'dva/router';
import Exception from '../component/Exception'
class CCC extends Component {
    onClick = () => {
        this.props.dispatch({
            type:"bbb/ajax"
        })
    }
    render() {
        return (
            <div onClick={this.onClick}>
                sssssssssss
      </div>
        );
    }
}

export default CCC;
