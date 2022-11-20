const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')
first.addEventListener('click',function(){
    this.classList.toggle("active")
    second.classList.remove("active")
    third.classList.remove("active")
    fourth.classList.remove("active")
    document.querySelector("section.personal_account").classList.add("active")
    document.querySelector("section.purchased_products").classList.remove("active")
    document.querySelector("section.warraty_information").classList.remove("active")
    document.querySelector("section.settings").classList.remove("active")
    
})
second.addEventListener('click',function(){
    this.classList.toggle("active")
    first.classList.remove("active")
    third.classList.remove("active")
    fourth.classList.remove("active")
    document.querySelector("section.personal_account").classList.remove("active")
    document.querySelector("section.purchased_products").classList.add("active")
    document.querySelector("section.warraty_information").classList.remove("active")
    document.querySelector("section.settings").classList.remove("active")
})
third.addEventListener('click',function(){
    this.classList.toggle("active")
    second.classList.remove("active")
    first.classList.remove("active")
    fourth.classList.remove("active")
    document.querySelector("section.personal_account").classList.remove("active")
    document.querySelector("section.purchased_products").classList.remove("active")
    document.querySelector("section.warraty_information").classList.add("active")
    document.querySelector("section.settings").classList.remove("active")
})
fourth.addEventListener('click',function(){
    this.classList.toggle("active")
    second.classList.remove("active")
    third.classList.remove("active")
    first.classList.remove("active")
    document.querySelector("section.personal_account").classList.remove("active")
    document.querySelector("section.purchased_products").classList.remove("active")
    document.querySelector("section.warraty_information").classList.remove("active")
    document.querySelector("section.settings").classList.add("active")
})
document.querySelector('#sign_in').onclick = () =>{
    document.querySelector(".sign_in").classList.toggle('active');
  }
  
document.querySelector('#close_in').onclick = () =>{
    document.querySelector(".sign_in").classList.remove('active');
}

document.querySelector('#sign_up').onclick = () =>{
    document.querySelector(".sign_up").classList.toggle('active');
}
  
document.querySelector('#close_up').onclick = () =>{
    document.querySelector(".sign_up").classList.remove('active');
}