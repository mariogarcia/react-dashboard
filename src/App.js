import React, { Component } from 'react';
import { Switch,
         Link,
         Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { DashboardPage, ProductsPage, LoginPage } from './pages';
import { RouteLink } from './components/RouteLink';
import { history } from './reducers';

const NavBar = () => (
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
);

const SideBar = () => (
    <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
            <RouteLink exact={true} to="/">
              <span className="glyphicon glyphicon-stats" aria-hidden="true"></span>Dashboard
            </RouteLink>
             <RouteLink to="/products">
              <span className="glyphicon glyphicon-list" aria-hidden="true"></span>Products
    </RouteLink>
             <RouteLink to="/login">
              <span className="glyphicon glyphicon-lock" aria-hidden="true"></span>Login
           </RouteLink>
        </ul>
    </div>
);

class App extends Component {
  render() {
      return (
          <ConnectedRouter history={history}>
              <div className="container-fluid">
                 <NavBar/>
                  <div className="container-fluid central">
                      <div className="row">
                          <SideBar/>
              <Route exact path="/" component={DashboardPage}/>
                          <Route exact path="/login" component={LoginPage}/>
                          <Route exact path="/products" component={ProductsPage}/>
                      </div>
                  </div>
              </div>
          </ConnectedRouter>
    );
  }
}

export default App;
