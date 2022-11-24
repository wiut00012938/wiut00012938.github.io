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
/*slider function that crop the image and allow to make two image's width 100% with it's crop*/
function slide(){
    let slideValue = document.getElementById("slider").value;
    document.getElementById("my-img").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
    console.log("polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)");
  }


/*moving the products section with both radio button and ordinary button that defines the group*/
function margin_move1(){
  let object = document.getElementById("object-of-move");
  const keyboard_section = document.getElementById("keyboard")
  const mouse = document.getElementById("mouse")
  const headphone = document.getElementById("headphone")
  const others = document.getElementById("others")
  object.style.marginLeft = "2%";
  keyboard_section.classList.toggle("active")
  mouse.classList.remove("active")
  headphone.classList.remove("active")
  others.classList.remove("active")
}
function margin_move2(){
  let object = document.getElementById("object-of-move");
  const keyboard_section = document.getElementById("keyboard")
  const mouse = document.getElementById("mouse")
  const headphone = document.getElementById("headphone")
  const others = document.getElementById("others")
  object.style.marginLeft = "-100%";
  keyboard_section.classList.remove("active")
  mouse.classList.add("active")
  headphone.classList.remove("active")
  others.classList.remove("active")
}
function margin_move3(){
  let object = document.getElementById("object-of-move");
  const keyboard_section = document.getElementById("keyboard")
  const mouse = document.getElementById("mouse")
  const headphone = document.getElementById("headphone")
  const others = document.getElementById("others")
  object.style.marginLeft = "-200%";
  keyboard_section.classList.remove("active")
  mouse.classList.remove("active")
  headphone.classList.toggle("active")
  others.classList.remove("active")
}
function margin_move4(){
  let object = document.getElementById("object-of-move");
  const keyboard_section = document.getElementById("keyboard")
  const mouse = document.getElementById("mouse")
  const headphone = document.getElementById("headphone")
  const others = document.getElementById("others")
  object.style.marginLeft = "-300%";
  keyboard_section.classList.remove("active")
  mouse.classList.remove("active")
  headphone.classList.remove("active")
  others.classList.add("active")
}
function margin_move5(){
  let object = document.getElementById("object-of-move");
  const keyboard_section = document.getElementById("keyboard")
  const mouse = document.getElementById("mouse")
  const headphone = document.getElementById("headphone")
  const others = document.getElementById("others")
  object.style.marginLeft = "-400%";
  keyboard_section.classList.remove("active")
  mouse.classList.remove("active")
  headphone.classList.remove("active")
  others.classList.add("active")
}

/*accordion*/
const accordion = document.getElementsByClassName('accordion-trigger');
for(i = 0; i < accordion.length ; i++){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active');
  })
}