import React from "react";
import { useContext } from "react";
import { OrderDataContext } from "../Loading";

const DateAndTime = () => {
            const dataAndState = useContext(OrderDataContext);
    return(
        <div className="flex flex-row">
                    <i className="bi bi-clock-fill mr-1"></i>
                    <div>Data si ora:</div>
                    <div className="ml-2 w-48 flex space-x-2">
                    <span>
                        {dataAndState.status === 'loading'
                        ? new Date(dataAndState.orderData.Loading_date).toLocaleDateString("en-GB")
                        : new Date(dataAndState.orderData.Delivery_date).toLocaleDateString("en-GB")}
                    </span>
                    <span>{dataAndState.status==='loading'?dataAndState.orderData.Loading_time:dataAndState.orderData.Delivery_time}</span>
                    </div>
                </div>
    );
}
export default DateAndTime;