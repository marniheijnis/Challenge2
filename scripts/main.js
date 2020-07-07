
function clock() {
	var fullDate = new Date();
	var hours = fullDate.getHours();
	var mins = fullDate.getMinutes();
	var secs = fullDate.getSeconds();

	if (hours < 10) {
		hours = "0" + hours;
	}
	if (mins < 10) {
		mins = "0" + mins;
	}
	if (secs < 10) {
		secs = "0" + secs;
	}
	document.getElementById('hour').innerHTML = hours;
	document.getElementById('minute').innerHTML = ":" + mins;
	document.getElementById('second').innerHTML = ":" + secs;
}

setInterval(clock,100);

var date = new Date();
var day = date.getDate() + "-" + (date.getMonth() +1) + "-" + date.getFullYear();

var month = new Array();
	month [0] = "January";
	month [1] = "February";
	month [2] = "March";
	month [3] = "April";
	month [4] = "May";
	month [5] = "June";
	month [6] = "July";
	month [7] = "August";
	month [8] = "September";
	month [9] = "October";
	month [10] = "November";
	month [11] = "December";

var d = new Date();
var n = month[d.getMonth()];
document.getElementById("months").innerHTML = n;

var month = new Array();
	day [0] = "Monday";
	day [1] = "Tuesday";
	day [2] = "Wednesday";
	day [3] = "Thursday";
	day [4] = "Friday";
	day [5] = "Saturday";
	day [6] = "Sunday";

var s = new Date();
document.getElementById("days").innerHTML = s;
document.querySelector(".date").innerHTML= day;

function background() {
	var time = new Date();
	var hours = time.getHours(); 
	if (hours > 9 && hours < 23) {
		document.body.style.backgroundColor = '#fff399';
	} else {
		document.body.style.backgroundColor = '#121987';
	}
}
background();
