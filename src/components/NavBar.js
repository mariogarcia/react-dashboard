import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => (
    <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">KAROKU</a>
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
