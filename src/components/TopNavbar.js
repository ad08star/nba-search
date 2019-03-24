import React, { Component } from "react";

export default class HeaderNavbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar"
          style={{
            color: "#e4dfda",
            backgroundColor: "#2c2879",
            fontWeight: "bold",
            height: "30px"
          }}
        >
          <div className="container-fluid">{this.props.pagetitle}</div>
        </nav>
      </div>
    );
  }
}
