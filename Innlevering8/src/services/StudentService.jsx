import { pool } from "../../db/main";
import Student from "../../db/model/student.model";

class StudentService {
    
    getStudents() {
        return new Promise((resolve, reject) => {
            pool.query(Student.getAllStudents(), (error, results) => {
                if (error) return reject(error);

                resolve(results);
            });
        });
    }
    
    getStudent(id) {
        return new Promise((resolve, reject) => {
            pool.query(Student.getStudent(), [id], (error, results) => {
                if (error) return reject(error);
                resolve(results[0]);
            })
        });
    }

    updateStudentName(name, id) {
        return new Promise((resolve, reject) => {
            pool.query(Student.updateStudentName(), [name, id], (error, results) => {
                if (error) return reject(error);
                resolve(results)
            });
        });
    }

    updateStudentProgram(program, id) {
        return new Promise((resolve, reject) => {
            pool.query(Student.updateStudentProgram(), [program, id], (error, results) => {
                if (error) return reject(error);
                resolve(results);
            })
        });
    }

    deleteStudent(id) {
        return new Promise((resolve, reject) => {
            pool.query(Student.deleteStudent(), [id], (error, results) => {
                if (error) return reject(error);
                resolve(results);
            });
        })
    }

    addStudent(name, study) {
        return new Promise((resolve, reject) => {
            pool.query(Student.addStudent(), [name, study], (error, results) => {
                if (error) return reject(error);
                resolve(results);
            });
        })
    }
}

export default new StudentService;