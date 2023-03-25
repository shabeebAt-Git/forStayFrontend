// import Navbar from "../../components/navbar/Navbar";
// import Header from "../../components/header/Header";
// import MailList from "../../components/mailList/MailList";
// import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { getRoomDataUserApi } from "../../../helpers/apis/userApis";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import BookingDetailForm from "../BookingDetailForm/BookingDetailForm";


const Room = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [receivedRoomDatas, setreceivedRoomDatas] = useState()
    const [rooms, setRooms] = useState([])




    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [dateNotPicked, setdateNotPicked] = useState(false)

    const [showBookingDetailes, setShowBookingDetailes] = useState(false)



    const onChangeDate = (dates) => {

        if (dateNotPicked) {
            setdateNotPicked(false)
        }

        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);


        console.log(startDate, endDate);
    };

    const addPhoto = () => {
        if (receivedRoomDatas) {
            receivedRoomDatas.images.forEach((img) => {
                photos.push(img)
            })
        }
    }



    let photos = [
        // {
        //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        // },
        // {
        //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        // },
        // {
        //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        // },
        // {
        //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        // },
        // {
        //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        // },
        // {
        //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        // },
    ];

    addPhoto()


    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber)
    };





    const { hotelId, roomId } = useParams()

    const roomData = async () => {
        //  console.log(hotelId,roomId);

        const response = await getRoomDataUserApi({ hotelId, roomId })
        console.log(response);
        setreceivedRoomDatas(response.room)
        // console.log(response.rooms);
        // setRooms(response.rooms)



    }

    useEffect(() => {
        roomData()


    }, [])

    const bookingDetailsRef = useRef(null)

    const toScroll = () => {
        bookingDetailsRef.current.scrollIntoView()
    }


    const toBookRoom = () => {
        if (!endDate) {
            setdateNotPicked(true)

            // setTimeout(()=>{
            //     setdateNotPicked(false)

            // },3000)
        } else {

            setShowBookingDetailes(true)
            toScroll()  
        }

    }





    // if(receivedHotelDatas){
    //     // receivedHotelDatas.map((data))
    //     const data = receivedHotelDatas
    //     console.log(data.images);

    //     for(let a of data.images ){
    //         console.log("d");
    //         photos.push(`{ src : ${a}}`)
    //     }

    //     console.log(photos);
    // }




    return (
        <div>
            <div className="hotelContainer">
                {open && (
                    <div className="slider">
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className="close"
                            onClick={() => setOpen(false)}
                        />
                        <FontAwesomeIcon
                            icon={faCircleArrowLeft}
                            className="arrow"
                            onClick={() => handleMove("l")}
                        />
                        <div className="sliderWrapper">
                            <img src={photos[slideNumber]} alt="" className="sliderImg" />
                        </div>
                        <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            className="arrow"
                            onClick={() => handleMove("r")}
                        />
                    </div>
                )}
                {receivedRoomDatas ? <div className="hotelWrapper" key={receivedRoomDatas._id}>
                    {/* <button className="bookNow">Reserve or Book Now!</button> */}
                    <h1 className="hotelTitle">{receivedRoomDatas.name}</h1>
                    <div className="hotelAddress">
                        {/* <FontAwesomeIcon icon={faLocationDot} /> */}
                        {/* <span>{receivedRoomDatas.district} {receivedRoomDatas.city} </span> */}
                    </div>
                    <span className="hotelDistance">
                        {/* Excellent location – 500m from center */}
                    </span>
                    <span className="hotelPriceHighlight">
                        {/* Book a stay over $114 at this property and get a free airport taxi */}
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper" key={i}>
                                <img
                                    onClick={() => handleOpen(i)}
                                    src={photo}
                                    alt=""
                                    className="hotelImg"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            {/* <h1 className="hotelTitle">Stay in the heart of City</h1> */}
                            <h1 className="hotelTitle">.</h1>
                            <p className="hotelDesc">
                                {receivedRoomDatas.description}
                            </p>
                            {/* <p className="hotelDesc">
                                        Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                                        Street Apartments has accommodations with air conditioning and
                                        free WiFi. The units come with hardwood floors and feature a
                                        fully equipped kitchenette with a microwave, a flat-screen TV,
                                        and a private bathroom with shower and a hairdryer. A fridge is
                                        also offered, as well as an electric tea pot and a coffee
                                        machine. Popular points of interest near the apartment include
                                        Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                                        airport is John Paul II International Kraków–Balice, 16.1 km
                                        from Tower Street Apartments, and the property offers a paid
                                        airport shuttle service.
                                    </p> */}
                        </div>
                        <div className="hotelDetailsPrice mb-5">
                            {/* <h1>Perfect for a 9-night stay!</h1> */}
                            {dateNotPicked ? <span className="bg-red-500 px-2 rounded-sm "> Please pick a Date </span> : " "}



                            <DatePicker
                                selected={startDate}
                                onChange={onChangeDate}
                                startDate={startDate}
                                endDate={endDate}
                                minDate={new Date()}
                                // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
                                selectsRange
                                inline
                            />

                            <h2>
                                <b>{"$" + receivedRoomDatas.price}/ Night</b>
                            </h2>
                            {showBookingDetailes ? "" : <button onClick={toBookRoom} >Book Now!</button>}
                            
                        </div>
                    </div>
                </div> : ""}




                {/* <MailList /> */}
                {/* <Footer /> */}



            </div>
            <div ref={bookingDetailsRef}>

                {showBookingDetailes && <BookingDetailForm startDate={startDate} endDate={endDate} />}
            </div>





        </div>
    );
}

export default Room