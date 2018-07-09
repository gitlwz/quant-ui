import React, { Component } from 'react';
import { Link } from 'dva/router';
import Exception from '../component/Exception'
class CCC extends Component {
  render() {
    return (
      <div>
          <Exception  type="403" />
      </div>
    );
  }
}

export default CCC;
