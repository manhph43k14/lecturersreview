window.onload = () => {
    initFireBase()
    validateLogin()
};

// init firebase
function initFireBase() {
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
    }

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
}

// Check if user is logged in
function validateLogin() {
    const isLoginPage = window.location.href.toLowerCase().includes("login.html")

    firebase.auth().onAuthStateChanged((user) => {
        if (isLoginPage && user) {
            window.location.replace("../index.html")
        } else if (!isLoginPage && !user) {
			window.location.replace("../login/login.html")
		} else {
            window.user = user
            callInit()
        }
    });
}

// Call init of page if exist
function callInit() {
    if (typeof init === "function") { 
        init()
    }
}

// log err and show alert
function showError(error) {
    console.log(error)
    alert("Something wrong happened! Plz contact administrator for more detail.")
}

