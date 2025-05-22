const con = document.getElementById("container");

fetch("https://fakestoreapi.com/products")
  .then((data) => data.json()) // Correcting JSON parsing
  .then((data) => {
    data.forEach((val) => { // Correcting forEach syntax
      con.innerHTML += `<img src="${val.image}" width="100">`; // Using backticks for template literals
    });
  })
  .catch((error) => console.error("Error fetching data:", error)); // Adding error handling
