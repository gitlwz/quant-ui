import React, { Component } from 'react';
import GridLayout  from "../react-grid-layout.min.js";
import "../styles.less"
class Detail extends Component {

	render() {
        // layout is an array of objects, see the demo for more complete usage
        var layout = [
          {i: 'a', x: 0, y: 0, w: 1, h: 2},
          {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
          {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];
        return (
          <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
            <div style={{border:"1px black solid"}} key="a">a</div>
            <div style={{border:"1px black solid"}} key="b">b</div>
            <div style={{border:"1px black solid"}} key="c">c</div>
          </GridLayout>
        )
      }
}
export default Detail;
