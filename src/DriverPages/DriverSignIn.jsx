import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import siglaDenicar from '../Images/sigla_denicar.jpg';
import { useEffect } from "react";
import orderData from "../DataFetching/GetData";

const SignInForm = ()=>{
    const navigate = useNavigate();
    const [errorState,setErrorState] =useState({error:false,style:'hidden'});
    const [driverSignInData,setDriverSignInData] = useState({plateNumber:'', orderNumber:''});
    const [data,setData] = useState([]);
    const authentication=data.find(curentOrder=>curentOrder.Plate===driverSignInData.plateNumber&&curentOrder.Order_number===driverSignInData.orderNumber);
    useEffect( ()=>{
        setData(orderData);
        },[]);
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setDriverSignInData((previousData)=>({...previousData, [name]:value}))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(authentication);
        if(authentication!==undefined){
            navigate('/Loading', {state:authentication});
        }
        else{
            setErrorState({error:true,style:'visible'});
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
            className=" focus:outline-none focus:bg-zinc-200 p-4 rounded-lg bg-zinc-100 placeholder-stone-500 md:w-80 lg:w-96" 
            type="text"
            placeholder="Număr de înmatriculare"
            name="plateNumber"
            value={driverSignInData.plateNumber}
            onChange={handleChange}
            />
            <div className="mb-10 w-48 md:w-80 lg:w-96 text-sm text-left ">
              Introdu numărul de înmatriculare a masinii
            </div>
            <input 
            className=" focus:outline-none focus:bg-zinc-200 p-4 rounded-lg bg-zinc-100 placeholder-stone-500 md:w-80 lg:w-96" 
            type="text" 
            placeholder="Numărul comenzii"
            name="orderNumber"
            value={driverSignInData.orderNumber}
            onChange={handleChange}
            />
            <div className="mb-10 w-48 md:w-80 lg:w-96 text-sm text-left">
                Introdu numărul comenzii
            </div>
            <div className="flex justify-center">
            <button 
            className=" text-white font-semibold px-7 py-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-600 rounded-lg text-xl"
            type="submit">Activeaza</button>
            </div>
        </form>
    );
}
const DriverSignIn = () => {    
    return(
    <div className="flex flex-col items-center  h-screen  mt-[14vh] md:mt-[10vh] lg:mt-[5vh]">
        <div className="flex flex-col items-center justify-center">
          <img className="size-11/12 md:size-10/12 lg:size-8/12" src={siglaDenicar} alt=""/>
        </div>
        <div className="mb-10">
          CargoPal
        </div>
    <SignInForm/>
    </div>);
}
export default DriverSignIn;