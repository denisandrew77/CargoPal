import react from "react";
import { useState } from "react";
import siglaDenicar from '../Images/sigla_denicar.jpg';
import { useNavigate } from "react-router-dom";
import createAccount from "../DataFetching/CompanyDataCreateAccount";

const CompanyCreateAccountForm = ()=>{
    const [formData,setFormData] = useState({company_name:"",email:"",password:""});
    const handleChange =(e)=>{
       const {name,value} = e.target;
       setFormData((previousData)=>({...previousData,[name]:value}));
    }
    const navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        createAccount(formData);
        navigate("/CompanyMainMenu",{state:formData});
    }
    return(
    <form className="flex flex-col justify-center items-center space-y-6" onSubmit={handleSubmit}>
       <input 
            className="focus:bg-zinc-200 focus:outline-none p-4 rounded-lg bg-zinc-100  md:w-80 lg:w-96"
            type="text"
            placeholder="Numele Companiei"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            />
        <input 
            className="focus:bg-zinc-200 focus:outline-none p-4 rounded-lg bg-zinc-100  md:w-80 lg:w-96"
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
        <input 
            className="focus:bg-zinc-200 focus:outline-none p-4 rounded-lg bg-zinc-100  md:w-80 lg:w-96"
            type="text"
            placeholder="Parola"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
            <button 
            className=" flex items-center text-white font-semibold px-7 py-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-600 rounded-lg text-xl"
            type="submit">Activeaza</button>
        </form>);
}
const CompanyCreateAccount = ()=>{
    return(
        <div className="flex flex-col items-center  h-screen  mt-[14vh] md:mt-[10vh] lg:mt-[5vh]">
            <div className="flex flex-col items-center justify-center">
              <img className="size-11/12 md:size-10/12 lg:size-8/12" src={siglaDenicar} alt=""/>
            </div>
            <div className="mb-10">
              CargoPal
            </div>
        <CompanyCreateAccountForm/>
        </div>);
}

export default CompanyCreateAccount;