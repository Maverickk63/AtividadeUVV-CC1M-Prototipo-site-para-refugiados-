// comando de verificação da direção q o usuario vai (seja Login Register e se é Refugiado ou Anfitrião)
// possui um script JS em cada pasta exceto Imgs (motivos: organização)

function Login(){
  var RA = document.getElementById('UserIsRorA').value
  if(RA == 0){
    window.open('Refugiado/R1Login.html','_self')
  }
  else{window.open('Anfitriao/A1Login.html','_self')}
}

function Register(){
  var RA = document.getElementById('UserIsRorA').value
  if(RA == 0){
    window.open('Refugiado/R1Regist.html','_self')
  }
  else{window.open('Anfitriao/A1Regist.html','_self')}
}
