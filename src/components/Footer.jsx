import React from "react";
import assets from "../assets/assets/assets";

const Footer = ({ theme }) => {
  return (
    <div
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg-px-24
  xl:px-40"
    >
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <div className="flex flex-col gap-6 text-gray-700 dark:text-white">
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-44"
            alt=""
          />
          <p className="max-w-md">
            From strategy to execution, we craft digital solution that move your
            business forward.
          </p>

          <ul className="flex gap-8 text-sm">
            <li>
              <a className="hover:text-primary" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#OurWork">
                Our Work
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#Connect">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          <h3 className="font-semibold">Subscribe to our Newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            The latest news, articles, and updates delivered directly to your
            inbox.
          </p>
          <div className="flex gap-3 text-sm">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full p-3 text-sm
          outline-none rounded dark:text-gray-200 border border-gray-300 dark:border-gray-500"
            />
            <button className="mt-4 bg-primary text-white px-6 py-2 rounded hover:bg-gray-800">
              {" "}
              Subscribe{" "}
            </button>
          </div>
        </div>
      </div>
      <hr className="border border-gray-300 dark:border-gray-600 my-6 " />

      {/* Bottom Footer */}
      <div className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
        <p>Copyright 2025 &copy; All rights reserved.</p>
        <div className="flex items-center justify-between mt-4">
          <img src={assets.facebook_icon} alt="Facebook" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
