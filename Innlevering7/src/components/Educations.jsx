import { Component } from "react-simplified";
import React from "react";
import Info from "./Info";

export default class Educations extends Component {

  educations = [
    { title: "Lambertseter VGS", info: "studiespessialiserende", years: "2016-2019" },
    { title: "Universitetet i Oslo", info: "Statsvitenskap", years: "2019" },
    { title: "Universitetet i Oslo", info: "Informatikk: digital økonomi og ledelse", years: "2021-2022" },
    { title: "NTNU", info: "Digital forretningsutvikling", years: "2022-2025" }
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