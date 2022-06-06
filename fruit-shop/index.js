let fruits = [
  {
    name: "Oranges",
    image: "./images/oranges.jpeg",
    description:
      "Oranges are a type of low calorie, highly nutritious citrus fruit.",
  },
  {
    name: "Mangoes",
    image: "./images/mangoes.webp",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing ...",
  },
  {
    name: "Strawberries",
    image: "./images/strawberries.jpeg",
    description: " Lorem ipsum, dolor sit amet consectetur adipisicing ...",
  },
  {
    name: "Pawpaw",
    image: "./images/pawpaw.jpeg",
    description: " Lorem ipsum, dolor sit amet consectetur adipisicing ...",
  },
  {
    name: "Banana",
    image: "./images/banana.jpeg",
    description: " Lorem ipsum, dolor sit amet consectetur adipisicing ...",
  },
  {
    name: "Apples",
    image: "./images/Apples.jpeg",
    description: " Lorem ipsum, dolor sit amet consectetur adipisicing ...",
  },
  {
    name: "Guava",
    image: "./images/guava.jpeg",
    description: " Lorem ipsum, dolor sit amet consectetur adipisicing ...",
  },
  {
    name: "Pineapple",
    image: "./images/pineapple.jpeg",
    description: " Lorem ipsum, dolor sit amet consectetur adipisicing ...",
  },
];

let row = document.getElementById("row");
for (index in fruits) {
  row.innerHTML += ` <div class="col col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
     <div class="card" style="width: 18rem;">
       <img src=${fruits[index].image} class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${fruits[index].name}</h5>
         <p class="card-text">${fruits[index].description}</p>
           <a href="#" class="btn btn-primary add_to_cart" id="${fruits[index].name}add">Add to Cart</a>
           <a href="#" class="btn btn-danger add_to_cart" id="${fruits[index].name}remove">Delete Fruit</a>
         </div> `;
}

let removeBtns = document.getElementsByClassName("btn btn-danger add_to_cart");

for (index in fruits) {
  document.getElementById(`${fruits[index].name}remove`).style.display = "none";
}

/* Tried a for loop for event listener but my iterator is always set to the last value in the loop.
for (index in fruits) {
  document
    .getElementById(`${fruits[index].name}add`)
    .addEventListener("click", () => {
      document.getElementById(`${fruits[index].name}remove`).style.display =
        "inline";
    });
} */

let counter = 0;
let cart = document.getElementById("cart");
cart.innerText = `${counter}`;

let orangesAddBtn = document.getElementById("Orangesadd");
let orangesRemoveBtn = document.getElementById("Orangesremove");
orangesAddBtn.addEventListener("click", (event) => {
  event.preventDefault();
  counter += 1;
  cart.innerText = `${counter}`;
  orangesRemoveBtn.style.display = "inline";
});

orangesRemoveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (counter > 0) {
    counter -= 1;
    cart.innerText = `${counter}`;
  } else {
    orangesRemoveBtn.style.display = "none";
  }
});

let mangoesAddBtn = document.getElementById("Mangoesadd");
let mangoesRemoveBtn = document.getElementById("Mangoesremove");
mangoesAddBtn.addEventListener("click", (event) => {
  event.preventDefault();
  counter += 1;
  cart.innerText = `${counter}`;
  mangoesRemoveBtn.style.display = "inline";
});

mangoesRemoveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (counter > 0) {
    counter -= 1;
    cart.innerText = `${counter}`;
  } else {
    mangoesRemoveBtn.style.display = "none";
  }
});

let strawberriesAddBtn = document.getElementById("Strawberriesadd");
let strawberriesRemoveBtn = document.getElementById("Strawberriesremove");
strawberriesAddBtn.addEventListener("click", (event) => {
  event.preventDefault();
  counter += 1;
  cart.innerText = `${counter}`;
  strawberriesRemoveBtn.style.display = "inline";
});

strawberriesRemoveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (counter > 0) {
    counter -= 1;
    cart.innerText = `${counter}`;
  } else {
    strawberriesRemoveBtn.style.display = "none";
  }
});

let pawpawAddBtn = document.getElementById("Pawpawadd");
let pawpawRemoveBtn = document.getElementById("Pawpawremove");
pawpawAddBtn.addEventListener("click", (event) => {
  event.preventDefault();
  counter += 1;
  cart.innerText = `${counter}`;
  pawpawRemoveBtn.style.display = "inline";
});

pawpawRemoveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (counter > 0) {
    counter -= 1;
    cart.innerText = `${counter}`;
  } else pawpawRemoveBtn.style.display = "none";
});

let bananaAddBtn = document.getElementById("Bananaadd");
let bananaRemoveBtn = document.getElementById("Bananaremove");
bananaAddBtn.addEventListener("click", (event) => {
  event.preventDefault();
  counter += 1;
  cart.innerText = `${counter}`;
  bananaRemoveBtn.style.display = "inline";
});

bananaRemoveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (counter > 0) {
    counter -= 1;
    cart.innerText = `${counter}`;
  } else {
    bananaRemoveBtn.style.display = "none";
  }
});

let applesAddBtn = document.getElementById("Applesadd");
let applesRemoveBtn = document.getElementById("Applesremove");
applesAddBtn.addEventListener("click", (event) => {
  event.preventDefault();
  counter += 1;
  cart.innerText = `${counter}`;
  applesRemoveBtn.style.display = "inline";
});

applesRemoveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (counter > 0) {
    counter -= 1;
    cart.innerText = `${counter}`;
  } else {
    applesRemoveBtn.style.display = "none";
  }
});

let guavaAddBtn = document.getElementById("Guavaadd");
let guavaRemoveBtn = document.getElementById("Guavaremove");
guavaAddBtn.addEventListener("click", (event) => {
  event.preventDefault();
  counter += 1;
  cart.innerText = `${counter}`;
  guavaRemoveBtn.style.display = "inline";
});

guavaRemoveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (counter > 0) {
    counter -= 1;
    cart.innerText = `${counter}`;
  } else {
    guavaRemoveBtn.style.display = "none";
  }
});

let pineappleAddBtn = document.getElementById("Pineappleadd");
let pineappleRemoveBtn = document.getElementById("Pineappleremove");
pineappleAddBtn.addEventListener("click", (event) => {
  event.preventDefault();
  counter += 1;
  cart.innerText = `${counter}`;
  pineappleRemoveBtn.style.display = "inline";
});

pineappleRemoveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (counter > 0) {
    counter -= 1;
    cart.innerText = `${counter}`;
  } else {
    pineappleRemoveBtn.style.display = "none";
  }
});
