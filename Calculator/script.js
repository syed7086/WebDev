const display = document.getElementById('display');

const appendToDisplay = (input) => {
    display.value += input;
    console.log(input);
}

const allClear = () => {
    display.value = '';
}

const calculate = () => {
    display.value = eval(display.value);
}