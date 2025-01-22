import react, { use } from "react";
import siglaDenicar from '../Images/sigla_denicar.jpg';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from "@mui/material";
import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import createNewVehicle from "../DataFetching/CreateNewVehicle";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreateCar = ()=>{
    const location = useLocation();
    const navigate = useNavigate();
    const companyData=location.state;
    const [vehicleType,setVehicleType] = useState('');
    const [carWeight,setCarWeight] = useState('');
    const [usableWeight,setUsableWeight] = useState('');
    const [lift,setLift] = useState(false);
    const [length,setLength] = useState('');
    const [width,setWidth] = useState('');
    const [height,setHeight]=useState('');
    const [plateNumber,setPlateNumber]=useState('');
    const handleVehicleTypeChange = (e)=>{
        setVehicleType(e.target.value);
    }
    const handleCarWeightChange = (e)=>{
        setCarWeight(e.target.value);
    }
    const handleUsableWeightChange = (e)=>{
        setUsableWeight(e.target.value);
    }
    const handleLiftCheck=(e)=>{
        setLift(e.target.checked);
    }
    const handleLengthChange=(e)=>{
        setLength(e.target.value);
    }
    const handleWidthChange = (e)=>{
        setWidth(e.target.value);
    }
    const handleHeightChange =(e)=>{
        setHeight(e.target.value);
    }
    const handlePlateChange = (e)=>{
        setPlateNumber(e.target.value);
    }
    const handleSubmit=()=>{
        const newVehicle=({Company_name:companyData.company_name,Plate_number:plateNumber,Car_type:vehicleType,Car_weight:carWeight,Usable_weight:usableWeight,Lift:lift,Length:length,Width:width,Height:height,Country:'no',Postal_code:'no',City:'no'});
        createNewVehicle(newVehicle);
        navigate("/CompanyMainMenu");
    }
    return(
    <div className="flex flex-col items-center  h-screen  mt-[5vh] md:mt-[2vh] lg:mt-[0vh]">
        <div className="flex flex-col items-center justify-center">
          <img className="size-11/12 md:size-10/12 lg:size-8/12" src={siglaDenicar} alt=""/>
        </div>
        <div class="mb-10">
          CargoPal
        </div>
        <div>
        <form className="space-y-2" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center">
            <label>Numar de inmatriculare</label>
            <input 
            name="Plate_numebr"
            className="focus:bg-zinc-200  focus:outline-none p-4 rounded-lg bg-zinc-100 placeholder-stone-500  w-64  md:w-80 lg:w-96" 
            type="text"
            value={plateNumber}
            onChange={handlePlateChange}/>
        </div>
        <div>
            <div>Tip de masina</div>
            <FormControl fullWidth>
            <Select
            name="Car_type"
            onChange={handleVehicleTypeChange}
            value={vehicleType} 
            className="active:bg-zinc-200 outline-none rounded-lg bg-zinc-100">
                <MenuItem value={"Box van"}>Box van</MenuItem>
                <MenuItem value={"Prelata"}>Prelata</MenuItem>
            </Select>
            </FormControl>
        </div>
        <div>
        <div>Greutatea Masinii</div>
        <FormControl fullWidth>
        <Select
            name="Car_weight"
            className="active:bg-zinc-200 outline-none rounded-lg bg-zinc-100"
            onChange={handleCarWeightChange}
            value={carWeight}>
                <MenuItem value={"Caddy"}>Caddy</MenuItem>
                <MenuItem value={"3.5 T"}>3.5 T</MenuItem>
                <MenuItem value={"7.5 T"}>7.5 T</MenuItem>
                <MenuItem value={"12 T"}>12 T</MenuItem>
                <MenuItem value={"18 T"}>18 T</MenuItem>
                <MenuItem value={"24 T"}>24 T</MenuItem>
                <MenuItem value={"27 T"}>27 T</MenuItem>
            </Select>
        </FormControl>
      </div>
            <div>Sarcina Utila</div>
              <input
              name="Usable_weight"
              value={usableWeight}
              onChange={handleUsableWeightChange}
              class="focus:bg-zinc-200 focus:outline-none p-4 rounded-lg bg-zinc-100 placeholder-stone-500 w-64  md:w-80 lg:w-96" 
              type="text"/>
        <div className="mr-3">Lift <Checkbox name="Lift" onChange={handleLiftCheck} value={lift}/></div>
        <div className="text-lg">Dimensiuni</div>
        
        <div className="flex flex-col justify-center">
            <label>Lungime</label>
            <input 
            name="Length"
            className="focus:bg-zinc-200  focus:outline-none p-4 rounded-lg bg-zinc-100 placeholder-stone-500  w-64  md:w-80 lg:w-96" 
            type="text"
            value={length}
            onChange={handleLengthChange}/>
        </div>
        <div className="flex flex-col justify-center">
            <label>Latime</label>
            <input 
            name="Width"
            className="focus:bg-zinc-200 focus:outline-none p-4 rounded-lg bg-zinc-100 placeholder-stone-500 md:w-80 w-64   lg:w-96" 
            type="text"
            value={width}
            onChange={handleWidthChange}/>
        </div>
        <div className="flex flex-col justify-center">
            <label>Inaltime</label>
            <input 
            name="Height"
            className="focus:bg-zinc-200 focus:outline-none p-4 rounded-lg bg-zinc-100 placeholder-stone-500 md:w-80 w-64 lg:w-96" 
            type="text"
            value={height}
            onChange={handleHeightChange}/>
        </div>
        <div className="flex justify-center py-4">
            <button type="submit" className="text-white font-semibold px-7 py-3 bg-orange-500 active:bg-orange-600 hover:bg-orange-600 rounded-lg text-xl">Creeaza Masina</button>
        </div>
        </form>
      </div>
    </div>);
}
export default CreateCar;