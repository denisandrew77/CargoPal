import React from "react";
import { useNavigate } from "react-router-dom";

const OrderDone = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/DriverSignIn');
    };
    return(
        <div>
        <div class="flex flex-row justify-end">
                <button onClick={handleClick} class=" mt-2 mr-2 px-3 py-2 bg-red-500 hover:bg-red-600 active:bg-red-600 rounded-md text-white font-bold">
                    <i class="bi bi-x-circle-fill"></i>
                    Exit
                </button>
        </div>
        <div class="flex flex-col justify-center items-center  mt-[30vh]">
            <i class="bi bi-check-circle-fill text-green-600 text-9xl"></i>
            <div class="mt-4 text-2xl font-semibold">
                Cursa Finalizata cu succes
            </div>
        </div>
        
    </div>
    );
}
export default OrderDone;