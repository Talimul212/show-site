/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Booking.css";
const Booking = () => {
  const data = useLoaderData();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  // const [tiny_title, setTiny_title] = useState(data?.tiny_title) ?? "";
  // const [price, setPrice] = useState(data?.price) ?? "";
  // const [file, setFile] = useState(data?.img ?? {});

  const onSubmit = async (e) => {
    e.preventDefault();
    const _data = {
      buyerName: name,
      buyerEmail: email,
      phoneNumber: number,
      seatNumber: data?.weight,
      movieName: data.name,
    };
    alert(
      `${_data?.buyerName} your Booking Successfully added.The movie or show name is ${_data?.movieName}`
    );
    console.log(_data);
  };
  return (
    <div style={{ backgroundImage: `url(${data?.image.original})` }}>
      <Link to="/">
        {" "}
        <button className="button1">Home</button>
      </Link>
      <div style={{ marginTop: "100px" }} className="bookingForm ">
        <div className=" flex">
          <div>
            <h1 className="menu">Booking Form</h1>
            <label> Movie Name : {data?.name}</label>
            <label>Price : {data?.averageRuntime} </label>
          </div>
          <div>
            <form onSubmit={onSubmit} className="form">
              <div className="formInput">
                <label> Your Name :</label>
                <input
                  type="text"
                  id="title"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label> Email :</label>
                <input
                  type="email"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>phone Number :</label>
                <input
                  type="number"
                  id="PhoneNumber"
                  required
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Seat Number :</label>
                <input type="number" id="seat"
                required 
                defaultValue={data?.weight} />
              </div>

              <button type="submit">Booking</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

const lolo = () => {
  const data = [
    {
      id: 31428,
      url: "https://www.tvmaze.com/shows/31428/all-night",
      name: "All Night",
      type: "Scripted",
      language: "English",
      genres: ["Comedy"],
      status: "Ended",
      runtime: null,
      averageRuntime: 23,
      premiered: "2018-05-11",
      ended: "2018-05-11",
      officialSite: "https://www.hulu.com/all-night",
      schedule: { time: "", days: [] },
      rating: { average: 8 },
      weight: 95,
      network: null,
      webChannel: {
        id: 2,
        name: "Hulu",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: "https://www.hulu.com/",
      },
      dvdCountry: null,
      externals: { tvrage: null, thetvdb: 346001, imdb: "tt7292950" },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/155/388118.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/155/388118.jpg",
      },
      summary:
        '<p>After their graduation, the class of 2018 gathers to celebrate their last night together at their local rec center for "Grad Night," an all-night party with dancing, karaoke, games—and a rule that no one can come in or out for twelve full hours. For most the night signals their last chance to accomplish some high school dream: Nerdy Cody wants to make his mark on the school, and popular Roni wants to finally lose her virginity to her boyfriend Oz. Valedictorian Melinda plans to sneakily sell alcohol to her classmates at the party to pay her tuition, and every-girl Deanna gets ready to finally admit her feelings for her best friend Fig, who only has eyes for Roni. As the night goes on, the kids\' quests overlap, intertwine, and -in some cases- implode. What would you do with your last night in high school?</p>',
      updated: 1651425957,
      _links: {
        self: { href: "https://api.tvmaze.com/shows/31428" },
        previousepisode: { href: "https://api.tvmaze.com/episodes/1461722" },
      },
    },
  ];
};
