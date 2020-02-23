// sign in
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        document.getElementById("login_form").style.display = "none";
    } else {
        // No user is signed in.
        document.getElementById("login_form").style.display = "initial";
    }
});

function login() {
    var emailLogin = document.getElementById("email_login").value;
    var passwordLogin = document.getElementById("password_login").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error: " + errorMessage);
    });

}
// sign up

function signup() {
    var emailSignup = document.getElementById("email_signup").value;
    var passwordSignup = document.getElementById("password_signup").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error: " + errorMessage);
    });
}
// sign out
function signout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });
}