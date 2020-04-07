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

    find();
}

// 
function find() {
    var btnFind = document.getElementById('btnFind');
    btnFind.addEventListener('click',function(e){
        var content = document.getElementById('search').value;
        var select = document.getElementById('item');
        var option = select.options[select.selectedIndex].value;
        this.state = content;
        addFind(content,option);
        go(option,content);
    })
}
// add data to Database
function addFind(content,option){
    // const database = firebase.database();
    firebase.database().ref('Find/').push().set({
        Option : option,
        Content: content
      }); 
}
function go(option, content){
    switch (option){
        case "Lecturers":
            var rootRef = firebase.database().ref(option);
            rootRef.on("value",getLec(content, data))
            break;
        case "Faculty":
            var rootRef = firebase.database().ref(option);
            rootRef.on("value",getFal,errData)
            break;
        case "Subject":
        var rootRef = firebase.database().ref(option);
        rootRef.on("value",getSub,errData)
        break;
    }
    
}
function getLec(content,data){
    data.forEach(function(childSnapshot) {
        var data = childSnapshot.val();
        console.log(data.email)
    });
    
}
function getFal(data){
    data = data.val()
    let keys = Object.keys(data)
    for(let i=0;i<keys.length;i++){
        console.log(data[keys[i]].id)
        console.log(data[keys[i]].name)
    }
}
function getSub(data){
    data = data.val()
    let keys = Object.keys(data)
    for(let i=0;i<keys.length;i++){
        console.log(data[keys[i]].lecturers)
        console.log(data[keys[i]].name)
    }
}
function errData(error){
    console.log(error.message, error.code)
}
