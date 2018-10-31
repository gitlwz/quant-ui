import React, { Component } from 'react';
import { getFromLS, saveToLS } from "../_utils/utils"
import map from "lodash/map"
import GridCard from "./GridCard.js"
import ReactGridLayout from "../react-grid-layout";
import  Button  from "../button"
import "./index.less";
const {WidthProvider,Responsive} = ReactGridLayout;
const ResponsiveReactGridLayout = WidthProvider(Responsive);
class Index extends Component {
    static defaultProps  = {
        onLayoutChange:()=>{}
    }
    constructor(props) {
        super(props)
        this.state = {
            currentBreakpoint: "lg",
            toolbox: JSON.parse(JSON.stringify(this.getToolboxs())),
            layouts: JSON.parse(JSON.stringify(this.getLayouts(this.props.defaultLayouts)))
        }
    }
    //还原布局
    rollback = () => {
        let layouts =  this.props.defaultLayouts;
        if (!layouts.md) {
            layouts.md = layouts.lg;
        }
        if (!layouts.sm) {
            layouts.sm = layouts.md;
        }
        if (!layouts.xs) {
            layouts.xs = layouts.sm;
        }
        this.setState({
            toolbox:[],
            layouts:layouts
        })
        saveToLS(this.props.name, layouts);
        saveToLS(this.props.name + "-toolbox", []);
    }
    getLayouts = (defaultLayouts) => {
        let locasdata = getFromLS(this.props.name)
        let layouts = locasdata || defaultLayouts;
        if (!layouts.md) {
            layouts.md = layouts.lg;
        }
        if (!layouts.sm) {
            layouts.sm = layouts.md;
        }
        if (!layouts.xs) {
            layouts.xs = layouts.sm;
        }
        if (!locasdata) {
            saveToLS(this.props.name, layouts);
        }
        return layouts
    }
    getToolboxs = () => {
        return getFromLS(this.props.name + "-toolbox") || [];
    }
    onLayoutChange = (layout, layouts) => {
        saveToLS(this.props.name, layouts);
        this.setState({ layouts });
        this.props.onLayoutChange(layout, layouts)
    }
    //删除
    onPutItem = item => {
        this.setState(prevState => {
            let toolbox = [
                ...prevState.toolbox,
                item
            ]
            saveToLS(this.props.name + "-toolbox", toolbox);
            return {
                toolbox: toolbox,
                layouts: {
                    ...prevState.layouts,
                    ["lg"]: prevState.layouts[
                        "lg"
                    ].filter(({ i }) => i !== item.i),
                    ["md"]: prevState.layouts[
                        "md"
                    ].filter(({ i }) => i !== item.i),
                    ["sm"]: prevState.layouts[
                        "sm"
                    ].filter(({ i }) => i !== item.i),
                    ["xs"]: prevState.layouts[
                        "xs"
                    ].filter(({ i }) => i !== item.i)
                }
            };
        });
    }
    //添加
    onTakeItem = item => {
        this.setState(prevState => {
            let toolbox = prevState.toolbox.filter((ele)=>ele.i !==item.i);
            saveToLS(this.props.name + "-toolbox", toolbox);
            return {
                toolbox: toolbox,
                layouts: {
                    ...prevState.layouts,
                    ["lg"]: [
                        ...prevState.layouts["lg"],
                        item
                    ],
                    ["md"]: [
                        ...prevState.layouts["md"],
                        item
                    ],
                    ["sm"]: [
                        ...prevState.layouts["sm"],
                        item
                    ],
                    ["xs"]: [
                        ...prevState.layouts["xs"],
                        item
                    ]
                }
            }

        });
    };
    renderItem = () => {
        return map(this.state.layouts[this.state.currentBreakpoint], l => {
            return (
                <div key={l.i} >
                    <GridCard key={l.i} title={this.props.titles[l.i]} onClose={() => this.onPutItem(l)}>
                        {this.props.renderItem(l)}
                    </GridCard>
                </div>
            );
        });
    }
    onBreakpointChange = (breakpoint) => {
        this.setState(prevState => ({
            currentBreakpoint: breakpoint,
        }));
    }
    render() {
        let item = this.state.toolbox || []
        return (
            <div>
                <div className="react-grid-buttons">
                    {item.map((ele, index, arr) => {
                        return <Button type="dashed" key={ele.i} onClick={() => this.onTakeItem(ele)}>{this.props.titles[ele.i]}</Button>
                    })}
                    <Button onClick={this.rollback} icon="rollback" style={{marginRight:"10px",float:"right"}}>还原布局</Button>
                    <div style={{clear:"both"}}></div>
                </div>
                <ResponsiveReactGridLayout
                    className="layout"
                    cols={this.props.cols || { lg: 16, md: 12, sm: 8, xs: 4, xxs: 2 }}
                    rowHeight={this.props.rowHeight || 32}
                    onBreakpointChange={this.onBreakpointChange}
                    layouts={this.state.layouts}
                    draggableHandle=".react-grid-dragHandle"
                    onLayoutChange={(layout, layouts) =>
                        this.onLayoutChange(layout, layouts)
                    }
                >
                    {this.renderItem()}
                </ResponsiveReactGridLayout>
            </div>

        );
    }
}
export default Index