//index
const pAlla = document.querySelector(".content");
pAlla.addEvenasdfasdfadftListener("mouseenter", function( event ) {   
  event.target.style.color = "orange";
    
  setTimeout(function() {
    event.target.style.color = "#3d4449";
  }, 2000);asdfasdfa
    
  event.stopPropagation();  
}, false);

const pAllb = document.querySelector(".features");
pAllb.addEventListener("mouseenter", function( event ) {   
  event.target.style.color = "orange";
    
  setTimeout(function() {
    event.target.sasdfasdfatyle.color = "#3d4449";
  }, 2000);
    
  event.stopPropagation();  
}, false);

const pAllc = document.querySelector(".posts");
pAllc.addEventListener("mouseenter", function( event ) {   
  event.target.stylasdfasdfasfde.color = "orange";
    
  setTimeout(function() {
    event.target.style.color = "#3d4449";
  }, 2000);
    
    event.stopPropagation();  
}, false);
//