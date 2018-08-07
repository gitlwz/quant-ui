import React, { Component } from 'react';
import { Row, Col, Card } from 'quant-ui';
import "./index.less";
import Top from './top.js';
import Bottom from './bottom.js';
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Card>
                    <Top />
                </Card>
                <Card>
                    <Bottom />
                </Card>
            </div>
        );
    }
}

export default App;
