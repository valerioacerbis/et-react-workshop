import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Counter from "../counter/Counter";

import "./Card.css";

// <Card id="1" name="beer" />
export const Card = ({ id, slug, name, quantity, alcohol, rating, image }) => (
  <div className="card">
    <header className="card__header">
      <h1 className="card__title">{name}</h1>
    </header>
    <ul className="card__list">
      <li className="card__item">{quantity}</li>
      <li className="card__item">{alcohol}</li>
    </ul>
    <Link to={`/product/${slug}`}>
      <div className="card__image">
        <img src={image} alt={name} />
      </div>
    </Link>
    <div className="rating">
      <div style={{ width: rating * 20 + "%" }} />
    </div>
    <Counter key={"counter-" + id} productId={id} />
  </div>
);

Card.defaultProps = {
  id: 0,
  slug: "product",
  name: "Default Props",
  quantity: "100ml",
  alcohol: "4%",
  rating: 3,
  image: "https://www.beergium.com/7190-big_default/dugges-interboro-33cl.jpg"
};

Card.propTypes = {
  id: PropTypes.number,
  slug: PropTypes.string.isRequired,
  name: PropTypes.string,
  quantity: PropTypes.string,
  alcohol: PropTypes.string,
  rating: PropTypes.number,
  image: PropTypes.string
};
