export default class Student {
    
    static getAllStudents() {
        return `
            SELECT *
            FROM student
        `
    }

}