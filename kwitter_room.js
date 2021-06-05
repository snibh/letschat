
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBURpy-D1S9yZCpwzpcRf3-1EPcI0Z5c98",
      authDomain: "kwitter-3504a.firebaseapp.com",
      databaseURL: "https://kwitter-3504a-default-rtdb.firebaseio.com",
      projectId: "kwitter-3504a",
      storageBucket: "kwitter-3504a.appspot.com",
      messagingSenderId: "855479763788",
      appId: "1:855479763788:web:f7b225bfa22478abac05e9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user name");
    console.log(user_name);
     document.getElementById("user_name").innerHTML="welcome "+ user_name + " !";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
console.log("fgf")
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding user name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name) 
{ console.log(name);

localStorage.setItem("room_name", name);

 window.location = "kwitter_page.html";
 }
 function logout()
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "kwitter.html";
 }