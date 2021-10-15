//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB3eVxAXHduQ78f2cMFPPlWyEH8W8v3DX8",
      authDomain: "kwitter1-e7fe1.firebaseapp.com",
      databaseURL: "https://kwitter1-e7fe1-default-rtdb.firebaseio.com",
      projectId: "kwitter1-e7fe1",
      storageBucket: "kwitter1-e7fe1.appspot.com",
      messagingSenderId: "452002292291",
      appId: "1:452002292291:web:058930f3839771db572af6",
      measurementId: "G-C67K1QK7KP"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }