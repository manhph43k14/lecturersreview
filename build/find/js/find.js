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
        var content = document.getElementById('search').value.toLowerCase();
        var select = document.getElementById('item');
        var option = select.options[select.selectedIndex].value;
        addFind(content,option);
        go(option,content);
    })
}
// add data to Database
function addFind(content,option){
    const database = firebase.database();
    database.ref('Find/').push().set({
        Option : option,
        Content: content
      }); 
}
function go(option, content){
    var rootRef = firebase.database().ref(option);
    rootRef.on("value",function(snapshot){
        getData(content,option,snapshot.val());
    },errData)
    switch (option){
        case "Lecturers":
            renderLec();
            break;
        case "Faculty":
            renderFal();
            break;
        case "Subject":
            renderSub();
        break;
    }
    
}

function getData(content,option,data){
    var result=[];
    let keys = Object.keys(data);
    for(let i=0;i<keys.length;i++){
        if(content==data[keys[i]].name){
            result.push(data[keys[i]]);
        }
    }
    localStorage.setItem(option,JSON.stringify(result));
}

function errData(error){
    console.log(error.message, error.code)
}

function renderLec(){
    var html='';
    var array=[];
    array=JSON.parse(localStorage.getItem(storeKeyLec));

    for(var i = 0; i<array.length;i++){
        html+='<li class="lecturer">'
        html+='<p><span>Name:</span>'+  array[i].name;+'</p>'
        html+='<p><span>Mail:</span>'+array[i].mail+'</p>'
        html+='<i class"lecturer-delete" onclick="onDeleteLecturer('+i+')">X</i>'
        html+='<i class"lecturer-edit" onclick="onEditLecturer('+i+')">Edit</i>'
        html+='</li>'
    }
    setHTML('.result-list',html);
}
function setHTML(selector,html){
    var element = document.querySelector(selector);
    element.innerHTML=html;
}