import React, { Component } from "react";
import Display from "../components/Display";
import ProductFilter from "../components/ProductFilter";
import ProductContainer from "../components/ProductContainer";
import { ProductContext } from "../Context";

class ProductList extends Component {
  static contextType = ProductContext;

  state = {
    slug: this.props.match.params.slug,
  };

  componentDidMount = () => {
    this.context.getProducts(this.state.slug);
  };

  render() {
    const { filteredProducts: products, sortedProducts } = this.context;

    if (!products) {
      return (
        <div className='error'>
          <h3>No Products!</h3>
        </div>
      );
    }

    return (
      <div className='container-fluid p-0'>
        <Display title={this.state.slug} />
        <div className='container'>
          <ProductFilter products={products} />
          <ProductContainer products={sortedProducts} />
        </div>
      </div>
    );
  }
}

export default ProductList;
