const searchButton = document.getElementById("search-button");
const centerContent = document.getElementById("center-content");
const coinInput = document.getElementById("coin-input");

async function createRectangles(baseCurrency = "USD") {
    const response = await fetch(`https://api.exchangerate.host/latest?base=${baseCurrency}`, { mode: 'cors' });
    const data = await response.json();
    const rates = Object.entries(data.rates);

    centerContent.innerHTML = "";

    let rateIndex = 0;
    for (let row = 0; row < 8; row++) {
        const rowElement = document.createElement("div");
        rowElement.className = "row";

        for (let col = 0; col < 6; col++) {
            if (rateIndex >= rates.length) {
                break;
            }

            const currency = rates[rateIndex][0];
            const rate = rates[rateIndex][1].toFixed(2);

            const rectangle = document.createElement("div");
            rectangle.className = "rectangle";

            const currencyName = document.createElement("span");
            currencyName.className = "currency-name";
            currencyName.textContent = currency;

            const currencyValue = document.createElement("span");
            currencyValue.className = "currency-value";
            currencyValue.textContent = rate;

            rectangle.appendChild(currencyName);
            rectangle.appendChild(currencyValue);

            rowElement.appendChild(rectangle);
            rateIndex++;
        }

        centerContent.appendChild(rowElement);
    }
}

searchButton.addEventListener("click", async () => {
    const baseCurrency = coinInput.value || "USD";
    await createRectangles(baseCurrency);
});

createRectangles();
