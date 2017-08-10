import React, { Component } from 'react';
import { Products } from './services';

export class ProductsPage extends Component {
    constructor() {
        super();
        this.state = {
            products: null
        };

    }
    componentDidMount() {
        let products = Products
            .listAllProducts()
            .map(el => <li key={el}>{el}</li>);

        this.setState({ products: products });
    }
    render() {
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h1 className="page-header">Products</h1>
                <ul>
                {this.state.products}
                </ul>
            </div>
        );
    }
}
