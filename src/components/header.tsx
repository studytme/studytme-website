import { BsCart4 } from "react-icons/bs";
import Link from "next/link";
import React from "react";

const Header = () => (
  <header className="flex items-center w-full pt-6 mx-8 bg-white border-b border-gray-100 lg:mx-24 md:py-6">
    <h1 className="text-3xl text-[#612DFF] font-black">
      <Link href="/">STUDYTME</Link>
    </h1>

    <ul className="md:items-center md:flex">
      <li className="text-base font-medium text-gray-500 border-t border-gray-100 md:border-0 md:ml-6 hover:text-gray-900">
        <Link href="/about">About</Link>
      </li>

      <li className="text-base font-medium text-gray-500 border-t border-gray-100 md:border-0 md:ml-6 hover:text-gray-900">
        <Link href="/sponsors">Sponsors</Link>
      </li>
    </ul>

    <Link href="https://studytme-shop.fourthwall.com/cart" passHref>
      <BsCart4 className="w-6 h-6 fill-[#612DFF] hover:fill-[#b8a1ff]" />
    </Link>
  </header>
);

export default Header;
