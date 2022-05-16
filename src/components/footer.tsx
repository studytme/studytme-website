import React from "react";
import Socials from "./socials";

const Footer = () => (
  <div className="footer">
    <footer className="flex flex-col items-center mt-auto text-center text-white bg-[#f1f1f1] sticky top-[100vh]">
      <Socials />
      <div className="p-4 text-center text-gray-700 bg-[rgba(0, 0, 0, 0.2)]">
        For business inquiries contact:
        <a className="text-indigo-5 00" href="mailto:info@studytme.com">
          info@studytme.com
        </a>
      </div>
    </footer>
  </div>
);

export default Footer;
