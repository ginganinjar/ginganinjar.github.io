
   var theCounter;
  var colID;
  var rowID;
  var itteration = 1;
  var myWork;

// array from portfolio including url and img.
var myWorkArray = [["./assets/imgs/p1.png", "https://ginganinjar.github.io/monash-assignment-3/"],
                 ["./assets/imgs/p3.png", "https://ginganinjar.github.io/monash-assignment4/"],
                 ["./assets/imgs/p4.png", "https://ginganinjar.github.io/monash-assignment5/"],
                 ["./assets/imgs/p5.png", "https://ginganinjar.github.io/ginganinjar-monash-assignment6/"],
                 ["./assets/imgs/p6.png", "https://darren-behan.github.io/a-better-time/"]
                ]


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



function populatePage() {
  
    
  theCounter = 0;

  for (i=0;i < myWorkArray.length;i ++) {
   
    var addRow;
    var addCol;

  if  ((theCounter && (theCounter % 5 === 0)) || (theCounter == 0)) {
      itteration ++;

     addRow = $("<div>");

          rowID = "rowID" +  i;
          colID = "colID" +  i;

          addRow.attr("class","row");
          addRow.attr("id",rowID);
          $("#portfolio").append(addRow);

      addCol = $("<div>");
          addCol.attr("class","col-sm");
          addCol.attr("id",colID);
          $("#" + rowID).append(addCol);

    
  }

   
    let addStuff = $("<img>");
         addStuff.attr("src", myWorkArray[i][0]);
         addStuff.attr("class","img-fluid port-image");
         addStuff.attr("style", "cursor:pointer;float:left;width:25%;padding:1%");
         addStuff.attr("id",i);
         addStuff.attr("data-url", myWorkArray[i][1]);

        $("#" + colID).append(addStuff);   
    
       $("#"+ i).on("click",function(){
        openThis(this);
  
    })

    theCounter = theCounter + 1; 
  }


}

function openThis(e) {

  var getTheURL = e.getAttribute('data-url');
  window.open(getTheURL);     


}


$(document).ready(function () {
  populatePage();

  
})