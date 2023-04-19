import { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { getAllBookingsOwnerApi } from '../../../helpers/apis/ownerApis';
import { useState } from 'react';

const Chart = () => {
    const datas = [{ name: 'January', bookingCount: 0, pv: 2400, amt: 2400 }, { name: 'February', bookingCount: 0, pv: 2400, amt: 2400 }, { name: 'March', bookingCount: 0, pv: 2400, amt: 2400 }, { name: 'April', bookingCount: 5, pv: 2400, amt: 2400 }, { name: 'May', bookingCount: 0, pv: 2400, amt: 2400 }, { name: 'June', bookingCount: 0, pv: 2400, amt: 2400 }, { name: 'July', bookingCount: 0, pv: 2400, amt: 2400 }, { name: 'August', bookingCount: 0, pv: 2400, amt: 2400 }, { name: 'September', bookingCount: 0, pv: 2400, amt: 2400 }, { name: 'October', bookingCount: 0, pv: 2400, amt: 2400 }, { name: 'November', bookingCount: 0, pv: 2400, amt: 2400 }, { name: 'December', bookingCount: 0, pv: 2400, amt: 2400 },];
    const [bookings, setBookings] = useState()

    useEffect(() => {
        const getAllOwners = async () => {
            const response = await getAllBookingsOwnerApi()
            setBookings(response)
        }

        getAllOwners()
    }, [])

    // if(bookings){
    //     bookings.forEach((data)=>{
    //         return(
    //             datas.push({name:"April",})
    //         )
    //     })
    // }

  return (
      <BarChart width={1200} height={300} data={datas}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
          {/* <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} /> */}
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="bookingCount" fill="#8884d8" barSize={30} />
      </BarChart>
  )
}

export default Chart