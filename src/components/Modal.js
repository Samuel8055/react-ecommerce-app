import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          if (!value.modalStatus) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className='container'>
                  <div className='row'>
                    <div className='col-8 mx-auto col-md-6 col-lg-4 text-center'>
                      <div id='modal'>
                        <p className='mb-3'>Product added to the cart!</p>
                        <Link to='/' className='mr-2'>
                          <ButtonContainer onClick={() => value.closeModal()}>
                            Shop
                          </ButtonContainer>
                        </Link>

                        <Link to='/cart' className='ml-2'>
                          <ButtonContainer onClick={() => value.closeModal()}>
                            cart
                          </ButtonContainer>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background-color: var(--mainWhite);
    padding: 20px 10px;
  }
`;
