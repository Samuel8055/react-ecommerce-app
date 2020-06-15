import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    cartSubTotal: 0,
    cartTotal: 0,
    cartTax: 0,
    searchText: "",
    collections: [],
    filteredProducts: [],
    sortedProducts: [],
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    type: "all",
    sort: "default",
    size: "all",
  };

  componentDidMount = () => {
    this.setProducts();
  };

  // copying values of storeProducts and assigning it to the products in state

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });

    this.setState(
      () => {
        return { products: tempProducts };
      },
      () => this.collectionsHandle()
    );
  };

  getId = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getId(id);
    this.setState({ detailProduct: product });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getId(id));
    const product = tempProducts[index];

    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => this.addTotal()
    );
  };

  openModal = () => {
    this.setState(() => {
      return { modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  /*------------ Cart -------------*/

  selectedProduct = (id, symbol) => {
    const tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    switch (symbol) {
      case "add":
        product.count = product.count + 1;
        product.total = product.count * product.price;
        break;
      case "sub":
        product.count = product.count - 1;
        if (product.count === 0) {
          return this.deleteCartItem(id);
        } else {
          product.total = product.count * product.price;
        }
        break;
      default:
        console.log("Unknown symbol passed!");
    }

    this.setState(
      () => {
        return { cart: [...tempCart], products: this.state.products };
      },
      () => {
        this.addTotal();
      }
    );
  };

  increment = (id) => {
    this.selectedProduct(id, "add");
  };

  decrement = (id) => {
    this.selectedProduct(id, "sub");
  };

  deleteCartItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    let removedProduct = this.getId(id);
    removedProduct.inCart = false;
    // removedProduct.price = 0;
    // removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => this.addTotal()
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotal();
      }
    );
  };

  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    let tax = subTotal * 0.1;
    tax = parseFloat(tax.toFixed(2));
    const total = subTotal + tax;

    this.setState({ cartSubTotal: subTotal, cartTax: tax, cartTotal: total });
  };

  /*---------------- Search ------------*/

  searchProduct = (e) => {
    e.preventDefault();
    console.log("Submitted form");

    let searchTerm = this.state.searchTerm;

    const tempProducts = [...this.state.products];
    let ft = tempProducts.filter(
      (product) =>
        product.type.toLowerCase().indexOf(searchTerm) !== -1 ||
        product.title.toLowerCase().indexOf(searchTerm) !== -1 ||
        product.company.toLowerCase().indexOf(searchTerm) !== -1
    );
    console.log(ft);
  };

  searchHandler = (e) => {
    this.setState({ searchTerm: e.target.value.toLowerCase() });
  };

  /*-------------- Collections ----------------*/

  collectionsHandle = () => {
    const tempProducts = [...this.state.products];
    let uniqueCollections = [
      ...new Set(tempProducts.map((item) => item.collection)),
    ];

    this.setState({ collections: uniqueCollections });
  };

  /*------------- getSlug -----------------*/

  getProducts = (slug) => {
    let tempProducts = [...this.state.products];
    let filteredProducts = tempProducts.filter(
      (product) => product.type === slug || product.collection === slug
    );

    this.setState(() => {
      return { filteredProducts, sortedProducts: filteredProducts };
    }, this.test);
  };

  test = () => {
    let tempProducts = [...this.state.filteredProducts];
    let maxPrice = Math.max(...tempProducts.map((product) => product.price));

    this.setState({ maxPrice, price: maxPrice });
  };

  /*--------- filterChange ------*/

  filterChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value }, this.filterProducts);
    // console.log(target, value, name);
  };

  filterProducts = () => {
    let { filteredProducts, price, type, sort, size } = this.state;

    let tempProducts = [...filteredProducts];

    // filter for range slider
    if (price >= 0) {
      tempProducts = tempProducts.filter((product) => product.price <= price);
    }

    // filter for brand
    if (type !== "all") {
      tempProducts = tempProducts.filter((product) => product.company === type);
    }

    // filter for sort
    if (sort !== "default") {
      if (sort === "highToLow") {
        tempProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
      }

      if (sort === "lowToHigh") {
        tempProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
      }
    }

    // filter for size
    if (size !== "all") {
      tempProducts = tempProducts.filter((product) => product.size === size);
    }

    this.setState({ sortedProducts: tempProducts });
  };

  render() {
    return (
      <>
        <ProductContext.Provider
          value={{
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart,
            openModal: this.openModal,
            closeModal: this.closeModal,
            modalStatus: this.state.modalOpen,
            increment: this.increment,
            decrement: this.decrement,
            deleteCart: this.deleteCartItem,
            clearCart: this.clearCart,
            searchProduct: this.searchProduct,
            searchHandler: this.searchHandler,
            getProducts: this.getProducts,
            filterChange: this.filterChange,
          }}
        >
          {this.props.children}
        </ProductContext.Provider>
      </>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
