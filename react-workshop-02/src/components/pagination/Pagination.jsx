import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Pagination.css";

// <Pagination current={product} data={data} />
export default class Pagination extends React.Component {
  getCurrentIndex() {
    const product = this.props.current;
    const data = this.props.data;
    const productIndex = data.indexOf(product) + 1;
    return productIndex;
  }

  getNextProduct() {
    const product = this.props.current;
    const data = this.props.data;

    if (product) {
      // indetifico indice corrente
      const productIndex = data.indexOf(product);
      const nextProductIndex = productIndex + 1;
      const nextProduct = data[nextProductIndex];
      return nextProduct;
    }

    return null;
  }

  getPrevProduct() {
    const product = this.props.current;
    const data = this.props.data;

    if (product) {
      // indetifico indice corrente
      const productIndex = data.indexOf(product);
      const prevProductIndex = productIndex - 1;
      const prevProduct = data[prevProductIndex];
      return prevProduct;
    }

    return null;
  }

  render() {
    const nextProduct = this.getNextProduct();
    const prevProduct = this.getPrevProduct();

    const step = 100 / this.props.data.length;

    console.log(step);

    return (
      <div className="pagination">
        <div className="pagination-progress">
          <div style={{ width: this.getCurrentIndex() * step + "%" }} />
        </div>
        {prevProduct ? (
          <Link
            className="pagination__button pagination__button--prev"
            to={`/product/${prevProduct.slug}`}
          >
            <i className="fas fa-chevron-left" />
          </Link>
        ) : null}
        {nextProduct ? (
          <Link
            className="pagination__button pagination__button--next"
            to={`/product/${nextProduct.slug}`}
          >
            <i className="fas fa-chevron-right" />
          </Link>
        ) : null}
      </div>
    );
  }
}

Pagination.propTypes = {
  data: PropTypes.array.isRequired,
  current: PropTypes.any
};
