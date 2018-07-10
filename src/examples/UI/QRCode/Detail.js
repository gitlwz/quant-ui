import React, { Component } from 'react';
import { QRCode } from 'quant-ui';
import data from './api.js';
import Code from '../../Code.js';
class QRCodeCode extends Component {

  render() {
    return (
      	<div>
            <QRCode value="https://www.baidu.com/"/>
            <Code code={data.code}/>
     	</div>
    );
  }
}

export default QRCodeCode;
