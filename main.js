var scrollCn = function(quantity)
{
  var scrollTop = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
  
  var size = 45 - ((scrollTop / quantity) || 0);
  
  if(size <= 20) size = 20;

  document.getElementById("header").style.fontSize = `${size}px`;
  

};
window.addEventListener('scroll', function(){ scrollCn(10) });

// window.onscroll = function() {
//     scrollFunction()
//   };

// function scrollFunction() {
//     let appearance = window.innerHeight / 2;
//     if (document.body.scrollTop > appearance || document.documentElement.scrollTop > appearance) {
//       document.getElementById("links").style.fontSize = "1.3rem";
//     //   document.getElementById("links").style.borderBottom = "1px solid #fff";
//     } else {
//       document.getElementById("links").style.fontSize = "0";
//     //   document.getElementById("links").style.borderBottom = "none";
//     }
// }