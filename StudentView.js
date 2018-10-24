var StudentView = function StudentView(element) {
    this.element = element;
    this.onClickGetStudents = null;
}

StudentView.prototype.renderStudents = function renderStudents(viewModelList) {

    // Build HTML list
    html = '';

    viewModelList.forEach( (s) => {
        html += `<li> ${s.fname} ${s.lname} </li>`;
    });

    this.element.innerHTML = html;

    // Add event listener for submit button
    var submitLastName = document.querySelector('#lname-submit');
    submitLastName.addEventListener('click', this.onClickGetStudents);
}