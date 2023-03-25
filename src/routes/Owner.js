import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Owner/Login';
import Register from '../pages/Owner/Register';
import Dashboard from '../pages/Owner/Dashboard';
import Profile from '../pages/Owner/Profile';
import Hotels from '../pages/Owner/Hotels';
import AddHotel from '../pages/Owner/AddHotel';
import OwnerPrivateRoutes from '../helpers/PrivateRoutes/OwnerPrivateRoutes';
import EditHotel from '../pages/Owner/EditHotel';
import AddRoom from '../pages/Owner/AddRoom';
import ShowRooms from '../pages/Owner/ShowRooms';
import Bookings from '../pages/Owner/Bookings';

const Owner = () => {
    return (
        <>
            <Routes>
                <Route element={<OwnerPrivateRoutes />} >
                    <Route exact path='/' element={<Dashboard />} />
                    <Route exact path='/profile' element={<Profile />} />
                    <Route exact path='/hotels' element={<Hotels />} />
                    <Route exact path='/bookings' element={<Bookings />} />
                    <Route exact path='/addHotel' element={<AddHotel />} />
                    <Route exact path='/editHotel/:hotelId' element={<EditHotel />} />
                    <Route exact path='/addRoom/:hotelId' element={<AddRoom />} />
                    <Route exact path='/showRooms/:hotelId' element={<ShowRooms />} />
                </Route>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
            </Routes>
        </>
    )
}

export default Owner