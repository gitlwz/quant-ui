import React, { Component } from 'react';
import  { ReactGridLayout } from "quant-ui";
import "./style.less"
import _ from "lodash";
const {WidthProvider} = ReactGridLayout
const ReactGridLayout2 = WidthProvider(ReactGridLayout);
class Detail extends Component {
    static defaultProps = {
        className: "layout",
        isDraggable: false,
        isResizable: false,
        items: 50,
        cols: 12,
        rowHeight: 30,
        onLayoutChange: function() {}
      };
    
      constructor(props) {
        super(props);
    
        const layout = this.generateLayout();
        this.state = { layout };
      }
    
      generateDOM() {
        return _.map(_.range(this.props.items), function(i) {
          return (
            <div key={i}>
              <span className="text">{i}</span>
            </div>
          );
        });
      }
    
      generateLayout() {
        const p = this.props;
        return _.map(new Array(p.items), function(item, i) {
          var y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
          return {
            x: (i * 2) % 12,
            y: Math.floor(i / 6) * y,
            w: 2,
            h: y,
            i: i.toString()
          };
        });
      }
    
      onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
      }
    
      render() {
        return (
          <ReactGridLayout2
            layout={this.state.layout}
            onLayoutChange={this.onLayoutChange}
            {...this.props}
          >
            {this.generateDOM()}
          </ReactGridLayout2>
        );
      }
}

export default Detail;
