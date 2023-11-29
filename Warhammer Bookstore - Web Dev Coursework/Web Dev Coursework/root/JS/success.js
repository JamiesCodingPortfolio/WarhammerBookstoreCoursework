//This code attempts to the run the code below.
try {
    //This grabs any data stored under "paymentData" in localStorage.
    const paymentData = JSON.parse(localStorage.getItem("paymentData"));
    console.log(paymentData);

    //This grabs the card number data specifically and hides it behind asterisks.
    const cardNumberData = document.getElementById("card-number");
    cardNumberData.textContent = "**** **** **** " + paymentData.master_card.slice(-4);

    //Purely for security reasons so that data is not carried over after exiting the page.
    window.addEventListener("beforeunload", function() {
        localStorage.removeItem("paymentData");
    });
}

//Stops an error appearing in the log
catch (error){
    console.log("No data available");
    
}