// var x="Hello World!";
// var message="in global";
// console.log ("global message = " + message);
// var a = function() {
// 	var message = "inside a";
// 	b();
// 	console.log("a:message = " + message);
// }
// function b() {
// 	console.log("b:message = " + message);
// }
// a();
// var y;
// //y=5;
// //console.log(y);
// if (y == undefined) {
// 	console.log("y is undefined")
// }
// y=10;
// if (y == undefined) {
// 	console.log("y is undefined")
// }
// else {
// 	console.log("y has been defined")
// }
// var t = undefined;
// console.log(t);

// // String Concatenation
// var s = "Hello";
// s += " World";
// console.log(s+"!");

// // Mathematical Operators
// console.log((5+4)/2);
// console.log(undefined/4);
// function test (q) {
// 	console.log (q/5);
// }
// test();

// // Equality 
// var x=4, y=4;
// if (x==y) {
// 	console.log("x is equal to y");
// }
// x='4';
// if (x==y) {
// 	console.log("x is equal to y");
// }

// // Strict Equality
// var x=5; 
// x="5";
// if (x===y) {
// 	console.log("x is equal to y");
// }
// else {
// 	console.log("Strict: x is not equal to y");
// }

// // If Statement (All False)
// if (false || null || undefined || 0 || "" || NaN) {
// 	console.log("It will never be true and hence will never be printed!");
// }
// else {
// 	console.log("All False");
// }

// // If Statement (All True)
// if (true && 1 && -1 && "Hello" && "False") {
// 	console.log('All true');
// }
// else {
// 	console.log ("Not all true");
// }

// // Creating Objects
// var hamza = new Object ();
// hamza.name = "Muhammad Hamza";  
// hamza.age = "19";
// console.log(hamza);
// console.log(hamza.name);
// console.log(hamza.age);

// hamza["Computer Science"] = "Strong Bond";
// console.log(hamza["Computer Science"]);

// // Better way: Object literal.
// var person = {
// 	firstName: "Muhammad",
// 	lastName: "Hamza",
// 	education: {
// 		school: "LUMS"
// 	},
// 	age: 19
// };
// console.log(person.education.school);

// // Functions
// function testf (a, b) {
// 	return a*b;
// };
// console.log (testf(4,3));
// console.log(testf);

// // Javascript Closures
// function hello (a) {
// 	var world = function (x) {
// 		return a*x;
// 	};
// 	return world;
// }
// var myFunc = hello(5);
// console.log(myFunc(3));

// //Passing Functions as arguments
// function pass (x, operation) {
// 	return operation (x);
// }
// var result = pass (5, myFunc);
// console.log(result);

// //Variables: Pass by Values and References
// function ftest (s) {
// 	s=5;
// 	return s;
// }
// var s = 3;
// var t = 6;
// console.log(ftest(s));
// console.log(s);

// function ftest1 (x) {
// 	x.r = 5;
// 	return x.r;
// }
// var q = {
// 	r:6
// };
// console.log(ftest1(q));
// console.log(q.r);

// // Camel Notation: oneTwoThreeFour
// // Pascal Notation: OneTwoThreeFour

// // Function Constructors
// function Complex () {
// 	this.name = "Hamza",
// 	this.age = 19,
// 	this.school = "LUMS"
// }
// var person = new Complex ();
// console.log(person.name);
// console.log(person.age);

// function Circle (radius) {
// 	this.radius = radius,
// 	this.Area = function () 
// 	{
// 		return Math.PI * Math.pow(radius, 2);
// 	};
// }
// var circle = new Circle(10);
// console.log(circle);
// console.log(circle.Area());

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.bark = function () {
//   console.log(this.name + " likes barking! Bark!");
// }

// var max = new Dog("Max", "Buddy");
// max.bark();

// // Prototypes
// // function Circle (radius) {
// // 	this.radius = radius
// // }

// // Circle.prototype.getArea = function()
// // 	{
// // 		return Math.PI * Math.pow(this.radius, 2);
// // 	};

// // var circle = new Circle(10);
// // console.log(circle);
// // console.log(circle.getArea());

// // Object literals and 'This'
// var myCircle = {
// 	radius : 10,
// 	getArea : function () {
// 		console.log(this);
// 		var self = this;
// 		var incrRadius = function () {
// 			self.radius = 20;
// 		}
// 		incrRadius();
// 		console.log(this.radius);
// 		return Math.PI * Math.pow(this.radius, 2);
// 	}
// };
// console.log(myCircle.getArea());

// // Arrays
// var array = new Array ();
// array[0] = "Muhammad";
// array[1] = "Hamza";
// array[2] = "19";

// for (var i = 0; i < array.length; i++)
// {
// 	console.log(array[i]);
// }

// // Shortest way to declare arrays
// var array1 = ["Muhammad", "Hamza", 19];
// console.log(array1[0]);

// //	Object properties in for loop
// var person = {
// 	name: "Hamza",
// 	age: 19
// };

// for (var prop in person)
// {
// 	console.log(prop + ": " + person[prop]);
// }

// // Arrays as objects
// var myArray = ["My ", "name ", "is "];
// counter = 0;
// for (var prop in myArray) 
// {
// 	console.log(myArray[prop]);
// }
// myArray[3] = "Muhammad Hamza";console.log(myArray[3]);

// // Note:

// var name = "Muhammad";
// // console.log(name);
// var name = "Hamza";
// console.log(name);

// Document Object Model Manipulation (DOM) 

function sayHello() {
	var name = document.getElementById("name").value;
	var message = "<h2>Hello " + name + "!</h2>";
	// document.getElementById("content").textContent=message;
	document.getElementById("content").innerHTML=message;

	if(name==="student") {
		var title = 
		document
			.querySelector("title")
			.textContent;
		title += "It's so cool!";
		document
			.querySelector("#title")
			.textContent = title;
	}
}





