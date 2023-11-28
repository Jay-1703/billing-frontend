import axios from "axios";
import { baseUrl } from "../Url";

let data = [];
export const GenerateBill = async (e) => {
    data.push(e);
    console.log(data);
    if (data.length === 2) {
         try {
           return await axios.post(`${baseUrl}bill`,data).then((res)=>{console.log(res)});
         } catch (error) {
             console.log(error);
         }

    }
};