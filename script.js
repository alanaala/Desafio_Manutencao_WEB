// Arrays para armazenar gastos e ganhos
let gastos = [];
let ganhos = [];

// Referências dos elementos
const descGasto = document.getElementById('descGasto');
const valorGasto = document.getElementById('valorGasto');
const dataGasto = document.getElementById('dataGasto');
const btnAddGasto = document.getElementById('btnAddGasto');

const descGanho = document.getElementById('descGanho');
const valorGanho = document.getElementById('valorGanho');
const dataGanho = document.getElementById('dataGanho');
const btnAddGanho = document.getElementById('btnAddGanho');

const btnListarGastos = document.getElementById('btnListarGastos');
const btnTotalGastos = document.getElementById('btnTotalGastos');
const btnListarGanhos = document.getElementById('btnListarGanhos');
const btnTotalGanhos = document.getElementById('btnTotalGanhos');
const btnSaldoFinal = document.getElementById('btnSaldoFinal');

const removerGastoIndex = document.getElementById('removerGastoIndex');
const btnRemoverGasto = document.getElementById('btnRemoverGasto');
const removerGanhoIndex = document.getElementById('removerGanhoIndex');
const btnRemoverGanho = document.getElementById('btnRemoverGanho');

const saida = document.getElementById('saida');

// Define a data máxima para os inputs de data (hoje)
const hoje = new Date().toISOString().split('T')[0];
dataGasto.max = hoje;
dataGanho.max = hoje;

// Função para validar descrição
function validarDescricao(desc) {
  return /^[A-Za-z0-9 ]{3,100}$/.test(desc);
}

// Função para limpar inputs
function limparInputs(...inputs) {
  inputs.forEach(input => input.value = '');
}

// Função para mostrar mensagens na saída
function mostrarMensagem(msg) {
  saida.textContent = msg;
}

// Adicionar gasto
btnAddGasto.addEventListener('click', () => {
  const desc = descGasto.value.trim();
  const val = parseFloat(valorGasto.value);
  const data = dataGasto.value;

  if (!validarDescricao(desc)) {
    alert('Descrição do gasto inválida! Use 3 a 100 letras, números ou espaços.');
    descGasto.focus();
    return;
  }
  if (isNaN(val) || val <= 0) {
    alert('Valor do gasto inválido! Deve ser maior que zero.');
    valorGasto.focus();
    return;
  }
  if (!data) {
    alert('Data do gasto é obrigatória.');
    dataGasto.focus();
    return;
  }

  gastos.push({ desc, val, data });
  mostrarMensagem(`Gasto adicionado:\n${desc} - R$ ${val.toFixed(2)} - Data: ${data}`);
  limparInputs(descGasto, valorGasto, dataGasto);
});

// Adicionar ganho
btnAddGanho.addEventListener('click', () => {
  const desc = descGanho.value.trim();
  const val = parseFloat(valorGanho.value);
  const data = dataGanho.value;

  if (!validarDescricao(desc)) {
    alert('Descrição do ganho inválida! Use 3 a 100 letras, números ou espaços.');
    descGanho.focus();
    return;
  }
  if (isNaN(val) || val <= 0) {
    alert('Valor do ganho inválido! Deve ser maior que zero.');
    valorGanho.focus();
    return;
  }
  if (!data) {
    alert('Data do ganho é obrigatória.');
    dataGanho.focus();
    return;
  }

  ganhos.push({ desc, val, data });
  mostrarMensagem(`Ganho adicionado:\n${desc} - R$ ${val.toFixed(2)} - Data: ${data}`);
  limparInputs(descGanho, valorGanho, dataGanho);
});

// Listar gastos
btnListarGastos.addEventListener('click', () => {
  if (gastos.length === 0) {
    mostrarMensagem('Nenhum gasto registrado.');
    return;
  }
  let texto = 'Lista de Gastos:\n';
  gastos.forEach((g, i) => {
    texto += `${i + 1}. ${g.desc} - R$ ${g.val.toFixed(2)} | Data: ${g.data}\n`;
  });
  mostrarMensagem(texto);
});

// Total gastos
btnTotalGastos.addEventListener('click', () => {
  if (gastos.length === 0) {
    mostrarMensagem('Nenhum gasto registrado para calcular total.');
    return;
  }
  const total = gastos.reduce((acc, g) => acc + g.val, 0);
  mostrarMensagem(`Total de Gastos: R$ ${total.toFixed(2)}`);
});

// Listar ganhos
btnListarGanhos.addEventListener('click', () => {
  if (ganhos.length === 0) {
    mostrarMensagem('Nenhum ganho registrado.');
    return;
  }
  let texto = 'Lista de Ganhos:\n';
  ganhos.forEach((g, i) => {
    texto += `${i + 1}. ${g.desc} - R$ ${g.val.toFixed(2)} | Data: ${g.data}\n`;
  });
  mostrarMensagem(texto);
});

// Total ganhos
btnTotalGanhos.addEventListener('click', () => {
  if (ganhos.length === 0) {
    mostrarMensagem('Nenhum ganho registrado para calcular total.');
    return;
  }
  const total = ganhos.reduce((acc, g) => acc + g.val, 0);
  mostrarMensagem(`Total de Ganhos: R$ ${total.toFixed(2)}`);
});

// Saldo final
btnSaldoFinal.addEventListener('click', () => {
  const totalGastos = gastos.reduce((acc, g) => acc + g.val, 0);
  const totalGanhos = ganhos.reduce((acc, g) => acc + g.val, 0);
  const saldo = totalGanhos - totalGastos;
  mostrarMensagem(`Saldo Final: R$ ${saldo.toFixed(2)}`);
});

// Remover gasto
btnRemoverGasto.addEventListener('click', () => {
  const idx = parseInt(removerGastoIndex.value);
  if (isNaN(idx) || idx < 1 || idx > gastos.length) {
    alert('Número inválido para remover gasto.');
    removerGastoIndex.focus();
    return;
  }
  const removido = gastos.splice(idx - 1, 1)[0];
  mostrarMensagem(`Gasto removido:\n${removido.desc} - R$ ${removido.val.toFixed(2)} - Data: ${removido.data}`);
  removerGastoIndex.value = '';
});

// Remover ganho
btnRemoverGanho.addEventListener('click', () => {
  const idx = parseInt(removerGanhoIndex.value);
  if (isNaN(idx) || idx < 1 || idx > ganhos.length) {
    alert('Número inválido para remover ganho.');
    removerGanhoIndex.focus();
    return;
  }
  const removido = ganhos.splice(idx - 1, 1)[0];
  mostrarMensagem(`Ganho removido:\n${removido.desc} - R$ ${removido.val.toFixed(2)} - Data: ${removido.data}`);
  removerGanhoIndex.value = '';
});
