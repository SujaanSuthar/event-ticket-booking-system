// Book Ticket Button

const bookButtons =
document.querySelectorAll(".book-btn");

bookButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerText = "Booked ✓";
        button.style.background = "green";

    });

});

// Show / Hide Details

const detailButtons =
document.querySelectorAll(".details-btn");

detailButtons.forEach(button => {

    button.addEventListener("click", () => {

        const details =
        button.nextElementSibling;

        if(details.style.display === "block"){
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }

    });

});
const bookingForm =
document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event){

    event.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const eventName =
    document.getElementById("event").value;

    const tickets =
    document.getElementById("tickets").value;

    if(
        name === "" ||
        email === "" ||
        eventName === "" ||
        tickets === ""
    ){
        alert("Please fill all fields");
    }
    else{
        alert("Booking Submitted Successfully!");
    }

});