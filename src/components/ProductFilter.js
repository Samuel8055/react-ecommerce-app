import React, { Component } from "react";
import { ProductContext } from "../Context";
import styled from "styled-components";

export default class ProductFilter extends Component {
  static contextType = ProductContext;

  getUniqueData = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
  };

  render() {
    const {
      minPrice,
      maxPrice,
      price,
      filterChange,
      filteredProducts,
      type,
      sort,
      size,
    } = this.context;

    /*-------- company -------*/

    let uniqueCompany = this.getUniqueData(filteredProducts, "company");
    uniqueCompany = ["all", ...uniqueCompany];

    let company = uniqueCompany.map((company, index) => {
      return (
        <option value={company} key={index}>
          {company}
        </option>
      );
    });

    /*--------- Size -------*/

    let uniqueSizes = this.getUniqueData(filteredProducts, "size");
    let filteredSize = uniqueSizes.filter((item) => item !== undefined);
    let allSize = ["all", ...filteredSize];

    let sizes = allSize.map((size, index) => {
      return (
        <option value={size} key={index}>
          {size}
        </option>
      );
    });

    // let mySize = filteredProducts.map((product) => {
    //   if (!product.hasOwnProperty("size")) {
    //     return null;
    //   } else {
    //     return (
    //       <div className='form-group'>
    //         <label htmlFor='size'>Size: </label>
    //         <select name='size' id='size' onChange={filterChange} value={size}>
    //           {sizes}
    //         </select>
    //       </div>
    //     );
    //   }
    // });

    return (
      <FormContainer className='container py-5'>
        <form>
          <div className='row'>
            <div className='col-md-3'>
              <div className='form-group'>
                <label htmlFor='price'>Price ${price}</label>
                <br />
                <input
                  type='range'
                  id='price'
                  name='price'
                  min={minPrice}
                  max={maxPrice}
                  value={price}
                  onChange={filterChange}
                />
              </div>
            </div>

            <div className='col-md-3'>
              <div className='form-group'>
                <label htmlFor='company'>Brand: </label>
                <select
                  name='type'
                  id='company'
                  value={type}
                  onChange={filterChange}
                  className=' form-control'
                >
                  {company}
                </select>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='form-group'>
                <label htmlFor='sort'>Sort by: </label>
                <select
                  name='sort'
                  id='sort'
                  value={sort}
                  onChange={filterChange}
                  className='form-control'
                >
                  <option value='default'>default</option>
                  <option value='highToLow'>high to low</option>
                  <option value='lowToHigh'>low to high</option>
                </select>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='form-group'>
                <label htmlFor='size'>Size: </label>
                <select
                  name='size'
                  id='size'
                  onChange={filterChange}
                  value={size}
                  className='form-control'
                >
                  {sizes}
                </select>
              </div>
            </div>
          </div>
        </form>
      </FormContainer>
    );
  }
}

const FormContainer = styled.div`
  .form-control:focus {
    outline: none !important;
    box-shadow: none;
  }
`;
