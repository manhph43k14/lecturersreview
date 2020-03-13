window.onload = function() {

    const btnSignin = document.getElementById("btnSignin");
    const btnSignup = document.getElementById("btnSignup");
    // Sign up
    btnSignup.addEventListener('click', e => {
        var emailNew = document.getElementById("email-signup").value;
        var passwordNew = document.getElementById("password-signup").value;
        if (emailNew.length < 6) {
            window.alert('Please enter an email address.');
        } else
        if (passwordNew.length < 6) {
            window.alert('The password is too weak.');
        } else
            window.alert('Create user successfull!')
        firebase.auth().createUserWithEmailAndPassword(emailNew, passwordNew).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorMessage);
        });

    });
    // Sign in

    btnSignin.addEventListener('click', e => {
        if (firebase.auth().currentUser) {
            // [START signout]
            firebase.auth().signOut();
            window.alert("User");
            // [END signout]
        } else {
            var email = document.getElementById("email-signin").value;
            var password = document.getElementById("password-signin").value;
            window.alert(email + " " + password);
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log(errorMessage);
            });

        }

    });


    // Add a realtime listener
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            // var displayName = user.displayName;
            // var email = user.email;
            // window.location("https://ldr-pj.web.app")
            // document.getElementById('nav-login').textContent = 'Profile';
            // document.getElementById('nav-logout').classList.remove('hide');
            // var emailVerified = user.emailVerified;
            // var photoURL = user.photoURL;
            // var isAnonymous = user.isAnonymous;
            // var uid = user.uid;
            // var providerData = user.providerData;
            // ...
            window.alert("Login")
            console.log('logged in');

        } else {
            console.log('not logged in');
            // document.getElementById('nav-logout').classList.add('hide');
            // User is signed out.
            // ...
        }
    });
}