import React from "react";
import { Component } from "react-simplified";
import StudentService from "../services/StudentService";
import StudyProgramService from "../services/StudyProgramService";

export default class Study extends Component {
    study = null;
    students = null;
    newStudents = null;
    name = "";
    short = "";
    student = null;
    success = "";

    render() {
        return (
            <div className="px-12">
                <h1 className="text-lg font-medium pb-4">
                    Detaljer for { this.study?.name }
                </h1>
                {
                    this.success.length
                        ? <p className="pb-2" >{ this.success }</p>
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
                            Forkortelse
                        </label>
                        <input
                            onChange={(e) => this.short = e.currentTarget.value}
                            className="px-3 py-1 border border-gray-200 rounded-md" 
                            type="text" 
                            placeholder={this.study?.tag}
                        />
                    </div>
                    <button
                        className="px-3 py-1 rounded-md bg-emerald-500 text-white"
                    >
                        Oppdater
                    </button>
                </form>

                <form 
                    className="pb-4"
                    onSubmit={this.addStudent}
                >
                    <label className="block font-medium pb-1">
                        Legg til studenter
                    </label>
                    <div className="flex items-center space-x-6">
                        <h1>
                            Antall studenter: { this.students?.length ? this.students.length : 0 }
                        </h1>
                        <select
                            onChange={(e) => this.student = e.currentTarget.value}
                            className="px-2 py-1 rounded-md border border-gray-200"
                        >
                            <option value={null}>
                                Velg student
                            </option>
                            {
                                this.newStudents?.map((item, index) => {
                                    return <option
                                                key={index}
                                                value={item.id}
                                            >
                                                { item.name }
                                            </option>
                                })
                            }
                        </select>
                        <button className="px-3 py-1 rounded-md bg-emerald-500 text-white">
                            Legg til
                        </button>
                    </div>
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
            await StudyProgramService.deleteStudy(this.props.match.params.tag);
            this.props.history.push("/studies");
        } catch (e) {
            console.log(e);
        }
    }

    async update(e) {
        e.preventDefault();
        try {
            if (this.name.length) {
                await StudyProgramService.updateName(this.name, this.props.match.params.tag);
                this.study.name = this.name;
            }
            if (this.short.length) {
                await StudyProgramService.updateTag(this.short, this.props.match.params.tag);
                this.study.tag = this.short;
            }
            this.success = "Studieprogram oppdatert."; 
        } catch (e) {
            console.log(e);
        }
    }   

    async addStudent(e) {
        e.preventDefault();
        try {
            if (this.student) {
                await StudyProgramService.addStudent(this.student, this.props.match.params.tag);
                this.students = await StudyProgramService.getStudents(this.props.match.params.tag);
                this.student = null;
                this.success = "Student lagt til.";
            }
        } catch (e) {
            console.log(e);
        }
    }

    async mounted() {
        const tag = this.props.match.params.tag;
        this.study = await StudyProgramService.getStudy(tag);
        this.students = await StudyProgramService.getStudents(tag);
        this.newStudents = await StudentService.getStudents();
    }
}