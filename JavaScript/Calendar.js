var yearValue = 2010;
var monthValue = 1;
var dayValue = 1;
var removeLen = 31;
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
window.onload = function () {
    createYear();
    createMonth();
    createDay();
    displayDate();
    document.getElementById("year").onchange = function () { removeDay(); createDay(); displayDate(); };
    document.getElementById("month").onchange = function () { removeDay(); createDay(); displayDate(); };
    document.getElementById("day").onchange = function () { dayValue = document.getElementById("day").value; displayDate(); };
}
function createYear() {
    var eleYear = document.getElementById("year");
    for (var i = 2011; i <= 2020; i++) {
        var eleYearOption = document.createElement("option");
        eleYearOption.appendChild(document.createTextNode(i));
        eleYear.appendChild(eleYearOption);
    }
}
function createMonth() {
    var eleMonth = document.getElementById("month");
    for (var i = 2; i <= 12; i++) {
        var eleMonthOption = document.createElement("option")
        eleMonthOption.appendChild(document.createTextNode(i));
        eleMonth.appendChild(eleMonthOption);
    }
}
function createDay() {
    yearValue = document.getElementById("year").value;
    monthValue = document.getElementById("month").value;
    var date = new Date(yearValue, monthValue, 0);
    var dayLen = date.getDate();
    removeLen = dayLen;
    var eleDay = document.getElementById("day");
    for (var i = 2; i <= dayLen; i++) {
        var eleDayOption = document.createElement("option");
        eleDayOption.appendChild(document.createTextNode(i));
        eleDay.appendChild(eleDayOption);
    }
}
function removeDay() {
    var eleDay = document.getElementById("day");
    for (var i = 1; i < removeLen; i++) {
        eleDay.removeChild(eleDay.childNodes[1]);
    }
    dayValue = 1;
}
function displayDate() {
    var index = new Date(yearValue, monthValue, dayValue).getDay();
    document.getElementsByTagName("p")[0].innerHTML = "Your date:\n<p id='date'>" + yearValue + "/" + monthValue + "/" + dayValue + "</p>\n<p id='weekDay'>" + weekDay[index] + "</p>";
}
