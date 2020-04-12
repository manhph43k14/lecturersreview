

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

    find();
}
var subject = 'Subject';
var subDetail = 'Subject Detail';
// 
function find() {
    var btnFind = document.getElementById('btnFind');
    btnFind.addEventListener('click',function(e){
        var content = document.getElementById('search').value.toLowerCase();
        var select = document.getElementById('findItem');
        var option = select.options[select.selectedIndex].value;
        addFind(content,option);
        go(content,option);
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
function go(content, option){
    switch (option){
        case "Lecturers":
            var rootRef = firebase.database().ref(option);
            rootRef.on("value",function(snapshot){
                getData(content,option,snapshot.val());
            },errData);
            render(option);
            break;
        case "Falculty":
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

function render(option){
    var html='';
    var array=[];

    array=JSON.parse(localStorage.getItem(option));
    html = setRender(option,array);
   
    setHTML('.result-list',html);
}
function setHTML(selector,html){
    var element = document.querySelector(selector);
    element.innerHTML=html;
}
function setRender(option,array){
    var html='';
    switch(option){
        case "Lecturers":
            for(var i = 0; i< array.length;i++){
                getSub(array[i].id);
                arraySub=JSON.parse(localStorage.getItem(subDetail));
                arraySubject = JSON.parse(localStorage.getItem(subject));
                for(var ii = 0; ii< arraySub.length;ii++){
                    html+='<li class="'+array[i].id+'-'+arraySubject[ii]+'">'
                    html+='<p id="'+array[i].id+'"><span>Name:</span>'+ array[i].name;+'</p>'
                    html+='<p id="'+arraySubject[ii]+'"><span>Subject:</span>'+arraySub[ii].name+'</p>'
                    html+='<button type="submit" id="btnGo" onclick="comment('+array[i].id+','+arraySubject[ii]+')">Đi tới</button>'
                    html+='</li>'
                }
                // comment();
            }
            break;
        case "Subject":
            break;
    }
   
    return html;
}

function getSub(id){
    var rootRefSub = firebase.database().ref('Subject');
            rootRefSub.on("value",function(snapshot){
                getDataSub(id,subject,snapshot.val());
            },errData);
}

function getDataSub(content,option,data){
    var result=[];
    var sub=[];
    let keys = Object.keys(data);
    for(let i=0;i<keys.length;i++){
        if(content==data[keys[i]].lecturers){
            result.push(keys[i]);
            sub.push(data[keys[i]]);
        }
    }
    localStorage.setItem(option,JSON.stringify(result));
    localStorage.setItem(subDetail,JSON.stringify(sub));
}
function comment(lecturers,subject){
    var url ='../comment/comment.html';
    window.location.assign(url);
    var data = lecturers + '-' + subject;
    $.ajax({
        type: 'GET',
        url: url,
        data:data,
        success: function(data){
            if(data==false){
                console.log('empty data');
            }else{
                $('#lecturers').html(data);
            }
        }
    })
    document.getElementById('lecturers').innerHTML = lecturers;
}
