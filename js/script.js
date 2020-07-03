
    function showRepo() {

   // rewrote function to use jquery as opposed to javascript

   if ($("#hidden-content").is(":hidden")) {
      $("#hidden-content").css("display","block");
      $("#down-arrow").text("Close");
      $("#footer").css("display","none");


    } else {
     
     $("#down-arrow").text("Repo ");
     $("#hidden-content").css("display","none");
     $("#footer").css("display","block");
   }
  
  }


  
  