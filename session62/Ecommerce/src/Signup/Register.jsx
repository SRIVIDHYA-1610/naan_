import React, {useEffect, useState } from "react";
import Email from './Email';
import PersonalData from'./personalData';
import { useNavigate } from 'react-router-dom';
export default function Register(){
    const [page,setpage]=useState(0);
    const [email,setemail]=useState('');
    const [username,setusername]=useState('');
    const [phonenum,setphonenum]=useState('');
    const [address,setaddress]=useState('');
    const [landmark,setlandmark]=useState('');
    const navigate = useNavigate();
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }


    const updatepage=()=>{
        if(validateEmail(email)){
            setpage(1)
            alert("congrats email is set")

        }else{
            alert("pls enter a email")
        }

    }
    useEffect(()=>{
        console.log("rendering");
    },[page,username])//used for api calling array is dependency array to control the side effect

     

   
    const handlesubmit =()=>{
        console.log(email);
        console.log(username);
        console.log(phonenum);
        console.log(address);
        console.log(landmark);
        navigate('/buyer');

    }

    return(
        <div>
            {
                page==0 && <Email  setpage={updatepage} setemail={setemail}/> || page==1 && <PersonalData  setusername={setusername} setphonenum={setphonenum}  setaddress={setaddress} setlandmark={setlandmark} handlesubmit={handlesubmit}/>
            }
        </div>
        
    )
}
