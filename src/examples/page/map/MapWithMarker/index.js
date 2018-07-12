import React, { Component } from 'react';
import {ReactQMap} from 'quant-ui';

let classMap, windowMap;
class MapWithMarker extends Component {
    _getMap = (map, wMap) => {
        classMap = map;
        windowMap = wMap;
        this._setMarker();
    }
    _setMarker = () => {
        const marker = new windowMap.Marker({
          map: classMap,
          position: new windowMap.LatLng(30.53786, 104.07265),
          animation: windowMap.MarkerAnimation.DROP,
        });
        console.log(marker);
    }
    render() {
        return (
            <div style={{height:"500px"}}>
                <ReactQMap 
                    center={{latitude: 30.53786, longitude: 104.07265}} 
                    getMap={(map, wMap) => this._getMap(map, wMap)}
                    apiKey="UN6BZ-MP2W6-XWCSX-M2ATU-QORGZ-OWFOE"
                />
            </div>
        )
    }
}

export default MapWithMarker;