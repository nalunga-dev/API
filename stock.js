const stockContainer = document.querySelector(".container");
const Api = "https://api.freeapi.app/api/v1/public/stocks";

async function fetchStock() {
  try {
    const response = await fetch(Api);
    const fetchedStocks = await response.json();
    const newStock = fetchedStocks.data.data;
    displayStock(newStock);
    console.log(newStock);
  } catch (error) {
    console.log(error);
  }
}
fetchStock();
function displayStock(recievedStock) {
  // console.log(recievedStock);
  stockContainer.innerHTML = "";
  recievedStock.forEach((stock) => {
    const stockTamplateHtml = `
     <div class="card">
        <h2>${stock.Name}</h2>
        <p>${stock.Symbol}</p>
        <p>${stock.ListingDate} </p>
         <p>${stock.ISIN} </p>
          <p>${stock.MarketCap} </p>
           <p>${stock.CurrentPrice} </p>
            <p>${stock.HighLow} </p>
             <p>${stock.StockPE} </p>
              <p>${stock.BookValue} </p>
       
      </div>
    `;
    stockContainer.insertAdjacentHTML("beforeend", stockTamplateHtml);
  });
}
