var myPerson = {
	name: "P",
	age: 10,
	sunet:function(text) {return console.log(this.name +" "+ this.age + " " + text)}
}

myPerson.sunet("TRalala");

function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
    this.name = function() {return this.firstName + " " + this.lastName};
    return this;
}

var x = myFunction.call(x, "a", "b");
console.log(x.name());

var argArray = ["c", "d"];
var y = myFunction.apply(x, argArray);
console.log(y.name());


var globalA = 10;

var localB = 20;

function echoA() {
	var localB = 30;
	console.log(globalA);
	console.log(localB);
}

echoA();
console.log(localB);


//closures
console.log("======Closures======")

var add = (function() {
	counter = 0;
	return function() { counter += 1;}
});

var add = (function () {
    var counter = 0;
    return function() { return counter+=1;}
})();

console.log(add());
console.log(add());
console.log(add());


console.log("======Nested functions======")
a = function grandParent() {
	var gA = 10;
	var p = function parent() {
		var pA = 20;
		var c = function child() {
			console.log(gA);
			console.log(pA);
		}
		return c();
	}
	return p();
}


a();













