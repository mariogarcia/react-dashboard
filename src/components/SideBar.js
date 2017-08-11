import React from 'react';
import { RouteLink } from './RouteLink';

export const SideBar = () => (
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
