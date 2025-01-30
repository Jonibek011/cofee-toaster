import { Link } from "react-router-dom";

//react-icons
import { TiThMenu } from "react-icons/ti";
import { FaXmark } from "react-icons/fa6";
//react
import { useState } from "react";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const showMenu = () => {
    setToggleMenu(true);
  };

  const hideMenu = () => {
    setToggleMenu(false);
  };
  return (
    <header className="header w-full h-[8vh] md:h-[12vh] fixed top-0 left-0 z-50 bg-white flex items-center">
      <div className="custom-container  mx-auto  flex justify-between items-center">
        <img
          src="./logo.svg"
          className="relative z-20 w-40 md:w-56"
          alt="logo"
        />
        <div className="nav-menu hidden md:flex gap-6 font-bold text-[#83888f] ">
          <Link to="/" className="hover:text-[#333D4B]">
            HOME
          </Link>
          <Link to="/about" className="hover:text-[#333D4B]">
            ABOUT US
          </Link>
          <Link to="/plan" className="hover:text-[#333D4B]">
            CREATE YOUR PLAN
          </Link>
        </div>
        <div className="inline-flex md:hidden justify-center items-center cursor-pointer w-8 h-8 ">
          {!toggleMenu ? (
            <TiThMenu
              onClick={showMenu}
              className="w-8 h-8 menu relative z-20"
            />
          ) : (
            <FaXmark
              onClick={hideMenu}
              className="w-7 h-7 xmark relative z-20"
            />
          )}
        </div>
        <div
          id="modal"
          className={`menu md:hidden  transition-all duration-300 fixed w-full h-[92vh]  left-0 flex flex-col items-center gap-10 pt-[20vh]  ${
            toggleMenu ? "top-[8vh]" : "top-[-100%]"
          }`}
        >
          <h3 className="text-3xl">
            <Link to="/">Home</Link>
          </h3>
          <h3 className="text-3xl">
            <Link to="/about">About Us</Link>
          </h3>
          <h3 className="text-3xl">
            <Link to="/plan">Create your plan</Link>
          </h3>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
