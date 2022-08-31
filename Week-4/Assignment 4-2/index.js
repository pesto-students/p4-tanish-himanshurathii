var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

var Teacher = function () {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
  console.log(this.name + " is now teaching " + subject);
  console.log(this.name + " is of age " + this.age);
};

var him = new Teacher();
him.initialize("Adam", 45);
him.teach("inheritance");
