import React from "react";
import { useContext } from "react";
import { OrderDataContext } from "../Loading";

const Address = () => {
    const dataAndState = useContext(OrderDataContext);
    console.log(dataAndState.orderData.orderData);
    return(
        <div>
                <div className="flex flex-row">
                    <i className="bi bi-geo-alt-fill mr-1 text-green-600"></i>
                    <div className="">Adresa</div>
                </div>
                <div className="flex flex-col w-52 ml-5">
                    <span>{dataAndState.status==='loading'?dataAndState.orderData.Loading_at_company:dataAndState.orderData.Delivery_at_company}</span>
                    <span>{dataAndState.status==='loading'?dataAndState.orderData.Loading:dataAndState.orderData.Delivery}</span>
                    <div className="space-x-2">
                        <span>{dataAndState.status==='loading'?dataAndState.orderData.Loading_postalcode:dataAndState.orderData.Delivery_postalcode}</span>
                        <span>{dataAndState.status==='loading'?dataAndState.orderData.Loading_city:dataAndState.orderData.Delivery_city}</span>
                    </div>
                    <span>{dataAndState.status==='loading'?dataAndState.orderData.Loading_country:dataAndState.orderData.Delivery_country}</span>                
                </div>
            </div>
    )
}
export default Address;