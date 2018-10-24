var StudentView = function StudentView(studentsElement, gradesElement) {
    this.studentsElement = studentsElement;
    this.gradesElement = gradesElement;
    this.onClickGetStudents = null;
    this.onClickGetGrades = null;
};

// Build HTML template for searched students results and render it to the DOM
StudentView.prototype.renderStudents = function renderStudents(viewModelList) {

    // Build HTML list
    html = '';

    viewModelList.forEach( (s) => {
        html += `<li class="search-results"> ${s.fname} ${s.lname} </li>`;
    });

    this.studentsElement.innerHTML = html;

    // Add event listener for submit button
    var submitLastName = document.querySelector('#lname-submit');
    submitLastName.addEventListener('click', this.onClickGetStudents);
};

// Build HTML template for student courses and gpa and render it to the DOM
StudentView.prototype.renderTable = function renderTable(viewModelList) {
    html = '';

    viewModelList.forEach( (s) => {
        html += '<tr>';
        // Loop through all courses and gpa
        for (i = 0; i < s.course.length; ++i) {
            html += `<td> ${s.course[i]} </td> <td> ${s.gpa[i]} </td>`;
        }

        html += '</tr>';
    });

    // Add event listener for all student results
    var searchResults = document.querySelectorAll('.search-results');
    searchResults.forEach( (li) => {
        li.addEventListener('click', this.onClickGetGrades);
    });
};