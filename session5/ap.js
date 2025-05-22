const con = document.getElementById("container");

fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((val) => {
      con.innerHTML += `
        <div class="product-card">
          <img src="${val.image}" width="200px">
          <div class="product-title">${val.title}</div>
          <div class="product-price">$${val.price}</div>
         
          <button class="add-to-cart" data-id="${val.id}">Add to Cart</button>
           <div class="ratings">Rating: ${val.rating.rate} ⭐ (${val.rating.count} reviews)</div>

        </div>
      `;
    })
    });

    
