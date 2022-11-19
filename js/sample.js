let count = 1;
let value = -200;
setInterval(function(){
  document.getElementById('radio' + count).checked = true;
  document.getElementById('slides').style.marginLeft = value + "%"
  count++;
  value = value +200;
  if(count > 3){
    count = 1;
    value = -200;
  }
}, 5000);