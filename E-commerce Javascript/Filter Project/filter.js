const data = [
  {
    id: 1,
    name: "France Home Shirt",
    img: "./img/Zidane sport.jpg",
    price: 199,
    cat: "National",
  },
  {
    id: 2,
    name: "Holland Home Shirt",
    img: "./img/Holland national.jpg",
    price: 179,
    cat: "National",
  },
  {
    id: 11,
    name: "Italy Home Shirt",
    img: "./img/Italy Home Shirt.jpg",
    price: 149,
    cat: "National",
  },
  {
    id: 3,
    name: "Chelsea Home Shirt",
    img: "./img/Chelsea club.jpg",
    price: 109,
    cat: "Club",
  },
  {
    id: 4,
    name: "Chelsea Away Shirt",
    img: "./img/Chelsea club 2.jpg",
    price: 139,
    cat: "Club",
  },
  {
    id: 12,
    name: "Manchester Utd Away Shirt",
    img: "./img/Manchester Away Shirt.jpg",
    price: 139,
    cat: "Club",
  },
  {
    id: 5,
    name: "Southampton Away Shirt",
    img: "./img/Southampton clearance.jpg",
    price: 59,
    cat: "Clearance",
  },
  {
    id: 13,
    name: "Valencia Home Shirt",
    img: "./img/Valencia Home Shirt.jpg",
    price: 59,
    cat: "Clearance",
  },

  {
    id: 6,
    name: "1860 Munich Home Shirt",
    img: "./img/Munich Match Worn.jpg",
    price: 79,
    cat: "Match Worn",
  },
  {
    id: 14,
    name: "Vicenza Home Shirt",
    img: "./img/Vicenza Home Shirt.jpg",
    price: 99,
    cat: "Match Worn",
  },
  {
    id: 8,
    name: "Newcastle Home Shirt",
    img: "./img/Newcastle clearance.jpg",
    price: 69,
    cat: "Clearance",
  },
  {
    id: 9,
    name: "Holland Home Shirt",
    img: "./img/Holland Match Worn.jpg",
    price: 99,
    cat: "Match Worn",
  },
  {
    id: 7,
    name: "Barcelona Home Shirt",
    img: "./img/Barcelona Home Shirt.jpg",
    price: 149,
    cat: "New In",
  },
  {
    id: 10,
    name: "Milan Away Shirt",
    img: "./img/Milan Away Shirt.jpg",
    price: 209,
    cat: "New In",
  },
  {
    id: 15,
    name: "Celtic Home Shirt",
    img: "./img/Celtic Home Shirt.jpg",
    price: 119,
    cat: "New In",
  },
];

const productsContainer = document.querySelector(".products");
const searchPlace = document.querySelector(".search");
const categoriesContainer = document.querySelector(".categories");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
    <div class="product">
    <img src="${product.img}" alt="">

    <span class="name">${product.name}</span>

    <span class="priceText">$${product.price}</span>
    </div>
    `
    )
    .join("");
};
displayProducts(data);

searchPlace.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});
const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  const categories = [
    "All",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];
  categoriesContainer.innerHTML = categories
    .map(
      (cat) =>
        `
      <span class="cats">${cat}</span>
    `
    )
    .join("");
  categoriesContainer.addEventListener("click", (e) => {
    const selectedCategory = e.target.textContent;

    if (selectedCategory === "All") {
      displayProducts(data);
    } else {
      displayProducts(data.filter((item) => item.cat === selectedCategory));
    }
  });
};

const setPrices = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;

  priceValue.textContent = "$" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "$" + e.target.value;
    displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};
setPrices();
setCategories();
