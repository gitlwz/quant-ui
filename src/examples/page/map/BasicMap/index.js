import React, { Component } from 'react';
import {ReactQMap} from 'quant-ui';

class BasicMap extends Component {
    render() {
        return (
            <div style={{height:"500px"}}>
                <ReactQMap 
                    center={{latitude: 30.53786, longitude: 104.07265}} 
                    initialOptions={{zoomControl: true, mapTypeControl: true}} 
                    apiKey="UN6BZ-MP2W6-XWCSX-M2ATU-QORGZ-OWFOE"
                />
            </div>
        )
    }
}

export default BasicMap;