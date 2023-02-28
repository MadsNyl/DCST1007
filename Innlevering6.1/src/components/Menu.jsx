import React from "react";
import { NavLink } from "react-router-dom";
import { Component } from "react-simplified";

export default class Menu extends Component {
  render() {
    return (
      <div className="mb-6 px-12 flex space-x-4">
        <NavLink to="/">Hjem</NavLink>
        <NavLink to="/education">Utdanning</NavLink>
        <NavLink to="/experience">Erfaring</NavLink>
        <NavLink to="/interests">Interesser</NavLink>
      </div>
    );
  }
}