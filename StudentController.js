var StudentController = function StudentController(studentView, studentModel) {
    this.studentModel = studentModel;
    this.studentView = studentView;
};

StudentController.prototype.init = function init() {
    this.studentView.onClickGetStudents = this.onClickGetStudents.bind(this);
};

StudentController.prototype.onClickGetStudents = function onClickGetStudents(event) {

    
}