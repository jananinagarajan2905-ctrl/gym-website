/* ELEMENTS */

const popup =
document.getElementById("popup");

const joinButtons =
document.querySelectorAll(".join-btn");

const closePopup =
document.getElementById("close-popup");

const registrationForm =
document.getElementById("registration-form");

/* OPEN POPUP */

joinButtons.forEach((button) => {

    button.addEventListener("click", () => {

        popup.style.display = "flex";
    });

});

/* CLOSE POPUP */

closePopup.addEventListener("click", () => {

    popup.style.display = "none";
});

/* CLICK OUTSIDE */

window.addEventListener("click", (e) => {

    if(e.target === popup){

        popup.style.display = "none";
    }
});

/* FORM SUBMIT */

registrationForm.addEventListener("submit",
function(e){

    e.preventDefault();

    alert("Registration Successful!");

    registrationForm.reset();

    popup.style.display = "none";
});
