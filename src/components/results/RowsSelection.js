import React from 'react';
import { SplitButton,
         MenuItem } from 'react-bootstrap';

export const RowsSelection = () => (
   <SplitButton bsStyle="default" title={<span className="glyphicon glyphicon-ok"></span>}
    key="default" id="split-button-basic-default">
        <MenuItem eventKey="1">All</MenuItem>
        <MenuItem eventKey="2">None</MenuItem>
   </SplitButton>
);
