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
  
  Object.keys(objGender).map(function(genderType) {
    if (genderType === gender) {
      Object.keys(objGender[genderType]).map(function(day) {
        if (day.toLowerCase().includes(dayInput.toLowerCase())) {
          console.log(objGender[genderType][day]);
        }
      });
    }
  });
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
    let day = getBirthdayIput();
    let gender = getGender();
    Object.keys(objGender).map();
    return false;
  }
  