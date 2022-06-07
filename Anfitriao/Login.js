//Login Exclusivo
initL()
function LoginAEnd(){
  window.open('A2Find.html','_self')
}

function initL(){
  LoginAButton = document.getElementById("loginAEnd")
  LoginAButton.disabled = true
  if(document.getElementById("LAN").value !=='' && document.getElementById("LAS").value !==''){
    LoginAButton.disabled = false
  }
}