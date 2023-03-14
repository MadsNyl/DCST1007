import { pool } from "../../db/main";
import Student from "../../db/model/student.model";

class StudentService {
    
    getStudents() {
        return new Promise((resolve, reject) => {
            try {
                pool.query(Student.getAllStudents(), (error, results) => {
                    if (error) return reject(error);

                    resolve(results);
                });
            } catch (e) {
                console.log(e);
            }
        });
    }   
}

export default new StudentService;