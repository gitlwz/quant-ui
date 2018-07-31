import React, { Component } from 'react';
import { BackTop } from 'quant-ui';
import './style.less'

class Detail extends Component {

    render() {
        return (
            <div>
                <BackTop style={{bottom:150}}>
                    <div className="ant-back-top-inner">UP</div>
                </BackTop>
                Scroll down to see the bottom-right
                <strong style={{ color: '#1088e9' }}> blue </strong>
                button.
                <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                    ...
                  <br />
                    Really
                  <br />...<br />...<br />...<br />
                    long
                  <br />...<br />...<br />...<br />...<br />...<br />...
                  <br />...<br />...<br />...<br />...<br />...<br />...
                  <br />...<br />...<br />...<br />...<br />...<br />...
                  <br />...<br />...<br />...<br />...<br />...<br />...
                  <br />...<br />...<br />...<br />...<br />...<br />...
                  <br />...<br />...<br />...<br />...<br />...<br />...
                  <br />...<br />...<br />...<br />...<br />...<br />
                    content
                </div>

            </div >
        );
    }
}

export default Detail;