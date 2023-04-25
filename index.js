const submitBTN = document.querySelector('#submit-btn');

submitBTN.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
    });

const pessoa = {
    nome: "Matheus",
    idade: 20,
    cidade: "Juiz de Fora",
    estado: "MG"
}