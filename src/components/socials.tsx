import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";

const Socials = () => (
  <div className="flex items-center pt-6 pb-4 space-x-6">
    <a href="https://twitter.com/StudyTme" className="text-gray-800 hover:text-[#612DFF]">
      <AiOutlineTwitter className="w-6 h-6" />
    </a>
    <a href="https://www.instagram.com/itsstudytme/" className="text-gray-800 hover:text-[#612DFF]">
      <AiOutlineInstagram className="w-6 h-6" />
    </a>
    <a
      href="https://www.linkedin.com/in/mazzagiulia0/"
      className="text-gray-800 hover:text-[#612DFF]"
    >
      <FaLinkedinIn className="w-6 h-6" />
    </a>
    <a
      href="https://www.youtube.com/channel/UCuxc7Lc6Ar076_4MLLHIz6g"
      className="text-gray-800 hover:text-[#612DFF]"
    >
      <AiFillYoutube className="w-6 h-6" />
    </a>
  </div>
);

export default Socials;
