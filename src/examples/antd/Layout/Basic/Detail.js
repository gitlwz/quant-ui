import React, { Component } from 'react';
import { Layout } from 'quant-ui';
const {Header, Footer, Sider, Content}=Layout;
class Detail extends Component {

    render() {

        return (
            <div>
                <Layout style={{margin:10}}>
                    <Header style={{backgroundColor:'#6BA9F1'}}>Header</Header>
                    <Content style={{backgroundColor:'#2087FF'}}>Content</Content>
                    <Footer style={{backgroundColor:'#6BA9F1'}}>Footer</Footer>
                </Layout>

                <Layout style={{margin:10}}>
                    <Header style={{backgroundColor:'#6BA9F1'}}>Header</Header>
                    <Layout>
                        <Sider style={{backgroundColor:'#5299ED'}}>Sider</Sider>
                        <Content style={{backgroundColor:'#2087FF'}}>Content</Content>
                    </Layout>
                    <Footer style={{backgroundColor:'#6BA9F1'}}>Footer</Footer>
                </Layout>

                <Layout style={{margin:10}}>
                    <Header style={{backgroundColor:'#6BA9F1'}}>Header</Header>
                    <Layout>
                        <Content style={{backgroundColor:'#2087FF'}}>Content</Content>
                        <Sider style={{backgroundColor:'#5299ED'}}>Sider</Sider>
                    </Layout>
                    <Footer style={{backgroundColor:'#6BA9F1'}}>Footer</Footer>
                </Layout>

                <Layout style={{margin:10}}>
                    <Sider style={{backgroundColor:'#5299ED'}}>Sider</Sider>
                    <Layout>
                        <Header style={{backgroundColor:'#6BA9F1'}}>Header</Header>
                        <Content style={{backgroundColor:'#2087FF'}}>Content</Content>
                        <Footer style={{backgroundColor:'#6BA9F1'}}>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default Detail;
