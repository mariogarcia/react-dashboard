import React from 'react';
import { RouteLink } from './RouteLink';

export const SideBar = () => (
    <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
            <RouteLink exact={true} to="/">
              <span className="glyphicon glyphicon-stats" aria-hidden="true"></span>Dashboard
            </RouteLink>
             <RouteLink to="/images">
              <span className="glyphicon glyphicon-list" aria-hidden="true"></span>Images
             </RouteLink>
             <RouteLink to="/containers">
              <span className="glyphicon glyphicon-list" aria-hidden="true"></span>Containers
             </RouteLink>
             <RouteLink to="/events">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>Events
             </RouteLink>

        </ul>
        <ul className="nav nav-sidebar">
           <RouteLink to="/templates">
              <span className="glyphicon glyphicon-road" aria-hidden="true"></span>Deployments
           </RouteLink>
           <RouteLink to="/templates">
              <span className="glyphicon glyphicon-file" aria-hidden="true"></span>Templates
           </RouteLink>
             <RouteLink to="/hooks">
              <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>Hooks
           </RouteLink>
        </ul>

        <ul className="nav nav-sidebar">
           <RouteLink to="/settings">
              <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>Settings
           </RouteLink>
    </ul>
    </div>
);
