/* login */

const showLogin = document.querySelector('#showIngresar')
const showRegister = document.querySelector('#showRegister')
const containerRegistre = document.querySelector('#formRegistre')
const containerLogin= document.querySelector('#formLog')

showRegister.addEventListener('click', () => {
    containerRegistre.style.display = "block" 
    containerLogin.style.display = "none" 

})
showLogin.addEventListener('click', () => {
    containerRegistre.style.display = "none"
    containerLogin.style.display = "block" 
})

containerLogin.addEventListener('click', (event) => {
    event.stopPropagation()
})

/* formulario login */
const formLogin = document.querySelector('#my-form1')
const btnMail = formLogin.querySelector('#email-login')
const btnPass = formLogin.querySelector('#pass-login')
const btnIngresa = formLogin.querySelector('#btn-log')

const usuario = []
const ValidarCuenta = (mail) => {
    return usuario.find(usuario => usuario.mail === mail) || {error: 'Debes registrarte'}
}
btnIngresa.addEventListener('click', () => {
    ValidarCuenta()
})

/* formulario registrate */
const formRegistre = document.querySelector('#my-form2')
const inputMail = formRegistre.querySelector('#email-signup')
const inputPass = formRegistre.querySelector('#pass-signup')
const btnCrea = formRegistre.querySelector('#btn-signup')

const CrearCuenta = ()=>{
    usuario.push(inputMail,inputPass);
}
btnCrea.addEventListener('click', () => {
    CrearCuenta()
})