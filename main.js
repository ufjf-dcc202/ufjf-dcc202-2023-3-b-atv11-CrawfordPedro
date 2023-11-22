const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const olItens = document.querySelector("#itens");

adicionaElementoNaLista();
adicionaElementoNaLista();
adicionaElementoNaLista();

function adicionaElementoNaLista() {
    const li = document.createElement("li");
    li.textContent = "Primeiro";
    olItens.appendChild(li);
}