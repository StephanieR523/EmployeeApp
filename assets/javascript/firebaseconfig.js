
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDAf2mervxkVcsx7_YO_uomXtbNrFnr9SA",
    authDomain: "employeeapp-1dd72.firebaseapp.com",
    databaseURL: "https://employeeapp-1dd72.firebaseio.com",
    projectId: "employeeapp-1dd72",
    storageBucket: "",
    messagingSenderId: "466486561640",
    appId: "1:466486561640:web:9fb62e01c11ce9ed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  // Create a variable to reference the database.
  var database = firebase.database();

  // Initial Values
  var name = "";
  var role = "";
  var start = 0;
  var end = "";

  // Capture Button Click
  $("#add-user").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#employee-name").val().trim();
    role = $("#role").val().trim();
    start = $("#start-year").val().trim();
    end = $("#end-year").val().trim();

    // Code for handling the push
    database.ref().push({
      name: name,
      role: role,
      start: start,
      end: end,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

  });

  // Firebase watcher .on("child_added"
  database.ref().on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.role);
    console.log(sv.start);
    console.log(sv.end);

    // Change the HTML to reflect
    $("#name-display").text(sv.name);
    $("#email-display").text(sv.role);
    $("#age-display").text(sv.start);
    $("#comment-display").text(sv.end);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });