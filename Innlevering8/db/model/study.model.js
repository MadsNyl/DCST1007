export default class Study {
    static getAllStudies() {
        return `
            SELECT *
            FROM study
        `
    }

    static getStudentsOfStudy(study) {
        return `
            SELECT *, study.name as study_name FROM study
            INNER JOIN
            student ON study.tag = student.study
            WHERE study.tag = ?
        `
    }

    static getStudy() {
        return `
            SELECT *
            FROM study
            WHERE tag = ?
        `
    }

    static deleteStudy() {
        return `
            DELETE
            FROM study
            WHERE tag = ?
        `
    }

    static deleteStudents() {
        return `
            DELETE 
            FROM student
            WHERE study = ?
        `
    }

    static updateName() {
        return `
            UPDATE study
            SET name = ?
            WHERE tag = ?
        `
    }

    static updateTag() {
        return `
            UPDATE study
            SET tag = ?
            WHERE tag = ?
        `
    }

    static addStudent() {
        return `
            UPDATE student
            SET study = ?
            WHERE id = ?
        `
    }

    static addStudy() {
        return `
            INSERT INTO
            study
            (tag, name)
            VALUES (?, ?)
        `
    }
}