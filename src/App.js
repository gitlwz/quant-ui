import React, { Component } from 'react';
import { Layout,BackTop ,screenfull,Icon } from 'quant-ui';
import SiderCustom from './examples/SiderCustom';
import HeaderCustom from './examples/HeaderCustom';
import Routes from './routes';
const { Content } = Layout;
class App extends Component {
    state = {
        collapsed: null,
        pathname:this.props.location.pathname
    };
    componentWillMount() {
        this.getClientWidth();
        window.onresize = () => {
            console.log('屏幕变化了');
            this.getClientWidth();
        }
        if (screenfull.enabled) {
            screenfull.on('change', () => {
                if(!screenfull.isFullscreen && window.onresize === null){
                    window.onresize = () => {
                        console.log('屏幕变化了');
                        this.getClientWidth();
                    }
                }
            });
        }
    }
    getClientWidth = () => {    // 获取当前浏览器宽度并设置responsive管理响应式
        const clientWidth = document.body.clientWidth;
        if(clientWidth <=992 ){
            this.setState({
                collapsed: true,
            });
        }else if(clientWidth > 992){
            this.setState({
                collapsed: false,
            });
        }
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    historyChange = (pathname) =>{
        this.setState({
            pathname
        })
    }
    shouldComponentUpdate = (newProps, newState)=>{
        return true
    }
    render() {
        return (
            <Layout>
                <SiderCustom pathname={this.state.pathname} collapsed={this.state.collapsed} />
                <Layout style={{marginLeft:this.state.collapsed?0:200,flexDirection: 'column' }}>
                    <HeaderCustom historyChange={this.historyChange} history={this.props.history} toggle={this.toggle} collapsed={this.state.collapsed}/>
                    {/* <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} user={auth.data || {}} /> */}
                    <Content id="app_Content" className="Content">
                        <Routes collapsed = {this.state.collapsed}/>
                    </Content>
                    {/* <Footer style={{ textAlign: 'center' }}>
                        quantdo-ui ©{new Date().getFullYear()} Created by quantdo
                    </Footer> */}
                    <BackTop visibilityHeight="1"/>
                </Layout>
            </Layout>
        );
    }
}
export default App;
