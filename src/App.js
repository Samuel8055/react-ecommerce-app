import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Details from "./pages/Details";
import Cart from "./components/Cart/Cart";
import Default from "./pages/Default";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products/:slug' component={ProductList} />
          <Route exact path='/details' component={Details} />
          <Route exact path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </>
    );
  }
}

export default App;
