import moment from "moment";
import Marquee from "react-fast-marquee";

const Navbar = () => {
  return (
    <div>
      {/* cover Picture */}
        <div className="hero h-[400px]" style={{backgroundImage: 'url(https://i.ibb.co/XXrHb30/Adobe-Stock-r-DGz-O5t0-Iu.jpg)'}}>
            <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="  text-white text-4xl md:text-8xl w-full font-bold">EnigmaExpress. News</h1> 
                        <p className="mt-4">Journalism Without Fear or Favor</p>

                        {/* current date and time  */}
                        <p className="bg-black">{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>

                        {/*latest headling  */}
                        <div className="flex mt-6">
                            <button className="items-end p-1  rounded-s-box text-white bg-sky-500 ">
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
      <div className="navbar bg-black text-white relative rounded-b-xl">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>




    </div>
  );
};

export default Navbar;
