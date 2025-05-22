// import React, { useState } from "react";
// export default function Email({setpage,setemail}){
  
//     return(
//         <div classname="h-[100vh]flex justify-center items-center">
//             <div className="border-amber-200 p-10 h-[300px] w-[500px]  justify-items-center flex-col bg-amber-100">
//              <input type="email" placeholder="Email" className="input  input-secondary" onChange={(e)=>setemail(e.target.value)} /> <br />
//             <button className="btn btn-primary" onclick={()=>setpage(1)}>Next</button>
//             </div>

//         </div>
//     )
// }

import React from "react";

export default function Email({ setpage, setemail }) {
    return (
        <div className="h-[100vh] flex justify-center items-center">
            <div className="border-amber-200 p-10 h-[300px] w-[500px]  flex flex-col justify-center items-center  bg-amber-100 gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="input input-secondary"
                    onChange={(e) => setemail(e.target.value)}
                />


                <br />
                <button className="btn btn-primary" onClick={setpage}>
                    Next
                </button>
            </div>
        </div>
    );
}
