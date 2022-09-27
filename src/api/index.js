import axios from "../utils/request";
import base from "./base";

const api = {
    getNocv(params){
        return axios.get(base.ncov,{params})
    }
}
export default api;