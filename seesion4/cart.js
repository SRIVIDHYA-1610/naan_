const mobile=JSON.parse(localStorage.getItem('cartdata'));
    console.log(mobile);
    const con=document.getElementById('container');
    for(let i=0;i<mobile.length;i++)
    {
        con.innerHTML+=`
    <div class="product-card">
    <img  src=${mobile[i].image} >
    <div class="product-info">
    <h1 class="product-title">${mobile[i].brand}</h1>
    <p class="product-description">${mobile[i].descritpion}</p>
    <p class="product-price">$${mobile[i].price}</p>
    <button class="add-to-cart" onclick="cart(${mobile[i].productId})"> Buynow</button>
    </div>
    </div>`
    }
