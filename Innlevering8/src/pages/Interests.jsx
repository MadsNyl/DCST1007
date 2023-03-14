import React from "react";
import { Component } from "react-simplified";

export default class Interests extends Component {

  render() {
    return (
      <div className="px-12">
        <h1 className="font-semibold pb-4 text-lg">
          Interesser
        </h1>
        <div className="space-y-4">
          <h1>
            Lese bøker
          </h1>
          <h1>
            Trene
          </h1>
          <h1>
            Ski
          </h1>
        </div>
      </div>
    );
  }
}