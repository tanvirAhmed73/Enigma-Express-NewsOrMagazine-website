import moment from "moment";
import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      {/* cover Picture */}
        <div className="hero h-[400px]" style={{backgroundImage: 'url(https://i.ibb.co/XXrHb30/Adobe-Stock-r-DGz-O5t0-Iu.jpg)'}}>
            
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="text-white text-4xl md:text-7xl lg:text-8xl w-full font-bold">EnigmaExpress. News</h1> 
                        <p className="mt-4">Journalism Without Fear or Favor</p>

                        {/* current date and time  */}
                        <p className="bg-black md:w-3/6 mx-auto">{moment().format("dddd, MMMM Do YYYY, h:mm a")}</p>

                        {/*latest headling  */}
                        <div className="flex mt-6">
                            <button className=" p-1 rounded-s-box text-white bg-sky-500 ">
                            Latest
                            </button>
                            <Marquee pauseOnHover={true}>
                            T he European Union and Serbia
                             have repeatedly stated that they shared
                              a strategic goal: for Serbia to join the EU[1][2],
                               and this ever since Serbia was granted EU 
                               candidate status in March 2012…
                            </Marquee>
                        </div>

                        
                    </div>
                </div>
        </div>


      {/* navbar start */}
      <div className="navbar bg-black text-white relative ">
        <div className="navbar-start">

            {/* DROPDOWN MENU */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={'/entertainment'} className="hover:bg-slate-700">ENTERTAINMENT</Link>
              </li>
              <li>
                <Link className="hover:bg-slate-700" to={'/politics'}>POLITICS</Link>
              </li>
              <li>
                <Link className="hover:bg-slate-700" to={'/fashion'}>FASHION</Link>
              </li>
              <li>
                <Link className="hover:bg-slate-700" to={'/sport'}>SPORTS</Link>
              </li>
              <li>
                <Link className="hover:bg-slate-700" to={'/tech'}>TECH</Link>
              </li>
              <li>
                <Link className="hover:bg-slate-700" to={'/business'}>BUSINESS</Link>
              </li>
              <li>
                <Link className="hover:bg-slate-700" to={'/addNews'}>Add News</Link>
              </li>
            </ul>
          </div>

        {/* social icon */}
        <div className="flex gap-3 md:ml-5 text-xl">
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <FaInstagramSquare />
        </div>
        

          
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              <li>
                <Link to={'/entertainment'} className="hover:bg-slate-700">ENTERTAINMENT</Link>
              </li>
              <li>
                <Link className="hover:bg-slate-700" to={'/politics'}>POLITICS</Link>
              </li>
              <li>
                <Link className="hover:bg-slate-700" to={'/fashion'}>FASHION</Link>
              </li>
              <li>
                <Link className="hover:bg-slate-700" to={'/sport'}>SPORTS</Link>
              </li>
              <li>
                <Link className="hover:bg-slate-700" to={'/tech'}>TECH</Link>
              </li>
              <li>
                <Link className="hover:bg-slate-700" to={'/business'}>BUSINESS</Link>
              </li>
              <li>
                <Link className="hover:bg-slate-700" to={'/addNews'}>Add News</Link>
              </li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?
            <div>{user.email}</div>
            :
            <Link to={'/register'} className=" px-3 py-1 md:mr-5 rounded-lg hover:bg-slate-700">Login/Register</Link>
          }
        </div>
      </div>




    </div>
  );
};

export default Navbar;
