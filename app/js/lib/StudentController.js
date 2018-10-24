// CS-473 HW #2
// Amy Nguyen-Dang

var StudentController = function StudentController(studentView, studentModel) {
    this.studentModel = studentModel;
    this.studentView = studentView;
};

StudentController.prototype.init = function init() {
    this.studentView.onClickGetStudents = this.onClickGetStudents.bind(this);
    this.studentView.onClickGetGrades = this.onClickGetGrades.bind(this);
};

// Grab data for students by the same last name on submission
StudentController.prototype.onClickGetStudents = function onClickGetStudents(event) {

    // Grab the input value
    target = document.getElementById("lname").value
    this.studentModel.getStudents(target, this.showFoundStudents.bind(this));
};

// Grab data for students with the same first and last name
StudentController.prototype.onClickGetGrades = function onClickGetGrades(event) {

    var lname, fname;

    // Grab selected student's first and last name
    if (event !== undefined) {
        target = event.target.innerHTML;
        index = target.indexOf(" ");

        lname = target.slice(index + 1);
        fname = target.slice(0, index);
    }

    // Get grades for selected student
    this.studentModel.getGrades(fname, lname, this.showGrades.bind(this));
}

// Show all found students
StudentController.prototype.showFoundStudents = function showFoundStudents(studentModelData) {

    // Create data to render
    var studentViewModelList = [];

    studentModelData.forEach((s) => {
        var studentViewModel = {
            fname: s.fname,
            lname: s.lname,
            course: s.course,
            gpa: s.gpa
        };

        studentViewModelList.push(studentViewModel);
    });

    // Render the model
    this.studentView.renderStudents(studentViewModelList);
};

// Show all found grades
StudentController.prototype.showGrades = function showGrades(studentModelData) {

    var studentViewModel = {
        fname: studentModelData.fname,
        lname: studentModelData.lname,
        course: studentModelData.course,
        gpa: studentModelData.gpa,
    };

    this.studentView.renderTable(studentViewModel);
};