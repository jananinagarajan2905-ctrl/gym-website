alert("JS Connected");
/* POPUP ELEMENTS */

const popup =
document.getElementById("popup");

const joinButtons =
document.querySelectorAll(".join-btn");

const closePopup =
document.getElementById("close-popup");

/* OPEN POPUP */

joinButtons.forEach((button) => {

    button.addEventListener("click", () => {

        popup.style.display = "flex";
    });

});

/* CLOSE BUTTON */

closePopup.addEventListener("click", () => {

    popup.style.display = "none";
});

/* CLOSE OUTSIDE */

window.addEventListener("click", (e) => {

    if(e.target === popup){

        popup.style.display = "none";
    }
});

/* REGISTRATION FORM */

const registrationForm =
document.getElementById("registration-form");

registrationForm.addEventListener("submit",
function(e){

    e.preventDefault();

    alert("Registration Successful!");

    registrationForm.reset();

    popup.style.display = "none";
});
