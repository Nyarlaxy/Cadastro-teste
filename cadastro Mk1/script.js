console.log('olá mundo!')

// Menu lateral
const img= document.querySelector("img.IconeMenu")
const MenuLateral= document.querySelector("nav.lateral")
var itemAtivo= "ativo"
var itemdesativado= "desativado"
function ativar(){
 MenuLateral.classList.toggle(itemAtivo)
 MenuLateral.classList.toggle(itemdesativado)

}
//////////////////////////////

/* Mudança de sections */

const linksInternos= document.querySelectorAll('.lateral a[href^="#"]');
const hrefs =[]
linksInternos.forEach((link) => {
  hrefs.push(link.attributes[1].value)
  
})
var sections = document.querySelectorAll("section")

function ativarAtalho(selecionado) {
  var linkAtivado= hrefs[selecionado]
  const sectionSelecionada = sections[selecionado]

  sections.forEach((item) =>{
    item.classList.remove("ativado")
    item.classList.add("desativado")
    if (item == sectionSelecionada){
      item.classList.remove('desativado')
      item.classList.add('ativado')
    }
  })
}

///////////////////////////////////////////



// objeto construtor de livros
const AllLivros= []
var Todoslivros= []
function livro(titulo, genero, descricao, paginas){
  this.Ctitulo = titulo
  this.Cgenero = genero
  this.Cdescricao = descricao
  this.Cpaginas = paginas
}
/*
function NewLivro(tag, classe, titulo, genero, descricao, paginas) {
  const elemento = document.createElement(tag)
  elemento.classList.add("listaAtivado")
  classe ? elemento.classList.add(classe) : null;
  titulo ? elemento.innerText= `Titulo: ${titulo},Genero: ${genero},Descrição: ${descricao},Numero de páginas:${paginas}` : null;
  var novolivro= new livro(titulo, genero, descricao, paginas)
  AllLivros.push(novolivro)
  return elemento
}
*/

///// banco de livros

const PJava= new livro("Programação Java para web", "informática", "Programação Java para web é um livro inovador, com enfoque extremamente prático, que mostra passo a passo como desenvolver uma aplicação web utilizando a linguagem Java e as tecnologias mais poderosas e populares no arsenal dos desenvolvedores, como JavaServerFaces e Hibernate.", 638)
const JQuery= new livro("Jquery, a biblioteca de Programador JavaScript", "informática", "Jquery é uma poderosa biblioteca JavaScript criada para simplificar a criação de efeitos visuais e de interatividade em websites.", 543)
const MobileWeb= new livro("Use a cabeça! Mobile Web", "informática", "Este livro mostra como usar a tecnologia web com a qual você já está acostumado para contruir sites e aplicativos que funcionem em qualquer dispositivo de qualquer tamanho.", 439)

AllLivros.push(PJava, JQuery, MobileWeb)

Todoslivros.push(PJava, JQuery, MobileWeb)


function Iniciarlista(callback) {

  Todoslivros.forEach((LivroDaLista) => {

    var listaAtual= document.querySelector(".fimLista")
    listaAtual.insertAdjacentHTML("beforebegin", `<li class="${LivroDaLista.Cgenero} listaAtivado"><p>TÍTULO: ${LivroDaLista.Ctitulo}</p> <p>GÊNERO: ${LivroDaLista.Cgenero}</p> NÚMERO DE PÁGINAS:${LivroDaLista.Cpaginas} </li>`)
    listaAtual.insertAdjacentHTML("beforebegin", `<p></p>`)
    listaAtual.insertAdjacentHTML("beforebegin", `<p></p>`)
    listaAtual.insertAdjacentHTML("beforebegin", `<p></p>`)
      
    return LivroDaLista
  })
}
for (let x = 0; x < 7; x++) {
  AllLivros.pop()
}
/// troca de genero no menu

const IDgeneroslivros = document.querySelectorAll(".sobtabela a")
const classelivros =[]
IDgeneroslivros.forEach((link) => {
  link.classList.toggle("livros")
  classelivros.push(link.classList.value)
  
})

