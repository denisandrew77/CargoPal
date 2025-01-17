import React from "react";
import Header from "./InformationForDriver/Header";
import Address from "./InformationForDriver/Address";
import Contact from "./InformationForDriver/Contact";
import DateAndTime from "./InformationForDriver/DateAndTime";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { OrderDataContext } from "./Loading";
import { useNavigate } from "react-router-dom";

const DeliveryDetails = ()=>{
    return (
        <div className="pl-2 py-2 rounded-md text-lg  bg-gray-100 shadow-lg">
        <Header status={'descarcare'}/>
        <div className="space-y-2 flex flex-col md:flex-row md:space-x-10">
            <Address/>
            <div>
                <Contact/>
                <DateAndTime/>
            </div>
        </div>
    </div>
    );
}
const DeliveryProcess=()=>{
    const navigate = useNavigate();
    const handleRedirect = () =>{
        navigate('/OrderDone');
    }
    //State values
    const initial='peer border-2 border-black rounded-md px-4 py-2 bg-zinc-100 w-64';
    const pressed='peer border-2 rounded-md px-4 py-2 w-64 bg-green-600 text-white font-bold border-0';
    //Arrived at Delivery button state
    const [arrivedAtDelivery,setArrivedAtDelivery] = useState({style:initial,disabledState:false,tick2Visibility:'hidden'});
    const handleArrivedAtDeliveryClick = ()=>{
        if(arrivedAtDelivery.style===initial)
        {setArrivedAtDelivery({style:pressed,disabledState:false,tick2Visibility:'visible'});
        setUnloaded({style:initial,disabledState:false,tick3Visibility:'hidden'});}
        
    };
    //Loaded button  state
    const [unloaded,setUnloaded] = useState({style:initial,disabledState:true,tick3Visibility:'hidden'});
    const handleDeliveryClick = ()=>{
        if(unloaded.style===initial)
        {setUnloaded({style:pressed,disabledState:false,tick3Visibility:'visible'});}
    };
    return(<div>
        <div className=" pl-2 py-2 rounded-md text-lg  bg-gray-100 shadow-lg">
            <div className="text-2xl mb-2 border-2 border-b-black border-gray-100 w-56 font-semibold">
                Statusul comenzii
            </div>
            <div className="space-y-2">
                <div className="flex flex-row">
                    <button disabled={arrivedAtDelivery.disabledState} onClick={()=>handleArrivedAtDeliveryClick()} className={arrivedAtDelivery.style}>Sosire la descărcare</button>
                    <i className={`bi bi-check-circle-fill text-green-600 text-xl ml-2 flex items-center ${arrivedAtDelivery.tick2Visibility}`}></i>
                </div>
                <div className="flex flex-row">
                    <button disabled={unloaded.disabledState} onClick={()=>handleDeliveryClick()} className={unloaded.style}>Descărcat</button>
                    <i className={`bi bi-check-circle-fill text-green-600 text-xl ml-2 flex items-center ${unloaded.tick3Visibility}`}></i>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-start">
                      <input id="file-upload" type="file" className="hidden"/>
                      <label className="ring-2 ring-black focus:ring-2 focus:ring-blue-500 focus:outline-none py-2 rounded-md bg-zinc-100 placeholder-stone-500 text-center w-64">
                          <i className="bi bi-upload pr-2"></i>Poza CMR
                      </label>
                     </div> 
                     <div className="flex justify-start">
                      <input id="file-upload" type="file" className="hidden"/>
                      <label className="ring-2 ring-black focus:ring-2 focus:ring-blue-500 focus:outline-none py-2 rounded-md bg-zinc-100 placeholder-stone-500 text-center w-64">
                        <i className="bi bi-upload pr-2"></i>Poza marfa
                      </label>
                     </div> 
                </div>
                <div>
                    Discuții cu dispeceratul
                </div>
                <div className="flex flex-row space-x-2 items-center">
                    <div>
                        <input type="text" className="focus:outline-none border-2 border-black rounded-md p-1 pl-2"/>
                    </div>
                    <div>
                        <button className="px-5 py-1 bg-gray-300 rounded-md active:bg-gray-400 bg-gray-500 text-white font-semibold">Trimite <i className="bi bi-send-fill"></i></button>
                    </div>
                </div>
                <div>
                    Mesaj Dispecer
                </div>
                <div className="w-56 px-3 py-2 rounded-md bg-green-500 bg-gradient-to-r from-green-600 to-green-500 font-bold text-white">
                    Puteti porni
                </div>
            </div>
        </div>
        <div className="flex flex-row justify-end">
                <button onClick={handleRedirect} className="text-white font-bold px-3 py-2 bg-orange-500 rounded-md active:bg-orange-600">Urmatorul pas <i className="bi bi-chevron-right"></i></button>
        </div>
    </div>);
}
const Delivery = ()=>{
    const location = useLocation();
    const orderData = location.state;
    const status = 'Delivery';
    const values={orderData,status}; 
    return(
    <OrderDataContext.Provider value={values}>
    <div>
            <div className="pl-5 py-4 rounded-none text-3xl md:text-4xl text-white font-bold bg-orange-100 sticky top-0 bg-gradient-to-r from-orange-500 to-orange-300 shadow-lg">
                Descărcare
            </div>
            <div className="m-2 space-y-2">
                <DeliveryDetails/>
                <DeliveryProcess/>
            </div>
        </div>
    </OrderDataContext.Provider>
    );
}
export default Delivery;