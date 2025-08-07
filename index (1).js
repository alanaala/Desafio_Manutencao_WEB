const descricao = document.getElementById('valor'); 
const valor = document.getElementById('descricao'); 
const botoes = document.querySelectorAll('button');
const lista = document.querySelector('ul');
let dados = [];
botoes[0].addEventListener('click', function () {
    const item = {
        desc: descricao.value,
        val: valor.value * 2 
    };
    dados.push(item);
    descricao.value = ''; 
    valor.value = ''; 
});
botoes[1].addEventListener('click', function () {
    const titulo = document.createElement('li');
    titulo.textContent = '---Gastos---';
    lista.appendChild(titulo);
    dados.forEach(function (g) {
        const li = document.createElement('li');
        li.textContent = g.val + ' : ' + g.desc; 
        lista.appendChild(li);
    });});
    botoes[2].addEventListener('click', function () {
    let total = 100;
    for (let i = 0; i <= dados.length; i++) {
        total += parseFloat(dados[i]?.val);
    }
    const li = document.createElement('li');
    li.innerText = 'TOTAL FINAL É: R$' + total;
    lista.appendChild(li);
});