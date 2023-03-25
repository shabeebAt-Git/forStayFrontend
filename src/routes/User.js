import { Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from '../pages/User/HomePage/Home';
import Login from '../pages/User/Login';
import Register from '../pages/User/Register';
import ProfilePage from '../pages/User/ProfilePage';
import VerifyEmail from '../components/User/VerifyEmail/VerifyEmail';
import UserPrivateRoutes from '../helpers/PrivateRoutes/UserPrivateRoutes';
import HotelList from '../pages/User/ListHotels/HotelList';
import HotelSinglePage from '../pages/User/HotelSinglePage';
import ShowRoom from '../pages/User/ShowRoom';
import MyBookings from '../pages/User/MyBookings';






function User() {
    return (
        <>
            <Routes>
                <Route element={<UserPrivateRoutes />}>
                    <Route exact path='/profile' element={<ProfilePage />} />
                    <Route exact path='/bookings' element={<MyBookings />} />
                    <Route exact path='/hotels' element={<HotelList />} />
                    <Route exact path='/hotel/:hotelId' element={<HotelSinglePage />} />
                    <Route exact path='/room/:hotelId/:roomId' element={<ShowRoom/>} />
                </Route>
                    <Route exact path='/' element={<Home />} />
                 <Route exact path="/users/:id/verify/:token" element={<VerifyEmail />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
            </Routes>
        </>
    );
}

export default User;
