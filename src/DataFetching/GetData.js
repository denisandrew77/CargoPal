import axios from 'axios';
const fetchData= async()=>{
    const response = await axios.get("http://localhost/ApplicationApi/index.php");
    console.log(response.data);
    return response.data;
}
const orderData= await fetchData();
export default orderData;