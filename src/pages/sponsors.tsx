import { BsPeopleFill } from "react-icons/bs";
import { FaEnvelope, FaTwitch } from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";
import OutlinedButton from "../components/Buttons/OulinedLinkButton";
import React, { ReactNode } from "react";
import Socials from "../components/socials";

const Sponsors = () => (
  <div className="flex flex-col">
    <Head>
      <title>StudyTme - Sponsors</title>
    </Head>
    <section className="flex flex-col-reverse items-center justify-between w-full sm:flex-row sm:h-headerless-screen">
      <div className="flex flex-col items-center my-10 sm:items-start">
        <h1 className="text-4xl font-bold lg:text-5xl lg:mb-2 md:text-4xl">StudyTme</h1>
        <h2 className="font-serif text-2xl italic lg:text-3xl ">aka Giulia Mazza</h2>
        <p className="text-center lg:text-2xl sm:text-left">
          Content creator and community manager addicted to productivity
        </p>
        <Socials />

        <OutlinedButton
          icon={<FaEnvelope />}
          text={"Contact Me"}
          href={"mailto:info@studytme.com"}
        />
      </div>
      <img
        className="mt-10 border-none rounded-full sm:w-1/2 w-50vw sm:rounded-3xl "
        src={"/images/transparentG.png"}
        alt="StudyTme Giulia Mazza photo"
      />
    </section>

    <SponsorSection header="Audience">
      <div className="flex flex-col w-full gap-6 mb-10 sm:flex-row justify-evenly">
        <AudienceCard
          title=" Total Followers"
          icon={<BsPeopleFill className="w-5 h-5 ml-2" />}
          main="82k+"
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

    <SponsorSection header="Previous collaborations">
      <div className="flex flex-row flex-wrap w-full gap-4 mb-10 sm:gap-6 justify-evenly">
        <SponsorCard
          title="Keywords Studio"
          main={<img className="w-full" src={"/images/keywords.png"} alt="keywords logo" />}
          link="https://www.keywordsstudios.com/"
        />
        <SponsorCard
          title="Lofi.co"
          main={<img className="w-full" src={"/images/lofi.png"} alt="lofi logo" />}
          link="https://lofi.co/"
        />
        <SponsorCard
          title="Akiflow"
          main={<img className="w-full" src={"/images/aki.png"} alt="akiflow logo" />}
          link="https://akiflow.com/"
        />
        <SponsorCard
          title="Surfshark VPN"
          main={<img className="w-10/12" src={"/images/surfshark.png"} alt="surfshark logo" />}
          link="https://surfshark.com/"
        />
        <SponsorCard
          title="Notion"
          main={<img className="w-full" src={"/images/notion-logo.svg"} alt="surfshark logo" />}
          link="https://www.notion.so/"
        />
      </div>
    </SponsorSection>

    <SponsorSection header="StudyTme in the media">
      <div className="flex flex-col mb-10">
        <img src="/images/lifewireLogo.svg" className="h-6 mb-2 sm:mr-1" alt="LifeWire logo" />
        <Link
          href={
            "https://www.lifewire.com/how-giulia-mazza-became-a-must-watch-streaming-star-5272114"
          }
          passHref
        >
          <a
            target={"_blank"}
            className="text-xl font-bold text-twitch-purple hover:text-twitch-purple-hover hover:underline"
          >
            &quot;How Giulia Mazza became a must watch streaming star&quot;
          </a>
        </Link>
      </div>
      <div className="flex flex-col items-center mb-20">
        <img
          src="/images/study-international.svg"
          className="w-auto h-10 p-2 mb-2 sm:mr-1 bg-[#172670]"
          alt="Study International logo"
        />
        <Link
          href={"https://studyinternational.com/news/best-discord-servers-for-students/"}
          passHref
        >
          <a
            target={"_blank"}
            className="text-xl font-bold text-twitch-purple hover:text-twitch-purple-hover hover:underline"
          >
            &quot;Top 5 Discord servers for int&apos;l students&quot;
          </a>
        </Link>
      </div>
    </SponsorSection>
  </div>
);

const SponsorSection = (props: { children?: ReactNode; header: string }) => {
  return (
    <section className="flex flex-col items-center w-full my-10">
      <h3 className="mb-6 text-4xl font-bold text-center">{props.header}</h3>
      {props.children}
    </section>
  );
};

const AudienceCard = (props: {
  title: string;
  icon: ReactNode;
  main: string;
  additional?: ReactNode;
}) => {
  return (
    <div className="flex flex-col px-10 py-6 bg-white border shadow-xl rounded-xl">
      <div className="flex items-center justify-between pt-2 pb-1 mb-2 border-b-2 border-indigo-100">
        <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">{props.title}</p>
        {props.icon}
      </div>
      <h5 className="text-5xl font-bold text-twitch-purple">{props.main}</h5>
      {props.additional}
    </div>
  );
};

const SponsorCard = (props: {
  title: string;
  main: ReactNode;
  link: string;
  additional?: ReactNode;
}) => {
  return (
    <Link href={props.link} passHref>
      <a target="_blank">
        <div className="flex flex-col items-center px-6 py-4 bg-white border shadow-xl cursor-pointer hover:shadow-2xl w-52 rounded-xl aspect-square hover:border-slate-300">
          <div className="flex items-center justify-between pt-2 pb-1 mb-2 border-b-2 border-indigo-100">
            <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
              {props.title}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center h-full">{props.main}</div>
          {props.additional}
        </div>
      </a>
    </Link>
  );
};

export default Sponsors;
