var scrollCn = function(quantity)
{
  var scrollTop = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
  
  var size = 45 - ((scrollTop / quantity) || 0);
  
  if(size <= 20) size = 20;

  document.getElementById("header").style.fontSize = `${size}px`;
  

};
window.addEventListener('scroll', function(){ scrollCn(10) });

