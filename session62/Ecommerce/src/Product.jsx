import React from "react";
import AddToCart from "./AddTocart";

export default function Product() {
  //javascript area before return
  const products = [
    {
      id: 1,
      brand: "Oppo",
      model: "o24 super",
      price: 1000000,
      image:
        "https://m.media-amazon.com/images/I/718tAI-i2uL._SX679_.jpg",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      brand: "Vivo",
      model: "v24 super",
      price: 1000000,
      image:
        "https://m.media-amazon.com/images/I/41Qk2Ca0TEL._SX300_SY300_QL70_FMwebp_.jpg",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 3,
      brand: "Samsung",
      model: "pixels",
      price: 1000000,
      image:
        "https://image-us.samsung.com/SamsungUS/home/mobile/phones/pf/galaxy-a/03032023/1.jpg?$product-details-jpg$",
      description: "Lorem ipsum dolor sit amet.",
    },

    {
      id: 4,
      brand: "Samsung",
      model: "pixels",
      price: 1000000,
      image:
        "https://image-us.samsung.com/SamsungUS/home/mobile/phones/pf/galaxy-a/03032023/1.jpg?$product-details-jpg$",
      description: "Lorem ipsum dolor sit amet.",
    },

    {
      id: 5,
      brand: "Vivo",
      model: "v24 super",
      price: 1000000,
      image:
        "https://m.media-amazon.com/images/I/41Qk2Ca0TEL._SX300_SY300_QL70_FMwebp_.jpg",
      description: "Lorem ipsum dolor sit amet.",
    },



    {
      id: 6,
      brand: "Oppo",
      model: "o24 super",
      price: 1000000,
      image:
        "https://m.media-amazon.com/images/I/718tAI-i2uL._SX679_.jpg",
      description: "Lorem ipsum dolor sit amet.",
    },
  ];
  // return (
//     <div className="flex flex-col items-center gap-4 p-4">
//       {products.map((pro) => (
//         <div
//         key={pro.id}
//         className="card flex flex-row bg-base-100 shadow-md w-[600px]"
//       >
//           <div className="w-1/3">
//             <img
//               src={pro.image}
//               alt={pro.brand}
//               className="w-full h-full object-fit"
//             />
//             </div>
//           </figure>
//           <div className="card-body bg-blue-100 w-2/3 p-4">
//             <h2 className="card-title">{pro.brand}</h2>
//             <p>{pro.description}</p>
//             <p className="font-semibold">Price: ₹{pro.price}</p>
//             <div className="card-actions justify-end">
//               <AddToCart />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
return (
  <div className="flex flex-col items-center gap-4 p-4 bg-blue-50 ">
    {products.map((pro) => (
      <div
        key={pro.id}
        className="card flex flex-row bg-base-100 shadow-md w-[900px]"
      >
        <div className="w-1/3">
          <img
            src={pro.image}
            alt={pro.brand}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="card-body bg-blue-100 w-2/3 p-4">
          <h2 className="card-title text-3xl">{pro.brand}</h2>
          <p className="text-1xl">{pro.description}</p>
          <p className="font-semibold text-red-600 text-2xl">Price: ₹{pro.price}</p>
          <div className="card-actions justify-end">
          <AddToCart product={pro} />
            {/* <AddToCart /> */}
          </div>
        </div>
      </div>
    ))}
  </div>
);
}
