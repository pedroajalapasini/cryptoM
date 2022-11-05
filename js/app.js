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
})


coinsRate.forEach((apyContenedor) => {
    const div = document.createElement('div')
    div.className = 'apy-contenedor'

    div.innerHTML = `
        <img src=${apyContenedor.img} alt="" width="auto" height="35">
        <span>${apyContenedor.nombre} = </span>
        <strong>${apyContenedor.apy}</strong>
    `
    modalApy.append(div)

})