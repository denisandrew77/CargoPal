import React from "react";

const Header = ({status}) =>{
    return(
        <div className="text-2xl md:text-3xl mb-2 border-2 border-b-black border-gray-100 w-60 md:w-80 font-semibold">
            Informatii {status}
        </div>
    )
}
export default Header;