document.getElementById("toggleBtnn").addEventListener("click", function() {
    var myList = document.getElementById("myLista");
    if (myList.style.display === "none") {
      myList.style.display = "block";
    } else {
      myList.style.display = "none";
    }
  });
  
