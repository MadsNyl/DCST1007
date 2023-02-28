import React from "react";
import { Component } from "react-simplified";
import Educations from "../components/Educations";

export default class Education extends Component {

  render() {
    return (
      <div className="px-12">
        <h1 className="font-semibold pb-4 text-lg">
          Utdanning
        </h1>
        <div>
          <Educations />
        </div>
      </div>
    );
  }
}