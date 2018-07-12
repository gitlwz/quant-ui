/**
 * Created by lwz.
 */
import React from 'react';
import img from './imgs/404.png';
import "./index.less"

class NotFound extends React.Component {
    static defaultProps = {
		img: img,
    };
    constructor(props) {
        super(props);
        this.state = {
            animated: ''
        }
    }
    enter = () => {
        this.setState({animated: 'hinge'})
    };
    render() {
        return (
            <div style={{textAlign:"center",height: '100%', background: '#ececec', overflow: 'hidden'}}>
                <img src={this.props.img} alt="404" className={`animated swing ${this.state.animated}`} onMouseEnter={this.enter} />
            </div>
        )
    }
}

export default NotFound;