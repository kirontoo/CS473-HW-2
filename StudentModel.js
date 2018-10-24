var StudentModel = function StudentModel(XMLHttpRequest) {
    this.XMLHttpRequest = XMLHttpRequest;
}

// Get student based on last name
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
        list.forEach( (student) => {
            if (student.lname === lname) {
                students.push(student)
            }
        });

        console.log(students);

        // Call showStudents
        fn(students);
    };

    oReq.open('GET', 'example-data.json', true);
    oReq.send();
}