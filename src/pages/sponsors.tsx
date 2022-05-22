import { BsPeopleFill } from "react-icons/bs";
import { FaEnvelope, FaTwitch } from "react-icons/fa";
import Link from "next/link";
import React, { ReactNode } from "react";
import Socials from "../components/socials";

const Sponsors = () => (
  <div className="flex flex-col">
    <div className="flex items-center justify-between w-full h-headerless-screen">
      <div className="">
        <h1 className="text-4xl font-bold lg:text-5xl lg:mb-2 md:text-4xl">StudyTme</h1>
        <h2 className="font-serif text-2xl italic lg:text-3xl ">aka Giulia Mazza</h2>
        <h3 className="pt-4 text-2xl font-bold">About</h3>
        <p className="lg:text-2xl">
          Content creator and community manager addicted to productivity
        </p>
        <Socials />
        <Link href="mailto:info@studytme.com" passHref>
          <button className="flex items-center px-3 py-2 mt-2 font-semibold border rounded text-twitch-purple border-twitch-purple hover:bg-twitch-purple hover:text-white">
            <FaEnvelope className="mr-2" />
            Contact Me
          </button>
        </Link>
      </div>
      <img
        className="w-1/2 border-none lg:w-1/2 rounded-3xl"
        src={"/images/gtransparent.png"}
        alt="StudyTme Giulia Mazza photo"
      />
    </div>

    <SponsorSection header="Audience">
      <div className="flex w-full gap-6 justify-evenly">
        <AudienceCard
          title=" Total Followers"
          icon={<BsPeopleFill className="w-5 h-5 ml-2" />}
          main="77k+"
        />
        <AudienceCard
          title="Main Platform"
          icon={<FaTwitch className="w-5 h-5 ml-2" />}
          main="Twitch"
          additional={<p className="italic text-slate-400">Official Partner</p>}
        />
        <AudienceCard
          title="average CCV*"
          icon={<FaTwitch className="w-5 h-5 ml-2" />}
          main="551"
          additional={<p className="italic text-slate-400">*last 30 days</p>}
        />
      </div>
    </SponsorSection>

    <SponsorSection header="Written about StudyTme">
      <Link
        href={
          "https://www.lifewire.com/how-giulia-mazza-became-a-must-watch-streaming-star-5272114"
        }
        passHref
      >
        <button>
          <h5 className="text-xl font-bold text-twitch-purple hover:text-twitch-purple-hover hover:underline">
            LifeWire: &quot;How Giulia Mazza became a must watch streaming star&quot;
          </h5>
        </button>
      </Link>
    </SponsorSection>
  </div>
);

const SponsorSection = (props: { children?: ReactNode; header: string }) => {
  return (
    <div className="flex flex-col items-center w-full mb-20">
      <h3 className="mb-6 text-4xl font-bold">{props.header}</h3>
      {props.children}
    </div>
  );
};

const AudienceCard = (props: {
  title: string;
  icon: ReactNode;
  main: string;
  additional?: ReactNode;
}) => {
  return (
    <div className="flex flex-col px-10 py-6 bg-white border shadow-xl rounded-xl group hover:shadow-lg">
      <div className="flex items-center justify-between pt-2 pb-1 mb-2 border-b-2 border-indigo-100">
        <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">{props.title}</p>
        {props.icon}
      </div>
      <h5 className="text-5xl font-bold text-twitch-purple">{props.main}</h5>
      {props.additional}
    </div>
  );
};

export default Sponsors;
