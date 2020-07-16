var db = firebase.firestore();



firebase.auth().onAuthStateChanged(function(user) {
  var name = document.getElementById("name").value;
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
        document.getElementById("user_para").innerHTML = "<h3>Welcome " + name +"</h3>";
        window.alert('you are signed in');
      
    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});


function login(){

  var useremail = document.getElementById("useremail").value;
  var password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(useremail, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });


}




function signup(){
 

    var email = document.getElementById("email").value;
    var Password = document.getElementById("pass").value;
    var name = document.getElementById("name").value;
    var cpass = document.getElementById("repass").value;
    var user = firebase.auth().currentUser;


    db.collection("projectnxt-0001").doc(email).set({
        name: name,
        email: email,
        password: Password
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });


    firebase.auth().createUserWithEmailAndPassword(email, Password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
});
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});


}