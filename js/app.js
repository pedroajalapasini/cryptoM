const containerRate = document.querySelector('#containerRate');

/* coinsRate.forEach((exchangeRate) => {
    const div = document.createElement('div')
    div.className = 'exchangeRate'

    div.innerHTML = `
        <img src=${exchangeRate.img} alt="" width="auto" height="35">
        <strong>${exchangeRate.desc}</strong>
        <span>$${exchangeRate.precio}</span>
    `
    containerRate.append(div)
}); */


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
/* form cotizador */

const form = document.querySelector("#formCoti");
const fiat = document.querySelector("#fiatSelect");
const criptomoneda = document.querySelector("#coinSelect");
const formContainer = document.querySelector(".form-coti");
const containerResult = document.querySelector(".container-result");
const btnForm = document.querySelector("input[type=submit]");
const botoneraForm = document.querySelector("#btn-form")

let buscador = {
    fiat: '',
    criptomoneda: ''
}
/* DOM */

document.addEventListener('DOMContentLoaded', () => {
    queryCoins();
    form.addEventListener('submit', btnCotizar);
    fiat.addEventListener('change', eValor);
    criptomoneda.addEventListener('change', eValor);
    botoneraForm.addEventListener('reset', eValor)
})

function btnCotizar(e) {
    e.preventDefault();
    const { fiat, criptomoneda } = buscador;
    if (fiat === '' || criptomoneda === '') {
        showError("Necesitás elegir las monedas");
        return;
    }
    rtaAPI(fiat, criptomoneda);
}

function rtaAPI(fiat, criptomoneda) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${fiat}`;
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(respuestaJson => {
            renderRta(respuestaJson.DISPLAY[criptomoneda][fiat]);
        })

        .catch(error => console.log(error));
}
function renderRta(info) {
    clearForm()
    const { PRICE } = info;
    const resultadoAPI = document.createElement('div');
    resultadoAPI.className = 'resultado-api'
    resultadoAPI.innerHTML = `
    <span>Valor total: <strong>${PRICE}</strong></span>
    <div class= "botones-result">
    <a href="../partials/login.html" class="btn-compra">Comprar</a>
    <a class="btn-back" onclick="BackForm()"><i class="fa-solid fa-arrows-rotate"></i></a></div>
    `
    containerResult.append(resultadoAPI)
}
function BackForm() {
    clearForm()

}
function clearForm() {
    containerResult.innerHTML = '';
}

function showError(msj) {
    const Error = document.createElement('div');
    Error.className = 'error'
    Error.innerHTML = `
    <strong>${msj}</strong>
    `
    formContainer.appendChild(Error);
    setTimeout(() => Error.remove(), 5000,);
}

function eValor(ev) {
    buscador[ev.target.name] = ev.target.value;
}

function queryCoins() {
    const cURL = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD'
    fetch(cURL)
        .then(retorno => retorno.json())
        .then(retornoJson => {
            selectCoin(retornoJson.Data)
            rateExg(retornoJson.Data)
        })
        .catch(error => console.log(error));
}

/* selector crypto */
function selectCoin(cryptos) {
    cryptos.forEach(crypto => {
        const { FullName, Name } = crypto.CoinInfo;
        const opt = document.createElement("option")
        opt.value = Name;
        opt.textContent = FullName;

        criptomoneda.appendChild(opt);
    })
}
/* rate carrousel */
function rateExg(rateCrypto) {
    rateCrypto.forEach(element => {
        const { Name, ImageUrl } = element.CoinInfo
        const { PRICE } = element.DISPLAY.USD
        const div = document.createElement('div')
        div.className = 'exchangeRate'

        div.innerHTML = `
        <img src={./${ImageUrl}} alt="" width="auto" height="30">
        <strong>${Name}/USD</strong>
        <span>${PRICE}</span>  
    `
        containerRate.append(div)
    })
};
