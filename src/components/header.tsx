import { BsCart4 } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-6 pt-6 bg-white border-b border-gray-200 h-header">
      <h1 className="text-3xl font-black transition duration-500 text-twitch-purple hover:underline underline-offset-2 hover:animate-pulse">
        <Link href="/" passHref>
          <a>STUDYTME</a>
        </Link>
      </h1>

      <ul className="hidden sm:flex">
        <li className="ml-6 text-base font-medium text-gray-500 border-t border-gray-100 hover:text-gray-900">
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
        </li>
        <li className="ml-6 text-base font-medium text-gray-500 border-t border-gray-100 hover:text-gray-900">
          <Link href="/about" passHref>
            <a>About</a>
          </Link>
        </li>
        <li className="ml-6 text-base font-medium text-gray-500 border-t border-gray-100 hover:text-gray-900">
          <Link href="/sponsors" passHref>
            <a>Sponsors</a>
          </Link>
        </li>
      </ul>
      <NavigationMenu />

      <Link href="https://studytme-shop.fourthwall.com/cart" passHref>
        <button>
          <BsCart4 className="w-6 h-6 hover:cursor-pointer fill-twitch-purple hover:fill-twitch-purple-hover" />
        </button>
      </Link>
    </header>
  );
};

const NavigationMenu = () => {
  const [page, setPage] = useState("Menu");

  useEffect(() => {
    const current = window.location.pathname.slice(1);
    setPage(current.length > 0 ? current : "Home");
  }, []);

  return (
    <div className="visible sm:hidden">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 border border-gray-500 rounded-md hover:bg-opacity-30">
          <p className="capitalize">{page}</p>
          <HiChevronDown
            className="w-5 h-5 ml-2 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-32 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-2 py-2 ">
              <Menu.Item>
                <div className="px-2 py-1 text-base font-medium text-gray-500 border-t border-gray-100 hover:text-gray-900">
                  <Link href="/">Home</Link>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className="px-2 py-1 text-base font-medium text-gray-500 border-t border-gray-100 hover:text-gray-900">
                  <Link href="/about">About</Link>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className="px-2 py-1 text-base font-medium text-gray-500 border-t border-gray-100 hover:text-gray-900">
                  <Link href="/sponsors">Sponsors</Link>
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Header;
