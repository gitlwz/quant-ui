import React, { Component } from 'react';
import { Card,Button } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Detail from './Detail.js'; 
class App extends Component {
  render() {
    return (
      	<div style={{padding:"20px"}}>
			<h1>右键复制</h1>
			<Card >
				<Detail/>
			</Card>
			<Api api={data.api}/>
     	</div>
    );
  }
}

export default App;
