import { BsPeopleFill } from "react-icons/bs";
import { FaEnvelope, FaTwitch } from "react-icons/fa";
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
    <div className="col-span-2">
      <div className="">
        <h3 className="text-2xl font-bold">Audience</h3>
        <div className="flex flex-wrap gap-4 justify-evenly">
          <div className="flex">
            <div className="flex flex-col justify-between w-64 p-8 transition-shadow bg-white shadow-xl rounded-xl group hover:shadow-lg">
              <div className="grid justify-between grid-cols-2 pt-2 mt-4 border-b-2 border-indigo-100">
                <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
                  Total Followers
                </p>
                <BsPeopleFill />
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
                <FaTwitch />
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
                <FaTwitch />
              </div>
              <h5 className="text-5xl font-bold text-[#612DFF]">551</h5>
              <p className="italic">*last 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    Written about us:
    <Link
      href={"https://www.lifewire.com/how-giulia-mazza-became-a-must-watch-streaming-star-5272114"}
      passHref
    >
      Lifewire
    </Link>
    {/* <Numbers /> */}
  </div>
);

export default Sponsors;
