// CS-473 HW #2
// Amy Nguyen-Dang

var StudentModel = function StudentModel(XMLHttpRequest) {
    this.XMLHttpRequest = XMLHttpRequest;
}

// Parse JSON data to search for students based on last name
StudentModel.prototype.getStudents = function getStudents(lname, fn) {
    var oReq = new this.XMLHttpRequest();
    oReq.overrideMimeType("application/json");

    // Load JSON data
    oReq.onload = function onLoad(e) {

        // parse JSON data
        var response = JSON.parse(e.target.responseText);

        var students = [];
        var list = response.students;

        // Find all students with the same last name
        list.forEach((student) => {
            if (student.lname === lname) {
                students.push(student)
            }
        });

        fn(students);
    };

    oReq.open('GET', 'example-data.json', true);
    oReq.send();
}

// Parse JSON data to search for students based on first and last name
StudentModel.prototype.getGrades = function getGrades(fname, lname, fn) {
    var oReq = new this.XMLHttpRequest();
    oReq.overrideMimeType("application/json");

    // Load JSON data
    oReq.onload = function onLoad(e) {

        // parse JSON data
        var response = JSON.parse(e.target.responseText);

        var list = response.students;
        var student = {};

        // Find all students with the same first and last name
        list.forEach((s) => {
            if (s.lname === lname && s.fname == fname) {
                student = s;
            }
        });

        fn(student);
    };

    oReq.open('GET', 'example-data.json', true);
    oReq.send();
}