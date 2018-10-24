// CS-473 HW #2
// Amy Nguyen-Dang

var StudentView = function StudentView(studentsElement, gradesElement) {
    this.studentsElement = studentsElement;
    this.gradesElement = gradesElement;
    this.onClickGetStudents = null;
    this.onClickGetGrades = null;
};

// Build HTML template for searched students results and render it to the DOM
StudentView.prototype.renderStudents = function renderStudents(viewModelList) {

    // Build list of students
    html = '';

    viewModelList.forEach((s) => {
        html += `<li class="search-results">${s.fname} ${s.lname}</li>`;
    });

    this.studentsElement.innerHTML = html;

    // Add event listener for submit button
    var submitLastName = document.querySelector('#lname-submit');
    submitLastName.addEventListener('click', this.onClickGetStudents);

    // Add event listener for all student results
    var searchResults = document.querySelectorAll('.search-results');
    searchResults.forEach((li) => {
        li.addEventListener('click', this.onClickGetGrades);
    });
};

// Build HTML template for student courses and gpa and render it to the DOM
StudentView.prototype.renderTable = function renderTable(viewModel) {

    // Build Table
    table = `<span>Grades for 
        <span id="student-name">${viewModel.fname} ${viewModel.lname}</span>:</span>
        <table id="grade-table"><tr> <th> Course </th> <th> GPA </th> </tr>`

    if (viewModel.course !== undefined) {
        // Loop through all courses and gpa
        for (i = 0; i < viewModel.course.length; ++i) {
            table += `<tr> <td> ${viewModel.course[i]} </td> <td> ${viewModel.gpa[i]} </td> </tr>`;
        }
    }

    table += `</table>`;

    this.gradesElement.innerHTML = table;
};