import React, { Component } from 'react';
import { Dragact } from 'dragact'

import './index.less'

const Words = [
    { content: 'You can do anything, but not everything.' },
    { content: 'Those who dare to fail miserably can achieve greatly.' },
    { content: 'You miss 100 percent of the shots you never take.' },
    { content: 'Those who believe in telekinetics, raise my hand.' },
    { content: 'I’d rather live with a good question than a bad answer.' }
]

const fakeData = () => {
    var Y = 0
    return Words.map((item, index) => {
        if (index % 4 === 0) Y++
        return {
            ...item,
            GridX: (index % 4) * 4,
            GridY: Y * 4,
            w: 4,
            h: 2,
            key: index + ''
        }
    })
}


const Card = ({ item, provided }) => {
    if (item.key !== '3') {
        return (
            <div
                className="layout-Item"
                {...provided.props}
                {...provided.dragHandle}
            >
                <div
                    style={{
                        padding: 5,
                        textAlign: 'center',
                        color: '#595959'
                    }}
                >
                    {item.content}
                </div>
            </div>
        )
    }
    return (
        <div className="layout-Item" {...provided.props}>
            <div style={{ padding: 5, textAlign: 'center', color: '#595959' }}>
                {item.content}
                <div className="card-handle" {...provided.dragHandle}>
                    点我拖动
                </div>
            </div>
        </div>
    )
}


class Detail extends Component {
    render() {
        const margin = [5, 5]
        const dragactInit = {
            width: 600,
            col: 12,
            rowHeight: 800 / 12,
            margin: margin,
            className: 'normal-layout',
            layout: fakeData(),
            placeholder: true
        }
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <h1 style={{ textAlign: 'center' }}>拖拽把手 Demo</h1>
                        <Dragact {...dragactInit}>
                            {(
                                item,
                                provided
                            ) => {
                                return <Card item={item} provided={provided} />
                            }}
                        </Dragact>
                    </div>
                </div>
            </div>
        )
    }
}
export default Detail;
