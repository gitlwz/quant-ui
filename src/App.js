import React, { Component } from 'react';
import { Layout } from 'quant-ui';
import './App.less';
import SiderCustom from './examples/SiderCustom';
import HeaderCustom from './examples/HeaderCustom';
import Routes from './routes';
const { Content, Footer } = Layout;
class App extends Component {
    state = {
        collapsed: false,
    };
    componentWillMount() {
        this.getClientWidth();
        window.onresize = () => {
            console.log('屏幕变化了');
            this.getClientWidth();
        }
    }
    componentDidMount() {


    }
    getClientWidth = () => {    // 获取当前浏览器宽度并设置responsive管理响应式
        const clientWidth = document.body.clientWidth;
        if(clientWidth <=992){
            this.setState({
                collapsed: true,
            });
        }else{
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
    render() {
        return (
            <Layout>
                <SiderCustom collapsed={this.state.collapsed} />
                <Layout style={{marginLeft:this.state.collapsed?0:200,flexDirection: 'column' }}>
                    <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed}/>
                    {/* <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} user={auth.data || {}} /> */}
                    <Content id="app_Content" className="Content">
                        <Routes auth={"是否登陆"} />
                    </Content>
                    {/* <Footer style={{ textAlign: 'center' }}>
                        quantdo-ui ©{new Date().getFullYear()} Created by quantdo
                    </Footer> */}
                </Layout>
            </Layout>
        );
    }
}
export default App;
