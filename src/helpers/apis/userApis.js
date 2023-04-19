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


export const getHotelsUserApi = async (searchData)=>{
    try {
        console.log(searchData);
        const {data} =await userApi.post("/getHotels?",{searchData})
        return data
    } catch (error) {
        return error
    }
}


export const getHotelDataUserApi = async (hotelId)=>{
    try {

        const res =await userApi.get(`/getHotelData/${hotelId}`)
        console.log(res)
        const data = res.data 
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

export const informOwnerBookingUserApi = async (datas)=>{
    try{
        const {data} = await userApi.post(`/informOwnerBooking`,{...datas})
        return data
    }catch (error) {
        return error
    }
}

export const myBookingDataUserApi = async ()=>{
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


export const orderPaymentUserApi = async (roomData)=>{
    try{
        // console.log(roomData);
        const { data } = await userApi.post('/orders',roomData)
        return data
    }
    catch(error){
        return error
    }
}


export const verifyPaymentUserApi = async (response)=>{
    try{
        // console.log(response);
        const { data } = await userApi.post('/verify',{...response})
        return data
    }
    catch(error){
        return error
    }
}


export const addReservedDateUserApi = async (roomAndOrderData)=>{
    try{
        // console.log(data);
        const { data } = await userApi.post('/addReservedDate',{...roomAndOrderData})
        return data
    }
    catch(error){
        return error
    }
}


export const placeSearchUserApi = async (searchData)=>{
    try{
        // console.log(place);
        const { data } = await userApi.post('/serachPlace', {...searchData})
        return data
    }
    catch(error){
        return error
    }
}


export const getHotelsByDistrict = async (place)=>{
    try{
        console.log(place);
        const { data } = await userApi.get(`/hotelByDistrict/${place}`)
        return data
    }
    catch(error){
        return error
    }
}


export const getAddressUserApi = async ()=>{
    try{
        const { data } = await userApi.get(`/address`)
        return data
    }
    catch(error){
        return error
    }
}


export const hotelDistAndCountUserApi = async ()=>{
    try{
        const { data } = await userApi.get(`/hotelDistWithCount`)
        return data
    }
    catch(error){
        return error
    }
}









