// let a=22
// let b="sri"
// let c="vidhiyasri106@gmail.com"
// let empObj={
//     name:"sri",
//     email:"vidhiyasri1062gmail.com",
//     age:19,
//     experience:0

// }
let mobile=[
  { 
    productId:1,
    brand:"OPPO",
    model:"Galaxy s26",
    image:"https://m.media-amazon.com/images/I/51HQI+yKCKL._SY300_SX300_.jpg",
    descritpion:"Spacekart for Oppo Find N2 Flip,Oppo Find N2 Flip Phone Case Clear Transparent  ",
    price:19000,
},


{
    productId:2,
    brand:"smasung",
    model:"Galaxy s24",
    image:"https://m.media-amazon.com/images/I/51HQI+yKCKL._SY300_SX300_.jpg",
    descritpion:"AACL Tempered Glass Screen Guard For Oppo Find N2 Flip 5G Cellphone  ",
    price:4000,
},    
     

{
    
    productId:3,
    brand:"Apple",
    model:"meow",
    image:"https://m.media-amazon.com/images/I/51HQI+yKCKL._SY300_SX300_.jpg",
    descritpion:"Spacekart for Oppo Find N2 Flip,Oppo Find N2 Flip Phone Case Clear  ",
    price:30000,
},    
    
{
    productId:4,
    brand:"chi",
    model:"soft",
    image:"https://m.media-amazon.com/images/I/51HQI+yKCKL._SY300_SX300_.jpg",
    descritpion:"Spacekart for Oppo Find N2 Flip,Oppo Find N2 Flip Phone Case Clear ",
    price:9000,
},    
        

];



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
<button class="add-to-cart" onclick="cart(${mobile[i].productId})">  Add to Cart</button>
</div>
</div>`
}
let arr=[];
function cart(proid){
   
    arr.push(mobile[proid - 1]);
    localStorage.setItem("cartdata",JSON.stringify(arr));

}
