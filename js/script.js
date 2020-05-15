
    function showRepo() {
      var x = document.getElementById("hidden-content");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("down-arrow").innerHTML = "close";
      document.getElementById("botomfooter").style.marginBottom = "-320px";

    } else {
      document.getElementById("down-arrow").innerHTML = "REPO";
      x.style.display = "none";
      document.getElementById("botomfooter").style.marginBottom = "-222px";
    }
  
  }


  
  