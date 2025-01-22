import axios from "axios";
const updateVehicle= async(data)=>{
    const response = await axios.post("http://localhost/ApplicationApi/update_vehicles.php",data);
    return response.data;
}
export default updateVehicle;