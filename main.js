var studentModel = new StudentModel(XMLHttpRequest);
// studentModel.getStudents('Riley');

var targetElement = document.getElementById('students-found');
console.log(`target: ${targetElement}`)
var studentView = new StudentView(targetElement);

var controller = new StudentController(studentView, studentModel);
controller.init();
controller.onClickGetStudents();