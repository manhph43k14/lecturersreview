function login() {
    var email = document.getElementById("email-signin");
    var password = document.getElementById("password-signin");

    // Sign in
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);

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
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);

    });
}
// Get user data
function initWeb() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            window.location("https://ldr-pj.web.app")
            document.getElementById('nav-login').textContent = 'Profile';

            // var emailVerified = user.emailVerified;
            // var photoURL = user.photoURL;
            // var isAnonymous = user.isAnonymous;
            // var uid = user.uid;
            // var providerData = user.providerData;
            // ...

        } else {

            // User is signed out.
            // ...
        }
    });
}

window.onload = function() {
    initWeb();
};