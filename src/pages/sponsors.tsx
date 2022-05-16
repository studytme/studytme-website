import Footer from "../components/footer";
import Gtransp from "../images/gtransparent.png";
import Header from "../components/header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Socials from "../components/socials";

const Sponsors = () => (
  <div className="">
    <Header />
    <div className="grid grid-cols-2 mx-10 my-24 lg:mx-60">
      <div className="col">
        <h1 className="text-4xl font-bold lg:text-5xl lg:mb-2 md:text-4xl">StudyTme</h1>
        <h2 className="font-serif text-2xl italic lg:text-3xl ">aka Giulia Mazza</h2>
        <h3 className="text-2xl font-bold lg:">About</h3>
        <p className="lg:text-2xl">
          Content creator and community manager addicted to productivity
        </p>

        <Socials />
        <button className="px-5 py-2 mt-5 font-semibold text-[#612DFF] bg-transparent border border-[#612DFF] rounded hover:bg-[#612DFF] hover:text-white hover:border-transparent">
          <div className="flex items-center justify-center">
            <span>
              <Link href="mailto:info@studytme.com">Contact Me</Link>
            </span>
          </div>
        </button>
      </div>
      <div>
        <Image
          layout="responsive"
          width="1000"
          height="1000"
          objectFit="cover"
          className="border-none shadow-lg align-10 middle rounded-3xl"
          src={Gtransp}
          alt="StudyTme Giulia Mazza photo"
        />
      </div>
    </div>

    <div>
      <div className="mx-10 my-24 lg:mx-60">
        <h3 className="text-2xl font-bold lg:">Audience</h3>
        <a
          href=""
          className="flex flex-col justify-between p-8 transition-shadow bg-white rounded-sm shadow-xl group hover:shadow-lg"
        >
          <div>
            <h5 className="text-5xl font-bold text-indigo-600">100+</h5>
            <div className="pt-2 mt-4 border-t-2 border-indigo-100">
              <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
                New employees
              </p>
            </div>
          </div>

          <div className="inline-flex items-center mt-16 text-indigo-600">
            <p className="text-lg font-medium">How we did it</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 ml-3 transition-transform transform group-hover:translate-x-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>

    <Footer />
  </div>
);

export default Sponsors;
