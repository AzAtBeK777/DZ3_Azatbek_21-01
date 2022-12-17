///////////////////    3    /////////////////////////////////////
var svet = prompt('светафо')
switch (svet) {
    case 'красный':
        alert("Стоп")
        break
}
switch (svet){
    case 'оранжевый':
        alert('еще немношко')
        break
}
switch (svet) {
    case 'зеленый':
        alert("Вперед")
        break
    default:
        alert("надо вводить цвета")
}
////////////////////////    1    ///////////////////////////////////////////
var num = []
for(var i = 0; i <= 10; i++){
    num.push(i)
}
console.log(num)
////////////////////////     2     //////////////////////////////////////////////

var obr = []
for(var i = 20; i >=0; i = i - 1){
    obr = obr + i + ' ';
}
console.log(obr)



