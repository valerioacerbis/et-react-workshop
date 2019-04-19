import React, { Component } from "react";
import "./Product.css";
import { Card } from "../../components/card/Card";
import Pagination from "../../components/pagination/Pagination";
const data = require("../../data/products.json");

class Product extends Component {
  getCurrentProduct() {
    if (this.props.match && this.props.match.params) {
      const slug = this.props.match.params.slug;
      const product = data.find(item => item.slug === slug);
      return product;
    }
    return null;
  }

  render() {
    const product = this.getCurrentProduct();

    return (
      <div className="catalog catalog--single">
        <Pagination current={product} data={data} />
        <Card {...product} />
        {/* <pre>{JSON.stringify(product, "", 2)}</pre> */}
      </div>
    );
  }
}

export default Product;
