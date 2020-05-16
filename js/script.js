
    function showRepo() {
      var x = document.getElementById("hidden-content");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("down-arrow").innerHTML = "close";
        document.getElementById("footer").style.display = "none";



    } else {
      document.getElementById("down-arrow").innerHTML = "REPO";
      x.style.display = "none";
      document.getElementById("footer").style.display = "block";
    }
  
  }


  
  