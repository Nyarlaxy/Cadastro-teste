
function mudarJ() {
  var fundoAtual= document.body.style.backgroundImage= "url('img/wallpaper\ JHIN.gif')"
  document.body.style.backgroundImage= "url('img/wallpaper\ JHIN.gif')"
  document.body.style.color = "darkred"
  }
function mudarV() {
 document.body.style.backgroundImage= "url('img/wallpaper\ Vayne.gif')"
 document.body.style.color = "darkorchid"
}
function mudarVI() {
  document.body.style.backgroundImage = "url('img/wallpaper\ VI.gif')"
  document.body.style.color = "goldenrod"
}

// ===================================================
// criei uma array de numeros aletorios, cria 10 números totalmente aleatórios de 0 a 100
const numerosAleatorios = []

for (x=0; x<=10; x += 1 ) {
  var numeroAleatorios1 = Math.floor(Math.random() * 100)
  numerosAleatorios.push(numeroAleatorios1)
}


Array.from(numerosAleatorios)
// ====================================================

// Cria uma função que retorne novos elementos html, com os seguintes parâmetros:
// tag, Classe e Conteúdo. 

function CriarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerText= conteudo : null;
  return elemento
}
// ====================================================

// verificador de data
setInterval(() => {

function carregar() {
  var ho= new Date()
  var h = ho.getHours()
  Number(h)
  var min= new Date()
  var m = min.getMinutes()
  var sec = new Date()
  var s = sec.getSeconds() 
  var di = new Date()
  var dia = di.getDate()
  var mo = new Date()
  var mesn = mo.getMonth()
  var an = new Date()
  var ano = an.getFullYear()
  var da = new Date()
  var dias= new Date()
  var diasem= dias.getDay()
  
  switch(diasem) {
      case 0:
       var diads= "Domingo"
      break
      case 1:
         var diads= "Segunda-feira"
      break
      case 2:
         var diads= "Terça-feira"
      break
      case 3:
         var diads= "Quarta-feira"
      break
      case 4: 
         var diads= "Quinta-feira"
      break
      case 5:
         var diads= "Sexta-feira"
      case 6:
         var diads= "Sábado"
      break
   }
  
  switch(mesn) {
      case 0: 
      var mes= "Janeiro"
      break
      case 1:
         var mes= "Fevereiro"
      break
      case 2:
         var mes= "Março"
      case 3:
         var mes= "Abril" 
      break
      case 4: 
         var mes= "maio"
      break
      case 5:
         var mes= "junho"
      break
      case 6:
         var mes= "julho"
      break
      case 7:
         var mes= "agosto"
      break
      case 8: 
         var mes= "Setembro"
      break
      case 9: 
         var mes= "Outubro"
      break
      case 10: 
         var mes= "Novembro"
      break
      case 11:
         var mes= "Dezembro"
      break
      }
  var msgdia= window.document.getElementById('msgdia') 
  var msg= window.document.getElementById('msg')
  var img= window.document.getElementById('Imagem')
  var diadasemana= window.document.getElementById('diasemana')
  var imagem= window.document.getElementById('imagem')
  var bom= window.document.getElementById('bom')
var horario= document.getElementById('horario')

  horario.innerHTML= `${h}h:${m}m:${s}s [${diads} ${dia} de ${mes} de ${ano}]`
 }
carregar()
}, 1000);