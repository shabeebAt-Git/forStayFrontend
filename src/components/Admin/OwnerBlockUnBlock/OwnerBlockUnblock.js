import React from 'react'
import { useState } from 'react'
import { blockOwnerAdminApi, unBlockOwnerAdminApi } from '../../../helpers/apis/adminApis'

const OwnerBlockUnblock = ({owner}) => {
    const [active, setActive] = useState(owner.verified)

    const blockOwner = async (ownerId) => {
        const response = await blockOwnerAdminApi(ownerId)
        if (response.message) {
            setActive(!active)
        }

    }
    const unBlockOwner = async (ownerId) => {
        const response = await unBlockOwnerAdminApi(ownerId)
        if (response.message) {
            setActive(!active)
        }
    }
        return (
            <tr className="border-b hover:bg-orange-100">
                <td className="p-3 px-5">{owner.name}</td>
                <td className="p-3 px-5">{owner.email}</td>
                <td>
                    {active ? (
                        <button className='border py-1 px-3 rounded-lg' onClick={() => blockOwner(owner._id)}> Block </button>
                    ) : (
                        <button className='border py-1 px-3 rounded-lg' onClick={() => unBlockOwner(owner._id)}> Unblock </button>
                    )}
                </td>
            </tr>
        )
}

export default OwnerBlockUnblock