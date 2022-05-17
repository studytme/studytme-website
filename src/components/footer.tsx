import React from "react";
import Socials from "./socials";

const Footer = () => (
  <footer className="flex flex-col items-center justify-evenly mt-auto text-center text-white bg-[#f1f1f1] w-full">
    <Socials />
    <div className="pb-4 text-center text-gray-700 bg-[rgba(0, 0, 0, 0.2)]">
      <p>For business inquiries contact:</p>
      <a className="text-sm text-indigo-500 hover:underline" href="mailto:info@studytme.com">
        info@studytme.com
      </a>
    </div>
  </footer>
);

export default Footer;
