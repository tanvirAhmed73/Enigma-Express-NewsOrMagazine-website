import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
           <div className="bg-gray-950">
                <h1 className="text-sky-400 text-center  font-extrabold pt-9 text-lg md:text-4xl">Enigma Express.News</h1>

                <div className="flex gap-16 md:ml-5 text-2xl text-white mx-auto justify-center my-7">
                    <FaFacebook />
                    <FaTwitter />
                    <FaYoutube />
                    <FaInstagramSquare />
                </div>

                <div className="navbar-center mx-auto justify-center lg:flex ">
                    <ul className="menu menu-horizontal px-1 text-white">
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
           </div>

           <div className="bg-black text-center py-5 text-gray-500">
                <h1>Copyright © 2024 BY TANVIR AHMED</h1>
           </div>
        
        </div>
    );
};

export default Footer;