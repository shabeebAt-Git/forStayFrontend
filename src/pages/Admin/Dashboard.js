import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ContainerLayout from '../../components/Admin/BoilerPlate/ContainerLayout'
import MainAreaAdmin from '../../components/Admin/BoilerPlate/MainAreaAdmin'
import SidebarLeftAdmin from '../../components/Admin/BoilerPlate/SidebarLeftAdmin'
import Header from '../../components/Admin/Header/Header'

const Dashboard = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const checkAdminToken = localStorage.getItem('adminToken')
        if (!checkAdminToken) {
            navigate("/admin/login")
        }
    }, [])
    return (
        <div>
            <Header />
            <ContainerLayout>
                <SidebarLeftAdmin />
                <MainAreaAdmin>
                    <div className=' w-3/4 mx-auto flex flex-col   bg-black'>

                    </div>
                </MainAreaAdmin>
            </ContainerLayout>


        </div>
    )
}

export default Dashboard




