const a = document.querySelector('#minus');
var i = 0;
a.addEventListener('click', function (){
    if (i > 0){
        i--;
        content.innerHTML = i;
    }
    content.style.background = 'red';
    content.style.color = 'black';
})
const b = document.querySelector('#plus');
b.addEventListener('click', function (){
    i++;
    content.innerHTML= i;
    content.style.background = 'green';
    content.style.color = 'white';
})
/////////////////////////////////////////////////////
const contX = document.getElementById('PostX');
const contY = document.getElementById('PostY');
const cord = document.getElementById('HWtwo');
cord.addEventListener("mousemove", (event)=>{
    contX.innerText = event.screenX;
    contY.innerText = event.screenY;
});
/////////////////////////////////
let cout = Number(prompt("Выберите 1.красный 2.жёлтый 3.зелёный"));
const traffic_one = document.querySelector("#red");
const traffic_one_inside = document.querySelector("#text_stop");
const traffic_two = document.querySelector("#yellow");
const traffic_two_inside = document.querySelector("#text_expectetion");
const traffic_tree = document.querySelector("#green");
const traffic_tree_inside = document.querySelector("#text_go");

if (cout === 1) {
    traffic_one.style.background = "red";
    traffic_one_inside.style.color = "black";
    traffic_one_inside.innerText = "STOP!!!";
} else if (cout === 2) {
    traffic_two.style.background = "yellow";
    traffic_two_inside.style.color = "black";
    traffic_two_inside.innerText = "Ожидайте";
} else if (cout === 3) {
    traffic_tree.style.background = "green";
    traffic_tree_inside.style.color = "black";
    traffic_tree_inside.innerText = "GO";
} else {
    alert("error");
}



