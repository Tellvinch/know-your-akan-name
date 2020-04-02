var birthDate = document.getElementById("birthday").value;//gives the user date of birth
var male = document.getElementById("male").checked; // true if user is male
var female = document.getElementById("female").checked; //true if user is female
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
function birthDay(event) {
  var day = newDate(birthDate).toUTCString();
  return alert( day.substring(0, 3));}
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];




