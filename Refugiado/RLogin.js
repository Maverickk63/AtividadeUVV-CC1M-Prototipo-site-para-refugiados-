//Login Exclusivo
initL()
function LoginREnd(){
  window.open('R2Find.html','_self')
}

function initL(){
  LoginRButton = document.getElementById("loginREnd")
  LoginRButton.disabled = true
  if(document.getElementById("LRN").value !=='' && document.getElementById("LRS").value !==''){
    LoginRButton.disabled = false
  }
}

//comandos ajuda
function helper(){
  window.open('../ajuda.html','_self')
}
