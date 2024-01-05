import { Link } from "react-router-dom";

const DnavBar = () => {
    return (
        <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu gap-3 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        
                        <li>
                            <Link to={'addNews'}>Add News</Link>
                        </li>
                        <li>
                            <Link to={'allNews'}>Today All News</Link>
                        </li>
                        <li>
                            <Link to={'allUser'}>Make Admin</Link>
                        </li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Admin Dashboard</a>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu gap-9 menu-horizontal px-1">
                    <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        
                        <li>
                            <Link to={'addNews'}>Add News</Link>
                        </li>
                        <li>
                            <Link to={'allNews'}>Today All News</Link>
                        </li>
                        <li>
                            <Link to={'allUser'}>Make Admin</Link>
                        </li>
                    </ul>
                </div>
    </div>
    );
};

export default DnavBar;