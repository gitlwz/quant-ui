import React, { Component } from 'react';
import { Layout,Icon } from '@';
const { Header} = Layout;
class HeaderCustom extends Component {
    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 ,position: 'fixed', zIndex: 1, width: '100%' }}>
                <Icon
                    className="app_trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
            </Header>
        );
    }
}
export default HeaderCustom;