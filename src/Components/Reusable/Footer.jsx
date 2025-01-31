import React from "react";

function Footer() {
  // Current Year
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="py-10 px-5 flex flex-col gap-10 bg-white min-[550px]:flex-row min-[550px]:flex-wrap min-[1070px]:justify-evenly">
        {/* About REGALIX */}
        <div className="max-w-80 w-full flex flex-col gap-5">
          {/* Heading */}
          <h2 className="uppercase font-['Marcellus',_'serif'] text-4xl">
            Regalix
          </h2>
          {/* Some Description */}
          <p className="tracking-widest leading-6.5 text-gray-500">
            Experience the elegance of Regalix, where quality and convenience
            come together. Explore our range of premium products, enjoy secure
            shopping, and rely on exceptional customer service. Stay connected
            for the latest updates, exclusive offers, and a seamless shopping
            journey.
          </p>
          {/* Social Media Links */}
          <div className="text-2xl flex items-center gap-2.5">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-square-instagram"></i>
          </div>
        </div>
        {/* Quick Links */}
        <div className="w-fit flex flex-col gap-2.5">
          {/* Heading */}
          <h2 className="uppercase font-['Marcellus',_'serif'] text-xl">
            Quick Links
          </h2>
          {/* Links */}
          <ul className="uppercase flex flex-col gap-0.5">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Single Item</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Help & Info */}
        <div className="w-fit flex flex-col gap-2.5">
          {/* Heading */}
          <h2 className="uppercase font-['Marcellus',_'serif'] text-xl">
            Help & Info
          </h2>
          {/* Links */}
          <ul className="uppercase flex flex-col gap-0.5">
            <li>Track Your Order</li>
            <li>Returns + Exchanges</li>
            <li>Shipping + Delivery</li>
            <li>Find us easy</li>
            <li>Faqs</li>
          </ul>
        </div>
        {/* Contact Us */}
        <div className="w-fit flex flex-col gap-2.5">
          {/* Heading */}
          <h2 className="uppercase font-['Marcellus',_'serif'] text-xl">
            Contact Us
          </h2>
          {/* Email Link */}
          <ul className="flex flex-col gap-0.5">
            <li className="text-gray-500">
              Do you have any questions or suggestions?
            </li>
            <a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a>
          </ul>
          {/* Phone Link */}
          <ul className="flex flex-col gap-0.5">
            <li className="text-gray-500">
              Do you need support? Give us a call.
            </li>
            <a href="tel:+917827XXXXXX">7827XXXXXX</a>
          </ul>
        </div>
      </footer>
      {/* COPYRIGHT and Designer & Distributor name of this Website Template */}
      <p className="text-center py-5 leading-7.5 text-gray-500 bg-white border-t border-gray-300">
        © Copyright {currentYear} Regalix. All rights reserved.
        <br />
        Design by <span className="text-black">TemplatesJungle</span>
        <br />
        Distribution By <span className="text-black">ThemeWagon</span>
      </p>
    </>
  );
}

export default Footer;
