import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { ButtonContainer } from "./Button";
import styled from "styled-components";
// import Search from "./Search";
import { ProductConsumer } from "../Context";
// import Product from "./Product";

export default class NavBar extends Component {
  render() {
    return (
      <div className='container'>
        <NavbarWrapper className='navbar navbar-expand-lg navbar-light'>
          <Link to='/' className='mr-auto brand'>
            <span className='brand-1'>la</span>
            <span>Boutique</span>
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto ml-1'>
              <li className='nav-item ml-1'>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
              </li>

              <li className='nav-item ml-1'>
                <Link to='/' className='nav-link'>
                  Products
                </Link>
              </li>

              {/* <li>
                <Search />
              </li> */}

              <ProductConsumer>
                {(value) => {
                  const { collections } = value;

                  return (
                    <li className='nav-item outer-nav-item ml-1'>
                      {" "}
                      <Link to='/' className='nav-link'>
                        Categories
                      </Link>
                      <ul className='inner-nav'>
                        {collections.map((item, index) => {
                          return (
                            <li className='nav-item' key={index}>
                              <Link
                                to={`/products/${item}`}
                                className='nav-link text-capitalize'
                              >
                                {item}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                }}
              </ProductConsumer>
            </ul>
            <Link to='/cart' className='ml-auto'>
              <ButtonContainer>
                <FaShoppingCart />
                <span className='ml-2'>my cart</span>
              </ButtonContainer>
            </Link>
          </div>
        </NavbarWrapper>
      </div>
    );
  }
}

const NavbarWrapper = styled.nav`
  background: var(--mainWhite);
  .nav-link {
    color: var(--mainDark);
    letter-spacing: 0.05rem;
    transition: all 0.5s ease;
  }

  .nav-link:hover {
    color: var(--mainYellow) !important;
  }

  .brand {
    color: var(--mainDark);
    font-family: "Cinzel", serif;
    font-size: 20px;
    font-weight: 600;
  }

  .brand:hover {
    text-decoration: none;
    color: var(--mainDark);
  }

  .brand-1 {
    background-color: var(--mainYellow);
    padding: 2px 10px;
    margin-right: 2px;
  }

  .navbar-toggler:focus {
    outline: none;
  }

  .outer-nav-item {
    position: relative;
  }

  .inner-nav {
    display: none;
    position: absolute;
    top: 40px;
    background-color: var(--mainWhite);
    list-style: none;
    width: 130px;
    padding: 5px 10px;
  }

  .outer-nav-item:hover .inner-nav {
    display: block;
  }
`;
