for (let index = 2; index < 6; index++) {
    document.getElementById("change" + index).addEventListener('click', function(){
        document.getElementById("main-image").src = "../images/arrival" + String(index) +".jpg"
    })
}