var acessaFuncionamento = document.getElementById('funcionamento');
var input = document.getElementById('texto-tarefa');
var pegaTextoInpult = input.value;
var ol = document.getElementById('lista-tarefas');
var BottonTarefa = document.getElementById('criar-tarefa');
// oque o botão deve fazer ? ele deve pega o texto do pegaInpult e adiciona-lo junto com uma <li> dentro da acessaOl

let listPush = [];

function inputVazio (){
    return input.value.length;
}

function criaLista () {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ol.appendChild(li);
    listPush.push(input.value);
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

function deletaRiscado (){
    let btnFinalizados = document.querySelector('#remover-finalizados');
    let pegaRisck = document.getElementsByClassName('completed');
    let pegaOl = document.querySelector('ol');
    btnFinalizados.addEventListener('click', function () {
        for (let i = pegaRisck.length -1; i >=0; i -= 1){
            pegaRisck[i].remove()
        }
})
}
deletaRiscado();

function limpaLista (){
    var pegaReset = document.querySelector('#apaga-tudo');
    pegaReset.addEventListener('click', function() {
        document.querySelector('ol').innerHTML="";
    })
}
limpaLista() 

// //salva no localStorage
function saveTheList () {
    let btnSave = document.querySelector('#salvar-tarefas');
    btnSave.addEventListener('click', function () {
        let listClass = [];
        let liFull = document.querySelectorAll('li');
        for (let i = 0; i < liFull.length; i += 1) {
            listClass.push(liFull[i].className);
        }
        localStorage.setItem('class-item', JSON.stringify(listClass));
        localStorage.setItem('list-text', JSON.stringify(listPush));
    })
}
saveTheList();

function pushLocalStorage () {
    if (localStorage.getItem('list-text') === null || localStorage.getItem('class-item') === null ) {
        localStorage.setItem('list-text', JSON.stringify([]));
        localStorage.setItem('class-item', JSON.stringify([]));
      } else {
        let salvaSalva = JSON.parse(localStorage.getItem('list-text'));
        let classeSalva = JSON.parse(localStorage.getItem('class-item'));
        for (let index = 0; index < salvaSalva.length; index += 1) {
          let item = document.createElement('li');
          item.innerText = salvaSalva[index];
          item.className = classeSalva[index];
          ol.appendChild(item);}}
}
pushLocalStorage()