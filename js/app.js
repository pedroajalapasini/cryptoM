const containerRate = document.querySelector('#containerRate');

coinsRate.forEach((exchangeRate) => {
    const div = document.createElement('div')
    div.className = 'exchangeRate'

    div.innerHTML = `
        <img src=${exchangeRate.img} alt="" width="auto" height="35">
        <strong>${exchangeRate.desc}</strong>
        <span>$${exchangeRate.precio}</span>
    `
    containerRate.append(div)
});


coinsRate.forEach((apyContenedor) => {
    const div = document.createElement('div')
    div.className = 'apy-contenedor'

    div.innerHTML = `
        <img src=${apyContenedor.img} alt="" width="auto" height="35">
        <span>${apyContenedor.nombre} = </span>
        <strong>${apyContenedor.apy}</strong>
    `
    modalApy.append(div)

});

/* const de solicitud */


const resultadoFinal = document.querySelector('#result-earn')
const TokenBTC = 6.067072;
const TokenETH = 492.2131;
const TokenUSDT = 297.95;
const TokenUSDC = 297.95;
const TokenBNB = 105.772; 

function resultadoTotal(){
    let total = 0;
    let MontoIngresado = parseInt(document.getElementById('monto-ingresado').value);

    if (document.getElementById('token1').checked) {
        total =  TokenBTC / MontoIngresado 

        resultadoFinal.innerText = "$" + total.toFixed(6)

    }
    else if (document.getElementById('token2').checked) {
        total = MontoIngresado / TokenETH

        resultadoFinal.innerText = "$" + total.toFixed(5)
    }
    else if (document.getElementById('token3').checked) {
        total = MontoIngresado / TokenUSDT

        resultadoFinal.innerText = "$" + total.toFixed(2)
    }
    else if (document.getElementById('token4').checked) {
        total = MontoIngresado / TokenUSDC

        resultadoFinal.innerText = "$" + total.toFixed(2)
    }
    else if (document.getElementById('token5').checked) {
        total = MontoIngresado / TokenBNB

        resultadoFinal.innerText = "$" + total.toFixed(5)
    }
    else {
        resultadoFinal.innerText = 'Debés elegir una opción'
    }
}


