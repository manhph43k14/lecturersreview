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
    switch (option){
        case "Lecturers":
            var rootRef = firebase.database().ref(option);
            rootRef.on("value",function(snapshot){
                getLec(content,snapshot.val());
            },errData)
            break;
        case "Faculty":
            var rootRef = firebase.database().ref(option);
            rootRef.on("value",function(snapshot){
                getFal(content,snapshot.val());
            },errData)
            break;
        case "Subject":
        var rootRef = firebase.database().ref(option);
        rootRef.on("value",function(snapshot){
            getSub(content,snapshot.val());
        },errData)
        break;
    }
    
}
var Lecturers = {
    storeKey : 'LECTURER_DATA',
    data : [],
    add: function(lecturer){
        this.data.push(lecturer)
    },
    save: function(){
        const jsonData = JSON.stringify(this.data);
        localStorage.setItem(this.storeKey,jsonData);
    }
}
function getLec(content,data){
    var Lecturers = {
        storeKey : 'LECTURER_DATA',
        data : [],
        add: function(lecturer){
            this.data.push(lecturer)
        },
        save: function(){
            const jsonData = JSON.stringify(this.data);
            localStorage.setItem(this.storeKey,jsonData);
        }
    }
    const jsonData = JSON.stringify(data);
    localStorage.setItem(this.storeKey,jsonData);
    Lecturers.save();
    // let keys = Object.keys(data);
    // var name= new Array;
    // for(let i=0;i<data.length;i++){
    //     name[i]=data[keys[i]].name;
    //     Lecturers.add(data[i]); 
    //     Lecturers.save();
    // }
    // var index = name.indexOf(content);
    // if(index!=-1){
    //     console.log(data[keys[index]].mail);
    //     console.log(keys[index]);
    // } else{
    //     console.log('not found')
    // }
}
function getFal(content,data){
    let keys = Object.keys(data)
    content= content.toUpperCase();
    if(keys.indexOf(content)!=-1){
        var index = keys.indexOf(content);
        console.log(data[keys[index]].name);
        console.log(keys[index]);
    } else{
        console.log('not found')
    }
}
function getSub(content,data){
    let keys = Object.keys(data)
    var subClass= new Array;
    for(let i=0;i<keys.length;i++){
        var temp = keys[i];
        var tmp = temp.split("_");
        if(content == tmp[0]){
            subClass.push(i);
        }
    }
    for(let i=0;i<subClass.length;i++){
        var index = subClass[i];
        console.log(index);
        console.log(data[keys[index]].name);
        console.log(keys[index]);
    }

}
function errData(error){
    console.log(error.message, error.code)
}

function render(){
    var lecturers= new Array;
    var html='';
    for(var i=0; i<data.length;i++){
        var lecturer = lecturers[i];
        html+='<li class="lecturer">'
        html+='<p><span>Name:</span>'+lecturer.name+'</p>'
        html+='<p><span>Age:</span>'+lecturer.age+'</p>'
        html+='<i class"lecturer-delete" onclick="onDeleteLecturer('+i+')">X</i>'
        html+='<i class"lecturer-edit" onclick="onEditLecturer('+i+')">Edit</i>'
        html+='</li>'
    }
    setHTML('#lecturer-list',html);
}
function setHTML(selector,html){
    var element = document.querySelector(selector);
    element.innerHTML=html;
}