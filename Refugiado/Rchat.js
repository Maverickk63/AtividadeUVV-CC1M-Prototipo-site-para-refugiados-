// comandos de conclusão
function Completed(){
  window.open('../Bibliografia.html','_self')
}
// comandos do chat
function enviar(){
  chatZ = document.getElementById('chatzone')
  mensagen = document.getElementById('msg').value
  chatZ.innerHTML = 'Você disse: ' + mensagen
}
//press enter envia msg
var input = document.getElementById("msg");
input.addEventListener("keypress", function(event){
  if (event.key === 'Enter'){
    event.preventDefault();
    document.getElementById("envie").click();
  }
})