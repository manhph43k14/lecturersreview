import * as firebase from 'firebase';
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
//
export const firebaseConnect=firebase.initializeApp(firebaseConfig);

var data = firebase.database().ref('Faculty/');
    data.once('value').then(function (snapshot) {
        console.log(snapshot.val());
    })