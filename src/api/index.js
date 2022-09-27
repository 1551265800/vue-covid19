import axios from "../utils/request";
import base from "./base";

const api = {
    getNocv(params){
        return axios.get(base.ncov,{params})
    },
    //各省疫情数据
    getCityNocv(){
        return axios.get(base.cityNcov)
    }
}
export default api;