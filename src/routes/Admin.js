import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Dashboard from '../pages/Admin/Dashboard';
import Login from '../pages/Admin/Login';
import PendingApproval from '../pages/Admin/PendingApproval';
import AdminPrivateRoutes from '../helpers/PrivateRoutes/AdminPrivateRoutes';

const Admin = () => {
    return (
        <>
            <Routes>
                <Route element={<AdminPrivateRoutes />} >
                    <Route exact path='/' element={<Dashboard />} />
                    <Route exact path='/approval' element={<PendingApproval />} />
                </Route>
                <Route exact path='/login' element={<Login />} />
            </Routes>
        </>
    )
}

export default Admin