const addUser = document.getElementById('addUser');
const doubleMoney = document.getElementById('doubleMoney');
const filterMillionaire = document.getElementById('filterMillionaire');
const sort = document.getElementById('sort');
const addWealth = document.getElementById('addWealth');
const main = document.getElementById('main');

let data = [];

async function getRandomUser(){
    
const res = await fetch("https://randomuser.me/api/")
const data = await res.json();
//  console.log(data);
const user = data.results[0];
// console.log(user);

const userInfo = {
    name:`${user.name.title} ${user.name.first} ${user.name.last}`,
    balance: Math.floor(Math.random() * 100000)
    
}
// console.log(userInfo);
addData(userInfo);
}

function addData(userInfo){
data.push(userInfo);
updateDOM();
}

function updateDOM(userInfo = data){
  main.innerHTML = "<h2><strong>User</strong>Money</h2>";
  userInfo.forEach( user => {
const userDiv = document.createElement("div");
userDiv.classList.add("user");
userDiv.innerHTML = `<strong>${user.name}</strong> ${user.balance}`;
main.append(userDiv);

  })
}

function fetchUser(){
  return getRandomUser();
}

function twiceMoney(){
data = data.map(user => {
  return {...user,balance:user.balance * 2}
})

updateDOM();

}

function extractMillionaire(){
  data = data.filter(user => user.balance >= 1000000);
  updateDOM();
}

function manner(){
  data = data.sort((a,b) => b.balance - a.balance);
  updateDOM();
}

function sumWealth(){
  updateDOM();
  const sum = data.reduce((acc,user) => {return acc+=user.balance},0);
  const userDiv = document.createElement("div");
  userDiv.classList.add(".user");
  userDiv.innerHTML = `<h3><strong>Total Balance</strong>  ${sum}</h3>`;
  main.append(userDiv);
}

//Events.
addUser.addEventListener("click" , fetchUser);
doubleMoney.addEventListener("click" , twiceMoney);
filterMillionaire.addEventListener("click" , extractMillionaire);
sort.addEventListener("click" , manner);
addWealth.addEventListener("click" , sumWealth);

console.log(data);
getRandomUser();
getRandomUser();
getRandomUser();

