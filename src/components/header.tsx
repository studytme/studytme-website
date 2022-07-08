import { HiChevronDown } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
<<<<<<< Updated upstream
import Link from "next/link";
import React, { Fragment, forwardRef, useEffect, useState } from "react";

// Style of active link
const ACTIVE_CLASS = "text-gray-900";

const Header = () => {
  const [page, setPage] = useState("Home");
  const router = useRouter();

  useEffect(() => {
    const current = window.location.pathname.slice(1);
    setPage(current.length > 0 ? current.replace("/", "") : "Home");
  }, [router.pathname]);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-6 pt-6 bg-white border-b border-gray-200 h-header">
      <h2
        className={`text-3xl font-black transition duration-500 text-twitch-purple hover:animate-pulse`}
      >
        <Link href="/" passHref>
          <a>STUDYTME</a>
        </Link>
      </h2>

      <ul className="hidden sm:flex">
        <li
          className={`${
            page === "Home" && ACTIVE_CLASS
          } ml-6 text-base font-medium text-gray-500 border-gray-100 hover:text-gray-900`}
        >
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
        </li>
        <li
          className={`${
            page === "faq" && ACTIVE_CLASS
          } ml-6 text-base font-medium text-gray-500 border-gray-100 hover:text-gray-900`}
        >
          <Link href="/faq" passHref>
            <a>FAQ</a>
          </Link>
        </li>
        <li
          className={`${
            page === "sponsors" && ACTIVE_CLASS
          } ml-6 text-base font-medium text-gray-500 border-gray-100 hover:text-gray-900`}
        >
          <Link href="/sponsors" passHref>
            <a>Sponsors</a>
          </Link>
        </li>
      </ul>
      <NavigationMenu currentPage={page} />
=======
import Link, { LinkProps } from "next/link";
import React, { Fragment, forwardRef, useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center w-full bg-white border-b border-gray-200">
      <header className="sticky top-0 z-50 flex items-center justify-between w-full px-6 py-6 pt-6 h-header lg:w-8/12">
        <h2 className="text-3xl font-black transition duration-500 text-twitch-purple hover:animate-pulse ">
          <Link href="/" passHref>
            <a>STUDYTME</a>
          </Link>
        </h2>

        <ul className="hidden sm:flex">
          <li
            className={`ml-6 text-base font-medium ${
              router.pathname === "/" ? "text-gray-900" : "text-gray-500"
            } border-gray-100 hover:text-gray-900`}
          >
            <Link href="/" passHref>
              <a>Home</a>
            </Link>
          </li>
          <li
            className={`ml-6 text-base font-medium ${
              router.pathname === "/faq" ? "text-gray-900" : "text-gray-500"
            } border-gray-100 hover:text-gray-900`}
          >
            <Link href="/faq" passHref>
              <a>FAQ</a>
            </Link>
          </li>
          <li
            className={`ml-6 text-base font-medium ${
              router.pathname === "/sponsors" ? "text-gray-900" : "text-gray-500"
            } border-gray-100 hover:text-gray-900`}
          >
            <Link href="/sponsors" passHref>
              <a>Sponsors</a>
            </Link>
          </li>
        </ul>
        <NavigationMenu />
>>>>>>> Stashed changes

        <button className="px-4 py-2 font-bold text-white border rounded bg-twitch-purple hover:fill-twitch-purple-hover">
          <Link href="https://merch.studytme.com" passHref>
            <h1 className="hover:cursor-pointer ">Merch</h1>
          </Link>
        </button>
      </header>
    </div>
  );
};

<<<<<<< Updated upstream
const NavigationMenu = (props: { currentPage: string }) => {
=======
const NavigationMenu = () => {
  const [page, setPage] = useState("Menu");
  const router = useRouter();

  useEffect(() => {
    const current = window.location.pathname.slice(1);
    setPage(current.length > 0 ? current.replaceAll("/", "") : "Home");
  }, [router.pathname]);

>>>>>>> Stashed changes
  return (
    <div className="visible sm:hidden ">
      <Menu as="div" className="relative inline-block text-left">
<<<<<<< Updated upstream
        {({ open }) => (
          <>
            <Menu.Button className="hover:bg-gray-100 inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 border border-gray-500 rounded-md hover:bg-opacity-30">
              <p className="capitalize">{props.currentPage}</p>
              <HiChevronDown
                className="w-5 h-5 ml-2 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-32 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-2 py-2">
                  <Menu.Item>
                    <CustomLink
                      onClick={() => (open = false)}
                      active={props.currentPage === "Home"}
                      href="/"
                    >
                      Home
                    </CustomLink>
                  </Menu.Item>
                  <Menu.Item>
                    <CustomLink
                      onClick={() => (open = false)}
                      active={props.currentPage === "faq"}
                      border
                      href="/faq"
                    >
                      FAQ
                    </CustomLink>
                  </Menu.Item>
                  <Menu.Item>
                    <CustomLink
                      onClick={() => (open = false)}
                      active={props.currentPage === "sponsors"}
                      border
                      href="/sponsors"
                    >
                      Sponsors
                    </CustomLink>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
=======
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
                <LinkWrapper href="/">
                  <div className="px-2 py-1 text-base font-medium text-gray-500 hover:text-gray-900">
                    Home
                  </div>
                </LinkWrapper>
              </Menu.Item>
              <Menu.Item>
                <LinkWrapper href="/faq">
                  <div className="px-2 py-1 text-base font-medium text-gray-500 border-t border-gray-100 hover:text-gray-900">
                    FAQ
                  </div>
                </LinkWrapper>
              </Menu.Item>
              <Menu.Item>
                <LinkWrapper href="/sponsors">
                  <div className="px-2 py-1 text-base font-medium text-gray-500 border-t border-gray-100 hover:text-gray-900">
                    Sponsors
                  </div>
                </LinkWrapper>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
>>>>>>> Stashed changes
      </Menu>
    </div>
  );
};

<<<<<<< Updated upstream
interface CustomLinkProps {
  active: boolean;
  href: string;
  border?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const CustomLink = forwardRef((props: CustomLinkProps, ref: React.LegacyRef<HTMLAnchorElement>) => {
  let { href, children, active, border, onClick } = props;
  return (
    <div
      className={`${active && ACTIVE_CLASS}
        ${border && "border-t border-gray-100"}
        px-2 py-1 text-base font-medium text-gray-500 hover:text-gray-900`}
    >
      <Link href={href} passHref>
        <a onClick={onClick} ref={ref}>
          {children}
        </a>
      </Link>
    </div>
=======
const LinkWrapper = forwardRef((props: React.PropsWithChildren<LinkProps>, ref: any) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
>>>>>>> Stashed changes
  );
});

export default Header;
