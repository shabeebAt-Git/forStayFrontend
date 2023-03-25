import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { format } from "date-fns";  
import Header from '../../../components/User/Header/Header';
import SearchItem from '../../../components/User/Dummy/searchItem/SearchItem';


import './List.css'
import { getHotelsUserApi } from '../../../helpers/apis/userApis';





const HotelList = () => {

    const [allHotels,setAllHotels] = useState([])

    const getHotelData = async ()=>{
        const getHotels = await getHotelsUserApi()
        setAllHotels(getHotels)
        // console.log(getHotels);
    }

    useEffect(()=>{
        getHotelData()
    },[])

    // const location = useLocation()

    // console.log(location);
    // const [destination, setDestination] = useState(location.state.destination);
    // const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    // const [options, setOptions] = useState(location.state.options);

    return (
        <div>
            <Header/>

            <div className='listContainer'>
                <div className='listWrapper container'>
                   
                    <div className='listResult'>
                        {allHotels.length>0 ? allHotels.map((hotel) => <SearchItem key={hotel._id} hotelData={hotel} />) : "no Hotels"}
                        {/* <SearchItem hotelData={hotel} /> */}
                        {/* <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem /> */}
                    </div>

                    <div className='listSearch'>
                        <h1 className='lsTitle'>Search</h1>
                        <div className='lsItem'>
                            <label htmlFor="">Destination</label>
                            <input type="text" />
                        </div>
                        {/* <div className='lsItem'>
                            <label htmlFor="">Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(
                                date[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && (
                                <DateRange
                                    onChange={(item) => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            )}
                        </div> */}
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Min price <small>per night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                    // placeholder={options.adult}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Children</span>
                                    <input
                                        type="number"
                                        min={0}
                                        className="lsOptionInput"
                                    // placeholder={options.children}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Room</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                    // placeholder={options.room}
                                    />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default HotelList

