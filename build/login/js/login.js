window.onload = function()
{
    init()
};

// init login page
function init() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyA5ichiiAjA9m315Xo11UOOl1dGT-LIKEQ",
        authDomain: "ldr-pj.firebaseapp.com",
        databaseURL: "https://ldr-pj.firebaseio.com",
        projectId: "ldr-pj",
        storageBucket: "ldr-pj.appspot.com",
        messagingSenderId: "361508485649",
        appId: "1:361508485649:web:b60e3b97f9ce73d16b0fb0",
        measurementId: "G-EM1K4B7EVW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    validateLogin()
}

// Check if user is logged in
function validateLogin() {
    if (firebase.auth().currentUser) {
        window.location.replace("../index.html");
    }
}

// Sign up
// TODO: Implement signUp for new account
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
    var email = document.getElementById("email-signin").value;
    var password = document.getElementById("password-signin").value;
    if (email.length == 0) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length == 0) {
        alert('Please enter a password.');
        return;
    }

    // Sign in with email and pass.
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((success) => {
            console.log(success); // log for debug
            window.location.replace("../index.html")
        }, (fail) => {
            console.log(fail) // log for debug
            // Just show this message for security
            alert("Email or password is not correct!")
        })
        .catch((error) => {
            console.log(errorMessage) // log for debug
            // Just show this message for security
            alert("Something wrong happened! Plz contact administrator for more detail.")
        });
};

function switchForm(id) {
    switchDisplayMode("signup-form", id == "div-signup")
    switchDisplayMode("signin-form", id == "div-signin")
}

function switchDisplayMode(formName, isShow) {
    const form = document.getElementById(formName);
    form.style.display = isShow ? "block" : "none"
}