/*moving the products section with both radio button and ordinary button that defines the group*/
function margin_move1(){
    let object = document.getElementById("object-of-move");
    const keyboard_section = document.getElementById("keyboard")
    const mouse = document.getElementById("mouse")
    const headphone = document.getElementById("headphone")
    const others = document.getElementById("others")
    object.style.marginLeft = "0%";
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