import Axios from "axios";

// Files Import
import {
    BASE_URL
} from "../constants/";

const SpaceXAxios = Axios.create({
    baseURL : BASE_URL 
})

export default SpaceXAxios