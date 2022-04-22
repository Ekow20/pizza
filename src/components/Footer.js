import React from "react";
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div
      className="flex bg-black items-center 
    lg:px-40 justify-between px-7 py-4 flex-wrap"
    >
      <h2 className="text-2xl font-bold mr-7">Pizza</h2>

      <div className="flex">
        <Icon Fa={FaTwitter} />
        <Icon Fa={FaFacebook} />
        <Icon Fa={FaYoutube} />
        <Icon Fa={FaInstagram} />
      </div>
    </div>
  );
};

const Icon = ({ Fa }) => (
  <a href="#" className="text-2xl mr-4 sm:mr-7 hover:text-red-500">
    <Fa />
  </a>
);

export default Footer;
