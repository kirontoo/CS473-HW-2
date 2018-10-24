// CS-473 HW #2
// Amy Nguyen-Dang

// Initialize StudentModel
var studentModel = new StudentModel(XMLHttpRequest);

// Initialize StudentView
var studentElement = document.getElementById('students-found');
var gradeElement = document.querySelector('.grade-results');
var studentView = new StudentView(studentElement, gradeElement);

var controller = new StudentController(studentView, studentModel);

// Initialize all event listeners
controller.init();
controller.onClickGetStudents();
controller.onClickGetGrades();