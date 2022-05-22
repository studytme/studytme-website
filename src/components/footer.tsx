import React from "react";
import Socials from "./socials";

const Footer = () => (
  <footer className="flex flex-col items-center w-full mt-auto text-center text-white justify-evenly bg-slate-100">
    <Socials />
    <div className="pb-4 text-center text-gray-700 bg-slate-100">
      <p>For business inquiries contact:</p>
      <a className="text-sm text-indigo-500 hover:underline" href="mailto:info@studytme.com">
        info@studytme.com
      </a>
    </div>
  </footer>
);

export default Footer;
