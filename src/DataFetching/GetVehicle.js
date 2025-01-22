import axios from "axios";
const getVehicles= async()=>{
    const response = await axios.get("http://localhost/ApplicationApi/get_vehicles.php");
    return response.data;
}
const vehicles = await getVehicles();
export default vehicles;