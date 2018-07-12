import React, { Component } from 'react';
import {ReactQMap} from 'quant-ui';

class MapWithSpot extends Component {
    render() {
        return (
            <div style={{height:"500px"}}>
            <ReactQMap 
                center={{latitude: 30.53786, longitude: 104.07265}} 
                mySpot={{latitude: 30.53786, longitude: 104.07265}}
                apiKey="UN6BZ-MP2W6-XWCSX-M2ATU-QORGZ-OWFOE"
            />
            </div>
        )
    }
}

export default MapWithSpot;