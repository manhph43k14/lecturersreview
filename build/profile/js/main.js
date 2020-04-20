window.onload = function()
{
    init()
};
function init() {
// Your web app's Firebase configuration
    var firebaseConfig = {
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

    profile();
}
function profile(){
    var btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.addEventListener('click',function(e){
        var first = getInputVal('first');
        var last = getInputVal('last');
        var email = getInputVal('email');
        var city = getInputVal('city');
        var message = getInputVal('message');
        // saveMessage(first, last, email, city, message);
        const database = firebase.database();
        database.ref('Messages/').push().set({
            first: first,
            last: last,
            email: email,
            city: city,
            message: message
        }); 
        console.log(first)
})
    
}

function submitForm(){
    // e.preventDefaut();
    console.log('w');

    var first = getInputVal('first');
    var last = getInputVal('last');
    var email = getInputVal('email');
    var city = getInputVal('city');
    var message = getInputVal('message');
    // saveMessage(first, last, email, city, message);
    const database = firebase.database();
    database.ref('Messages/').push().set({
        first: first,
        last: last,
        email: email,
        city: city,
        message: message
      }); 
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(first, last, email, city, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        first: first,
        last: last,
        email: email,
        city: city,
        message: message
    })
}

