import React, { Component } from "react";
import { ProductConsumer } from "../Context";

class Search extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            return (
              <form onSubmit={value.searchProduct}>
                <input
                  type='text'
                  placeholder='Search...'
                  className='form-control text-center'
                  onChange={value.searchHandler}
                />
              </form>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default Search;
