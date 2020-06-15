import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../../Context";

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <div className='container-fluid'>
                <Title title='your cart' />
                <CartColumns />
                <CartList value={value} />
                <CartTotals value={value} />
              </div>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    );
  }
}
