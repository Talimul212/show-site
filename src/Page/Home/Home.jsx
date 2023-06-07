/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Navber from "../../Components/Navbar/Navber";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  const [data, setData] = useState([])||"";
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  if (!data) {
    return <p>loading...</p>;
  }
  console.log(data[0]);
  return (
    <div>
        <Navber></Navber>
      <div className="grid">
        {data.map((item) => (
          <div key={item?.score} className="container">
            <div>
              <img src={item?.show.image.original} alt="" />
              
              <p className="rating">{item?.show?.rating?.average}</p>
              <div className="flex1">

                <p>
                Movie: 
                <Link className="link" to={`/${item.show.id}`}>{item.show.name}</Link>
                </p>
                <p className="data">{item.show.premiered}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;

