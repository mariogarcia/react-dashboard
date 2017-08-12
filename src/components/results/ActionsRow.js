import React from 'react';

export const ActionsRow = ({children}) => (
    <div className="row row-margin-bottom">
        { children.map((child, i) => <div key={i} className="btn-group blocks">{child}</div>) }
    </div>
);
