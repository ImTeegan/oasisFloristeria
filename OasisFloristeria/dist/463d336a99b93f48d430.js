let products={data:[{productName:"Regular White T-Shirt",category:"Topwear",price:"30",image:"https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg"},{productName:"Beige Short Skirt",category:"Bottomwear",price:"49",image:"https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg"},{productName:"Sporty SmartWatch",category:"Watch",price:"99",image:"https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg"},{productName:"Basic Knitted Top",category:"Topwear",price:"29",image:"https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg"},{productName:"Black Leather Jacket",category:"Jacket",price:"129",image:"https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg"},{productName:"Stylish Pink Trousers",category:"Bottomwear",price:"89",image:"https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg"},{productName:"Brown Men's Jacket",category:"Jacket",price:"189",image:"https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg"},{productName:"Comfy Gray Pants",category:"Bottomwear",price:"49",image:"https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_1280.jpg"}]};const urlParams=new URLSearchParams(window.location.search),productName=urlParams.get("productName");console.log(productName);const product=products.data.find((t=>t.productName===productName));product?(document.getElementById("product-name").innerText=product.productName,document.getElementById("product-category").innerText=product.category,document.getElementById("product-price").innerText="$"+product.price,document.getElementById("product-image").src=product.image):document.getElementById("product-name").innerText="como que no encuentra el producto.";