import React from "react";
import { useContext } from "react";
import { OrderDataContext } from "../Loading";

const Contact = () => {
        const dataAndState = useContext(OrderDataContext);
    return(
    <div className="flex flex-row">
        <i className="bi bi-telephone-fill mr-1 text-blue-500"></i>
        <div>Contact:</div>
        <div className="ml-2">
            {dataAndState.status==='loading'?dataAndState.orderData.Loading_contact:dataAndState.orderData.Delivery_contact}
        </div>
    </div>);
}
export default Contact;