let apikey = {
  key: '9458834a-dbbc-477e-9e1d-88946740b642',
};

fetch(
  'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apikey.key
)
  .then((response) => {
    if (!response.ok)
      throw new Error(
        'Erro ao executar a requisição, status' + response.status
      );
    return response.json();
  })
  .then((api) => {
    let text = '';

    for (let i = 0; i < 20; i++) {
      let historicalData = new Date(api.data[i].first_historical_data);
      text =
        text +
        `
      <div class="col">
      <div class="media">
      <img
      src="coin.jpg"
      alt="coin"
            class="align-self-center mr-3"
            width="60"
            height="60"
          />
          <div class="media-body">
          <h5 class="mt-2">${api.data[i].name}</h5>
            <p>${api.data[i].symbol}</p>
            <p>${historicalData.toLocaleDateString()}</p>
            </div>
        </div>
      </div>
      `;

      document.getElementById('coins').innerHTML = text;
    }
  })
  .catch((error) => console.log(error.message));