function ativarAtalhoMenu(generoselecionado) {
  var GeneroAtivado= classelivros[generoselecionado]
  const GeneroSelecionada = TodosGeneros[generoselecionado]

listaLivros.forEach((item)=> {
  console.log(listaLivros)
  item.classList.remove("listaAtivado")
  item.classList.add("desativado")
})
GeneroSelecionada.forEach((item) => {
item.classList.remove("desativado")
item.classList.add("listaAtivado")
})

if (generoselecionado == 0) {
  listaLivros.forEach((item)=> {
    item.classList.remove("desativado")
    item.classList.add("listaAtivado")
  })
}

}


setInterval(() => {
  console.log("olá mundo!")
}, 100000);
/////////////////////////

///////////////////////////////////////////////////////////////
////////////////ADICIONAR NOVO LIVRO//////////////////////////
/////////////////[Estado: Funcionando]///////////////////////

function Adicionar() {
  var Titulo= document.getElementById("inserirT") 
  var descricao = document.getElementById("inserirD")
  var paginaslivro= document.getElementById("inserirN")
  if (Titulo.value == "" || descricao.value == "") {
    window.alert('   [ERROR!!] Verifique os dados novamente.')
   }else {
       var genero = document.getElementsByName('inserirG')

       var generolivro= ""
       if (genero[0].checked){
         generolivro= "informatica"
       }
       if (genero[1].checked){
        generolivro= "Ação"
      }
      if (genero[2].checked){
        generolivro= "Fantasia"
      }
      if (genero[3].checked){
        generolivro= "Infantil"
      }
        

       console.log(Titulo.value, descricao.value, generolivro, paginaslivro.value)
       var NOVOLivro= new livro(Titulo.value, generolivro, descricao.value, paginaslivro.value)
       Todoslivros.push(NOVOLivro)
       var listaAtual= document.querySelector(".fimLista")
       listaAtual.insertAdjacentHTML("beforebegin", `<li class="${NOVOLivro.Cgenero} listaAtivado"><p>TÍTULO: ${NOVOLivro.Ctitulo}</p> <p>GÊNERO: ${NOVOLivro.Cgenero}</p> NÚMERO DE PÁGINAS:${NOVOLivro.Cpaginas} </li>`)
       listaAtual.insertAdjacentHTML("beforebegin", `<p></p>`)
       listaAtual.insertAdjacentHTML("beforebegin", `<p></p>`)
       listaAtual.insertAdjacentHTML("beforebegin", `<p></p>`)

}
}

///////////////////////////////////////////////////////////////////////////////////
///////////////////////Usuários////////////////////////////////////////////////////
////////////////////[Estado: testes]///////////////////////////////////////////////

var TodosUsuarios= []
function usuario(nome, senha, cargo){
  this.Cnome = nome
  this.Csenha = senha
  this.Ccargo = cargo
}

function AdicionarUsuario() {
  var Nome= document.getElementById("InserirNome") 
  var senha = document.getElementById("inserirSenha")
  if (Nome.value == "" || senha.value == "") {
    window.alert('   [ERROR!!] Verifique os dados novamente.')
   }else {
       var cargo = document.getElementsByName('inserirCargo')
       var cargoDefinido= ""
       if (cargo[0].checked){
         cargoDefinido= "Adminstrador"
       }
       if (cargo[1].checked){
        cargoDefinido= "Usuário"
      }

       console.log(Nome.value, senha.value, cargoDefinido)
       var NOVOusuario= new usuario(Nome.value, senha.value, cargoDefinido)
       TodosUsuarios.push(NOVOusuario)
       var listaAtual= document.querySelector(".fimListaUsuario")
       listaAtual.insertAdjacentHTML("beforebegin", `<li class="${NOVOusuario.Ccargo} listaAtivado"><p>Nome: ${NOVOusuario.Cnome}</p> <p>Cargo: ${NOVOusuario.Ccargo}</p></li>`)
       listaAtual.insertAdjacentHTML("beforebegin", `<p></p>`)
       listaAtual.insertAdjacentHTML("beforebegin", `<p></p>`)
       listaAtual.insertAdjacentHTML("beforebegin", `<p></p>`)

}
}
