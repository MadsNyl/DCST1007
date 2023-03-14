export default class Study {
    static getAllStudies() {
        return `
            SELECT *FROM study
        `
    }

    static getStudentsOfStudy(study) {
        return `
            SELECT *, study.name as study_name FROM study
            INNER JOIN
            student ON study.tag = student.study
            WHERE study.tag = "${study}"
        `
    }
}