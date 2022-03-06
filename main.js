function showName() {
    /* declaration  and initialisation */
    var month = document.getElementById("month").value;
    var mm = parseInt(month);
    var day = document.getElementById("day").value;
    var dd = parseInt(day);
    var year = document.getElementById("year").value;
    var yy = parseInt(year);
    var cc = (yy - 1) / 100 + 1;
    /* the formula */
    var dayOfTheWeek = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
    //store names in array of objects
    var akanNames = [{
        sunday: "Kwasi",
        monday: "Kwadwo",
        tuesday: "Kwabena",
        wednesday: "Kwaku",
        thursday: "Yaw",
        friday: "Kofi",
        saturday: "Kwame"
    }
        ,
    {
        sunday: "Akosua",
        monday: "Adwoa",
        tuesday: "Abenaa",
        wednesday: "Akua",
        thursday: "Yaa",
        friday: "Afua",
        saturday: "Ama"
    }
    ];
    //gender variable
    if (document.getElementById("gender").checked) {
        var gender = 'male';
    }
    else {
        var gender = 'female';
    }
    //validate month
    
    // checking if the day entered is valid
     if (dd < 1 || dd > 31) {
        document.getElementById("display").innerHTML = "The day you entered is invalid";
    }
   else if (mm < 1 || mm > 12 || mm == 2) {
        document.getElementById("display").innerHTML = "The month you entered is invalid";
    }
    // checking if the month entered is valid
    else if (Math.round(dayOfTheWeek) == 0 && gender === 'male') {
        document.getElementById("display").innerHTML = "since you are a male born on sunday,your Akan name is " + akanNames[0].sunday;
    }
    // checking day Of The Week and whether the gender entered is male
    else if (Math.round(dayOfTheWeek) == 1 && gender === 'male') {
        document.getElementById("display").innerHTML = "since you are a male born on monday,your Akan name is " + akanNames[0].monday;
    }
    else if (Math.round(dayOfTheWeek) == 2 && gender === 'male') {
        document.getElementById("display").innerHTML = "since you are a male born on tuesday,your Akan name is " + akanNames[0].tuesday;
    }
    else if (Math.round(dayOfTheWeek) == 3 && gender === 'male') {
        document.getElementById("display").innerHTML = "since you are a male born on wednesday,your Akan name is " + akanNames[0].wednesday;
    }
    else if (Math.round(dayOfTheWeek) == 4 && gender === 'male') {
        document.getElementById("display").innerHTML = "since you are a male born on thursday,your Akan name is " +akanNames[0].thursday;
    }
    else if (Math.round(dayOfTheWeek) == 5 && gender === 'male') {
        document.getElementById("display").innerHTML = "since you are a male born on friday,your Akan name is " + akanNames[0].friday;
    }
    else if (Math.round(dayOfTheWeek) == 6 && gender === 'male') {
        document.getElementById("display").innerHTML = "since you are a male born on saturday,your Akan name is " + akanNames[0].saturday;
    }
    // checking day Of The Week and whether the gender entered is female
    
    else if (Math.round(dayOfTheWeek) == 0 && gender === 'female') {
        document.getElementById("display").innerHTML = "since you are a female born on sunday,your Akan name is " + akanNames[1].sunday;
    }
    
    else if (Math.round(dayOfTheWeek) == 1 && gender === 'female') {
        document.getElementById("display").innerHTML = "since you are a female born on monday,your Akan name is " + akanNames[1].monday;
    }
    else if (Math.round(dayOfTheWeek) == 2 && gender === 'female') {
        document.getElementById("display").innerHTML = "since you are a female born on tuesday,your Akan name is " + akanNames[1].tuesday;
    }
    else if (Math.round(dayOfTheWeek) == 3 && gender === 'female') {
        document.getElementById("display").innerHTML = "since you are a female born on wednesday,your Akan name is " + akanNames[1].wednesday;
    }
    else if (Math.round(dayOfTheWeek) == 4 && gender === 'female') {
        document.getElementById("display").innerHTML = "since you are a female born on thursday,your Akan name is " + akanNames[1].thursday;
    }
    else if (Math.round(dayOfTheWeek) == 5 && gender === 'female') {
        document.getElementById("display").innerHTML = "since you are a female born on friday,your Akan name is " + akanNames[1].friday;
    }
    else if (Math.round(dayOfTheWeek) == 6 && gender === 'female') {
        document.getElementById("display").innerHTML = "since you are a female born on saturday,your Akan name is " + akanNames[1].saturday;
    }
    else {
        document.getElementById("display").innerHTML = "please input valid data";
    }
}