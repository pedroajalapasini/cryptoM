/* modal tasas APY */
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const modalApy = document.getElementsByClassName('modal-apy')[0]
const btnCerrar = document.getElementById('containerCerrar')
const btnAbrir = document.getElementById('btn-apy')

btnAbrir.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})
btnCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})
contenedorModal.addEventListener('click', () => {
    btnCerrar.click()
})

modalApy.addEventListener('click', (event) => {
    event.stopPropagation()
})



