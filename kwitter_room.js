

var firebaseConfig = {
      apiKey: "AIzaSyCuzc8zYzAxo452htJJJxZbcH3RxHfcyEA",
      authDomain: "kwitter-7e9af.firebaseapp.com",
      projectId: "kwitter-7e9af",
      storageBucket: "kwitter-7e9af.appspot.com",
      messagingSenderId: "1079060439232",
      appId: "1:1079060439232:web:ebbf3a313b2131d5e28d25"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       {
            get_Data = document.getElementById("get_Data").value;
            firebase.database().ref("/").child(get_Data).update({
            purpose : "get_Data"
            });
        }
      });});}
getData();
