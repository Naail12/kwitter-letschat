
const firebaseConfig = {
    apiKey: "AIzaSyATe8uX0vNDKzm8QSdIsBV91GGgr8RsS0g",
    authDomain: "kwitter-be0fd.firebaseapp.com",
    databaseURL: "https://kwitter-be0fd-default-rtdb.firebaseio.com",
    projectId: "kwitter-be0fd",
    storageBucket: "kwitter-be0fd.appspot.com",
    messagingSenderId: "374115362247",
    appId: "1:374115362247:web:0388f5597e27c4fee7e5e2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
