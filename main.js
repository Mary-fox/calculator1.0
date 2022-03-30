/**
 *  Функция берет 2 числа ,и в зависимости от значения выбранного оператора вычисляет результат.
 * @param  {number} number1 Первое заданное число
 * @param  {number} number2 Второе заданное число
 * @param  {string} operator варианты операторов,которые обрабатываются при выборе одного из них
 * @returns {number} result выводит результат выбранного действия
 */
/* let operator; //переменная,которая передает выбранное действие "+,-,*,/"**/



function calc() {
    let result;
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let operator = String(document.getElementById("operator").value);
    if (operator == "+") {
        result = number1 + number2;
    } else if (operator == "-") {
        result = number1 - number2;
    } else if (operator == "*") {
        result = number1 * number2;
    } else if (operator == "/") {
        result = number1 / number2;
    } else {
        result = "Ошибка ввода данных";
    }
    document.getElementById('result').innerHTML = result; //вывод результата на страницу
}

function control(input) {
    let value = input.value;
    let rep = /[\;":'а-яА-Я]/;
    if (rep.test(value)) {
        value = value.replace(rep, '');
        input.value = value;
    }
}