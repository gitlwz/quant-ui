import React, { Component } from 'react';
import { Avatar, Badge, Button, Icon, Switch } from 'quant-ui';

const ButtonGroup = Button.Group;

class Detail extends Component {
    state = {
        count: 5,
        show: true,
    }

    increase = () => {
        const count = this.state.count + 1;
        this.setState({ count });
    }

    decline = () => {
        let count = this.state.count - 1;
        if (count < 0) {
            count = 0;
        }
        this.setState({ count });
    }

    onChange = (show) => {
        this.setState({ show });
    }

    render() {
        return (
            <div>
                <div>
                    <Badge count={this.state.count}>
                        <Avatar shape='square' size='small'/>
                    </Badge>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <ButtonGroup>
                        <Button onClick={this.decline}>
                            <Icon type="minus" />
                        </Button>
                        <Button onClick={this.increase}>
                            <Icon type="plus" />
                        </Button>
                    </ButtonGroup>
                </div>
                <div style={{ marginTop: 10 }}>
                    <Badge dot={this.state.show}>
                        <Avatar shape='square' size='small'/>
                    </Badge>&nbsp;&nbsp;&nbsp;
                    <Switch onChange={this.onChange} checked={this.state.show} />
                </div>
            </div>
        );
    }
}
export default Detail;