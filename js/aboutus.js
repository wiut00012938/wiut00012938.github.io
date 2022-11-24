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
/*button for gettting the text of mission*/
const mission = document.querySelector('.mission h2');
mission.addEventListener('click', function(){
    document.querySelector('.mission p').classList.toggle("active")
})
/*checking the rightness of entering email for every char entered*/
function check(){
    var form = document.querySelector('.news-receiving form');
    var input = document.getElementById("input").value;
    var warning_text = document.getElementById("warning");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (input.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        warning_text.innerHTML = "The input is valid"
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        warning_text.innerHTML = "The input is invalid"
    }
}

/*horizontal bar*/
const left = document.getElementById("left");
const right = document.getElementById("right")
const comments = document.getElementById("wrap")
let margin = 0;
function left_move(){
  comments.style.marginLeft = 20 + margin + "%";
  margin+=10;
}
function right_move(){
  comments.style.marginLeft = margin - 20 + "%";
  margin-=10;
}
/*accordion method for mobile footer*/
const accordion = document.getElementsByClassName('accordion-trigger');
for(i = 0; i < accordion.length ; i++){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active');
  })
}