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


var messagesRef = firebase.database().ref('messages');
document.getElementById('ldr-pj').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefaut();

    var first = getInputVal('first');
    var last = getInputVal('last');
    var email = getInputVal('email');
    var city = getInputVal('city');
    var message = getInputVal('message');


    saveMessage(first, last, email, city, messega);
}

function getInputVal(id){
    return document.getElementById(id).Value;
}

function saveMessage(first, last, email, city, messega){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        first: first,
        last: last,
        email: email,
        city: city,
        message: message
    })
}

