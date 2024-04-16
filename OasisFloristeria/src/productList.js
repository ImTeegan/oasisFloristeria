//import "./styles/styles.scss"


let products = {

  data: [
    {
      productName: "Ramo Primaveral Encantado",
      category: "Ramos",
      price: "20,000",
      image: "ramo1.jpg",
      description: "Hermoso ramo de flores mixtas primaveales con envoltura personalizada",
    },
    {
      productName: "Arreglo Jardín Encantado",
      category: "Arreglos",
      price: "49,000",
      image: "arreglo1.jpg",
      description: "Hermoso arreglo de flores mixtas primaveales con diferentes bases a elegir",

    },
    {
      productName: "Ramo Serenata al Atardecer",
      category: "Ramos",
      price: "35,000",
      image: "ramo2.jpg",
      description: "Hermoso ramo de flores mixtas primaveales con envoltura personalizada",

    },
    {
      productName: "Ramo Dulce Romance",
      category: "Ramos",
      price: "29,000",
      image: "ramo3.jpg",
      description: "Hermoso ramo de flores mixtas primaveales con envoltura personalizada",

    },
    {
      productName: "Ramo de Felicidad Veraniega",
      category: "Ramos",
      price: "129,000",
      image: "ramo4.jpg",
      description: "Hermoso ramo de flores mixtas primaveales con envoltura personalizada",

    },
    {
      productName: "Boda tradicional",
      category: "Bodas",
      price: "800,000",
      image: "bodatrad.jpg",
      description: "Planificacion de boda con los mas altos estandares de calidad",

    },
    {
      productName: "Arreglo Pradera Vibrante",
      category: "Arreglo",
      price: "18,000",
      image: "arreglo2.jpg",
      description: "Hermoso ramo de flores mixtas primaveales con envoltura personalizada",

    },
    {
      productName: "Arreglo Elegancia Elegante",
      category: "Arreglos",
      price: "49,000",
      image: "arreglo3.jpg",
      description: "Hermoso arreglo de flores mixtas primaveales con diferentes bases a elegir",

    },
    {
      productName: "Boda tradicional 2",
      category: "Bodas",
      price: "30,000",
      image: "bodatrad.jpg",
      description: "Hermoso ramo de flores mixtas primaveales con envoltura personalizada",

    },
    {
      productName: "Boda en la playa",
      category: "Bodas",
      price: "49,000",
      image: "bodaplaya.jpg",
      description: "Planificacion de boda con los mas altos estandares de calidad",

    },
    {
      productName: "Arreglo Encanto Rústico",
      category: "Arreglos",
      price: "12,000",
      image: "arreglo4.jpg",
      description: "Hermoso arreglo de flores mixtas primaveales con diferentes bases a elegir",

    },
    {
      productName: "Ramo Sueños Celestiales",
      category: "Ramos",
      price: "29,000",
      image: "ramo5.jpg",
      description: "Hermoso ramo de flores mixtas primaveales con envoltura personalizada",

    },
    {
      productName: "Boda pequeña",
      category: "Bodas",
      price: "55,000",
      image: "bodapeque.jpg",
      description: "Hermoso ramo de flores mixtas primaveales con envoltura personalizada",

    },
    {
      productName: "Ramo Brisa del Océano",
      category: "Ramos",
      price: "39,000",
      image: "ramo6.jpg",
      description: "Hermoso ramo de flores mixtas primaveales con envoltura personalizada",

    },
    {
      productName: "Ramo Cosecha Dorada",
      category: "Ramos",
      price: "40,000",
      image: "ramo7.jpg",
      description: "Hermoso ramo de flores mixtas primaveales con envoltura personalizada",

    },
    {
      productName: "Boda tradicional 3",
      category: "Bodas",
      price: "490,000",
      image: "bodatrad.jpg",
      description: "Planificacion de boda con los mas altos estandares de calidad",

    },
    {
      productName: "Arreglo Jardín Secreto",
      category: "Arreglos",
      price: "30,000",
      image: "arreglo5.jpg",
      description: "Hermoso arreglo de flores mixtas primaveales con diferentes bases a elegir",

    },
    {
      productName: "Arreglo Oasis Tranquilo",
      category: "Arreglos",
      price: "49,000",
      image: "arreglo6.jpg",
      description: "Hermoso ramo de flores mixtas primaveales con envoltura personalizada",

    },
    {
      productName: "Ramo Amanecer Sereno",
      category: "Ramos",
      price: "9,000",
      image: "ramo8.jpg",
      description: "Hermoso ramo de flores mixtas primaveales con envoltura personalizada",

    },
    {
      productName: "Arreglo Magia Nocturna",
      category: "Arreglos",
      price: "29,000",
      image: "arreglo7.jpg",
      description: "Hermoso arreglo de flores mixtas primaveales con diferentes bases a elegir",

    },
    {
      productName: "Arreglo Esplendor Otoñal",
      category: "Arreglos",
      price: "19,000",
      image: "arreglo8.jpg",
      description: "Hermoso ramo de flores mixtas primaveales con envoltura personalizada",

    },
    {
      productName: "Boda en la montaña",
      category: "Bodas",
      price: "890,000",
      image: "bodamon.jpg",
      description: "Planificacion de boda con los mas altos estandares de calidad",

    },
    {
      productName: "Ramo Escarcha Invernal",
      category: "Ramos",
      price: "19,000",
      image: "ramo9.jpg",
      description: "Hermoso ramo de flores mixtas primaveales con envoltura personalizada",

    },
    {
      productName: "Arreglo Flores de Medianoche",
      category: "Arreglos",
      price: "49,000",
      image: "arreglo1.jpg",
      description: "Hermoso arreglo de flores mixtas primaveales con diferentes bases a elegir",

    },
  ],
};

//Search button click
/*document.getElementById("search").addEventListener("click", () => {
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
});*/

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
    container.classList.add("container-list-card");


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
    price.innerText = "₡" + product.price;
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
      price.innerText = "₡" + i.price;
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
