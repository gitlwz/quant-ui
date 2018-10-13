import React, { Component } from 'react';
import { Dragact } from 'quant-ui'
import  {Words}  from './largedata'
import './index.less';

const fakeData = () => {
    var Y = 0;
    return Words.map((item, index) => {
        if (index % 4 === 0) Y++;

        return { ...item, GridX: index % 4 * 4, GridY: Y * 4, w: 4, h: 3, key: index + '' }
    })
}


const Card = ({ item, provided }) => {
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


class Detail extends Component {
    render() {
        const margin = [5, 5];
        const dragactInit = {
            width: 600,
            col: 16,
            rowHeight: 40,
            margin: margin,
            className: 'normal-layout',
            layout: fakeData()
        }
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <div>
                    <h1 style={{ textAlign: 'center' }}>
                        普通布局demo
                    </h1>
                    <Dragact
                        {...dragactInit}
                        placeholder={false}
                        style={{
                            background: '#003A8C'
                        }}
                    >
                        {(item, provided) => {
                            return <Card
                                item={item}
                                provided={provided}
                            />
                        }}
                    </Dragact>
                </div>
            </div>
        )
    }
}
export default Detail;
