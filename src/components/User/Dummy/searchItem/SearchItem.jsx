import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ hotelData }) => {
  return (
    <div className="searchItem">
      {/* {hotel.imaged[0]} */}
      <img src={hotelData.images[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{hotelData.name}</h1>
        <span className=" siSubtitle">
          {hotelData.district}, {hotelData.city}
        </span>

        {/* <span className="siTaxiOp">Free wifi</span> */}

        {/* <span className="siDistance ">{hotelData.description}</span>   */}
        {/*<span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span> */}
      </div>
      <div className="siDetails">
        <div className="siRating">
          {/* <span>Excellent</span>
          <button>8.9</button> */}
        </div>
        <div className="siDetailTexts">
          {/* <span className="siPrice">$112</span> */}
          {/* <span className="siTaxOp">Includes taxes and fees</span> */}
          <Link to={`/hotel/${hotelData._id}`}>
            <button className="siCheckButton"> See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
