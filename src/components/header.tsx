import Link from "next/link";
import React from "react";

const Header = () => (
  <div className="items-center mx-8 lg:mx-24">
    <header className="pt-6 bg-white border-b border-gray-100 md:py-6">
      <div className="md:justify-between md:items-center md:flex">
        <h1 className="mb-4 text-3xl font-black text-[#612DFF] md:mb-0">
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

        <div className="justify-center">
          <button className="items-center px-4 py-2 mt-5 font-semibold text-[#612DFF] bg-transparent  rounded hover:text-[#b8a1ff] ">
            <div className="flex items-center justify-center">
              <span>
                <Link href="https://studytme-shop.fourthwall.com/cart" passHref>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-cart4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </Link>
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
