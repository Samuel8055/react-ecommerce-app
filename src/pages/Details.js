import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../components/Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            img,
            price,
            company,
            info,
            inCart,
          } = value.detailProduct;

          return (
            <div className='container py-5'>
              <h3 className='text-center text-capitalize mb-5'>{title}</h3>
              <div className='row'>
                <div className='col-10 col-md-6 mx-auto'>
                  <img src={img} alt='product' className='img-fluid' />
                </div>

                <div className='col-10 col-md-6 mx-auto'>
                  <h3>
                    Model: <span className='text-capitalize'>{title}</span>
                  </h3>

                  <h3>
                    Made By: <span className='text-capitalize'>{company}</span>
                  </h3>

                  <h3>
                    Price: $<span>{price}</span>
                  </h3>
                  <p>Description:</p>
                  <p>{info}</p>

                  <div className='d-flex'>
                    <Link to='/'>
                      <ButtonContainer>Back to home</ButtonContainer>
                    </Link>

                    <ButtonContainer
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal();
                      }}
                    >
                      {inCart ? "In Cart" : "Add To Cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
