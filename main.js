const display = document.querySelector('.display');
const btn = document.querySelector('.btn');
const show = document.querySelector('.show');



btn.addEventListener('click', function() {
    const values = display.value.split('');
    let operator = null;
    let result = null;
    for (const symbol of values) {
        if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
            operator = symbol;
        }
    }
    result = show.innerHTML = `${values[0]}<br>${operator}<br>${values[2]}`
})