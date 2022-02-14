/**
 *  Функция берет 2 числа ,и в зависимости от значения выбранного оператора вычисляет результат.
 * @param  {number} number1 Первое заданное число
 * @param  {number} number2 Второе заданное число
 * @param  {string} operator варианты операторов,которые обрабатываются при выборе одного из них
 * @returns {number} result выводит результат выбранного действия
 */
let operator;

function func() {
    let result;
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
    }
    document.getElementById('result').innerHTML = result;
}