import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <h3 className="font-bold">Find Us On</h3>
      <div className="join join-vertical w-full">
        <button className="btn join-item bg-gray-100/50 border-gray-300 shadow-none justify-start h-14">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item bg-gray-100/50 border-gray-300 shadow-none justify-start h-14">
          <FaTwitter></FaTwitter> Twitter
        </button>
        <button className="btn join-item bg-gray-100/50 border-gray-300 shadow-none justify-start h-14">
          <FaInstagram></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
