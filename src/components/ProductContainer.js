import React, { Component } from "react";
import Product from "./Product";

export default class ProductContainer extends Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        <div className='row'>
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>{" "}
      </div>
    );
  }
}
