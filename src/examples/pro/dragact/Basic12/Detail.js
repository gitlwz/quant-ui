import React, { Component } from 'react';
import "./style.less"
import _ from "lodash";
import  { ReactGridLayout } from "quant-ui";
const {WidthProvider} = ReactGridLayout
const ReactGridLayout2 = WidthProvider(ReactGridLayout);


class DynamicMinMaxLayout extends React.PureComponent {
    static defaultProps = {
        isDraggable: true,
        isResizable: true,
        items: 20,
        rowHeight: 30,
        onLayoutChange: function () { },
        cols: 12
    };

    generateDOM() {
        // Generate items with properties from the layout, rather than pass the layout directly
        const layout = this.generateLayout();
        return _.map(layout, function (l) {
            return (
                <div key={l.i} data-grid={l}>
                    <span className="text">{l.i}</span>
                </div>
            );
        });
    }

    generateLayout() {
        const p = this.props;
        return _.map(new Array(p.items), function (item, i) {
            const w = _.random(1, 2);
            const h = _.random(1, 3);
            return {
                x: (i * 2) % 12,
                y: Math.floor(i / 6),
                w: w,
                h: h,
                i: i.toString()
            };
        });
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
    }

    onResize(layout, oldLayoutItem, layoutItem, placeholder) {
       

        if (layoutItem.h < 3 && layoutItem.w > 2) {
            layoutItem.w = 2;
            placeholder.w = 2;
        }

        if (layoutItem.h >= 3 && layoutItem.w < 2) {
            layoutItem.w = 2;
            placeholder.w = 2;
        }
    }

    render() {
        return (
            <ReactGridLayout2
                onLayoutChange={this.onLayoutChange}
                onResize={this.onResize}
                {...this.props}
            >
                {this.generateDOM()}
            </ReactGridLayout2>
        );
    }
}

export default DynamicMinMaxLayout;

