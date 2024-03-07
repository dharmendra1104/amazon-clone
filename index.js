var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


// let slidetoday = 1;
// showDivs(slidetoday);

// function slider(n) {
//   showDivs(slidetoday += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("item");
//   if (n > x.length) {slidetoday = 1}
//   if (n < 1) {slidetoday = x.length}
//   for (i = 0; i < x.length; i++) {
//               n++
//   }

// }