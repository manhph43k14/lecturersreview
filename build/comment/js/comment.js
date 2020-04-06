window.onload = function()
{
    init()
};

// init login page
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

    sendmassage();
}

// 
function sendmassage() {
    var btnSend = document.getElementById('btnSend');
    const database = firebase.database();
    btnSend.addEventListener('click',function(e){
       var message = document.getElementById('message').value;
       var lecturers = document.getElementById('lecturers').value;
       var major = document.getElementById('major').value;
       var user  = firebase.auth().currentUser.email;
       database.ref('Comment/').push().set({
           message : message,
           user: user,
           lecturers: lecturers,
           major: major
        });
        print(lecturers, major);
        console.log("finish");
    })
}
function print(lecturers,major){
    var rootRef = firebase.database().ref('Comment/');
    rootRef.on("value",getMessage(data, lecturers,major),errData);
    
}
function getMessage(data,lecturers,major){
    data = data.val()
    let keys = Object.keys(data)
    for(let i=0;i<keys.length;i++){
        if(data[keys[i]].lecturers == lecturers &&data[keys[i]].major==major){
            console.log(data[keys[i]].user);
            console.log(data[keys[i]].message);
        }
    }
}
function errData(error){
    console.log(error.message, error.code)
}
