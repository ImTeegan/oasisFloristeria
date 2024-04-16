//import imagenausar from '../public/images/dicomo.jpg'

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
// Obtener el nombre del producto de la URL
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('productName');
console.log(productName);


// Buscar el producto en la lista de productos
const product = products.data.find(item => item.productName === productName);

// Mostrar los detalles del producto en la página
if (product) {
  document.getElementById('product-name').innerText = product.productName;
  document.getElementById('product-category').innerText = product.category;
  document.getElementById('product-description').innerText = product.description;
  document.getElementById('product-price').innerText = "₡" + product.price;
  document.getElementById('product-image').src = product.image;
} else {
  // Producto no encontrado, mostrar mensaje de error o redireccionar a otra página
  document.getElementById('product-name').innerText = "como que no encuentra el producto.";
}