import React from 'react'
import { blockUserAdminApi, unBlockUserAdminApi } from '../../../helpers/apis/adminApis'
import { useState } from 'react'

const BlockUnblock = ({user}) => {
    const [active, setActive] = useState(user.adminApproval)

    const blockUser = async (userId) => {
        const response = await blockUserAdminApi(userId)
        if(response.message){
            setActive(!active)
        }

    }
    const unBlockUser = async (userId) => {
        const response = await unBlockUserAdminApi(userId)
        if (response.message) {
            setActive(!active)
        }
    }
  return (
          <tr className="border-b hover:bg-orange-100">
              <td className="p-3 px-5">{user.name}</td>
              <td className="p-3 px-5">{user.email}</td>
              <td>
              {active ? (
                      <button className='border py-1 px-3 rounded-lg' onClick={() => blockUser(user._id)}> Block </button>
                  ) : (
                      <button className='border py-1 px-3 rounded-lg' onClick={() => unBlockUser(user._id)}> Unblock </button>
                  )}
              </td>
          </tr>
  )
}

export default BlockUnblock