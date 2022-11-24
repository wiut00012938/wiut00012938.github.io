/*image switcher*/
for (let index = 2; index < 6; index++) {
    document.getElementById("change" + index).addEventListener('click', function(){
        document.getElementById("main-image").src = "../images/arrival" + String(index) +".jpg"
    })
}
/*pop-up search form for mobile*/
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
/*accordion method for mobile footer*/
const accordion = document.getElementsByClassName('accordion-trigger');
for(i = 0; i < accordion.length ; i++){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active');
  })
}