import React, { Component } from "react";
import "./Counter.css";
import { PropTypes } from "prop-types";

class Counter extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    if (this.props.productId) {
      // count viene salvato in "product-quantity-12346715"
      this.setCountFromLocalStorage();
      window.addEventListener("storage", this.setCountFromLocalStorage);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("storage", this.setCountFromLocalStorage);
  }

  setCountFromLocalStorage = () => {
    const count = window.localStorage.getItem(
      "product-quantity-" + this.props.productId
    );
    this.setState({
      count: parseFloat(count || 0)
    });
  };

  saveCountOnStorage(count) {
    this.setState({ count }, () => {
      if (this.props.productId) {
        // count viene salvato in "product-quantity-12346715"
        window.localStorage.setItem(
          "product-quantity-" + this.props.productId,
          count
        );
      }
    });
  }

  handleIncrement = () => {
    this.saveCountOnStorage(this.state.count + 1);
  };

  handleDecrement = () => {
    this.saveCountOnStorage(this.state.count - 1);
  };

  render() {
    let button;
    const { count } = this.state;

    count > 0
      ? (button = (
          <React.Fragment>
            <button
              onClick={this.handleIncrement}
              className="counter__button counter__button--primary"
            >
              Another one!
            </button>
            <button
              onClick={this.handleDecrement}
              className="counter__button counter__button--secondary"
            >
              No, I suck!
            </button>
          </React.Fragment>
        ))
      : (button = (
          <React.Fragment>
            <button onClick={this.handleIncrement} className="counter__button">
              I want one!
            </button>
          </React.Fragment>
        ));

    return (
      <div className="counter">
        <div className="counter__text counter__text--primary"> {count} </div>
        {button}
      </div>
    );
  }
}

Counter.propTypes = {
  productId: PropTypes.any
};

export default Counter;
