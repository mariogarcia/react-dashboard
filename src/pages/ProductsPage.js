import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

const KKPage = ({name, onClick}) => {
    return (
    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h1 className="page-header">Products {name}</h1>
        <button onClick={() => onClick()}>Click</button>
    </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        name: "john"
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            console.log("FUCKING YEAH!!!!");
        }
    }
}

export const ProductsPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(KKPage);
