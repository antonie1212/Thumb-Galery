
const imgMici =  document.querySelectorAll(".imgs");
const imgMare = document.querySelector("#current")


imgMici.forEach(element => {
    element.addEventListener("click", (ev) => {
        imgMare.src = ev.target.src
    })
    
});