import { Link } from "react-router-dom";
import "./Navbar.css";

const Navber = () => {
  return (
    <div className="navbar">
      <img style={{width:"120px",marginBottom:"-40px",paddingLeft:"10px"}} src="https://static.tvmaze.com/images/tvm-header-logo.png" alt="" />
      <div className="justify">
        <Link to='/' className="barlink">Home</Link>
        <Link to='/' className="barlink">About</Link>
        <Link to='/' className="barlink">All Show</Link>
      </div>
    </div>
  );
};

export default Navber;
