import React from 'react';
import { connect } from 'react-redux';
//import {emit} from "../Bus";

const ProductsPage = ({name, onClick}) => {
    return (
    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h1 className="page-header">Products {name}</h1>
            <button onClick={onClick}>Click</button>
    </div>
    );
}

// el segundo parametro puede ser opcional
//const mapStateToProps = (state, ownProps) => {
//    return {
//        name: "john"
//    }
//}
//
//const mapDispatchToProps = (dispatch, ownProps) => {
//    return {
//        onClick: () => {
//            console.log("FUCKING YEAH!!!!");
//        }
//    }
//}

//export default connect(
//    mapStateToProps,
//    mapDispatchToProps
//)(ProductsPage);


// redux-observable vs dispatch
export default connect(
    (state) => ({
        name: "john"
    }),
    (dispatch) => ({
        onClick: () => {
            console.log("FUCKING YEAH!!!!");
            //dispatch(new FetchAllDataAction(ownProps.projectId));
        }
    })
)(ProductsPage);
