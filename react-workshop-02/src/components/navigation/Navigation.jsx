import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <ul>
          <li>
            <Link to="/">HOMEPAGE</Link>
          </li>
          <li>
            <Link to="/catalog">CATALOG</Link>
          </li>
        </ul>
      </div>
    );
  }
}
