const firebaseConfig = {
      apiKey: "AIzaSyABkSVByV6kGoG8iiCZm6-3r8lK331v7sQ",
      authDomain: "classtest-821bb.firebaseapp.com",
      databaseURL: "https://classtest-821bb-default-rtdb.firebaseio.com",
      projectId: "classtest-821bb",
      storageBucket: "classtest-821bb.appspot.com",
      messagingSenderId: "971982953226",
      appId: "1:971982953226:web:04985dabc0719e067bf8f3",
      measurementId: "G-SNSFT2CT8J"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name: user_name,
message: msg,
like : 0,
});      
document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
}
});
});
}
getData();

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}
