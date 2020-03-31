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
    const database = firebase.database();
    btnFind.addEventListener('click',function(e){
        var content = document.getElementById('search').value;
        var select = document.getElementById('item');
        var option = select.options[select.selectedIndex].value;
        var fid =  database.ref().push();
        database.ref('Find/').push().set({
            Option : option,
            Content: content
          });
        print(option);
    })
}
function print(option){
    var rootRef = firebase.database().ref(option.toString());
    rootRef.on("value",getData,errData)

    function getData(data){
        data = data.val()
        let keys = Object.keys(data)
        for(let i=0;i<keys.length;i++){
            console.log(data[keys[i]].Content)
            console.log(data[keys[i]].Option)
        }
    }
    function errData(error){
        console.log(error.message, error.code)
    }
}
