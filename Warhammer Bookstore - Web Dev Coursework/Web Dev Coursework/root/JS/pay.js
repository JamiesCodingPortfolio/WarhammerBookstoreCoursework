//This adds an event listener so that the sendPayData function is run when the continue button is clicked.
const button = document.getElementById("Pay"); 
button.addEventListener("click", sendPayData);

//Variables

let cardNumber;
let expMonth;
let expYear;
let cvvCode;
let jsonInfo;

//Defines url path

const url = "https://mudfoot.doc.stu.mmu.ac.uk/node/api/creditcard";

//Calls the json function to send data to the server

function sendPayData(){

    //Assigns variables to the validation functions so that they are either true or false
    let cardNumberValid = validateCardNumber();
    let expiryMonthValid = validateExpMonth();
    let expiryYearValid = validateExpYear();
    let cvvValid = validateCVV();

    //IF statement to check if all functions return TRUE before calling the rest of the statement so that all data being sent is valid.
    if (cardNumberValid && expiryMonthValid && expiryYearValid && cvvValid){
    
        //JSON data variable to hold all the information to be sent to the server.
        jsonInfo = {
        "master_card" : cardNumber,
        "exp_year" : expYear,
        "exp_month" : expMonth,
        "cvv_code" : cvvCode
        }

        //Fetch request to send the data to the server and recieve a reply from the server, also allows the data from the server to be interpretted.
        fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonInfo)
        })
        //This .then statement processes the response from the server and interprets the statuses that the server sends back and processes the appropriate response.
        .then((response) => {
            console.log(response);
            if(response.status == 200){
                alert("Payment Successful");
                window.location.replace("success.html")
                return response.text();
            }
            else if(response.status == 400){
                alert("Bad data was sent to server");
                throw "Bad data was sent to server - error code: 400"
            }
            else{
                alert("Something went wrong")
                throw "Something went wrong";
            }
        })
        //This breaks down the response into the seperate information to be used in the webpage, it also logs the information so that any errors returned can be solved.
        .then (getResponseText => {
            let responseBrokenDown = JSON.parse(getResponseText);
            console.log(getResponseText);
            //This stores the information sent back from the server in the client localStorage to be used within the success.html page this allows the user to verify the data sent was correct.
            localStorage.setItem("paymentData", JSON.stringify(responseBrokenDown.data));
            console.log(responseBrokenDown.message);
            //This displays an alert box to the user with the response the server sent back it should always return "Thank you for your payment".
            alert(responseBrokenDown.message);
        })
        //If an error occurs this catches it and relays it to the user.
        .catch((error) => {
            console.error(error)
            alert("An error occured. Please try again.");
        })
    }
}

//This function validates the 16 digit card number.
function validateCardNumber(){

    cardNumber = document.getElementById("cardNumber").value;
    //This RegEx checks that the card number starts with a 5, the 2nd number is between 1 and 5, and the number recieve is 16 digits long.
    let testCardNum = /^5[1-5][0-9]{14}$/;

    //This converts the number into a string so that it can be used in the rest of the program, also the information is posted to the console to diagnose any issues that may occur.
    cardNumber.toString();
    console.log("Card Number: " + cardNumber);
    console.log("Card Number Length " + cardNumber.length);
    
    //This compares the card number to the RegEx to ensure that it matches the conditions set by the RegEx and posts the result to the console and also returns true if it matches.
    if (cardNumber.match(testCardNum)){
        console.log("Card Number Validated");
        return true;
    }
    else {
        console.log("Error Validating Card Number");
        alert("Invalid card number, please enter a valid card number");
        return false;
    }
}

//This function validates the expiry month.
function validateExpMonth(){
    expMonth = document.getElementById("ExpiryMonth").value;

    //This RegEx checks that the expiry month is between 1-12, it also allows for a 0 to be placed at the start but it is non-optional so it works with and without e.g 06 or 6.
    let testExpMonth = /^(0?[1-9]|1[0-2])$/;

    //This converts the number into a string so that it can be used in the rest of the program, also the information is posted to the console to diagnose any issues that may occur.
    expMonth.toString();
    console.log("Expiry Month: " + expMonth);
    
    //This compares the expiry month to the RegEx to ensure that it matches the conditions set by the RegEx and posts the result to the console and also returns true if it matches.
    if (expMonth.match(testExpMonth)){
        console.log("Expiry Month Validated");
        return true;
    }
    else {
        console.log("Error Validating Expiry Month");
        alert("Invalid expiry month, please enter a value between 1 and 12");
        return false;
    }
}

//This function validates the expiry year.
function validateExpYear(){
    expYear = document.getElementById("ExpiryYear").value;

    //This RegEx checks that the expiry year is between 2023 and 2099.
    let testExpYear = /^2[0][0-9][0-9]$/;

    //This converts the number into a string so that it can be used in the rest of the program, also the information is posted to the console to diagnose any issues that may occur.
    expYear.toString();
    console.log("Expiry Year: " + expYear);

    //This compares the expiry year to the RegEx to ensure that it matches the conditions set by the RegEx and posts the result to the console and also returns true if it matches.
    if (expYear.match(testExpYear)){
        console.log("Expiry Year Validated");
        return true;
    }
    else {
        console.log("Error Validating Expiry Year");
        alert("Invalid expiry year, please enter a value between 2023 and 2099");
        return false;
    }
}

//This function validates the CVV code.
function validateCVV(){
    cvvCode = document.getElementById("CVV").value;

    //This RegEx checks that the CVV is 3 or 4 digits long and only numbers.
    let testCVV = /^[0-9]{3,4}$/

    //This converts the number into a string so that it can be used in the rest of the program, also the information is posted to the console to diagnose any issues that may occur.
    testCVV.toString();
    console.log("CVV: " + cvvCode);

    //This compares the CVV code to the defined RegEx to ensure that it matches the conditions set by the RegEx and posts the result to the console and also returns true if it matches.
    if (cvvCode.match(testCVV)){
        console.log("CVV Validated");
        return true;
    }
    else {
        console.log("Error Validating CVV");
        alert("Invalid CVV, please enter a valid CVV")
        return false;
    }
}