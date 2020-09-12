import SpaceXAxios from "../config/axiosConfig";

// API called without any filters
export const getSpaceXLaunchList = async (queryString) => {
    try{
        const response = await SpaceXAxios.get(`?limit=100${queryString ? `&${queryString}` : ""}`);
        return response.data
    }catch(error){
        console.log("Error in fetching data")
    }
}