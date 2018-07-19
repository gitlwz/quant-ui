import React, { Component } from 'react';
import { Tooltip, Button } from 'quant-ui';

const title = <span>Prompt text</span>

const ButtonWidth = 70;

const style = { margin: 10 }

class Detail extends Component {

    render() {
        return (
            <div className="demo">
                <div>click us</div>
                <div style={{ marginLeft: ButtonWidth, whiteSpace: 'nowrap' }}>
                    <Tooltip placement="topLeft" title={title}  >
                        <Button style={style}>TL</Button>
                    </Tooltip>
                    <Tooltip placement="top" title={title}  >
                        <Button style={style}>Top</Button>
                    </Tooltip>
                    <Tooltip placement="topRight" title={title}  >
                        <Button style={style}>TR</Button>
                    </Tooltip>
                </div>
                <div style={{ width: ButtonWidth, float: 'left' }}>
                    <Tooltip placement="leftTop" title={title}  >
                        <Button style={style}>LT</Button>
                    </Tooltip>
                    <Tooltip placement="left" title={title}  >
                        <Button style={style}>Left</Button>
                    </Tooltip>
                    <Tooltip placement="leftBottom" title={title}  >
                        <Button style={style}>LB</Button>
                    </Tooltip>
                </div>
                <div style={{ width: ButtonWidth, marginLeft: (ButtonWidth * 4) + 24 }}>
                    <Tooltip placement="rightTop" title={title}  >
                        <Button style={style}>RT</Button>
                    </Tooltip>
                    <Tooltip placement="right" title={title}  >
                        <Button style={style}>Right</Button>
                    </Tooltip>
                    <Tooltip placement="rightBottom" title={title}  >
                        <Button style={style}>RB</Button>
                    </Tooltip>
                </div>
                <div style={{ marginLeft: ButtonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                    <Tooltip placement="bottomLeft" title={title}  >
                        <Button style={style}>BL</Button>
                    </Tooltip>
                    <Tooltip placement="bottom" title={title}  >
                        <Button style={style}>Bottom</Button>
                    </Tooltip>
                    <Tooltip placement="bottomRight" title={title}  >
                        <Button style={style}>BR</Button>
                    </Tooltip>
                </div>
            </div>
        );
    }
}
export default Detail;
