import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function CartItem({ item, value }) {
  const { id, title, img, price, count, total } = item;
  const { increment, decrement, deleteCart } = value;

  return (
    <div className='container-fluid my-4 text-capitalize text-center'>
      <div className='row align-items-center'>
        <div className='col-lg-2 mx-auto'>
          <img
            src={img}
            alt='product'
            className='img-fluid'
            style={{ width: "80px", height: "80px" }}
          />
        </div>

        <div className='col-lg-2 mx-auto'>
          <span className='d-lg-none text-bold'>Product: </span>
          {title}
        </div>

        <div className='col-lg-2 mx-auto'>
          <span className='d-lg-none text-bold'>Price: </span>${price}
        </div>

        <div className='col-lg-2 mx-auto'>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='mx-2 cart-btn' onClick={() => decrement(id)}>
              -
            </div>
            <div className='mx-2 '>{count}</div>
            <div className='mx-2 cart-btn' onClick={() => increment(id)}>
              +
            </div>
          </div>
        </div>

        <div className='col-lg-2 mx-auto'>
          <FaTrashAlt className='trash' onClick={() => deleteCart(id)} />
        </div>

        <div className='col-lg-2 mx-auto'>
          <span className='d-lg-none text-bold'>Total: </span>${total}
        </div>
      </div>
    </div>
  );
}
