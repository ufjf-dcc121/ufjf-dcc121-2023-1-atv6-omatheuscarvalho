const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const btn = document.querySelector('#btn');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const soma = parseInt(num1.value) + parseInt(num2.value);
    alert(`A soma dos números é ${soma}`);
    num1.value = "";
    num2.value = "";
})