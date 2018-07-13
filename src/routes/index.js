/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AllComponents from '../examples';
import routesConfig from './config';

const renderRouter = (routes) =>{
    return routes.map(r => {
        const route = r => {
            const Component = AllComponents[r.component];
            return (
                <Route
                    key={r.route || r.key}
                    exact
                    path={r.route || r.key}
                    component={(props)=><Component {...props} />}     //此处验证身份
                />
            )
        }
        return r.component ? route(r) : renderRouter(r.subs);
    })
}

export default class CRouter extends Component {
    // requireAuth = (permission, component) => {
    //     const { auth } = this.props;
    //     const { permissions } = auth.data;
    //     // const { auth } = store.getState().httpData;
    //     if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
    //     return component;
    // };
    // requireLogin = (component, permission) => {
    //     const { auth } = this.props;
    //     const { permissions } = auth.data;
    //     if (process.env.NODE_ENV === 'production' && !permissions) { // 线上环境判断是否登录
    //         return <Redirect to={'/login'} />;
    //     }
    //     return permission ? this.requireAuth(permission, component) : component;
    // };
    render() {
        return (
            <Switch>
                {
                    Object.keys(routesConfig).map(key => 
                        renderRouter(routesConfig[key])
                    )
                }
                {/* <Route render={() => <Redirect to="/404" />} /> */}
            </Switch>
        )
    }
}