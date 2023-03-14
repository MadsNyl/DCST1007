import { Component } from "react-simplified";
import React from "react";
import { pool } from "../../db/main";
import Study from "../../db/model/study.model";
import StudyProgramService from "../services/StudyProgramService";

export default class Studies extends Component {
  
  studies = null;
  students = null;

  async mounted() {
    try {
      this.studies = await StudyProgramService.getStudies()
    } catch (e) {
      console.log(e);
    }
  }

  async showStudents(study) {
    try {
      this.students = await StudyProgramService.getStudents(study);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="px-12">
        <div className="pb-6">
          <h1 className="font-semibold text-lg pb-4">
            Studieprogram:
          </h1>
          <div>
            {
              this.studies?.map((item, index) => {
                return <StudyInfo 
                        showStudents={this.showStudents}
                        study={item} 
                        key={index} 
                      />
              })
            }
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-lg pb-2">
            Info:
          </h1>
          <div>
            {
              this.students
                ? (
                    <div>
                      <h1>
                        Navn: { this.students[0].study_name }
                      </h1>
                      <h1 className="pb-4">
                        Kode: { this.students[0].tag }
                      </h1>
                      <div>
                        <h1 className="pb-2">
                          Studenter:
                        </h1>
                        {this.students.map((item, index) => {
                          return <StudyStudents student={item} key={index} />
                        })}
                      </div>
                    </div>
                  )
                : <></>
            }
          </div>
        </div>
      </div>
    );
  }
}

class StudyInfo extends Component {
  render() {
    return (
      <button 
        className="max-w-sm w-full bg-gray-50 border flex items-center justify-between border-gray-200 px-4 py-1 rounded-md"
        onClick={ () => this.props.showStudents(this.props.study.tag) }
      >
        <h1>
          { this.props.study.name }
        </h1>
        <h1>
          { this.props.study.tag }
        </h1>
      </button>
    );
  }
}

class StudyStudents extends Component {
  render() {
    return (
      <div className="max-w-sm w-full bg-gray-50 border border-gray-200 px-4 py-1 rounded-md">
        <h1>
          { this.props.student.name }
        </h1>
      </div>
    );
  }
}