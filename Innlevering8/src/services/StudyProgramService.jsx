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
            pool.query(Study.getStudentsOfStudy(study), (error, results) => {
                if (error) return reject(error);
                resolve(results);
            });
        });
    }

}

export default new StudyProgramService();