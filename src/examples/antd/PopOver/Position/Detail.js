import React, { Component } from 'react';
import { Popover, Button } from 'quant-ui';

const title = <span>Title</span>

const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
)

const ButtonWidth=70;

const style={margin:10}

class Detail extends Component {

    render() {
        return (
            <div className="demo">
                <div>click us</div>
                <div style={{ marginLeft: ButtonWidth, whiteSpace: 'nowrap' }}>
                    <Popover placement="topLeft" title={title} content={content} trigger="click">
                        <Button style={style}>TL</Button>
                    </Popover>
                    <Popover placement="top" title={title} content={content} trigger="click">
                        <Button style={style}>Top</Button>
                    </Popover>
                    <Popover placement="topRight" title={title} content={content} trigger="click">
                        <Button style={style}>TR</Button>
                    </Popover>
                </div>
                <div style={{ width: ButtonWidth, float: 'left' }}>
                    <Popover placement="leftTop" title={title} content={content} trigger="click">
                        <Button style={style}>LT</Button>
                    </Popover>
                    <Popover placement="left" title={title} content={content} trigger="click">
                        <Button style={style}>Left</Button>
                    </Popover>
                    <Popover placement="leftBottom" title={title} content={content} trigger="click">
                        <Button style={style}>LB</Button>
                    </Popover>
                </div>
                <div style={{ width: ButtonWidth, marginLeft: (ButtonWidth * 4) + 24 }}>
                    <Popover placement="rightTop" title={title} content={content} trigger="click">
                        <Button style={style}>RT</Button>
                    </Popover>
                    <Popover placement="right" title={title} content={content} trigger="click">
                        <Button style={style}>Right</Button>
                    </Popover>
                    <Popover placement="rightBottom" title={title} content={content} trigger="click">
                        <Button style={style}>RB</Button>
                    </Popover>
                </div>
                <div style={{ marginLeft: ButtonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                    <Popover placement="bottomLeft" title={title} content={content} trigger="click">
                        <Button style={style}>BL</Button>
                    </Popover>
                    <Popover placement="bottom" title={title} content={content} trigger="click">
                        <Button style={style}>Bottom</Button>
                    </Popover>
                    <Popover placement="bottomRight" title={title} content={content} trigger="click">
                        <Button style={style}>BR</Button>
                    </Popover>
                </div>
            </div>
        );
    }
}
export default Detail;
