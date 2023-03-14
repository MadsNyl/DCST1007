import { Component } from "react-simplified";
import React from "react";
import { pool } from "../../db/main";
import Student from "../../db/model/student.model";
import StudentService from "../services/StudentService";

export default class Students extends Component {

  students = null;

  async mounted() {
    try {
      this.students = await StudentService.getStudents();
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="px-12">
        <div>
          <h1 className="font-semibold text-lg pb-4">
            Studenter:
          </h1>
          <div className="space-y-3">
            {
              this.students?.map((item, index) => {
                return <StudentInfo student={item} key={index}/>
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

class StudentInfo extends Component {
  render() {
    return (
      <div className="max-w-sm w-full bg-gray-50 border border-gray-200 flex items-center justify-between px-4 py-1 rounded-md">
        <div>
          <h1>
            { this.props.student.name }
          </h1>
          <p className="text-sm text-gray-400">
            Id: { this.props.student.id }
          </p>
        </div>
        <div>
          <p className="text-sm">
            { this.props.student.study }
          </p>
        </div>
      </div>
    );
  }
}