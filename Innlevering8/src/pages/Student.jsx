import { Component } from "react-simplified";
import React from "react";
import StudentService from "../services/StudentService";
import StudyProgramService from "../services/StudyProgramService";

export default class Student extends Component {

    student = null;
    studies = null;
    name = "";
    program = null;
    success = false;

    render() {
        return (
            <div className="px-12">
                <h1 className="text-lg font-medium pb-4">
                    Detaljer for { this.student?.name }
                </h1>
                {
                    this.success
                        ? <p className="pb-2" >Student oppdatert.</p>
                        : <p className="pb-2"></p>
                }
                <form
                    className="pb-4"
                    onSubmit={this.update}
                >
                    <div className="pb-4">
                        <label className="block font-medium pb-1">
                            Navn
                        </label>
                        <input
                            onChange={(e) => this.name = e.currentTarget.value}
                            className="px-3 py-1 border border-gray-200 rounded-md" 
                            type="text" 
                        />
                    </div>
                    <div className="pb-4">
                        <label className="block font-medium pb-1">
                            Studieprogram
                        </label>
                        <div className="flex items-center space-x-6">
                            <h1>
                                { this.student?.study }
                            </h1>
                            <select
                                defaultValue={this.student?.study}
                                onChange={(e) => this.program = e.currentTarget.value}
                                className="px-2 py-1 rounded-md border border-gray-200"
                            >
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
                    </div>
                    <button
                        className="px-3 py-1 rounded-md bg-emerald-500 text-white"
                    >
                        Oppdater
                    </button>
                </form>
                
                <button
                    className="px-3 py-1 rounded-md bg-red-700 text-white"
                    onClick={this.delete}
                >
                    Slett
                </button>

            </div>
        );
    }

    async delete() {
        try {
            await StudentService.deleteStudent(this.props.match.params.id);
            this.props.history.push("/students");
        } catch (e) {
            console.log(e);
        }
    }

    async update(e) {
        e.preventDefault();
        try {
            if (this.name.length) {
                await StudentService.updateStudentName(this.name, this.props.match.params.id);
                this.student.name = this.name;
            }
            await StudentService.updateStudentProgram(this.program, this.props.match.params.id);
            this.student.study = this.program;
            this.success = true; 
        } catch (e) {
            console.log(e);
        }
    }   

    async mounted() {
        const id = this.props.match.params.id;
        this.student = await StudentService.getStudent(id);
        this.program = this.student.study;
        this.studies = await StudyProgramService.getStudies();
    }

}