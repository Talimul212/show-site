/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import Navber from "../Navbar/Navber";
import Footer from "../Footer/Footer";
import "./Details.css";

const Details = () => {
  const data = useLoaderData();
  return (
    <div>
      <Navber></Navber>
      <div
        key={data?.id}
        style={{
          backgroundImage: `url(${data?.image.original})`,
          marginBottom: "-110px",
        }}
      >
        <div className="detailsContainer">
          <img src={data?.image.original} alt="" className="img" />
          <div>
            <p className="movieName">{data.name}</p>
            <span className="movieLine">
              WEB-DL 480p, 720p & 1080p | GDRive
            </span>
            <div className="tag">
              <p>{data?.premiered}</p>
              <p>{data?.network?.country?.name}</p>
            </div>
            <div className="tag1">
              {data?.genres.map((genre, index) => (
                <>
                  <p key={index}>{genre}</p>
                </>
              ))}
              <p className="tag">language: {data?.language}</p>
            </div>
          <div className="tag3">
            <p className="summary">{data.summary}</p>
            <Link to={`/booking/${data.id}`}><button>Booked Now</button></Link>
          </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Details;


