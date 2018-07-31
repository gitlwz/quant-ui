import React, { Component } from 'react';
import { Layout } from 'quant-ui';
const {Header, Footer, Sider, Content}=Layout;
class Detail extends Component {

    render() {

        return (
            <div >
                <Layout style={{margin:10}}>
                    <Header style={{backgroundColor:'#9BC66F'}}>Header</Header>
                    <Content style={{backgroundColor:'#468205'}}>Content</Content>
                    <Footer style={{backgroundColor:'#9BC66F'}}>Footer</Footer>
                </Layout>

                <Layout style={{margin:10}}>
                    <Header style={{backgroundColor:'#9BC66F'}}>Header</Header>
                    <Layout>
                        <Sider style={{backgroundColor:'#67A128'}}>Sider</Sider>
                        <Content style={{backgroundColor:'#468205'}}>Content</Content>
                    </Layout>
                    <Footer style={{backgroundColor:'#9BC66F'}}>Footer</Footer>
                </Layout>

                <Layout style={{margin:10}}>
                    <Header style={{backgroundColor:'#9BC66F'}}>Header</Header>
                    <Layout>
                        <Content style={{backgroundColor:'#468205'}}>Content</Content>
                        <Sider style={{backgroundColor:'#67A128'}}>Sider</Sider>
                    </Layout>
                    <Footer style={{backgroundColor:'#9BC66F'}}>Footer</Footer>
                </Layout>

                <Layout style={{margin:10}}>
                    <Sider style={{backgroundColor:'#67A128'}}>Sider</Sider>
                    <Layout>
                        <Header style={{backgroundColor:'#9BC66F'}}>Header</Header>
                        <Content style={{backgroundColor:'#468205'}}>Content</Content>
                        <Footer style={{backgroundColor:'#9BC66F'}}>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default Detail;
