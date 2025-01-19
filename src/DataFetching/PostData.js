import axios from "axios";
const PostData = async (orderData) =>{
    const response =await axios.post("http://localhost/ApplicationApi/update_orders.php",orderData,{
        header:{
            "Content-type": "application/json",
        },
    });
    console.log(response.data);
}
export default PostData;