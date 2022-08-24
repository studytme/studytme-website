import { FaHeart } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import Socials from "./socials";
import footerLocaleContent from "../../locales/footer";

const Footer = () => {
  const { locale, defaultLocale } = useRouter();

  const localeContent = useMemo(
    () => footerLocaleContent[locale || defaultLocale || "en-US"],
    [locale]
  );
  return (
    <footer className="flex flex-col items-center w-full mt-auto text-center text-slate-600 justify-evenly bg-slate-100">
      <Socials />
      <div className="mb-2 text-center text-gray-700 bg-slate-100">
        <p>
          {localeContent.business_contact}
          <a
            className="ml-2 text-sm text-indigo-500 hover:underline"
            href="mailto:info@studytme.com"
          >
            info@studytme.com
          </a>
        </p>
      </div>
      <p className="mb-4 text-md text-slate-400">
        Made with
        <span className="inline-flex items-center">
          &nbsp;
          <FiCoffee />
          &nbsp;
        </span>
        and
        <span className="inline-flex items-center text-red-600">
          &nbsp;
          <FaHeart />
          &nbsp;
        </span>
        by&nbsp;
        <a
          href="https://github.com/giuliamazza"
          target="_blank"
          className="hover:underline"
          rel="noreferrer"
        >
          @giuliamazza
        </a>
        ,&nbsp;
        <a
          href="https://github.com/n3oAlex"
          target="_blank"
          className="hover:underline"
          rel="noreferrer"
        >
          @n3oAlex
        </a>
        ,&nbsp;
        <a
          href="https://github.com/miki-tebe"
          target="_blank"
          className="hover:underline"
          rel="noreferrer"
        >
          @miki-tebe
        </a>
        ,&nbsp;
        <a
          href="https://github.com/Palma99"
          target="_blank"
          className="hover:underline"
          rel="noreferrer"
        >
          @Palma99
        </a>
      </p>
    </footer>
  );
};
export default Footer;
