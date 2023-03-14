import React from "react";
import { NavLink } from "react-router-dom";
import { Component } from "react-simplified";

export default class Menu extends Component {

  routes = [
    { path: "/students", name: "Studenter", isActive: true },
    { path: "/studies", name: "Studieprogram", isActive: false },
  ];

  checkActive = (item) => {
    for (const r of this.routes) r.isActive = false;
    item.isActive = true;
  } 

  render() {
    return (
      <div className="mb-6 mt-4 px-12 flex space-x-4">
        {
          this.routes.map((item, index) => {
            return <NavLink
                    className={(item.isActive ? "bg-gray-200" : "bg-gray-50") + " px-3 py-1 rounded-sm border border-gray-200 transition duration-150 ease-in-out hover:bg-gray-200"}
                    key={index}
                    to={item.path}
                    onClick={() => this.checkActive(item)}
                  >
                    { item.name }
                  </NavLink>
          })
        }
      </div>
    );
  }
}