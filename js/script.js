
    function showRepo() {
      var x = document.getElementById("hidden-content");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("down-arrow").innerHTML = "close";
      window.scrollTo(0,document.body.scrollHeight);
    } else {
      document.getElementById("down-arrow").innerHTML = "REPO";
      x.style.display = "none";
   
    }
  
  }


  
  