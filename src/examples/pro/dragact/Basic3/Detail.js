import React, { Component } from 'react';
import { Dragact } from 'quant-ui'
import  {Words}  from './largedata'
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
        </div>
    )
}


class Detail extends Component {
    render() {
        const margin = [5, 5];
        const dragactInit = {
            width: 500,
            col: 16,
            rowHeight: 45,
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
                        手机普通布局demo
                    </h1>
                    <Dragact
                        {...dragactInit}
                        placeholder={true}
                        style={{
                            background: '#003A8C'
                        }}
                    >
                        {(item,provided) => {
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
