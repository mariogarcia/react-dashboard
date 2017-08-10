import React, { Component } from 'react';
import { BrowserRouter as Router,
         hashHistory,
         Switch,
         Link,
         Route } from 'react-router-dom';
import { DashboardPage,
         ProductsPage } from './pages';

import { RouteLink } from './components/RouteLink';

class App extends Component {
  render() {
      return (
<Router history={hashHistory}>
    <div className="container-fluid">
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">IHB</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/">Settings</Link></li>
                        <li><Link to="/">Profile</Link></li>
                        <li><Link to="/">Help</Link></li>
                    </ul>
                    <form className="navbar-form navbar-right">
                        <input type="text" className="form-control" placeholder="Search..."/>
                    </form>
                </div>
            </div>
        </nav>

        <div className="container-fluid central">
            <div className="row">
                <div className="col-sm-3 col-md-2 sidebar">
                    <ul className="nav nav-sidebar">
                        <RouteLink exact={true} to="/">
                          <span className="glyphicon glyphicon-stats" aria-hidden="true"></span>Dashboard
                        </RouteLink>
                       <RouteLink to="/products">
                         <span className="glyphicon glyphicon-list" aria-hidden="true"></span>Products
                       </RouteLink>
                    </ul>
                </div>
                <Switch>
              <Route path="/" exact={true} component={DashboardPage}/>
                    <Route path="/products" component={ProductsPage}/>
                </Switch>
            </div>
        </div>
    </div>
</Router>
    );
  }
}

export default App;
