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