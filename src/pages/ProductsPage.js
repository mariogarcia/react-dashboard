import React from 'react';
import { connect } from 'react-redux';

const ProductsPage = ({name, onClick}) => {
    return (
    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h1 className="page-header">Products {name}</h1>
            <button onClick={onClick}>Click</button>
    </div>
    );
}

export default connect(
    (state) => ({
        name: "john"
    }),
    (dispatch) => ({
        onClick: () => {
            console.log("FUCKING YEAH!!!!");
        }
    })
)(ProductsPage);
