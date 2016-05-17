var app = angular.module('store',[]);
function myFuction() {
	alert('Welcome!!');
	document.getElementById("table").style.visibility = "hidden";
	var x = document.getElementById("name").value;
	var y = document.getElementById("email").value;
	document.getElementById("demo").innerHTML = x;
	document.getElementById("demo1").innerHTML = y;
}