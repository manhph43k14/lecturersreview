window.onload = function() {

    const signupForm = this.document.getElementById("signup-form");
    const signinForm = this.document.getElementById("signin-form");
    const btnSignin = document.getElementById("btnSignin");
    const btnSignup = document.getElementById("btnSignup");
    const divSignup = document.getElementById("div-signup");
    const divSignin = document.getElementById("div-signin");
    // hide Sign up form
    signupForm.style.display = "none";

    //
    divSignup.addEventListener('click', e => {
        signupForm.style.display = "block";
        signinForm.style.display = "none";
    });
    //
    divSignin.addEventListener('click', e => {
        signupForm.style.display = "none";
        signinForm.style.display = "block";
    });


}