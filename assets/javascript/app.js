// Capture Button Click
$("#submit").on("click", function(event) {
    // prevent page from refreshing when form tries to submit itself
    event.preventDefault();

    // Capture user inputs and store them into variables
    var search-term = $("#search-term").val().trim();
    var role = $("#role").val().trim();
    var start-year = $("#start-year-input").val().trim();
    var end-year = $("#end-year-input").val().trim();

    // Console log each of the user inputs to confirm we are receiving them
    console.log(search-term);
    console.log(role);
    console.log(start-year);
    console.log(end-year);

    // Replaces the content in the "recent-member" div with the new info
    $("#search-term").text(search-term);
    $("#role").text(role);
    $("#start-year").text(start-year);
    $("#end-year").text(end-year);

    // Clear sessionStorage
    sessionStorage.clear();

    // Store all content into sessionStorage
    sessionStorage.setItem("search-term", search-term);
    sessionStorage.setItem("role", role);
    sessionStorage.setItem("start-year", start-year);
    sessionStorage.setItem("end-year", end-year);
  });

  // By default display the content from sessionStorage
  $("#search-term-display").text(sessionStorage.getItem("search-term"));
  $("#role-display").text(sessionStorage.getItem("role"));
  $("#start-year").text(sessionStorage.getItem("start-year"));
  $("#end-year").text(sessionStorage.getItem("end-year"));