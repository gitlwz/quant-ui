import React, { Component } from 'react';
import { Card,Button,Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Code from '../../Code.js';
import Detail from './Detail.js'; 
const TabPane = Tabs.TabPane;
class App extends Component {
  render() {
    return (
      	<div style={{padding:"20px"}}>
			<h1>webSocket链接</h1>
			<Tabs tabPosition={"right"}>
					<TabPane tab="基本用法" key="1">
						<Card >
							<Detail />
						</Card>
						<div style={{ marginTop: "30px" }}>
							<Code data={data} />
						</div>
					</TabPane>
					<TabPane tab="参数api" key="2">
						<Api data={data} />
					</TabPane>
				</Tabs>
     	</div>
    );
  }
}

export default App;
