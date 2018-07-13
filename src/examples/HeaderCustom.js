import React, { Component } from 'react';
import { Layout, Icon, HeaderSearch } from 'quant-ui';
const { Header } = Layout;
class HeaderCustom extends Component {
    render() {
        return (
            <Header style={{ background: '#fff', padding: 0, position: 'fixed', zIndex: 1, width: '100%' }}>
                <Icon
                    className="app_trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
                <div style={{float:"right"}}>
                    <HeaderSearch
                        placeholder="站内搜索"
                        dataSource={['搜索提示一', '搜索提示二', '搜索提示三']}
                        onSearch={(value) => {
                            console.log('input', value); // eslint-disable-line
                        }}
                        onPressEnter={(value) => {
                            console.log('enter', value); // eslint-disable-line
                        }}
                    />
                </div>

            </Header>
        );
    }
}
export default HeaderCustom;