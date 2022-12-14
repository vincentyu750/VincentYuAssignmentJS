/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const calculatedCost = document.getElementById("calculated-cost");
const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const clearDays = document.getElementById("clear-button");

const fullRate = document.getElementById("full")
const halfRate = document.getElementById("half")

var totalCost = 0;
var daysSelected = 0;
var dailyRate = 35;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

monday.addEventListener("click", mondayPressed);
tuesday.addEventListener("click", tuesdayPressed);
wednesday.addEventListener("click", wednesdayPressed);
thursday.addEventListener("click", thursdayPressed);
friday.addEventListener("click", fridayPressed);

function mondayPressed() {

    monday.classList.add("clicked");
    calculate();
}

function tuesdayPressed() {

    tuesday.classList.add("clicked");
    calculate();
}

function wednesdayPressed() {

    wednesday.classList.add("clicked");
    calculate();
}
function thursdayPressed() {

    thursday.classList.add("clicked");
    calculate();
}
function fridayPressed() {

    friday.classList.add("clicked");
    calculate();
}

function dayCounter() {

    if (monday.classList.contains("clicked")) {
        daysSelected++;
    }
    if (tuesday.classList.contains("clicked")) {
        daysSelected++;
    }
    if (wednesday.classList.contains("clicked")) {
        daysSelected++;
    }
    if (thursday.classList.contains("clicked")) {
        daysSelected++;
    }
    if (friday.classList.contains("clicked")) {
        daysSelected++;
    }

    console.log("Days Selected: "+daysSelected);
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearDays.addEventListener("click", clearClicked);

function clearClicked() {

    console.log("Clear Button Press")

    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");

    totalCost = 0;
    daysSelected = 0;

    calculate();
}



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfRate.addEventListener("click", halfRateApplied);

function halfRateApplied() {

    dailyRate = 20;

    fullRate.classList.remove("clicked");
    halfRate.classList.add("clicked");

    calculate();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullRate.addEventListener("click", fullRateApplied);

function fullRateApplied() {

    dailyRate = 35;

    halfRate.classList.remove("clicked");
    fullRate.classList.add("clicked");

    calculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {

    totalCost = 0;

    dayCounter();

    totalCost = daysSelected * dailyRate;

    daysSelected = 0;

    console.log("Total Cost: "+totalCost);

    calculatedCost.innerHTML = totalCost;
}
