import React, { Component } from "react";
import { Card } from "../../components/card/Card";
import "./Catalog.css";
const data = require("../../data/products.json");

class Catalog extends Component {
  render() {
    return (
      <div className="catalog">
        <h1>CATALOG</h1>
        {data.map(item => (
          // Passo tutti gli attributi di Item al componente Card con {...item}
          <Card key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

export default Catalog;
