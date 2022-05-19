import { FaEnvelope } from "react-icons/fa";
import { Numbers } from "../components/numbers";
import Link from "next/link";
import React from "react";
import Socials from "../components/socials";

const Sponsors = () => (
  <div className="grid grid-cols-2 pt-32">
    <div className="col">
      <h1 className="text-4xl font-bold lg:text-5xl lg:mb-2 md:text-4xl">StudyTme</h1>
      <h2 className="font-serif text-2xl italic lg:text-3xl ">aka Giulia Mazza</h2>
      <h3 className="text-2xl font-bold lg:">About</h3>
      <p className="lg:text-2xl">Content creator and community manager addicted to productivity</p>
      <Socials />
      <button className="px-5 py-2 mt-5 font-semibold text-[#612DFF] bg-transparent border border-[#612DFF] rounded hover:bg-[#612DFF] hover:text-white hover:border-transparent">
        <div className="flex items-center justify-center">
          <span>
            <Link href="mailto:info@studytme.com" passHref>
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                Contact Me
              </div>
            </Link>
          </span>
        </div>
      </button>
    </div>
    <div className="mb-32">
      <img
        width="1000"
        height="1000"
        className="border-none rounded-3xl"
        src={"/images/gtransparent.png"}
        alt="StudyTme Giulia Mazza photo"
      />
    </div>
    <div>
      <h3 className="text-2xl font-bold lg:">About</h3>
      <p className="lg:text-2xl">Content creator and community manager addicted to productivity</p>
      <div className="mx-10 my-24 lg:mx-60">
        <h3 className="text-2xl font-bold lg:">Audience</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex">
            <div className="flex flex-col justify-between w-64 p-8 transition-shadow bg-white shadow-xl rounded-xl group hover:shadow-lg">
              <div className="grid justify-between grid-cols-2 pt-2 mt-4 border-b-2 border-indigo-100">
                <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
                  Total Followers
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className=" bi bi-people-fill justify-self-end"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fillRule="evenodd"
                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  />
                  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
              </div>
              <h5 className="text-5xl font-bold text-[#612DFF]">77k+</h5>
            </div>
          </div>
          <div className="flex">
            <div className="justify-between w-64 p-8 transition-shadow bg-white shadow-xl rounded-xl group hover:shadow-lg">
              <div className="grid justify-between grid-cols-2 pt-2 mt-4 border-b-2 border-indigo-100">
                <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
                  Main Platform
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitch justify-self-end"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z" />
                  <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z" />
                </svg>
              </div>
              <h5 className="text-5xl font-bold text-[#612DFF]">Twitch</h5>
              <p className="italic">Official Partner</p>
            </div>
          </div>
          <div className="flex">
            <div className="justify-between w-64 p-8 transition-shadow bg-white shadow-xl rounded-xl group hover:shadow-lg">
              <div className="grid justify-between grid-cols-2 pt-2 mt-4 border-b-2 border-indigo-100">
                <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
                  average CCV*
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitch justify-self-end"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z" />
                  <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z" />
                </svg>
              </div>
              <h5 className="text-5xl font-bold text-[#612DFF]">551</h5>
              <p className="italic">*last 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-bold lg:">Audience</h3>
      <p className="lg:text-2xl">Content creator and community manager addicted to productivity</p>
    </div>
    Written about us:
    <Link
      href={"https://www.lifewire.com/how-giulia-mazza-became-a-must-watch-streaming-star-5272114"}
      passHref
    >
      Lifewire
    </Link>
    <Numbers />
  </div>
);

export default Sponsors;
