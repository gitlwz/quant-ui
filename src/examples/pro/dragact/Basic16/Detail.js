import React, { Component } from 'react';
import  { GridContent } from "quant-ui";
  class ShowcaseLayout extends React.Component {
    renderItem = (l) => {
        switch (l.i) {
            case "0":
                return <span item ={l}>0</span>
                break;
            case "1":
                return <span item ={l}>1</span>
                break;
            case "2":
                return <span item ={l}>2</span>
                break;
            case "3":
                return <span item ={l}>3</span>
                break;
        }
    }
    render() {
      return (
        <div>
            <GridContent
                    name="cheshi"
                    titles={[1,2,3,4]}
                    defaultLayouts={
                        {
                            lg: [
                                { x: 0, y: 0, w: 12, h: 18, i: '0' },
                                { x: 12, y: 0, w: 4, h: 6, i: '1' },
                                { x: 12, y: 6, w: 4, h: 6, i: '2' },
                                { x: 12, y: 12, w: 4, h: 6, i: '3' },
                            ]
                        }
                    }
                    renderItem={this.renderItem}
                />
        </div>
      );
    }
  }
  
export default ShowcaseLayout;


