// function num (a12, b23){
//     if (a12 > b23){
//         console.log(a12)
//     }
//     else {
//         console.log(b23)
//     }
// }
// num(150,23)
// //////////////////////////////////////
// function one ( str = prompt('string')){
//     console.log(str.length)
// }
// one()
/////////////////////////////////////////
function kal(a = Number(prompt('Введите первое число')),
             b= Number(prompt('Введите второе число')),
             c= Number(prompt('Введите третие число')),
             len = Number(prompt('Выберите действие: 1.умножения 2.деления 3.сложения 4.вычитание '))){
    if (len === 1 ){
        var d = a * c * b;
        console.log(d);
    }
    else if (len === 2 ){
        var f = a / c / b;
        console.log(f);
    }
    else if (len === 3 ){
        var g = a + c + b;
        console.log(g);
    }
    else if (len === 4 ){
        var h = a - c - b;
        console.log(h);
    }
    else{
        console.log('Ошибка')
    }
}
kal();


