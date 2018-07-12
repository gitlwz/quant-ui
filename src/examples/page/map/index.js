import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
import Detail from './Detail.js';

import BasicMap from './BasicMap';
import BasicMapApi from './BasicMap/BasicMapApi';

import MapWithSpot from './MapWithSpot';
import MapWithSpotApi from './MapWithSpot/MapWithSpotApi';

import MapWithMarker from './MapWithMarker';
import MapWithMarkerApi from './MapWithMarker/MapWithMarkerApi';

import MapWithGeolocation from './MapWithGeolocation';
import MapWithGeolocationApi from './MapWithGeolocation/MapWithGeolocationApi';

import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>腾讯地图</h1>
                <h3>
					有了初始化的地图，获取到地图对象之后，就可以按照官网提供的资料随心所欲了。
					<p>更多关于API的操作请查看腾讯地图<a href="http://lbs.qq.com/javascript_v2/doc/index.html#g0">官网</a></p>
				</h3>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本用法" key="1">
                        <Card >
                            <BasicMap />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicMapApi} />
                        </div>
                    </TabPane>
                    <TabPane tab="附带定位地图" key="2">
                        <Card >
                            <MapWithSpot />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={MapWithSpotApi} />
                        </div>
                    </TabPane>
                    <TabPane tab="附带标记地图" key="3">
                        <Card >
                            <MapWithMarker />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={MapWithMarkerApi} />
                        </div>
                    </TabPane>
                    <TabPane tab="中心点地图" key="4">
                        <Card >
                           <Detail />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={data} />
                        </div>
                    </TabPane>

                    <TabPane tab="浏览器定位地图" key="5">
                        <Card >
                           <MapWithGeolocation />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={MapWithGeolocationApi} />
                        </div>
                    </TabPane>
                    
                    <TabPane tab="参数api" key="6">
                        <Api data={data} />
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
