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


