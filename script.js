function calculateAge() {
    // Get the input values
    const birthYear = parseInt(document.querySelector(".y-input").value);
    const birthMonth = parseInt(document.querySelector(".m-input").value);
    const birthDay = parseInt(document.querySelector(".d-input").value);

    // Check if the input values form a valid date
    if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay)) {
        // document.querySelector(".day-err").innerHTML = "Enter valid date";
        document.querySelector(".day-err").style.opacity = 1;
        return;
    }
    
    const inputDate = new Date(birthYear, birthMonth - 1, birthDay);

    // Check if the input date is a valid date
     // Check if any of the input values are not valid
     if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay)) {
        //  document.querySelector(".day-err").innerHTML = "Enter valid date";
         document.querySelector(".day-err").style.opacity = 1;
        return;
    }
    
    // Check if the input year is within a reasonable range
    if (birthYear < 1800 || birthYear > new Date().getFullYear()) {
        document.querySelector(".year-err").style.opacity = 1;
        return;
    }else{
        document.querySelector(".year-err").style.opacity = 0;
        // return;
    }
    
    // Check if the input month is within a valid range
    if (birthMonth < 1 || birthMonth > 12) {
        document.querySelector(".month-err").style.opacity = 1;
        return;
    }else{
        document.querySelector(".month-err").style.opacity = 0;
        // return;
    }
    
    // Check if the input day is within a valid range for the given month
    const maxDayInMonth = new Date(birthYear, birthMonth, 0).getDate();
    if (birthDay < 1 || birthDay > maxDayInMonth) {
        document.querySelector(".day-err").style.opacity = 1;
        return;
    }else{
        document.querySelector(".day-err").style.opacity = 0;
        // return;
    }
    // Get the current date
    const today = new Date();
    if(today < inputDate){
        document.querySelector(".year-err").style.opacity = 1;
        return;
    }else{
        document.querySelector(".year-err").style.opacity = 0;
    }
    
    // Calculate the age
    const ageInMilliseconds = today - inputDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    const ageInMonths = Math.floor((ageInMilliseconds % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
    const ageInDays = Math.floor((ageInMilliseconds % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    // Display the age
    document.querySelector(".year-res-span").innerHTML = ageInYears;
    document.querySelector(".month-res-span").innerHTML = ageInMonths;
    document.querySelector(".day-res-span").innerHTML = ageInDays;
}
