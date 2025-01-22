import axios from "axios";
const createAccount = async (accountData)=>{
    const response = await axios.post("http://localhost/ApplicationApi/insert_new_user.php",accountData,{
        headers:{
            "Content-type": "application/json",
        },
    });
}
export default createAccount;