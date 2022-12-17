var servis = Number(prompt("Оцените сервис от 1 до 10"))
if (servis >= 5 ) {
    alert("Спасибо за высокую оценку")
}
else if (servis < 5 ){
    alert("Мы работаем над улучшением сервиса")
}
else if (servis > 10) {
    alert("от 1 до 10")
 }
else {
    alert("Вы должны оценить приложения")
}
