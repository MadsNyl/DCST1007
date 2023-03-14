import { pool } from "../../db/main";
import Study from "../../db/model/study.model";

class StudyProgramService {

    getStudies() {
        return new Promise((resolve, reject) => {
            pool.query(Study.getAllStudies(), (error, results) => {
                if (error) return reject(error);
                resolve(results);
            });
        });
    }

    getStudents(study) {
        return new Promise((resolve, reject) => {
            pool.query(Study.getStudentsOfStudy(), [study], (error, results) => {
                if (error) return reject(error);
                resolve(results);
            });
        });
    }

    getStudy(tag) {
        return new Promise((resolve, reject) => {
            pool.query(Study.getStudy(), [tag], (error, results) => {
                if (error) return reject(error);
                resolve(results[0]);
            });
        });
    }   

    deleteStudy(tag) {
        return new Promise((resolve, reject) => {
            pool.query(Study.deleteStudents(), [tag], (error, results) => {
                if (error) return reject(error);
                pool.query(Study.deleteStudy(), [tag], (error, results) => {
                    if (error) return reject(error);
                    resolve(results);
                });
            })

        });
    }

    updateName(name, tag) {
        return new Promise((resolve, reject) => {
            pool.query(Study.updateName(), [name, tag], (error, results) => {
                if (error) return reject(error);
                resolve(results);
            });
        });
    }

    updateTag(short, tag) {
        return new Promise((resolve, reject) => {
            pool.query(Study.updateTag(), [short, tag], (error, results) => {
                if (error) return reject(error);
                resolve(results);
            });
        });
    }

    addStudent(student, tag) {
        return new Promise((resolve, reject) => {
            pool.query(Study.addStudent(), [tag, student], (error, results) => {
                if (error) return reject(error);
                resolve(results);
            });
        });
    }

    addStudy(name, tag) {
        return new Promise((resolve, reject) => {
            pool.query(Study.addStudy(), [tag, name], (error, results) => {
                if (error) return reject(error);
                resolve(results);
            });
        });
    }

}

export default new StudyProgramService();