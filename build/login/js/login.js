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
    // Sign up
    btnSignup.addEventListener('click', e => {
        var emailNew = document.getElementById("email-signup").value;
        var passwordNew = document.getElementById("password-signup").value;
        if (emailNew.length < 6) {
            window.alert('Please enter an email address.');
        } else
        if (passwordNew.length < 6) {
            window.alert('The password is too weak.');
        } else
            window.alert('Create user successfull!')
        firebase.auth().createUserWithEmailAndPassword(emailNew, passwordNew).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorMessage);
        });

    });

    // Sign in
    btnSignin.addEventListener('click', e => {
        var userEmail = document.getElementById("email-signin").value;
        var userPassword = document.getElementById("password-signin").value;
        firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
            .then(function(response) {
                window.alert("OK");
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log(errorMessage);
            });


    });

    // Sign out
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });

    // Add a realtime listener
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            // var displayName = user.displayName;
            var email = user.email;
            // var emailVerified = user.emailVerified;
            // var photoURL = user.photoURL;
            // var isAnonymous = user.isAnonymous;
            // var uid = user.uid;
            // var providerData = user.providerData;
            // ...
            window.location("../index.html");
        } else {
            console.log("No logged in");
            // User is signed out.
            // ...
        }
    });

}