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
function handleSignUp() {
    var email = document.getElementById("email-signup").value;
    var password = document.getElementById("password-signup").value;
    var name = document.getElementById("user_name").value;
    var clazz = document.getElementById("user_class").value;
    if (email.length == 0) {
        alert('Email is required.')
        return
    } else if (password.length == 0) {
        alert('Password is required.')
        return
    } else if (password.length < 6) {
        alert('Password has to be at least 6 characters long.')
        return
    } else if (name.length == 0) {
        alert('Name is required.')
        return
    } else if (clazz.length == 0) {
        alert('Class is required.')
        return
    }

    // Create user with email and pass.
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(response) {
        var uid = response.user.uid
        // Create account info in firebase, link by uid
        firebase.database().ref('Account/' + uid).set({
            password: password,
            email: email,
            name : name,
            class: clazz,
            uid: uid
        }, function(error) {
            if (error) {
                var errorMessage = error.message;
                alert(errorMessage);
                console.log(error);
            } else {
                alert('Account created successfully!')
                window.location.replace("../index.html");
            }
        });

        console.log(response); // log for debug
    })
    .catch(function(error) {
        alert("Something wrong happened! Plz contact administrator for more detail.");
        console.log(error);
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
            console.log(error) // log for debug
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