var StudentController = function StudentController(studentView, studentModel) {
    this.studentModel = studentModel;
    this.studentView = studentView;
};

StudentController.prototype.init = function init() {
    this.studentView.onClickGetStudents = this.onClickGetStudents.bind(this);
};

// Search for students on submission
StudentController.prototype.onClickGetStudents = function onClickGetStudents(event) {

    // Grab the input value
    target = document.getElementById("lname").value
    this.studentModel.getStudents(target, this.showFoundStudents.bind(this));
};

// Show all found students
StudentController.prototype.showFoundStudents = function showFoundStudents(studentModelData) {

    // Create data to render
    var studentViewModelList = [];

    studentModelData.forEach( (s) => {
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