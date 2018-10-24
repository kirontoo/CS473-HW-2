var StudentModel = function StudentModel(XMLHttpRequest) {
    this.XMLHttpRequest = XMLHttpRequest;
}

// Get student based on last name
StudentModel.prototype.getStudents = function getStudents(lname, fn) {
    var oReq = new this.XMLHttpRequest();
    oReq.overrideMimeType("application/json");

    oReq.onload = function onLoad(e) {
        var response = JSON.parse(e.target.responseText);
        var students = [];

        var list = response.students;

        list.forEach( (student) => {
            if (student.lname === lname) {
                students.push(student)
            }
        });
    };

    oReq.open('GET', 'example-data.json', true);
    oReq.send();
}

