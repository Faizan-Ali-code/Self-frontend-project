const countryOne = document.getElementById("countryOne");
const amountOne = document.getElementById("amountOne");
const showBtn = document.getElementById("showBtn");
const tblBody = document.getElementById("tblBody");



//function to fetch the conversionRates and update DOM
function calculate() {
    //clear previous data 
    tblBody.innerHTML = `<tr>
    <th>Currency code</th>
    <th>Exchange rates</th>
    </tr>
    <tbody id="tblbody"></tbody>
    `
    
  const currencyOne = countryOne.value;
  const amount = amountOne.value;
//   const amountOne = countryTwo.value;
  fetch(`https://v6.exchangerate-api.com/v6/15cd7cf0a01dc753ff4be380/latest/${currencyOne}`)
    .then((res) => res.json())
    .then((data) => {
        //   console.log(data);
         const rates = data.conversion_rates;
         const keys = Object.keys(rates);
        //  console.log(keys);
         keys.forEach((key) =>{
            const row =  `<tr>
            <td>${key}</td>
             <td>${(parseFloat(rates[key]) * amount).toFixed(2)}</td>
             </tr>`
             tblBody.innerHTML += row;
         })
        //  const conversionRate = data.conversion_rates;
        //  console.log(conversionRate);
    //   rate.innerText = `1 ${countryOne.value} = ${conversionRate.toFixed(2)} ${countryTwo.value}`;
    //   const formatedAmount = new Intl.NumberFormat('de-US', { style: 'currency', currency: countryTwo.value }).format((amountOne.value * conversionRate).toFixed(2));
    //   amountTwo.value = formatedAmount;

    });
}





//Events.
countryOne.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
showBtn.addEventListener("click", calculate);

calculate();