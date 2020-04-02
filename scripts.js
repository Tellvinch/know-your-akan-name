let objGender = {
  male: {
    Sunday: "Kwasi",
    Monday: "Kwadwo",
    Tuesday: "Kwabena",
    Wednesday: "Kwaku",
    Thursday: "Yaw",
    Friday: "Kofi",
    Saturday: "Kwame"
  },
  female: {
    Sunday: "Akosua",
    Monday: "Adwoa",
    Tuesday: "Abenaa",
    Wednesday: "Akua",
    Thursday: "Yaa",
    Friday: "Afua",
    Saturday: "Ama"
  }
};

function getBirthdayIput(event) {
  //get user input date element
  let date = new Date(document.getElementById("birthday").value).toUTCString();
  return date.substring(0, 3);

  //pass the date to get year month day
  //asssign a date to the relevant day of
}
function getGender() {
  let userGender = document.getElementById("gender");
  return userGender.value;
}
function formsubmit() {
  event.preventDefault();

  let gender = getGender();
  Object.keys(objGender).map(function(genderType) {
    if (genderType === gender) {
      Object.keys(objGender[genderType]).map(function(day) {
        if (day.toLowerCase().includes(getBirthdayIput().toLowerCase())) {
          //get akan revealer
          let revealElement = document.getElementById("akan_name_revealer");//get parent element
          let parentDiv = revealElement.parentNode;//create span element
          var sp1 = document.createElement("span");//give the span elemen id
          sp1.id = "akan_name_revealer";//create a text node for showing the name
          var t = document.createTextNode(
            `AWESOME! your Akan name is  ${objGender[genderType][day]}`
          );
          //append to the created span element
          sp1.appendChild(t);
          //replace the child
          parentDiv.replaceChild(sp1, revealElement);
          
        }
      });
    }
  });
  return false;
}
