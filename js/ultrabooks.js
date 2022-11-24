searchForm = document.querySelector('.search');

document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle('active');
}
/*making the nav bar fixed when the user scrolles the web page*/
window.onscroll = () =>{

    searchForm.classList.remove('active');
  
    if(window.scrollY > 150){
      document.querySelector('header nav').classList.add('active');
    }else{
      document.querySelector('header nav').classList.remove('active');
    }
  
  }
  
  window.onload = () =>{
  
    if(window.scrollY > 150){
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
/*making the controller of product lists*/
const first_table = document.querySelector("main.table1");
const second_table = document.querySelector("section.table2");
const third_table = document.querySelector("section.table3");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
button1.addEventListener('click', function(){
  document.getElementById("first").classList.toggle("active");
  document.getElementById("second").classList.remove("active");
  document.getElementById("third").classList.remove("active");
})
button2.addEventListener('click', function(){
  document.getElementById("first").classList.remove("active");
  document.getElementById("second").classList.toggle("active");
  document.getElementById("third").classList.remove("active");
})
button3.addEventListener('click', function(){
  document.getElementById("first").classList.remove("active");
  document.getElementById("second").classList.remove("active");
  document.getElementById("third").classList.toggle("active");
})