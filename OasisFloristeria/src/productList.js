//import "./styles/styles.scss"


let products = {

  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Ramos-florales",
      price: "30",
      image: "ramo1.jpg",
      description: "Hermoso ramo de flores mixtas primaveales",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "ramo1.jpg",
      description: "Hermoso ramo de flores mixtas primaveales",
    },
    {
      productName: "producto 10",
      category: "Bottomwear",
      price: "49",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "ramo1.jpg",
      description: "Hermoso ramo de flores mixtas primaveales",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg",
    },
  ],
};

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".tpn_card");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

let currentPage = 1;
const productsPerPage = 10;

function displayProducts() {

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.data.slice(startIndex, endIndex);

  document.getElementById("products").innerHTML = "";
  currentProducts.forEach((product) => {


    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("tpn_card", product.category);
    card.id = "nofiltrado";
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");


    //img tag
    let image = document.createElement("img");
    image.classList.add("image-cards");
    image.setAttribute("src", `${product.image}`);
    imgContainer.appendChild(image);
    image.setAttribute("alt", "Product image");
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");


    //product name
    let name = document.createElement("h5");

    let productLink = document.createElement("a");
    productLink.classList.add("product-name-card");
    productLink.href = "productDetails.html?productName=" + encodeURIComponent(product.productName);

    productLink.innerText = product.productName.toUpperCase();
    name.appendChild(productLink);
    container.appendChild(name);


    //price
    let price = document.createElement("h6");
    price.classList.add("price-cards");
    price.innerText = "$" + product.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  });

  //parameter passed from button (Parameter same as category)


  // Resto del código para mostrar los productos en la página
}

function displayProductsFiltered(category) {

  

  for (let i of products.data) {
    //Create Card
    if (i.category === category) {
      let card = document.createElement("div");
      //Card should have category and should stay hidden initially
      card.classList.add("tpn_card", i.category);
      card.id = "filtrados";
      //image div
      let imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");


      //img tag
      let image = document.createElement("img");
      image.classList.add("image-cards");
      image.setAttribute("src", `${i.image}`);
      imgContainer.appendChild(image);
      image.setAttribute("alt", "Product image");
      card.appendChild(imgContainer);
      //container
      let container = document.createElement("div");
      container.classList.add("container");


      //product name
      let name = document.createElement("h5");

      let productLink = document.createElement("a");
      productLink.classList.add("product-name-card");
      productLink.href = "productDetails.html?productName=" + encodeURIComponent(i.productName);

      productLink.innerText = i.productName.toUpperCase();
      name.appendChild(productLink);
      container.appendChild(name);


      //price
      let price = document.createElement("h6");
      price.classList.add("price-cards");
      price.innerText = "$" + i.price;
      container.appendChild(price);
      card.appendChild(container);
      document.getElementById("products").appendChild(card);
    }
  }
}

//parameter passed from button (Parameter same as category)
/*function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".tpn_card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
*/




document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayProducts();
    updatePageIndicator();
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  const maxPage = Math.ceil(products.data.length / productsPerPage);
  if (currentPage < maxPage) {
    currentPage++;
    displayProducts();
    updatePageIndicator();
  }
});

function updatePageIndicator() {
  document.getElementById("currentPage").innerText = `Página ${currentPage}`;
}

/*function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".tpn_card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards by default
    element.classList.remove("hide");
  });
  
  // Loop through all products in the data array
  products.data.forEach((product, index) => {
    // Select the card corresponding to the current product
    let card = document.querySelectorAll(".tpn_card")[index];
    
    // Check if the product category matches the selected value
    if (value !== "all" && product.category !== value) {
      // If not, hide the corresponding card
      card.classList.add("hide");
    }
  });
}*/
function filterProduct(value) {
  // Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    // check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  

  let elements = document.querySelectorAll(".tpn_card");

  elements.forEach((element) => {
    if(element.id === "filtrados") {
      element.remove();
    }
  });

  elements.forEach((element) => {
    if(value == "all") {
      element.classList.remove("hide");
    }     
  });

  if (value != "all"){
    elements.forEach((element) => {
      element.classList.add("hide");
    });
    displayProductsFiltered(value);
  }

  
      

  

  // Call displayProducts with the selected category value

}

/*
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".tpn_card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
*/





//Initially display all products
window.onload = () => {
  filterProduct("all");
  displayProducts();
  updatePageIndicator();

};
