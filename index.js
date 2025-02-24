// Declare variables in global scope
let Service = "";
let barber = "";

// First button: Capture selected service and barber
document.getElementById("nextBTN1").onclick = function() {
//   event.preventDefault();

  // Get the selected values for Service and Barber
  Service = document.getElementById("serviceSelection").value;
  barber = document.getElementById("SelectBarber").value;

  // Construct the message dynamically
  let message = `
    You selected a booking for ${Service} by ${barber} at 8:30 am on December 28, 2024. 
    The price for the service is £200.00.
    Please provide your details in the form below to proceed with booking.
  `;

  // Update the content of the <p> element with the message
  document.getElementById("text").innerHTML = message;

  //moves 1st div out and second div in 
//  document.getElementById("nextBTN1").onclick = function nextpage() {
    document.getElementById("step1").style.margin= "-200px"


//  }
   
};

// Second button: Capture selected date and time and update the message
document.getElementById("nextbtn2").onclick = function (event) {
  // event.preventDefault();

  // Get the selected date and time
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  // Construct the updated message dynamically
  let message = `
    You selected a booking for ${Service} by ${barber} at ${time} on ${date}. 
    The price for the service is £30.
    Please provide your details in the form below to proceed with booking.
  `;

  // Update the content of the <p> element with the message
  document.getElementById("text").innerHTML = message;

//moves second div out and brings third

    document.getElementById("step2").style.display= "none"
    document.getElementById("step3").style.margin= "-50px"



};


//puts you onto last page 

document.getElementById("nextbtn3").onclick = function () {
    console.log("nextbtn3 clicked");

    document.getElementById("step3").style.display = "none";
    document.getElementById("step4").style.margin= "200px"

};


//back btn1 
document.getElementById("backbtn1").onclick =  () => {
    console.log("backbtn clciked mann ")
    document.getElementById("step1").style.margin= "0"
}




// const slides= document.querySelectorAll(".slides img");
// let slideIndex= 0;
// let intervalId= null;
// initalizeSlider();

// function initalizeSlider(){
// slides[slideIndex].classList.add("displaySlide")
// }

// function showslide(index){

// }

// function prevSlide(){

// }

// function nextSlide(){
  
// }