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
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")

const table1 = document.querySelector("section.table1");
const table2 = document.querySelector("section.table2");
const table3 = document.querySelector("section.table3");
button1.addEventListener('click',function(){
  document.querySelector("section.table1").classList.add('active');
  this.classList.toggle('active');
  table2.classList.remove('active');
  table3.classList.remove('active');
})
button2.addEventListener('click',function(){
  document.querySelector("section.table2").classList.add('active');
  this.classList.toggle('active');
  table1.classList.remove('active');
  table3.classList.remove('active');
})
button3.addEventListener('click',function(){
  document.querySelector("section.table3").classList.add('active');
  this.classList.toggle('active');
  table2.classList.remove('active');
  table1.classList.remove('active');
})
/*accordion of footer for mobile devices*/
const accordion = document.getElementsByClassName('accordion-trigger');
for(i = 0; i < accordion.length ; i++){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active');
  })
}