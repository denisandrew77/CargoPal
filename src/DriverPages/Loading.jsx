import React, { useContext } from "react";
import { useState } from "react";
import { data, useLocation, useNavigate } from "react-router-dom";
import Header from "./InformationForDriver/Header";
import { createContext } from "react";
import Address from "./InformationForDriver/Address";
import Contact from "./InformationForDriver/Contact";
import DateAndTime from "./InformationForDriver/DateAndTime";
import Refference from "./InformationForDriver/Refference";
import Load from "./InformationForDriver/Load";
import PostData from "../DataFetching/PostData";
import orderData from "../DataFetching/GetData";

export const OrderDataContext = createContext();
const LoadingDetails = ()=>{
    return (
        <div className="pl-2 py-2 rounded-md text-lg  bg-gray-100 shadow-lg">
        <Header status={'incarcare'}/>
        <div className="space-y-2 flex flex-col md:flex-row md:space-x-10">
            <Address/>
            <div>
                <Contact/>
                <DateAndTime/>
                <Refference/>
                <Load/>
            </div>
        </div>
    </div>
    );
}
const LoadingProcess=()=>{
    const [nextPageDisabledState,setNextPageDisabledState] = useState(true);
    const dataAndStatus = useContext(OrderDataContext);
    const navigate=useNavigate();
    const handleRedirectClick = ()=>{
       navigate("/Delivery",{state:dataAndStatus.orderData});
    }
    //State values
    const initial='peer border-2 border-black rounded-md px-4 py-2 bg-zinc-100 w-64';
    const pressed='peer border-2 rounded-md px-4 py-2 w-64 bg-green-600 text-white font-bold border-0';
    //Left for Loading button state
    const [leftForLoading,setLeftForLoading] = useState({style:initial,disabledState:false,tick1Visibility:'hidden'});
    const handleLeftForLoadingClick = ()=>{
        if(leftForLoading.style===initial)
        {   setLeftForLoading({style:pressed,disabledState:false,tick1Visibility:'visible'});
            setArrivedAtLoading({style:initial,disabledState:false,tick2Visibility:'hidden'});
            const updatedData={...dataAndStatus.orderData, Status:"Left for Loading"};
            PostData(updatedData);
        }
    };
    //Arrived at Loading button state
    const [arrivedAtLoading,setArrivedAtLoading] = useState({style:initial,disabledState:true,tick2Visibility:'hidden'});
    const handleArrivedAtLoadingClick = ()=>{
        if(arrivedAtLoading.style===initial)
        {setArrivedAtLoading({style:pressed,disabledState:true,tick2Visibility:'visible'});
        setLoaded({style:initial,disabledState:false,tick3Visibility:'hidden'});}
        const updatedData={...dataAndStatus.orderData, Status:"Arrived at Loading"};
        PostData(updatedData);
    };
    //Loaded button  state
    const [loaded,setLoaded] = useState({style:initial,disabledState:true,tick3Visibility:'hidden'});
    const handleLoadedClick = ()=>{
        if(loaded.style===initial)
        {setLoaded({style:pressed,disabledState:false,tick3Visibility:'visible'});
        setNextPageDisabledState(false);}
        const updatedData={...dataAndStatus.orderData, Status:"Loaded"};
        PostData(updatedData);
    };
    return(
    <div>
        <div className=" pl-2 rounded-md text-lg  bg-gray-100 shadow-lg pt-2 pb-4">
            <div className="text-2xl mb-2 border-2 border-b-black border-gray-100 w-56 font-semibold">
                Statusul comenzii
            </div>
            <div className="space-y-2">
                <div className="flex flex-row">
                    <button disabled={leftForLoading.disabledState} onClick={()=>handleLeftForLoadingClick()} className={leftForLoading.style}>Pornire spre încărcare</button>
                    <i className={`bi bi-check-circle-fill text-green-600 text-xl ml-2 flex items-center ${leftForLoading.tick1Visibility}`}></i>
                </div>
                <div className="flex flex-row">
                    <button disabled={arrivedAtLoading.disabledState} onClick={()=>handleArrivedAtLoadingClick()} className={arrivedAtLoading.style}>Sosire la încărcare</button>
                    <i className={`bi bi-check-circle-fill text-green-600 text-xl ml-2 flex items-center ${arrivedAtLoading.tick2Visibility}`}></i>
                </div>
                <div className="flex flex-row">
                    <button disabled={loaded.disabledState} onClick={()=>handleLoadedClick()} className={loaded.style}>Încărcat</button>
                    <i className={`bi bi-check-circle-fill text-green-600 text-xl ml-2 flex items-center ${loaded.tick3Visibility}`}></i>
                </div>
                
            </div>
        </div>
        <div className="relative min-h-screen">
                <button disabled={nextPageDisabledState} onClick={handleRedirectClick} className="fixed bottom-4 right-4 text-white font-bold px-3 py-2 bg-orange-500 rounded-md active:bg-orange-600">Urmatorul pas <i className="bi bi-chevron-right"></i></button>
        </div>
    </div>);
}

const Loading = ()=>{
    const location = useLocation();
    const orderData = location.state;
    const status = 'loading';
    console.log(orderData);
    const values={orderData,status};
    return(
    <OrderDataContext.Provider value={values}>
    <div>
            <div className="pl-5 py-4 rounded-none text-3xl md:text-4xl text-white font-bold bg-orange-100 sticky top-0 bg-gradient-to-r from-orange-500 to-orange-300 shadow-lg">
                Încărcare
            </div>
            <div className="m-2 space-y-2">
                <LoadingDetails details={orderData}/>
                <LoadingProcess/>
            </div>
        </div>
    </OrderDataContext.Provider>
    );
}
export default Loading;
