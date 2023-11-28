import axios from "axios";
import { baseUrl } from "../Url";

export const getCustomer = async (id) => {
    try {
      return await axios.get(`${baseUrl}customersdata`);
    } catch (error) {
        console.log(error);
    }
};