let pessoa = {
    nome: "Matheus",
    idade: 20,
    cidade: "Juiz de Fora",
    estado: "MG",
    envelhecer: function() {
        this.idade++;
    }
}
const btn = document.querySelector('#btn');
const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');

nome.innerHTML = `Nome: ${pessoa.nome}`;
idade.innerHTML = `Idade: ${pessoa.idade}`	;

const atualizaIdade = () => {
    idade.innerHTML = `Idade: ${pessoa.idade}`;
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    pessoa.envelhecer();
    atualizaIdade();
    //alert(`A pessoa ${pessoa.nome} envelheceu!`)
    });
