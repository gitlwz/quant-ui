import React, { Component } from 'react';
import Resizable from 're-resizable';
import RichText from '../../RichText/notifyIcon/Detail.js';
import './style.less';
class Detail extends Component {

    render() {
        return (
            <div>
                <Resizable className='Resizable'
                    minWidth='256'
                    enable={{top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false}}
                >
                    <RichText />
                </Resizable>
            </div>
        );
    }
}
export default Detail;
