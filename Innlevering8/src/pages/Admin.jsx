import { Component } from "react-simplified";
import React from "react";
import StudyProgramService from "../services/StudyProgramService";
import StudentService from "../services/StudentService";

export default class Admin extends Component {
    
    studies = null;
    studyName = "";
    studyTag = "";
    addStudyMsg = "";
    addStudentMsg = "";
    studentName = "";
    studentStudy = null;

    render() {
        return (
            <div className="px-12 space-y-6 pb-12">
                <form 
                    onSubmit={this.addStudy}
                    className="space-y-3"
                >
                    <h1 className="text-lg font-medium pb-2">
                        Legg til studieprogram.
                    </h1>
                    <p className="pb-1">
                        { this.addStudyMsg.length ? this.addStudyMsg : "" }
                    </p>
                    <div>
                        <label className="block font-medium pb-1">
                            Navn
                        </label>
                        <input 
                            onChange={(e) => this.studyName = e.currentTarget.value}
                            required
                            className="px-3 py-1 border border-gray-200 rounded-md" 
                            type="text" 
                        />
                    </div>
                    <div>
                        <label className="block font-medium pb-1">
                            Forkortelse
                        </label>
                        <input 
                            onChange={(e) => this.studyTag = e.currentTarget.value}
                            required
                            className="px-3 py-1 border border-gray-200 rounded-md" 
                            type="text" 
                        />
                    </div>
                    <button
                        className="px-3 py-1 rounded-md bg-emerald-500 text-white"
                    >
                        Legg til
                    </button>
                </form>
                <form 
                    onSubmit={this.addStudent}
                    className="space-y-3"
                >
                    <h1 className="text-lg font-medium pb-2">
                        Legg til student.
                    </h1>
                    <p className="pb-1">
                        { this.addStudentMsg.length ? this.addStudentMsg : "" }
                    </p>
                    <div>
                        <label className="block font-medium pb-1">
                            Navn
                        </label>
                        <input 
                            onChange={(e) => this.studentName = e.currentTarget.value}
                            className="px-3 py-1 border border-gray-200 rounded-md" 
                            type="text" 
                        />
                    </div>
                    <div>
                        <label className="block font-medium pb-1">
                            Studieprogram
                        </label>
                        <select
                            onChange={(e) => this.studentStudy = e.currentTarget.value}
                            className="px-2 py-1 rounded-md border border-gray-200"
                        >
                            <option value={null}>
                                Velg program
                            </option>
                            {  
                                this.studies?.map((item, index) => {
                                    return <option 
                                        key={index}
                                        value={item.tag}
                                    >
                                        { item.tag }
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <button
                        className="px-3 py-1 rounded-md bg-emerald-500 text-white"
                    >
                        Legg til
                    </button>
                </form>
            </div>
        );
    }

    async addStudy(e) {
        e.preventDefault();
        try {
            if (!this.studyName.length || !this.studyTag.length) return;
            await StudyProgramService.addStudy(this.studyName, this.studyTag);
            e.target.reset();
            this.addStudyMsg = "Studie opprettet";
            this.studies = await StudyProgramService.getStudies();
        } catch (e) {
            console.log(e);
        }
    }

    async addStudent(e) {
        e.preventDefault();
        try {
            if (!this.studentName.length || !this.studentStudy) return;
            await StudentService.addStudent(this.studentName, this.studentStudy);
            e.target.reset();
            this.addStudentMsg = "Student opprettet";
        } catch (e) {
            console.log(e);
        }
    }

    async mounted() {
        try {
            this.studies = await StudyProgramService.getStudies();
        } catch (e) {
            console.log(e);
        }
    }

}