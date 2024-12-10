
var x = window.document.getElementById('myButton')

x.addEventListener('click', submit)
x.addEventListener('mouseenter', entrar)
x.addEventListener('mouseleave', sair)

function submit() {
    x.innerHTML = 'Formulário enviado'
    x.style.backgroundColor = 'red'
}
function entrar(){
    x.innerHTML = 'Entrar'
}
function sair(){
    x.innerHTML = 'Click Me'
    x.style.backgroundColor = 'yellow'
}