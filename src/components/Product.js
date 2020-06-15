import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ProductConsumer } from "../Context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className='col-9 col-md-6 col-lg-3 mx-auto my-3'>
        <ProductConsumer>
          {(value) => {
            return (
              <>
                <div className='card'>
                  <div
                    className='img-container p-4'
                    onClick={() => value.handleDetail(id)}
                  >
                    <Link to='/details'>
                      <img
                        src={`../${img}`}
                        alt='product'
                        className='card-img-top'
                      />
                    </Link>

                    <button
                      className='cart-btn'
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal();
                      }}
                    >
                      {inCart ? (
                        <p className='text-capitalize mb-0' disabled>
                          in cart
                        </p>
                      ) : (
                        <FaShoppingCart />
                      )}
                    </button>
                  </div>
                </div>

                <div className='card-footer d-flex justify-content-between align-items-center px-3 py-2'>
                  <div>
                    <Link to='/details' className='product-title-hover'>
                      <p
                        className='m-0 product-title'
                        onClick={() => value.handleDetail(id)}
                      >
                        {title}
                      </p>
                    </Link>
                  </div>

                  <div className='product-price'>
                    <span>$</span>
                    <span>{price}</span>
                  </div>
                </div>
              </>
            );
          }}
        </ProductConsumer>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border: transparent;
    transition: all 0.5s linear;
    background-color: #f9f9f9;
  }

  .card-footer {
    background-color: transparent;
    border-top: 0;
  }

  .product-title {
    color: var(--grey);
    transition: all 0.5s ease;
  }

  .product-title:hover {
    color: var(--mainDark);
  }

  .product-title-hover {
    text-decoration: none;
  }

  .product-price {
    font-weight: 500;
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .cart-btn {
    background-color: var(--mainYellow);
    padding: 3px 10px;
    border: none;
    position: absolute;
    bottom: 0;
    right: 0;
    transition: all 0.5s ease;
    transform: translate(100%, 100%);
    color: var(--mainWhite);
    border-top-left-radius: 5px;
  }

  .card:hover .cart-btn {
    transform: translate(0, 0);
  }
`;
