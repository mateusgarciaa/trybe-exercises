const searchButton = document.getElementById("search-button");
const centerContent = document.getElementById("center-content");
const coinInput = document.getElementById("coin-input");
import Swal from 'sweetalert2';


coinInput.addEventListener('input', () => {
  coinInput.value = coinInput.value.toUpperCase();
});

function getCurrencyIcon() {
  return 'icons8-coins-30.png'; // Substitua pelo nome correto do seu arquivo de ícone
}

async function createRectangles(baseCurrency = "USD") {
  const response = await fetch(`https://api.exchangerate.host/latest?base=${baseCurrency}`, { mode: 'cors' });
  const data = await response.json();
  const rates = Object.entries(data.rates);

  if (rates.length === 1 && rates[0][0] === baseCurrency && rates[0][1] === 1) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Moeda não encontrada!',
      confirmButtonColor: '#3085d6',
    });
    return;
  }

  centerContent.innerHTML = "";

  const title = document.createElement("h2");
  title.id = "exchange-rate-title";
  title.textContent = `Valores referentes a 1 ${baseCurrency}`;
  centerContent.appendChild(title);

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

      const currencyIcon = document.createElement("img");
      currencyIcon.src = getCurrencyIcon();
      currencyIcon.style.marginRight = "5px";
      currencyIcon.style.height = "20px"; // Ajuste o tamanho conforme necessário
      rectangle.appendChild(currencyIcon);

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

searchButton.click();
