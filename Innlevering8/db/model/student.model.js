export default class Student {
    
    static getAllStudents() {
        return `
            SELECT *
            FROM student
        `
    }

    static getStudent() {
        return `
            SELECT *
            FROM student
            WHERE id = ?
        `
    }

    static updateStudentName() {
        return `
            UPDATE student
            set name = ?
            WHERE id = ?
        `
    }

    static updateStudentProgram() {
        return `
            UPDATE student
            set study = ?
            WHERE id = ?
        `
    }

    static deleteStudent() {
        return `
            DELETE 
            FROM student
            WHERE id = ?
        `
    }

    static addStudent() {
        return `
            INSERT INTO 
            student
            (name, study)
            VALUES (?, ?)
        `
    }

}