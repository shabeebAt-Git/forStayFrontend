import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BoilerPlate from '../../components/Owner/BoilerPlate/ContainerLayout'
import BoilerPlateLeft from '../../components/Owner/BoilerPlate/SidebarLeftOwner'
import BoilerPlateRight from '../../components/Owner/BoilerPlate/MainAreaOwner'
import Header from '../../components/Owner/Header/Header'
import ContainerLayout from '../../components/Owner/BoilerPlate/ContainerLayout'
import SidebarLeftOwner from '../../components/Owner/BoilerPlate/SidebarLeftOwner'
import MainAreaOwner from '../../components/Owner/BoilerPlate/MainAreaOwner'

const Dashboard = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const checkOwnerToken = localStorage.getItem('ownerToken')
    if (!checkOwnerToken) {
      navigate("/owner/login")
    }
  }, [])
  return (


    <div>
      <Header />

      <ContainerLayout>
        <SidebarLeftOwner />
        <MainAreaOwner>
          <div className='flex justify-center items-center h-screen' >
                      <p>:)</p>
          </div>
        </MainAreaOwner>
      </ContainerLayout>






    </div>
  )
}

export default Dashboard