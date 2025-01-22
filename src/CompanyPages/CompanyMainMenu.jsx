import react, { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import vehicles from "../DataFetching/GetVehicle";
import { Switch } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from "@mui/material/TextField";
import updateVehicle from "../DataFetching/UpdateVehicles";

const CompanyMainMenu=()=>{
    const location = useLocation();
    const companyData=location.state;
    const vehiclesWithState=vehicles.map(vehicle=>({...vehicle,toggleState:'hidden'}));
    const navigate = useNavigate();
    const [formData,setFormData]=useState(vehicles);
    const [listToggleState,setListToggleState] = useState(vehiclesWithState);
    const [locationVisibility,setLocationVisibility]=useState(vehicles.map(vehicle=>({...vehicle,visibility:'hidden'})));
    const handleTogleClick=(vehicle)=>{
        console.log(vehicle);
        setListToggleState(prevState=>prevState.map(element=>element.Plate_number===vehicle.Plate_number?{...element,toggleState:element.toggleState==='hidden'?'visible':'hidden'}:element));
    }
    const handleRedirect = ()=>{
        navigate('/CreateCar',{state:companyData});
    }
    const handleSubmit = async (e,vehicle)=>{
        e.preventDefault();
        const updatedData = await updateVehicle(formData.find(item=>item.Plate_number===vehicle.Plate_number));
        const updatedDataWithState =  updatedData.data.map(item=>({...item,toggleState:listToggleState.find(element=>element.Plate_number===item.Plate_number).toggleState}));
        console.log(updatedDataWithState)
        setListToggleState(updatedDataWithState);
        setLocationVisibility(prevState=>prevState.map(item=>item.Plate_number===vehicle.Plate_number?{...item,visibility:'visible'}:item));
    }
    const handleChange = (e,vehicle)=>{
        const {name,value}=e.target;
        setFormData(prevState=>(prevState.map(item=>item.Plate_number===vehicle.Plate_number?{...item,[name]:value}:item)));
        console.log(formData);
    }
    return(
        <div className="m-2 p-2shadow-lg">
            <div className="">
            {listToggleState.map((vehicle)=>(
            <Accordion key={vehicle.Plate_number}
            sx={{backgroundColor:'#f3f4f6'}}>
                <AccordionSummary
                sx={{fontSize:'1.875rem',display:'flex',alignItems:'center'}}
                expandIcon={<ExpandMoreIcon />}>
                    <div>
                    <div>
                    {vehicle.Plate_number}
                    </div>
                    <div className={`text-xs ${locationVisibility.find(item=>item.Plate_number===vehicle.Plate_number).visibility||""}`}  style={{alignSelf:'center'}}>
                        {vehicle.CIty},{vehicle.Country}
                    </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                <div className="flex flex-row space-x-4">
                    <div className="text-lg">Disponibil</div>
                    <div>
                    <Switch onChange={()=>handleTogleClick(vehicle)} sx={{transform:'scale(1.5)'}}/>
                    </div>
                </div>
                <form className={`flex flex-col space-y-3 ${vehicle.toggleState}`} onSubmit={(e)=>handleSubmit(e,vehicle)}>
                    <div>
                        <TextField onChange={(e)=>handleChange(e,vehicle)} value={formData.find(item=>item.Plate_number===vehicle.Plate_number)?.Country||""} name="Country" label="Country" variant="filled"/>
                    </div>
                    <div>
                        <TextField onChange={(e)=>handleChange(e,vehicle)} value={formData.find(item=>item.Plate_number===vehicle.Plate_number)?.Postal_code||""} name="Postal_code" label="Postal_code"variant="filled"/>
                    </div>
                    <div>
                        <TextField onChange={(e)=>handleChange(e,vehicle)} value={formData.find(item=>item.Plate_number===vehicle.Plate_number)?.CIty||""} name="CIty" label="CIty" variant="filled"/>
                    </div>
                    <div>
                        <button type="submit" class="rounded-md px-4 py-2 bg-green-600 active:bg-green-700 text-white font-bold border-0">Save</button>
                    </div>
                </form>
                </AccordionDetails>
            </Accordion>
                ))}
            </div>
            
            <div class="fixed bottom-4 right-4 mb-4 mr-4">
            <button class="px-3 py-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-600 rounded-md text-white font-bold"
                    onClick={handleRedirect}>
                Adauga Masina
                <i class="bi bi-plus-circle-fill"></i>
            </button>
        </div>
        </div>
    );
}
export default CompanyMainMenu;