import { adminApi } from "./ApiSetup";



export const pendingApprovalsAdminApi = async (formData) => {
    try {
        const { data } = await adminApi.get("/approval", formData);
        return data;

    } catch (error) {
        return error
        // if (
        //     error.response &&
        //     error.response.status >= 400 &&
        //     error.response.status <= 500
        // ) {
        //     return (error.response);
        //     // notify(error.response.data.message)
        // }
    }
};

export const approveHotelAdminApi = async (hotelData)=>{
    try {
        const { data } = await adminApi.post("/approveHotel", hotelData);
        return data;
    } 
    catch(error){
        console.log(error);
    }
}