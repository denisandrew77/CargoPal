import React from "react";
import { useContext } from "react";
import { OrderDataContext } from "../Loading";

const Refference = () =>{
            const dataAndState = useContext(OrderDataContext);
    
    return(
        <div className="flex flex-row">
                    <i className="bi bi-upc-scan mr-1"></i>
                    <div>Referinta:</div>
                    <div className="ml-2 w-48">
                        {dataAndState.state==="loading"?dataAndState.orderData.Loading_refference:dataAndState.orderData.Delivery_refference}
                    </div>
                </div>
    );
}
export default Refference;