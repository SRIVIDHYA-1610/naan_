// import React, { useContext } from "react";
// import { CartContext } from "./CartContext";

// export default function Cart() {
//   const { cartItems, incrementQuantity, decrementQuantity, getTotalAmount } = useContext(CartContext);

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl mb-4 font-bold">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded shadow mb-2">
//               <img src={item.image} alt={item.brand} className="w-20 h-20 object-cover" />
//               <div className="flex-1 ml-4">
//                 <h2 className="text-xl">{item.brand} - {item.model}</h2>
//                 <p className="text-red-600 font-semibold">₹{item.price}</p>
//                 <div className="flex items-center gap-2 mt-2">
//                   <button onClick={() => decrementQuantity(item.id)} className="bg-gray-300 px-2">-</button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => incrementQuantity(item.id)} className="bg-gray-300 px-2">+</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div className="text-xl font-bold mt-4">Total: ₹{getTotalAmount()}</div>
//         </>
//       )}
//     </div>
//   );
// }
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { cartItems, incrementQuantity, decrementQuantity, getTotalAmount } = useContext(CartContext);

  return (
    <div className="p-6 bg-pink-100 min-h-screen">
      <h1 className="text-4xl font-semibold text-center mb-6 text-gray-800">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-blue-200 p-5 rounded-lg shadow-lg mb-4  pl-4 hover:shadow-xl transition-shadow duration-400 ease-in-out h-[500px]">
              <img src={item.image} alt={item.brand} className="w-100 h-100 object-cover rounded-lg" />
              <div className="flex-1 ml-6">
                <h2 className="text-xl font-medium text-gray-800">{item.brand} - {item.model}</h2>
                <p className="text-lg font-semibold text-red-500">₹{item.price}</p>
                <div className="flex items-center gap-4 mt-3">
                  <button 
                    onClick={() => decrementQuantity(item.id)} 
                    className="bg-gray-300 px-3 py-1 rounded-md text-lg text-gray-700 hover:bg-gray-400 transition duration-200">
                      -
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button 
                    onClick={() => incrementQuantity(item.id)} 
                    className="bg-gray-300 px-3 py-1 rounded-md text-lg text-gray-700 hover:bg-gray-400 transition duration-200">
                      +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="text-2xl font-bold  text-gray-800 mt-6 text-right text-red-400">Total: ₹{getTotalAmount()}</div>
        </>
      )}
    </div>
  );
}
