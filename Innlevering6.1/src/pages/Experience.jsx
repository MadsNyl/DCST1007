import React from "react";
import { Component } from "react-simplified";
import Experiences from "../components/Experiences";

export default class Experience extends Component {
  render() {
    return (
      <div className="px-12">
        <h1 className="font-semibold pb-4 text-lg">
          Jobberfaring
        </h1>
        <div>
          <Experiences />
        </div>
      </div>
    );
  }
}