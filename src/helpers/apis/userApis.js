import {  userApi } from "./ApiSetup";

export const registerUserApi = async (formData) => {
    try {
        const { data } = await userApi.post("/register", formData);
        return data.message;

    } catch (error) {
        // return error
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            return(error.response);
            // notify(error.response.data.message)
        }
    }
};


export const getHotelsUserApi = async ()=>{
    try {
        const {data} =await userApi.get("/getHotels")
        // console.log(data);
        return data
    } catch (error) {
        return error
    }
}


export const getHotelDataUserApi = async (hotelId)=>{
    try {
        const {data} =await userApi.get(`/getHotelData/${hotelId}`)
        // console.log(data);
        return data
    } catch (error) {
        return error
    }
}



export const getRoomDataUserApi = async (datas)=>{
    try {
        console.log(datas);
        const { data } = await userApi.get(`/getRoomData/${datas.hotelId}/${datas.roomId}`)
        // console.log(data);
        return data
    } catch (error) {
        return error
    }
}

export const informOwnerBookingOwnerApi = async (datas)=>{
    try{
        const {data} = await userApi.post(`/informOwnerBooking`,{...datas})
        return data
    }catch (error) {
        return error
    }
}

export const myBookingDataOwnerApi = async ()=>{
    try{
        const {data} = await userApi.get('/myBookings')
        return data
    }
    catch(error){
        return error
    }
}


export const getUserDataUserApi = async ()=>{
    try{
        const {data} = await userApi.get('/userData')
        return data
    }
    catch(error){
        return error
    }
}

