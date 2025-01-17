import React from "react";
import { useContext } from "react";
import { OrderDataContext } from "../Loading";

const Load = () => {
    const dataAndState = useContext(OrderDataContext);
    return(
        <div className="flex flex-row">
                    <i className="bi bi-truck mr-1"></i>
                    <div>Marfă:</div>
                    <div className="ml-2 w-48">
                        <span>{dataAndState.orderData.Goods_number} </span>
                        <span>{dataAndState.orderData.Goods_type} </span>
                        <span>{dataAndState.orderData.Goods_length}/</span>
                        <span>{dataAndState.orderData.Goods_width}/</span>
                        <span>{dataAndState.orderData.Goods_height} </span>
                        <span>{dataAndState.orderData.Goods_weight} kg</span>
                    </div>
                </div>
    )
}
export default Load;