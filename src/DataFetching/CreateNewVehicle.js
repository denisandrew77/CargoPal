import axios from "axios";
const createNewVehicle= async(data)=>{
    const response = await axios.post("http://localhost/ApplicationApi/add_vehicle.php",data)
}
export default createNewVehicle;