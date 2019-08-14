function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// When the user clicks on <div>, open the popup
function mypopup(x) {  // x is the parent div
  var c = x.childNodes;
  for(var i = 0; i < c.length; i++) {
    var child = c[i];
    var classname = String(child.className);
    if(classname.includes("popuptext")) {
      child.classList.toggle("show");
    }
  }
}

function imageEnlarge(x) {
  x.style.height = "400px";
}
function imageShrink(y) {
  y.style.height = "250px";
}
