import React from 'react';
import pages from './pages';

import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './reducers';
import { NavBar, SideBar } from './components';

class App extends React.Component {
  render() {
      return (
          <ConnectedRouter history={history}>
              <div className="container-fluid">
                 <NavBar/>
                  <div className="container-fluid central">
                      <div className="row">
                          <SideBar/>
                          <Route exact path="/" component={pages.Dashboard}/>
                          <Route exact path="/login" component={pages.Login}/>
                          <Route exact path="/products" component={pages.Products}/>
                      </div>
                  </div>
              </div>
          </ConnectedRouter>
    );
  }
}

export default App;
