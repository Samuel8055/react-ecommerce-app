import React from "react";

export default function CartColumns() {
  return (
    <div className='container-fluid d-none d-lg-block mt-5 text-center text-uppercase'>
      <div className='row'>
        <div className='col-lg-2 mx-auto text-bold'>Products</div>
        <div className='col-lg-2 mx-auto text-bold'>Name of product</div>
        <div className='col-lg-2 mx-auto text-bold'>Price</div>
        <div className='col-lg-2 mx-auto text-bold'>Quantity</div>
        <div className='col-lg-2 mx-auto text-bold'>Remove</div>
        <div className='col-lg-2 mx-auto text-bold'>Total</div>
      </div>
    </div>
  );
}
