import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20">
      <footer className="bg-gray-900 text-white px-20 py-20 flex justify-between">
        <div className="flex items-center">
          <p className="text-2xl">Sneakers</p>
        </div>
        <div className="flex items-center">
          <div className="mr-8">
            <a href="#">
              <FaFacebookF />
            </a>
          </div>
          <div className="mr-8">
            <a href="#">
              <FaTwitter />
            </a>
          </div>
          <div className="mr-8">
            <a href="#">
              <FaInstagram />
            </a>
          </div>
          <div>
            <a href="#">
              <FaPinterest />
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <p>&copy; 2023 Sneakers Inc. All rights reserved.</p>
          <p className="ml-8">Designed and built by Rudresh </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
