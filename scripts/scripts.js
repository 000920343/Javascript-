/****************** Shubhampreet Singh: 

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

var modelName = "XYZ";
var duration = 0;


/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERTING MY CODE HERE

function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let costPerDay = modelName === "XYZ" ? 100 : 213; // Cost per day for each model
    let totalCost = duration * costPerDay; // Total cost calculation
    costLabel.innerHTML = totalCost.toFixed(2); // Update the cost label with the calculated cost
}




/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE

var modelButton = document.getElementById("model-button");

function changeModel() {
    var modelText = document.getElementById("model-text");
    // Toggle the model name and update the display accordingly
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }
    recalculate(); // Recalculate the total cost after changing the model
}

modelButton.addEventListener("click", changeModel); 


/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE

var duration_button = document.getElementById("duration-button");

function changeDuration() {
    var duration_Text = document.getElementById("duration-text");
    var new_duration = prompt("Enter the new duration:"); // Ask the user for a new duration
    // Validate the user input to ensure it is a positive number
    if (new_duration !== null && !isNaN(new_duration) && new_duration > 0) {
        duration = parseInt(new_duration);
        duration_Text.innerHTML = duration; // Update the display with the new duration
        recalculate(); // Recalculate the total cost with the new duration
    } else {
        alert("Please enter a valid number for the duration."); // Alert the user if the input is invalid
    }
}

duration_button.addEventListener("click", changeDuration); // Attach the event listener to the duration button