import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export const NavRow = ({children}) => {
    return (
        <div className="row">
            {children}
        </div>
    );
}
