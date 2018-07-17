import React, { Component } from 'react';
import { Carousel } from 'quant-ui';
import "./style.less";

class Detail extends Component {
    onChange = (a, b, c) => {
        return console.log(a, b, c);
    }
    render() {
        return (
            <div style={{width:800}}> 
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </div>
        );
    }
}
export default Detail;