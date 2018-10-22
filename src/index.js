import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import './theme';
import App from './App';
import history from './examples/history';
import quick from './examples/quick';
import home from './examples/home';
import management from './examples/home/management';
import quantcli from './examples/home/quantcli';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { LocaleProvider ,language} from 'quant-ui';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import en_US from 'antd/lib/locale-provider/en_US';
import 'moment/locale/zh-cn';

let currlanguage = zh_CN;
if(language.getCurrentLanguage() !== 'zh_CN' ){
    currlanguage = en_US;
}
ReactDOM.render(
    <LocaleProvider locale={currlanguage}>
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/home" push />} /> 
                <Route path="/home" component={home} />       
                <Route path="/app" component={App} />
                <Route path="/history" component={history} />
                <Route path="/quick" component={quick} />
                <Route path="/management" component={management} />
                <Route path="/quantcli" component={quantcli} />
            </Switch>
        </Router>
    </LocaleProvider >
    , document.getElementById('root'));
