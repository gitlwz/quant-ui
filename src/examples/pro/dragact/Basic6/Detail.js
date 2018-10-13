import React, { Component } from 'react';
import { Dragact } from 'quant-ui'
import './index.less';
const Words = [
    { content: 'You can do anything, but not everything.' },
    { content: 'Those who dare to fail miserably can achieve greatly.' },
    { content: 'You miss 100 percent of the shots you never take.' },
    { content: 'Those who believe in telekinetics, raise my hand.' },
    { content: 'I’d rather live with a good question than a bad answer.' }
]

export const Card  = ({ item, provided }) => {
    return (
        <div
            className='layout-Item'
            {...provided.props}
            {...provided.dragHandle}
            style={{
                ...provided.props.style,
                background: provided.isDragging ? '#eaff8f' : 'white'
            }}
        >
            <div
                style={{ padding: 5, textAlign: 'center', color: '#595959' }}
            >
                <span>title</span>
                <div style={{ borderBottom: '1px solid rgba(120,120,120,0.1)' }} />
                {item.content}
            </div>
            <span
                {...provided.resizeHandle}
                style={{
                    position: 'absolute',
                    width: 10, height: 10, right: 2, bottom: 2, cursor: 'se-resize',
                    borderRight: '2px solid rgba(15,15,15,0.2)',
                    borderBottom: '2px solid rgba(15,15,15,0.2)'
                }}
            />
        </div>
    )
}

const fakeData = () => {
    var Y = 0;

    return Words.map((item, index) => {
        if (index % 4 === 0) Y++;
        return { ...item, GridX: index % 4 * 4, GridY: Y * 4, w: 4, h: 2, key: index + '' }
    })
}
var storeLayout;
class Detail extends Component {
    constructor(props){
        super(props);
        this.dragactNode = null
    }
    handleOnDragEnd = () => {
        const newLayout = this.dragactNode.getLayout();
        const parsedLayout = JSON.stringify(newLayout);

        localStorage.setItem('layout', parsedLayout);
    }
    componentWillMount() {
        const lastLayout = localStorage.getItem('layout');
        if (lastLayout) {
            storeLayout = JSON.parse(lastLayout);
        }
    }

    renderDragact = () => {
        const margin = [5, 5];
        const dragactInit = {
            width: 600,
            col: 12,
            rowHeight: 800 / 12,
            margin: margin,
            className: 'normal-layout',
            layout: storeLayout?storeLayout: fakeData(),
            placeholder: true
        }

        return (
            <Dragact
                {...dragactInit}
                ref={node => node ? this.dragactNode = node:null}
                onDragEnd={this.handleOnDragEnd}

            >
                {(item, provided) => {
                    return <Card item={item} provided={provided} />
                }}
            </Dragact>
        )
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                    <h1 style={{ textAlign: 'center' }}>存储布局 Demo</h1>
                    {this.renderDragact()}
                </div>
            </div>
        )
    }
}
export default Detail;
