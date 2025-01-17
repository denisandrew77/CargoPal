import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DecidingPage from "./DriverPages/DecidingPage";
import DriversignIn from "./DriverPages/DriverSignIn";
import Loading from "./DriverPages/Loading";
import Delivery from "./DriverPages/Delivery";
import OrderDone from "./DriverPages/OrderDone";

const App1 = ()=>{
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<DecidingPage/>}/>
            <Route path="/DriverSignIn" element={<DriversignIn/>}/>
            <Route path="/Loading" element={<Loading/>}/>
            <Route path="/Delivery" element={<Delivery/>}/>
            <Route path="/OrderDone" element={<OrderDone/>}/>
        </Routes>
    </BrowserRouter>
    )
};
export default App1;