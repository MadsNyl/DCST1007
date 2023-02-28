import React from "react";
import { Component } from "react-simplified";

export default class Home extends Component {
  render() {
    return (
      <div className="px-12">
        <h1 className="text-lg font-semibold pb-2">
          Mads Nylund
        </h1>
        <div>
          <p>
            23 år gammel, og fra Oslo.
          </p>
        </div>
      </div>
    );
  }
}