import React from "react";
import siglaDenicar from '../Images/sigla_denicar.jpg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const DecidingPage =  () =>{
  const navigate= useNavigate();
  const handleDriverButtonClick=()=>{
    navigate("/DriverSignIn");
  };
  const handleCompanyButtonClick = ()=>{
    navigate("/CompanyCreateAccount")
  }
  const [visibility,setVisibility] = useState('hidden'); 

    return(
      <div>
      <div className="flex justify-end relative">
      <button onClick={()=>{visibility==='hidden'?setVisibility('visible'):setVisibility('hidden')}} id="toggleMenuButton" className="mt-3 mr-2">
          <i className="bi bi-three-dots-vertical bg-gray-200 rounded-full p-2 text-xl active:bg-gray-300"></i>
      </button>
      <div id="hiddenButton" className={`absolute top-12 right-2 ${visibility}`}>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md shadow hover:bg-orange-600 active:bg-orange-600">
            Admin
          </button>
      </div>
      </div>
        <div className="flex flex-col items-center  h-screen">
        <div className="flex flex-col items-center justify-center mt-[20vh] md:mt-[10vh] lg:mt-[5vh]">
          <img className="size-11/12 md:size-9/12 lg:size-8/12" src={siglaDenicar} alt="siglaDenicar"/>
        </div>
        <div className="mb-10 text-lg mt-[0vh] md:mt-[0vh] lg:mt[0vh]">
          CargoPal
        </div>
        <div className="flex flex-col justify-center ">
            <div className="text-left mb-2">Sunt:</div>
                <button onClick={handleDriverButtonClick} className="text-white font-semibold px-12 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 active:bg-orange-600 text-xl mb-5">Sofer</button>
              <button onClick={handleCompanyButtonClick} className="text-white font-semibold px-7 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 active:bg-orange-600 text-xl">Companie</button>
        </div>
    </div>
    </div>
    )
}
export default DecidingPage;