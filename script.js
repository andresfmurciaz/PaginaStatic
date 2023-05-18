document.getElementById("toggleBtn").addEventListener("click", function() {
    var myList = document.getElementById("myList");
    if (myList.style.display === "none") {
      myList.style.display = "block";
    } else {
      myList.style.display = "none";
    }
  });
  