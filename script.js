const popup =
document.getElementById("popup");

const joinButtons =
document.querySelectorAll(".join-btn");

const closePopup =
document.getElementById("close-popup");

/* OPEN POPUP */

joinButtons.forEach(button => {

    button.addEventListener("click", () => {

        popup.style.display = "flex";
    });

});

/* CLOSE POPUP */

closePopup.addEventListener("click", () => {

    popup.style.display = "none";
});

/* CLOSE ON OUTSIDE CLICK */

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

    const name =
    document.getElementById("reg-name").value;

    const email =
    document.getElementById("reg-email").value;

    const phone =
    document.getElementById("reg-phone").value;

    const plan =
    document.getElementById("reg-plan").value;

    /* SUCCESS MESSAGE */

    alert(

        "Registration Successful!\n\n" +

        "Name: " + name + "\n" +

        "Plan: " + plan
    );

    /* RESET FORM */

    registrationForm.reset();

    /* CLOSE POPUP */

    popup.style.display = "none";
});