import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Catalog from "./template/catalog/Catalog";
import Homepage from "./template/homepage/Homepage";
import Product from "./template/product/Product";
import List from "./template/list/List";
import Header from "./components/header/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/product/:slug" component={Product} />
          <Route exact path="/list" component={List} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
