import React, { Component } from "react";
require("./List.css");

const users = [
  {
    id: 100,
    rating: 1,
    name: "Marco"
  },
  {
    id: 101,
    rating: 3,
    name: "Luigi"
  },
  {
    id: 102,
    rating: 4,
    name: "Sergio"
  },
  {
    id: 103,
    rating: 5,
    name: "Luca"
  },
  {
    id: 104,
    rating: 3,
    name: "Gianni"
  },
  {
    id: 105,
    rating: 2,
    name: "Mario"
  },
  {
    id: 106,
    rating: 3,
    name: "Franco"
  },
  {
    id: 107,
    rating: 4,
    name: "Roberto"
  }
];

class List extends Component {
  state = {
    query: ""
  };

  render() {
    const filteredUsers = users.filter(
      user =>
        this.state.query === "" ||
        user.name.toLowerCase().indexOf(this.state.query.toLowerCase()) >= 0
    );

    return (
      <div className="list">
        <h1>LIST</h1>
        <input
          type="text"
          onChange={e => this.setState({ query: e.target.value })}
        />
        <div className="list-users-wrapper">
          {/** key = k */}
          <h2>key = k</h2>
          <div
            className="list-users"
            style={{ height: filteredUsers.length * 40 }}
          >
            {filteredUsers.map((user, k) => (
              <div className="list-users-item" key={k} style={{ top: k * 40 }}>
                <h3>{user.name}</h3>
                <div className="list-users-item-rating">
                  <div style={{ width: user.rating * 20 + "%" }} />
                </div>
              </div>
            ))}
          </div>
          {/** key = user.id */}
          <h2>key = user.id</h2>
          <div
            className="list-users"
            style={{ height: filteredUsers.length * 40 }}
          >
            {filteredUsers.map((user, k) => (
              <div
                className="list-users-item"
                key={user.id}
                style={{ top: k * 40 }}
              >
                <h3>{user.name}</h3>
                <div className="list-users-item-rating">
                  <div style={{ width: user.rating * 20 + "%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
