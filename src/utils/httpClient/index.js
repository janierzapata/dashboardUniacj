import axios from "axios";
import { URL_API } from "../constants/constants"

export const applyInterceptor = () =>{
    axios.defaults.baseURL = URL_API;
}