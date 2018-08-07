import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon,Avatar } from 'quant-ui';
import './style.less';
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

class App extends Component {
    render() {
        return (
            <div className="team"> 
                <ul>
                    <li><Link to=""><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /><font color="gray">科学搬砖组</font></Link></li>
                    <li><Link to=""><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /><font color="gray">程序员日常</font></Link></li>
                    <li><Link to=""><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /><font color="gray">设计天团</font></Link></li>
                    <li><Link to=""><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /><font color="gray">中二少女</font></Link></li>
                    <li><Link to=""><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /><font color="gray">骗你学计算机</font></Link></li>
                </ul>
            </div>
        );
    }
}

export default App;