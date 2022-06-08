//Register Exclusivo
initR()
function RegisterAEnd(){
  window.open('A2Find.html','_self')
}

function initR(){
  RegisterAButton = document.getElementById("RegisterAEnd")
  RegisterAButton.disabled = true
  if(document.getElementById("RAN").value !=='' && document.getElementById("RAS").value !==''!=='' && document.getElementById("RACS").value !=='' && document.getElementById("RAE").value !=='' && document.getElementById("Endereco").value !=='' ){
    RegisterAButton.disabled = false
  }
}

//comandos ajuda
function helper(){
  window.open('../ajuda.html','_self')
}
