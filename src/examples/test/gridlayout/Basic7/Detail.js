import React, { Component } from 'react';
import RGL, { WidthProvider } from "../react-grid-layout.min.js";
import "../styles.less"
import "./style.less"
import _ from "lodash";
const ReactGridLayout = WidthProvider(RGL);
class Detail extends Component {
    constructor(props) {
        super(props);

        this.onLayoutChange = this.onLayoutChange.bind(this);
    }

    onLayoutChange(layout) {

    }

    render() {
        return (
            <ReactGridLayout
                className="layout"
                onLayoutChange={this.onLayoutChange}
                rowHeight={30}
                draggableHandle =  ".react-grid-dragHandleExample"
            >
                <div key="1" data-grid={{ x: 0, y: 0, w: 2, h: 3 }}>
                    <span className="text">1</span>
                </div>
                <div key="2" data-grid={{ x: 2, y: 0, w: 4, h: 3, static: true }}>
                    <span className="text">2 - Static</span>
                </div>
                <div key="3" data-grid={{ x: 6, y: 0, w: 2, h: 3 }}>
                    <span className="text">3</span>
                </div>
                <div
                    key="4"
                    data-grid={{
                        x: 8,
                        y: 0,
                        w: 4,
                        h: 3,
                        
                    }}
                >
                    <span className="text">
                        <div className="react-grid-draggableCancelExample">
                        4 - Draggable with Handle
                        </div>
                        <hr />
                        <hr />
                        <span className="react-grid-dragHandleExample">[DRAG HERE]</span>
                        <hr />
                        <hr />
                    </span>
                </div>
            </ReactGridLayout>
        );
    }
}

export default Detail;
