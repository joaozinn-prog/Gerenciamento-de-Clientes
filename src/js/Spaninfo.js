
const spanInfo = document.querySelector('#info')
const name  = localStorage.getItem('userName')

if(name){
  spanInfo.textContent = `${name}`

}else{
  spanInfo.textContent = `Bem-vindo(a) visitante`

}