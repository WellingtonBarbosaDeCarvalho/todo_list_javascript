var acessaFuncionamento = document.getElementById('funcionamento');
var input = document.getElementById('texto-tarefa');
var pegaTextoInpult = input.value;
var ol = document.getElementById('lista-tarefas');
var BottonTarefa = document.getElementById('criar-tarefa');
// oque o botão deve fazer ? ele deve pega o texto do pegaInpult e adiciona-lo junto com uma <li> dentro da acessaOl


// A página ao ser carregada deve possuir os itens da lista sem o estilo CSS background-color: gray;
// Os itens da lista ao serem clicados devem passar a ter o estilo CSS background-color: gray.

//devo entrar na li

function inputVazio (){
    return input.value.length;
}

function criaLista () {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ol.appendChild(li);
    input.value = "";

    function alteraBackground(e) {
        let pegaLi = document.querySelectorAll('li');
        var event = e.target.closest('li');
        if(document.querySelectorAll('.listaSelecionada').length === 0){
        li.classList.toggle('listaSelecionada');
    } else if(document.querySelectorAll('.listaSelecionada').length === 1){
        document.querySelectorAll('.listaSelecionada')[0].classList.remove('listaSelecionada');
        event.classList.add('listaSelecionada');
    }
}
 li.addEventListener('click', alteraBackground);

    }


BottonTarefa.addEventListener('click', addInput)

function addInput () {
    if (inputVazio () > 0){
        criaLista();
    }
}
function riscaTarefa (){
    ol.addEventListener('dblclick', function (e){
        let pegaTarget = e.target.closest('li');
        pegaTarget.classList.toggle('completed');
    })
}
riscaTarefa();

function limpaLista (){
    var pegaReset = document.querySelector('#apaga-tudo');
    pegaReset.addEventListener('click', function() {
        document.querySelector('ol').innerHTML="";
    })
}
limpaLista()

function btnFinalizados () {
    let btnFinalizados = document.querySelector('#remover-finalizados');
    btnFinalizados.addEventListener('click', function () {
        let listFinalizados = document.querySelectorAll('.completed');
        for (let index = 0; index < listFinalizados.length; index += 1){
          ol.removeChild(listFinalizados[index]);
        }
    })
}
btnFinalizados()
