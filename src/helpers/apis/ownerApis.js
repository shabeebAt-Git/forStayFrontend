import { ownerApi } from "./ApiSetup";



export const addHotelOwnerApi = async (formData) => {
    try {
        const { data } = await ownerApi.post("/addHotel", formData);
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


export const getmyHotelsOwnerApi = async ()=>{
    try {
        const {data} = await ownerApi.get("/getMyHotels")
        return data;
    } catch (error) {
            return error;
    }    
}


export const addRoomOwnerApi = async (datas)=>{
    try {
        // console.log(datas);    
        // console.log(datas.values);    
        const {data} = await ownerApi.post(`/addRoom/${datas.hotelId}`,datas )
        return data;
    } catch (error) {
            return error;
    }    
}


export const getOwnerDataOwnerApi = async ()=>{
    try {
        const {data} = await ownerApi.get("/getOwnerData")
        return data;
    } catch (error) {
            return error;
    }    
}

export const  editHotelGetOwnerApi = async (hotelId)=>{
    try {
        // console.log(datas);
        const {data} = await ownerApi.get(`/editHotel/${hotelId}`)
        return data
    }catch(error){
            return error
    }
}

export const  deleteHotelOwnerApi = async (hotelId)=>{
    try{
        const {data} = await ownerApi.post(`/deleteHotel/${hotelId}`)
        return data
    }catch(error){
        return error
    }
}



export const  getRoomDataOwnerApi = async (hotelId)=>{
    try{
        const {data} = await ownerApi.get(`/getRoomData/${hotelId}`)
        return data
    }catch(error){
        return error
    }
}

export const deleteCurrentImgInEditOwnerApi = async (hotelData)=>{
    try {
        // console.log(img);
        const hotelId = hotelData.hotelId
        const hotelImg = hotelData.img

        const { data } = await ownerApi.post("/deleteHotelImg", {hotelId,hotelImg})
        return data
    } catch (error) {
        return error
    }
}


export const editHotelPostOwnerApi = async (hotelData)=>{
    try {
        const { data } = await ownerApi.post(`/editHotel/${hotelData.hotelId}`, {...hotelData})
        return data
    } catch (error) {
        return error
    }
}


export const bookingPendingOwnerApi = async ()=>{
    try{
        const { data } = await ownerApi.get("/bookingPendings")
        return data

    }catch(error){
        return error
    }
}


export const approveRoomOwnerApi = async (dataId)=>{
    try{
        const { data } = await ownerApi.post("/approveRoom", {dataId})
        return data

    }catch(error){
        return error
    }
}

















