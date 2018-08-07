import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'quant-ui';
import './style.less';
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

class App extends Component {
    render() {
        return (
            <div className="quickstart"> 
                <ul>
                    <li><Link to=""><font color="gray">操作一</font></Link></li>
                    <li><Link to=""><font color="gray">操作二</font></Link></li>
                    <li><Link to=""><font color="gray">操作三</font></Link></li>
                    <li><Link to=""><font color="gray">操作四</font></Link></li>
                    <li><Link to=""><font color="gray">操作五</font></Link></li>
                    <li><Link to=""><font color="gray">操作六</font></Link></li>
                </ul>
            </div>
        );
    }
}

export default App;