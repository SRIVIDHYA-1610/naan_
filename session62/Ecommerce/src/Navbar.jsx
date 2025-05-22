// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div>
//       <div className="navbar bg-base-100 shadow-sm">
//         <div className="flex-1">
//           <Link>
//             <a className="btn btn-ghost text-xl">Home</a>
//           </Link>
//           <Link to="pro" className="btn btn-ghost text-xl">
//             Products
//           </Link>

//           <Link to="cart">
//             <a className="btn btn-ghost text-xl">Cart</a>
//           </Link>

//           <a className="btn btn-ghost text-xl">Profile</a>
//         </div>
//         <div className="flex gap-2">
//           <input
//             type="text"
//             placeholder="Search"
//             className="input input-bordered w-24 md:w-auto"
//           />
//           <div className="dropdown dropdown-end">
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle avatar"
//             >
//               <div className="w-10 rounded-full">
//                 <img
//                   alt="Tailwind CSS Navbar component"
//                   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                 />
//               </div>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//             >
//               <li>
//                 <a className="justify-between">
//                   Profile
//                   <span className="badge">New</span>
//                 </a>
//               </li>
//               <li>
//                 <a>Settings</a>
//               </li>
//               <li>
//                 <a>Logout</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // State to control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Home
          </Link>
          <Link to="pro" className="btn btn-ghost text-xl">
            Products
          </Link>

          <Link to="cart" className="btn btn-ghost text-xl">
            Cart
          </Link>

         <Link to="profile" className="btn btn-ghost text-xl">Profile</Link>
        </div>

        {/* Mobile Menu Toggle Button (Hamburger) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="btn btn-ghost text-xl"
          >
            ☰
          </button>
        </div>

        {/* Desktop Menu (always visible on larger screens) */}
        <div className="hidden lg:flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu (shown when isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-base-100 p-4 shadow-md">
          <Link to="/" className="block text-xl py-2">
            Home
          </Link>
          <Link to="pro" className="block text-xl py-2">
            Products
          </Link>
          <Link to="cart" className="block text-xl py-2">
            Cart
          </Link>
          <Link to="profile"><a className="block text-xl py-2">Profile</a></Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
