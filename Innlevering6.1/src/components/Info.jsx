import { Component } from "react-simplified";
import React from "react";

export default class Info extends Component {
  
  render() {
    return (
      <div className="flex items-center space-x-12">
        <div className="max-w-xs w-full">
          <h1 className="font-medium">
            { this.props.item.title }
          </h1>
          <p className="text-gray-400 text-sm">
            { this.props.item.years }
          </p>
        </div>
        <div>
          <h1>
            { this.props.item.info }
          </h1>
        </div>
      </div>
    );
  }
}