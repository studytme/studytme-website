import { HiChevronDown } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import React, { Fragment, forwardRef, useEffect, useMemo, useState } from "react";
import SolidLinkButton from "./Buttons/SolidLinkButton";
import headerLocaleContent, { IHeaderLocaleContent, RouteName } from "../../locales/header";

const Header = () => {
  const { locale, defaultLocale } = useRouter();

  const localeContent = useMemo(
    () => headerLocaleContent[locale || defaultLocale || "en-US"],
    [locale]
  );

  return (
    <div className="flex flex-col items-center w-full bg-white border-b border-gray-200">
      <header className="sticky top-0 z-50 flex items-center justify-between w-full px-6 py-6 pt-6 h-header lg:w-8/12">
        <h2 className="text-3xl font-black transition duration-500 text-twitch-purple hover:animate-pulse ">
          <Link href="/" passHref>
            <a>STUDYTME</a>
          </Link>
        </h2>

        <ul className="hidden sm:flex">
          <HeaderLinkItem path="/" label={localeContent.home} />
          <HeaderLinkItem path="/resources" label={localeContent.resources} />
          <HeaderLinkItem path="/sponsors" label={localeContent.sponsors} />
          <HeaderLinkItem path="/faq" label={localeContent.faq} />
        </ul>
        <NavigationMenu localeContent={localeContent} />

        <div className="invisible">
          <SolidLinkButton text={localeContent.merch} href={"https://merch.studytme.com"} />
        </div>
      </header>
    </div>
  );
};

const HeaderLinkItem = (props: { path: string; label: string }) => {
  const router = useRouter();
  return (
    <li
      className={`transition-colors ml-6 text-base font-medium ${
        router.pathname === props.path ? "text-gray-900" : "text-gray-500"
      } border-gray-100 hover:text-gray-900`}
    >
      <Link href={props.path} passHref>
        <a>{props.label}</a>
      </Link>
    </li>
  );
};

const NavigationMenu = (props: { localeContent: IHeaderLocaleContent }) => {
  const [page, setPage] = useState("Menu");
  const router = useRouter();

  useEffect(() => {
    const linkElements = window.location.pathname.slice(1).split("/");

    // By default, the text displayed inside the selector is the first element of the pathname.
    let current = linkElements[0];

    // If the locale is present in the path, then the page is the second element of the pathname.
    if (router.locales?.includes(linkElements[0])) {
      current = linkElements[1];
    }

    // Check if path is the home page or not
    if (current.length > 0) {
      if (current in RouteName) {
        current = props.localeContent.routes[RouteName[current]];
      }
    } else {
      current = props.localeContent.routes.home;
    }

    setPage(current);
  }, [router.pathname]);

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
                <LinkWrapper href="/">
                  <div className="transition-colors px-2 py-1 text-base font-medium text-gray-500 hover:text-gray-900">
                    {props.localeContent.home}
                  </div>
                </LinkWrapper>
              </Menu.Item>
              <Menu.Item>
                <LinkWrapper href="/resources">
                  <div className="transition-colors px-2 py-1 text-base font-medium text-gray-500 border-t border-gray-100 hover:text-gray-900">
                    {props.localeContent.resources}
                  </div>
                </LinkWrapper>
              </Menu.Item>
              <Menu.Item>
                <LinkWrapper href="/sponsors">
                  <div className="transition-colors px-2 py-1 text-base font-medium text-gray-500 border-t border-gray-100 hover:text-gray-900">
                    {props.localeContent.sponsors}
                  </div>
                </LinkWrapper>
              </Menu.Item>
              <Menu.Item>
                <LinkWrapper href="/faq">
                  <div className="transition-colors px-2 py-1 text-base font-medium text-gray-500 border-t border-gray-100 hover:text-gray-900">
                    {props.localeContent.faq}
                  </div>
                </LinkWrapper>
              </Menu.Item>
              <Menu.Item>
                <LinkWrapper href="https://merch.studytme.com">
                  <div className="transition-colors px-4 py-2 font-bold text-white border rounded bg-twitch-purple active:bg-twitch-purple hover:bg-twitch-purple-hover">
                    {props.localeContent.merch}
                  </div>
                </LinkWrapper>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

const LinkWrapper = forwardRef((props: React.PropsWithChildren<LinkProps>, ref: any) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

export default Header;
