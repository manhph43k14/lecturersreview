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

    sendmassage();
}

// 
function sendmassage() {
    var btnSend = document.getElementById('btnSend');
    const database = firebase.database();
    btnSend.addEventListener('click',function(e){
       console.log('w');
    //    var message = document.getElementById('message').value;
    //    var lecturers = document.getElementById('lecturers').value;
    //    var major = document.getElementById('major').value;
    //    database.ref('Comment/').push().set({
    //        message : message,
    //        user: user,
    //        lecturers: lecturers,
    //        major: major
    //      });
        // print(option);
    })
}
// function print(option){
//     switch (option){
//         case "Lecturers":
//             var rootRef = firebase.database().ref(option);
//             rootRef.on("value",getLec,errData);
//             break;
//         case "Faculty":
//             var rootRef = firebase.database().ref(option);
//             rootRef.on("value",getFal,errData);
//             break;
//     }
    
// }
// function getLec(data){
//     data = data.val()
//     let keys = Object.keys(data)
//     for(let i=0;i<keys.length;i++){
//         console.log(data[keys[i]].gender)
//         console.log(data[keys[i]].mail)
//     }
// }
// function getFal(data){
//     data = data.val()
//     let keys = Object.keys(data)
//     for(let i=0;i<keys.length;i++){
//         console.log(data[keys[i]].id)
//         console.log(data[keys[i]].name)
//     }
// }
// function errData(error){
//     console.log(error.message, error.code)
// }
