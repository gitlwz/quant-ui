import React, { Component } from 'react';
import Icon from "../icon"
class SlidingValidation extends Component {
    static defaultProps = {
        succeed:()=>{},
        succeedColr:"#7BBB55",
        width:"100%",
    };
    constructor(props){
        super(props);
        this.state ={
            xboxWidth:null,
            succeed:false
        }
	}
    elementOnmousedown = (e) =>{
        let {box,xbox,element} = this.refs
        let b = box.offsetWidth;
		let o = element.offsetWidth;
        var disX = e.clientX - element.offsetLeft;
        document.onmousemove = (e) => {
            var l = e.clientX - disX + o;
            if(l < o) {
                l = o
            }
            if(l > b) {
                l = b
            }
            this.setState({
                xboxWidth:l
            })
        };
        document.onmouseup = (e) => {
            var l = e.clientX - disX + o;
            if(l < b) {
                l = o
            } else {
                l = b;
                this.props.succeed()
                this.setState({
                    succeed:true
                })
            }
            this.setState({
                xboxWidth:l
            })
            document.onmousemove = null;
            document.onmouseup = null;
        };
    }
    render() {
		return (
			<div ref="box" style={{width:this.props.width}}  className="quant-sliding" id="verify_box">
				<div ref="xbox" style={{background:this.props.succeedColr,width:this.state.xboxWidth}} className="verify_xbox">
					{!this.state.succeed?<div onMouseDown={this.elementOnmousedown}  onDragStart={()=> false} ref="element"  className="verify_btn">
                            <Icon className="slid_bock" type="double-right" />
                        </div>:
                        <div>
                            验证通过
                            <div onDragStart={()=> false} ref="element"  className="verify_btn">
                                <Icon style={{color:this.props.succeedColr}} className="slid_bock_check" type="check-circle" />
                            </div>
                        </div>
                    }
				</div>
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;按住滑块，拖动到最右边
			</div>
		);
	}
}
export default SlidingValidation