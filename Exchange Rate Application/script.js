const countryOne = document.getElementById("countryOne");
const amountOne = document.getElementById("amountOne");
const countryTwo = document.getElementById("countryTwo");
const amountTwo = document.getElementById("amountTwo");
const rate = document.getElementById("rate");
const swapBtn = document.getElementById("swapBtn");
const showBtn = document.getElementById("showBtn");



//function to fetch the conversionRates and update DOM
function calculate() {
  const currencyOne = countryOne.value;
  const currencyTwo = countryTwo.value;
  fetch(`https://v6.exchangerate-api.com/v6/15cd7cf0a01dc753ff4be380/pair/${currencyOne}/${currencyTwo}`)
    .then((res) => res.json())
    .then((data) => {
        const conversionRate = data.conversion_rate;
      rate.innerText = `1 ${countryOne.value} = ${conversionRate.toFixed(2)} ${countryTwo.value}`;
      const formatedAmount = new Intl.NumberFormat('de-US', { style: 'currency', currency: countryTwo.value }).format((amountOne.value * conversionRate).toFixed(2));
      amountTwo.value = formatedAmount;

    });
}

function Allrates(){
  const currencyOne = countryOne.value;
  fetch(`https://v6.exchangerate-api.com/v6/15cd7cf0a01dc753ff4be380/latest/${currencyOne}`)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        document.write(data.conversion_rate);
    //     const conversionRate = data.conversion_rate;
    //   rate.innerText = `1 ${countryOne.value} = ${conversionRate.toFixed(2)} ${countryTwo.value}`;
    //   const formatedAmount = new Intl.NumberFormat('de-US', { style: 'currency', currency: countryTwo.value }).format((amountOne.value * conversionRate).toFixed(2));
    //   amountTwo.value = formatedAmount;

    });
    console.log("success");
}

//show all countries exchange rates

//function for swap buttons
function swapValues() {
  let temp = countryOne.value;
  countryOne.value = countryTwo.value;
  countryTwo.value = temp;
  calculate();
}

//Events.
countryOne.addEventListener("change", calculate);
countryTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
amountTwo.addEventListener("input", calculate);
swapBtn.addEventListener("click", swapValues);
showBtn.addEventListener("click", Allrates);

//calculate();