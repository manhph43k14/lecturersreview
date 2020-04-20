window.onload = function()
{
    init()
};

// init find page
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

    profile();
}

function profile() {
    var message = 'Messages/';
    var btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.addEventListener('click',function(e){
        // var first = getInputVal('first');
        // var last = getInputVal('last');
        // var email = getInputVal('email');
        // var city = getInputVal('city');
        // var message = getInputVal('message');
        // // add data
        // const database = firebase.database();
        // database.ref(message).push().set({
        //     first: first,
        //     last: last,
        //     email: email,
        //     city: city,
        //     message: message
        //   }); 

        var rootRef = firebase.database().ref('Messages/');
        rootRef.on("value",function(snapshot){
            console.log(snapshot.val());
        });
    })
   
}

function getInputVal(id){
    return document.getElementById(id).value;
}
