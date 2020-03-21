// Sign up
function handleSignUp() {
    var emailNew = document.getElementById("email-signup").value;
    var passwordNew = document.getElementById("password-signup").value;
    if (emailNew.length < 6) {
        window.alert('Please enter an email address.');
    } else
    if (passwordNew.length < 6) {
        window.alert('The password is too weak.');
    }
    // else {
    //     window.alert('Create user successfull!');

    // }
    // Create user with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(emailNew, passwordNew).then(function(user) {
            var user = firebase.auth().currentUser;
            console.log(user); // Optional
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(errorMessage);
        });
};
// Sign in
function toggleSignIn() {
    if (firebase.auth().currentUser) {
        window.location.href("../index.html");
    } else {
        var userEmail = document.getElementById("email-signin").value;
        var userPassword = document.getElementById("password-signin").value;
        if (userEmail.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (userEmail.length < 4) {
            alert('Please enter a password.');
            return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
            .then(function(user) {
                var user = firebase.auth().currentUser;
                console.log(user); // Optional
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(errorMessage);
            });

    }
};

function signout() {
    // Sign out
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });
}

function initApp() {
    const btnSignin = document.getElementById("btnSignin");
    const btnSignup = document.getElementById("btnSignup");
    // Add a realtime listener
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in .
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
            console.log("has logged in");
            window.location.href("../index.html");
        } else {
            console.log("No logged in");
            // User is signed out.
            // ...
        }
    });
    btnSignin.addEventListener('click', toggleSignIn, false);
    btnSignup.addEventListener('click', handleSignUp, false);
}

function design() {
    const signupForm = document.getElementById("signup-form");
    const signinForm = document.getElementById("signin-form");
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
window.onload = function() {
    design();
    initApp();
}