function converteDolar(valorEmDolar) {
    var request = new XMLHttpRequest();
    var data;
    var cotacaoDolar;
    var valorEmReal;    
    var response;
    request.open("GET", "https://economia.awesomeapi.com.br/all/USD-BRL");
    request.send();
    request.onload = function () {
        data = JSON.parse(this.response);
        cotacaoDolar = data.USD.bid;
        valorEmReal = parseFloat(cotacaoDolar * valorEmDolar);
        response = "U$" + valorEmDolar + " é equivalente à: R$" + valorEmReal.toFixed(2)
        document.getElementById("h2").innerHTML = response;
        document.getElementById("cot").innerHTML = "Cotação atual: U$" + cotacaoDolar.toFixed(2);
    }
}

function converteReal(valorEmReal) {
    var request = new XMLHttpRequest();
    var data;
    var cotacaoDolar;
    var valorEmDolar;
    var response;
    request.open("GET", "https://economia.awesomeapi.com.br/all/USD-BRL");
    request.send();
    request.onload = function () {
        data = JSON.parse(this.response);
        cotacaoDolar = data.USD.bid;
        valorEmDolar = parseFloat(valorEmReal / cotacaoDolar);
        response = "R$" + valorEmReal + " é equivalente à: U$" + valorEmDolar.toFixed(2)
        document.getElementById("h2").innerHTML = response;
        document.getElementById("cot").innerHTML = "Cotação atual: R$" + cotacaoDolar.toFixed(2);
    }
}

function atualizaDolar() {
    var request = new XMLHttpRequest();
    var data;
    var cotacaoDolar;
    console.log("entrou");
    request.open("GET", "https://economia.awesomeapi.com.br/all/USD-BRL");
    request.send();
    request.onload = function () {
        data = JSON.parse(this.response);
        cotacaoDolar = parseFloat(data.USD.bid);
        document.getElementById("cot").innerHTML = "Cotação atual: R$" + cotacaoDolar.toFixed(2);
    }
}

atualizaDolar();
