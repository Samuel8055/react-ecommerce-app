import React from "react";
import Banner from "./Banner";

const Display = ({ title }) => {
  return (
    <section className='display-container'>
      <Banner title={title} />
    </section>
  );
};

export default Display;
