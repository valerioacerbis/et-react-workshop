import React from "react";
import "./Header.css";

import Navigation from "../navigation/Navigation";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="header">
        <Navigation />
      </div>
    );
  }
}
