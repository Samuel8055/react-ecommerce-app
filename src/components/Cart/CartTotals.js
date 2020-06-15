import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTotal, cartTax, clearCart } = value;

  return (
    <div className='container mt-5 text-right'>
      <div className='row'>
        <div className='col-10 col-lg-4 mb-4 ml-auto'>
          <Link to='/'>
            <button
              className='btn btn-outline-danger'
              onClick={() => clearCart()}
            >
              Clear Cart
            </button>
          </Link>

          <div className='mt-3'>
            <h5 className='text-bold'>
              <span>Sub Total: $</span>
              {cartSubTotal}
            </h5>
            <h5>
              <span>Tax: $</span>
              {cartTax}
            </h5>
            <h5>
              <span>Total: $</span>
              {cartTotal}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
