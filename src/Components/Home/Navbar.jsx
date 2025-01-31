import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // State for Toggle Menu
  const [toggleMenu, setToggleMenu] = useState(false);

  // Close Toggle Menu on Resize
  useEffect(() => {
    window.onresize = () => {
      setToggleMenu(false);
    };

    return (window.onresize = () => {
      setToggleMenu(false);
    });
  }, []);

  return (
    <nav className="h-20 flex items-center justify-center bg-[#f3f3f3] shadow-md">
      {/* Inner div */}
      <div className="h-full max-w-screen-xl w-full px-5 flex items-center justify-between">
        {/* Title */}
        <h2 className="uppercase font-['Marcellus',_'serif'] text-3xl lg:text-4xl">
          Regalix
        </h2>
        {/* Menu */}
        <div
          style={toggleMenu ? { right: "0" } : { right: "-100%" }}
          className="h-full w-full p-5 fixed top-0 z-50 uppercase flex flex-col gap-5 bg-white transition-['all'] duration-500 md:h-fit md:w-fit md:p-0 md:static md:capitalize md:flex-row md:bg-transparent md:transition-none"
        >
          {/* Menu Heading with close button */}
          <div className="flex items-center justify-between mb-5 md:hidden">
            <h2 className="font-['Times_Roman',_'serif'] text-2xl">Menu</h2>
            <button
              onClick={() => setToggleMenu(false)}
              className="text-2xl text-[#888]"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Links */}
          <a
            href=""
            className="w-full text-gray-700 hover:text-black md:w-fit lg:text-lg"
          >
            Home
          </a>
          <a
            href=""
            className="w-full text-gray-700 hover:text-black md:w-fit lg:text-lg"
          >
            Blog
          </a>
          <a
            href=""
            className="w-full text-gray-700 hover:text-black md:w-fit lg:text-lg"
          >
            About
          </a>
          <a
            href=""
            className="w-full text-gray-700 hover:text-black md:w-fit lg:text-lg"
          >
            Contact
          </a>
          <a
            href=""
            className="w-full text-gray-700 hover:text-black md:w-fit lg:text-lg"
          >
            Account
          </a>
        </div>
        {/* Buttons & Links (i.e. WhishList, Cart, Menu) */}
        <div className="text-xl flex items-center gap-5 lg:text-2xl">
          <Link to="/wishlist">
            <i className="fa-regular fa-heart"></i>
          </Link>
          <Link to="/cart">
            <i className="fa-brands fa-opencart"></i>
          </Link>
          <button onClick={() => setToggleMenu(true)} className="md:hidden">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
