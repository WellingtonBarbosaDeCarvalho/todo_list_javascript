let acessaFuncionamento = document.getElementById('funcionamento');
let textoTarefa = document.getElementById('texto-tarefa');
let pegaInpult = textoTarefa.value;
let acessaOl = document.getElementById('lista-tarefas');
let BottonTarefa = document.getElementById('criar-tarefa');
// oque o botão deve fazer ? ele deve pega o texto do pegaInpult e adiciona-lo junto com uma <li> dentro da acessaOl

function cleanBotton (){
    let textoTarefa = document.getElementById('texto-tarefa');
    let criaTexto = textoTarefa.value="";
    console.log(criaTexto);
}

BottonTarefa.addEventListener('click', function () {
  let textoTarefa = document.getElementById('texto-tarefa');
  let criaLi = document.createElement('li');
  let pegaInpult = textoTarefa.value;
  let pegaTexto = document.createTextNode(pegaInpult);
  acessaOl.appendChild(criaLi);
  criaLi.appendChild(pegaTexto);
  cleanBotton();
});

