
    function showRepo() {
      var x = document.getElementById("hidden-content");
    if (x.style.display === "none") {
      x.style.display = "block";
      $("#down-arrow").text("Close");
        $(".footer").css("display","none");


    } else {
     
     $("#down-arrow").text("Repo ");
   
     $("#hidden-content").css("display","none");
     $(".footer").css("display","block");
   }
  
  }


  
  