import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/home" push />} />        
            <Route path="/app" component={App} />
        </Switch>
    </Router>
    , document.getElementById('root'));
