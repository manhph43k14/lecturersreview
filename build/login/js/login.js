// Get user data
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        // var displayName = user.displayName;
        var email = user.email;
        alert("Active User" + email);
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
        // ...
        // window.location.replace("..\home\index.html");
    } else {
        alert("No active User");
        // User is signed out.
        // ...
    }
});


function login() {
    var email = document.getElementById("email-signin");
    var password = document.getElementById("password-signin");

    // Sign in
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert("Error : " + errorMessage);
    });
}

function signup() {
    var emailNew = document.getElementById("email-signup");
    var passwordNew = document.getElementById("password-signup");

    // Sign up
    firebase.auth().createUserWithEmailAndPassword(emailNew.value, passwordNew.value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert("Error : " + errorMessage);
    });
}