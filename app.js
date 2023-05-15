const treehouse = document.getElementById('treehouse');
const codecademy = document.getElementById('codecademy');
const fewd1 = document.getElementById('fewd');
const code1 = document.getElementById('code');
const toggleButton = document.getElementById('mode')
function fewd() {
    if (treehouse.style.display == "none") {
        treehouse.style.width = "100%"
        treehouse.style.display = "block"
    } else {
        treehouse.style.display = "none";
    }
}
function code() {
    if (codecademy.style.display == "none") {
        codecademy.style.display = "block"
        codecademy.style.width = "100%"
    } else {
        codecademy.style.display = "none";
    }
}
fewd1.addEventListener("click", fewd);
code1.addEventListener("click", code);

// function nightMode() {
//     if (document.body.style.fontFamily == "arial")
//     document.body.style.fontFamily = "comic sans"
//     else {
//         document.body.style.fontFamily = "arial"
//     }
// }

// mode.addEventListener("click", nightMode);
function change() {
    let getColor = document.querySelector('.arial');
    getColor.classList.toggle('weirdFont');
}
toggleButton.addEventListener('click', change)