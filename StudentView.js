function showStudentsFound(results) {

    // Get elements
    html = document.getElementById("students-found")

    innerStr = "";
    // Build html string
    results.forEach( (student) => {
        innerStr += `<li> ${student.fname} ${student.lname} </li>`;
    });

    // Show student names
    html.innerHTML = innerStr;

};
