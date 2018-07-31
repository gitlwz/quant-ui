import React, { Component } from 'react';
import { BackTop } from 'quant-ui';


class Detail extends Component {

    render() {
        return (
            <div>
                <BackTop />
                Scroll down to see the bottom-right
                <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
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

            </div>
        );
    }
}

export default Detail;