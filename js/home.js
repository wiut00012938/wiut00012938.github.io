/*dropping search form when the user click to the search button(for mobile devices)*/
searchForm = document.querySelector('.search');

document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle('active');
}
/*making the nav bar fixed when the user scrolles the web page*/
window.onscroll = () =>{

    searchForm.classList.remove('active');
  
    if(window.scrollY > 300){
      document.querySelector('header nav').classList.add('active');
    }else{
      document.querySelector('header nav').classList.remove('active');
    }
  
  }
  
  window.onload = () =>{
  
    if(window.scrollY > 300){
      document.querySelector('header nav').classList.add('active');
    }else{
      document.querySelector('header nav').classList.remove('active');
    }
}
/*making the nav bar visible for mobile users when menu is clicked*/
const mobile_btn = document.querySelector('.btn_nav');
const menu = document.querySelector('.mobile-nav');
mobile_btn.addEventListener('click', function(){
    menu.classList.toggle("active-menu");
})

/*automated scrolling */
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

/*accordion*/
const accordion = document.getElementsByClassName('accordion-trigger');
for(i = 0; i < accordion.length ; i++){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active');
  })
}