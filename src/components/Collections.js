import React, { Component } from "react";
import Title from "./Title";
import { ProductContext } from "../Context";
import img1 from "../images/male-display.jpg";
import img2 from "../images/female-display.jpeg";
import { DisplayStyle } from "./DisplayStyle";
import { Link } from "react-router-dom";

class Collections extends Component {
  static contextType = ProductContext;

  render() {
    const value = this.context;

    return (
      <DisplayStyle collection>
        <Title title='collections' />
        <div className='container my-5'>
          <div className='row'>
            {value.collections.map((item) => {
              return (
                <div
                  className='col-10 mx-auto col-md-6 text-center category'
                  key={item}
                >
                  <Link to={`/products/${item}`}>
                    <img
                      src={item === "male" ? img1 : img2}
                      alt='collection'
                      className='img-fluid'
                    />
                    <div className='category-title'>
                      <h3>{item}</h3>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </DisplayStyle>
    );
  }
}

export default Collections;
