//rrd
import { Link } from "react-router-dom";

//react icons
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="mt-20 mb-10">
      <div className="custom-container">
        <div className="p-10 bg-[#333D4B] flex flex-col  gap-10 text-center lg:flex-row lg:text-start lg:justify-between">
          <div className="footer-icon  ">
            <h1 className="text-white text-4xl hover:opacity-50 transition-opacity duration-200">
              coffeeroasters
            </h1>
          </div>
          <div className=" nav-menu flex flex-col md:flex-row lg:flex-row md:justify-center gap-5 text-slate-300 font-semibold items-center">
            <Link
              to="/"
              className="hover:text-[#7a7a7a] transition-all duration-200"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="hover:text-[#7a7a7a] transition-all duration-200"
            >
              ABOUT US
            </Link>
            <Link
              to="/plan"
              className="hover:text-[#7a7a7a] transition-all duration-200"
            >
              CREATE YOUR PLAN
            </Link>
          </div>
          <div className="social flex justify-center items-center gap-5 text-white text-4xl">
            <FaFacebookF className="hover:text-[#FDD6BA] transition-colors duration-200" />
            <FaTwitter className="hover:text-[#FDD6BA] transition-colors duration-200" />
            <RiInstagramFill className="hover:text-[#FDD6BA] transition-colors duration-200" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
