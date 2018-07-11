import React, { Component } from 'react';
import { QRCode } from 'quant-ui';
class QRCodeCode extends Component {

  render() {
    return (
      	<div>
            <QRCode value="https://www.baidu.com/"/>
     	</div>
    );
  }
}

export default QRCodeCode;
