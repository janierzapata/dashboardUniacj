import axios from "axios";
import { UserService } from "./userServices";

class ImplementService {
    constructor(){
        this.UserService = new UserService(axios);
    }
}


export const ApiService = new ImplementService();