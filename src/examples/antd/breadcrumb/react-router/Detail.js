import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { Breadcrumb, Alert } from 'quant-ui';
import './style.less';


const Apps = () => (
    <ul className="app-list">
        <li>
            <Link to="/app/antd/Navigation/Breadcrumb/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
        </li>
        <li>
            <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
        </li>
    </ul>
  );
  
  const breadcrumbNameMap = {
    '/apps': 'Application List',
    '/apps/1': 'Application1',
    '/apps/2': 'Application2',
    '/apps/1/detail': 'Detail',
    '/apps/2/detail': 'Detail',
  };
  const Home = withRouter((props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
        <Breadcrumb.Item key={url}>
            <Link to={url}>
                {breadcrumbNameMap[url]}
             </Link>
        </Breadcrumb.Item>
      );
    });
    const breadcrumbItems = [(
      <Breadcrumb.Item key="home">
            <Link to="#/app/antd/Navigation/Breadcrumb">Home13213</Link>
      </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);
    return (
        <div className="demo">
            <div className="demo-nav">
                <Link to="/app/antd/Navigation/Breadcrumb">Home</Link>
                <Link to="/app/antd/Navigation/Breadcrumb">Application List</Link>
            </div>
            <Switch>
                <Route path="/app/antd/Navigation/Breadcrumb" component={Apps} />
                <Route render={() => <span>Home Page</span>} />
            </Switch>
            <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
            <Breadcrumb>
                {breadcrumbItems}
            </Breadcrumb>
        </div>
    );
  });
class Detail extends Component {

	render() {
		return (
            <Router>
                <Home />
            </Router>
		);
	}
}
export default Detail;
