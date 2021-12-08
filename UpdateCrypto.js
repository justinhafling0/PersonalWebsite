var ul;
var listItems;

let positions = [0.0002, 500];

function initializeCryptos(){
  setTimeout(updateCryptos, 5000);
  setTimeout(initializeElements, 1000);
}

function initializeElements(){
  ul = document.getElementById('nav_1');
  listItems =ul.getElementsByTagName('li');

}

function updateCryptos(){
    console.log("1");
    setTimeout(updateCryptos, 5000);
    let ul = document.getElementById('nav_1');
    let listItems = ul.getElementsByTagName('li');

    var apiKey = 'xStZdeIWOFAgFIkRZxz6k0w34zqSym_u';
    var baseUrl = 'https://api.polygon.io/v2/last/nbbo/';
    var request = baseUrl + 'AAPL' + '?apiKey=' + apiKey;

    var data;

    fetch("https://data.messari.io/api/v1/assets/btc/metrics")
    .then(response => {
        response.json().then(parsedJson => {
            console.log(parsedJson.data.symbol);
            console.log(parsedJson.data);
            console.log(parsedJson.data.market_data.price_usd);
            listItems[0].innerHTML=parsedJson.data.symbol;
            listItems[1].innerHTML=positions[0];
            listItems[2].innerHTML=parsedJson.data.market_data.price_usd;
            listItems[3].innerHTML=positions[0] * parsedJson.data.market_data.price_usd;
        })
    })

    // Loop through the NodeList object.
    for (let i = 0; i <= listItems.length - 1; i++) {
        console.log (listItems[i]);
    }

}
