
  let theCounter;
  let colID;
  let rowID;
  let itteration = 1;
  let myWork;

// array from portfolio including url and img.
var myWorkArray = [["./assets/imgs/p1.png", "https://ginganinjar.github.io/monash-assignment-3/","https://github.com/ginganinjar/monash-assignment-3","20th of May, 2020 - Password Maker"],
                 ["./assets/imgs/p3.png", "https://ginganinjar.github.io/monash-assignment4/","https://github.com/ginganinjar/monash-assignment4","29th of May, 2020 - Javascript Knowledge Game"],
                 ["./assets/imgs/p4.png", "https://ginganinjar.github.io/monash-assignment5/", "https://github.com/ginganinjar/monash-assignment5","11th of June, 2020 - JS Daily Organiser"],
                 ["./assets/imgs/p5.png", "https://ginganinjar.github.io/ginganinjar-monash-assignment6/", "https://github.com/ginganinjar/ginganinjar-monash-assignment6", "26th of July, 2020 - Weather application"],
                 ["./assets/imgs/p6.png", "https://darren-behan.github.io/a-better-time/","https://github.com/darren-behan/a-better-time","1st of July, 2020 - A better time - date outing ideas"]
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
   
    let addRow;
    let addCol;

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
         addStuff.attr("style", "cursor:pointer;float:left;width:25%;padding:1%;margin-bottom:3%;");
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

  let getTheURL = e.getAttribute('data-url');
  window.open(getTheURL);     
}


// function to itterate through array and populate repo results in hidden div.
function populateRepo() {
  
  for (i=0;i < myWorkArray.length;i ++) {

      let makeURl = $("<a>");
          makeURl.attr("href",myWorkArray[i][2]);
          makeURl.html(myWorkArray[i][3] + "<BR>");

          $("#repoResults").append(makeURl);
  }
}