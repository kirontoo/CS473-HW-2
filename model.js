// CS-473 HW #2
// Amy Nguyen-Dang

// Object Model for Student
function Student(fn, ln, courses, gpa) {
    this.fname = fn || '';
    this.lname = ln || '';
    this.courses = courses || [];
    this.gpa = gpa || [];

    Student.prototype.get = () => {
        json = {
            fname:      this.fname,
            lname:      this.lname,
            courses:    this.courses,
            gpa:        this.gpa
        };

        return json;
    }
}
