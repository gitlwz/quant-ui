import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { LocaleProvider } from 'quant-ui';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
ReactDOM.render(
    <LocaleProvider locale={zh_CN}>
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/app/home" push />} />        
                <Route path="/app" component={App} />
            </Switch>
        </Router>
    </LocaleProvider >
    , document.getElementById('root'));
