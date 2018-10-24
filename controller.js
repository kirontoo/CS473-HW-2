// CS-473 HW #23
// Amy Nguyen-Dang

// TEST
var student = new Student
student.fname = "Amy";
student.lname = "Dang";
student.courses = ["Game Design", "Front-End"];
student.gpa = ['A', 'B']

// GLOBAL VARS
var JSONData = {};
var students = [];
var results = [];
var found;

// Load a local JSON file
function loadJSON(file, callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true);

    xobj.onreadystatechange = () => {
        if (xobj.readyState == 4 && xobj.status == 200) {
            callback(xobj.responseText);
        }
    };

    xobj.send(null);
}

// Load JSON data and create student objects
function load() {
    // Load JSON data
    loadJSON("example-data.json", (res) => {
        JSONData = JSON.parse(res);
        createStudents();
    });
}

// Create all student objects
function createStudents() {
     obj = JSONData.students;
 
     obj.forEach((student) =>{
         s = new Student(student.fname, student.lname, student.courses, student.gpa);
         students.push(s);
     });
}

// Search for a student by lastname
function searchStudent(lname) {

    foundStudents = []
    students.forEach((student) => {
        if (student.lname == lname) {
            foundStudents.push(student);
        }
    });

    return foundStudents;
}

// Listen for Last Name submission
btn = document.getElementById("lname-submit")
btn.addEventListener("click", (event) => {
    event.preventDefault();

    // Get last name input
    lname = document.getElementById("lname").value
    console.log(lname)

    // Search for Student's last name
    results = searchStudent(lname);
    console.log("found students", results);

    // Show results
    showStudentsFound(results);

});

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        var name = document.getElementsByTagName("li");

        for(i = 0; i < name.length; ++i) {
            name[i].addEventListener("click", (event) => {
                console.log(name[i])
            });
        }
    }
};
  
load();