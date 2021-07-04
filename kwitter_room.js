

User_name = localStorage.getItem("user_name");
document.getElementById("name_user").innerHTML = User_name

var firebaseConfig = {
    apiKey: "AIzaSyAaG56ALRIcp6O25edFWonekPJQ0KBFuxI",
    authDomain: "kwitter-page-3a488.firebaseapp.com",
    databaseURL: "https://kwitter-page-3a488-default-rtdb.firebaseio.com",
    projectId: "kwitter-page-3a488",
    storageBucket: "kwitter-page-3a488.appspot.com",
    messagingSenderId: "365724262469",
    appId: "1:365724262469:web:d312c8b7e094670d15832c",
    measurementId: "G-MHJR5GYEEJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

 function add_room(){
     room_name = document.getElementById("add_room_input").value;
     firebase.database().ref("/").child("room_name").update({
         purpose : "adding room name"
     });

     localStorage.setItem("room_name",room_name);
     window.location("Kwitter_page.html");
 }

 function getData() {
    firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
    Room_names = childKey; 
    console.log("Room Name - " + Room_names); 
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
    document.getElementById("output").innerHTML += row; }); 
   });
  }

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location ="kwitter.html";    
}

function redirectToRoomName(){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location("kwitter_page.html");
 
  }

  function send(){
    msg =  document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        left:0
    });
 
 document.getElementById("msg").value = "";
  }




