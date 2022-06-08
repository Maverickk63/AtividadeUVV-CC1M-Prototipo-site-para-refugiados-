//Register Exclusivo
initR()
function RegisterREnd(){
  window.open('R2Find.html','_self')
}

function initR(){
  RegisterRButton = document.getElementById("RegisterREnd")
  RegisterRButton.disabled = true
  if(
    document.getElementById("RRN").value !=='' &&       
    document.getElementById("RRS").value !=='' &&   
    document.getElementById("RRCS").value !=='' && 
    document.getElementById("RRE").value !=='' && 
    document.getElementById("CodigoONU").value !=='' ){
    RegisterRButton.disabled = false
  }
}
//comandos ajuda
function helper(){
  window.open('../ajuda.html','_self')
}
