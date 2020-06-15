import React, { Component } from "react";
import displayImg1 from "../images/product-4.png";
import displayImg2 from "../images/display-clothing.png";
import displayImg3 from "../images/display-watch.png";
import { DisplayStyle } from "./DisplayStyle";
import { Link } from "react-router-dom";

export default class Categories extends Component {
  state = {
    categories: [
      {
        id: 1,
        img: displayImg1,
        category: "mobile",
      },
      {
        id: 2,
        img: displayImg2,
        category: "clothing",
      },
      {
        id: 3,
        img: displayImg3,
        category: "accessories",
      },
    ],
  };

  render() {
    return (
      <DisplayStyle className='container my-5 py-5'>
        <div className='row align-items-center'>
          {this.state.categories.map((item) => {
            return (
              <div className='col-10 mx-auto col-md-3 category' key={item.id}>
                <Link to={`/products/${item.category}`}>
                  <img src={item.img} alt='product' className='img-fluid' />
                  <div className='category-title'>
                    <h3>{item.category}</h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </DisplayStyle>
    );
  }
}
