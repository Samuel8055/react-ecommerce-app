import React, { Component } from "react";
import Hero from "../components/Hero";
import Title from "../components/Title";
import Categories from "../components/Categories";
import Collections from "../components/Collections";

class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <Title title='Categories' />
        <Categories />
        <Collections />
      </>
    );
  }
}

export default Home;
