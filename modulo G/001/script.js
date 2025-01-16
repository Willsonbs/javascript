/*

let dolar = 6.05; // Taxa de câmbio fictícia

const dollar = document.getElementById("usd");
const real = document.getElementById("brl");

// Adicionar eventos para converter automaticamente quando o usuário digitar
dollar.addEventListener("input", () => {
    const value = parseFloat(dollar.value.replace(",", "."));
    if (!isNaN(value)) {
        const convertedValue = (value * dolar).toFixed(2).replace(".", ",");
        real.value = convertedValue;
    } else {
        real.value = "";
    }
});

real.addEventListener("input", () => {
    const value = parseFloat(real.value.replace(",", "."));
    if (!isNaN(value)) {
        const convertedValue = (value / dolar).toFixed(2).replace(".", ",");
        dollar.value = convertedValue;
    } else {
        dollar.value = "";
    }
});

// Corrigir função de formatação para valores monetários
function formatCurrency(value) {
    if (isNaN(value)) return "0,00";

    const options = {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    };

    return new Intl.NumberFormat("pt-BR", options).format(value);
}

// Adicionar função de troca de câmbio no botão
function exchange() {
    const valueUSD = parseFloat(dollar.value.replace(",", "."));
    const valueBRL = parseFloat(real.value.replace(",", "."));

    if (!isNaN(valueUSD)) {
        real.value = (valueUSD * dolar).toFixed(2).replace(".", ",");
    } else if (!isNaN(valueBRL)) {
        dollar.value = (valueBRL / dolar).toFixed(2).replace(".", ",");
    } else {
        alert("Por favor, insira um valor válido.");
    }
}

*/

// versão usando botão
/*
 
let dolar = 6.05; // Taxa de câmbio fictícia

const dollarInput = document.getElementById("usd");
const realInput = document.getElementById("brl");
const convertButton = document.getElementById("btnmoeda")

// Formatar moeda no estilo BRL ou USD
function FormatCurrency(value, currency) {
    const options = {
        style: "currency", currency,
        minimumFractionDigits: 2,
        maximunFractionDigits: 2,
    };
    return new Intl.NumberFormat("pt-BR", options).format(value);
}

// Função para converter valores
function exchange() {
    const dollarValue = parseFloat(dollarInput.value.replace(",", "."));
    if (isNaN(dollarInput.value) || dollarInput.value <= 0) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    const realValue = dollarValue * dolar;
    realInput.value = FormatCurrency(realValue, "BRL");

    //adicionando evento de clique no botão "converter"
    function clearFields () {
        dollarInput.value = "";
        realInput.value = "";
        dollarInput.focus();
    }
}
*/

const dollarInput = document.getElementById("usd");
const realInput = document.getElementById("brl");
const convertButton = document.getElementById("btnmoeda");
let exchangeRate = 0; // Taxa de câmbio será atualizada pela API

// Função para buscar a cotação do dólar
async function fetchExchangeRate() {
    try {
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        if (!response.ok) throw new Error("Erro ao buscar cotação.");
        
        const data = await response.json();
        exchangeRate = data.rates.BRL; // Taxa de conversão USD para BRL
        console.log(`Cotação atual: 1 USD = ${exchangeRate} BRL`);
    } catch (error) {
        alert("Erro ao obter a cotação do dólar. Tente novamente mais tarde.");
        console.error(error);
    }
}

// Formatar moeda no estilo BRL ou USD
function formatCurrency(value, currency) {
    const options = {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    };
    return new Intl.NumberFormat("pt-BR", options).format(value);
}

// Função para converter valores
function exchange() {
    const dollarValue = parseFloat(dollarInput.value.replace(",", "."));
    if (isNaN(dollarValue)) {
        alert("Por favor, insira um valor válido em dólares.");
        return;
    }

    const realValue = (dollarValue * exchangeRate).toFixed(2);

    realInput.value = formatCurrency(realValue, "BRL");

    //configura novamente os placeholders 
    realInput.setAttribute("data-placeholder", "BR$");
    dollarInput.setAttribute("data-placeholder", "US$");

}

// Adicionando evento de clique no botão "Converter"
convertButton.addEventListener("click", exchange);

// Buscar a cotação assim que o script carregar
fetchExchangeRate();