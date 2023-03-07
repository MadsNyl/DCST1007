import { Component } from "react-simplified";
import React from "react";
import Info from "./Studies";

export default class Experiences extends Component {

  educations = [
    { title: "Medlemsarkiv", info: "Østmarkas Venner", years: "2016-2023" },
    { title: "Postbud", info: "Schibsted", years: "2021" },
    { title: "Barnehageassistent", info: "Huseby Barnehage", years: "2021-2022" },
    { title: "Artikkelimport", info: "Østmarkas Venner", years: "2022" }
  ];

  render() {
    return (
      <div className="space-y-4">
        {
          this.educations.map((item, index) => {
            return <Info key={index} item={item} />
          })
        }
      </div>
    );
  }
}