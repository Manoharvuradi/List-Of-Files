const ulList = document.querySelector(".ulList");
const right = document.querySelector(".right-side");
const imageJs = document.querySelector(".image-js");

async function pokeMonData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const arrOfData = await response.json();
  const usersData = arrOfData.results;
  usersData.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `${element.name}`;
    ulList.append(li);
    li.addEventListener("click", () => {
      userDetails(element.url);
      // urlStatus(element.url);
    });
  });
}

let count = 1;
const pTag = document.querySelector("p");
right.appendChild(pTag);
const statTag = document.createElement("p");
right.appendChild(statTag);
const stats = document.querySelector(".stats");
const statHeader = document.createElement("h2");
statHeader.innerHTML = "statistics";
stats.appendChild(statHeader);

const img = document.createElement("img");
img.setAttribute("src", "");

pokeMonData();

async function userDetails(url) {
  const left = document.querySelector(".right-side");
  left.style.display = "block";
  const url_response = await fetch(url);
  const urlData = await url_response.json();
  console.log(urlData);
  pTag.innerHTML = "";
  statTag.innerHTML = "";
  imageJs.appendChild(img);
  img.src = urlData.sprites.back_default;
  const box = document.querySelector(".image-js");
  box.style.display = "block";
  const capacity = urlData.abilities;
  let temp = "";
  capacity.forEach((able) => {
    temp += able.ability.name + ",";
  });
  const moveData = urlData.moves;
  var m = "";
  for (let i = 0; i < 6; i++) {
    m += moveData[i].move.name + ",";
  }
  pTag.innerHTML = `<h1>${urlData.name}</h1> <b>height:</b>${urlData.height} <br> <b>weight:</b>${urlData.weight} <br> <b>ability:</b>${temp} <br> <b>Moves:</b>${m}
`;
  right.append(pTag);

  const dataStat = urlData.stats;
  console.log(dataStat[0].base_stat);
  dataStat.forEach((s) => {
    console.log("hello");
    statTag.innerHTML += ` <b>base_stat</b>:${s.base_stat} <br>`;
  });
}
