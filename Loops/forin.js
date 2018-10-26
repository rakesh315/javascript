var Student = function(name) {
    this.name = name;
}
Student.prototype.age = 18;
var student = new Student("rakesh");
for (var item in student) {
   if (student.hasOwnProperty(item)) {
       alert (student[item]);         // => rakesh age is not displayed
   }
}