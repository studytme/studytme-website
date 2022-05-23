import { FaDiscord, FaTwitch, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import Socials from "../components/socials";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex-grow">
      <Head>
        <title>StudyTme - Home</title>
      </Head>
      <div className="grid items-center grid-cols-3 gap-12 h-headerless-screen">
        <div className="max-h-screen ">
          <img
            width="1080"
            height="1920"
            className="border-none rounded-3xl"
            src="/images/360g.gif"
            alt="StudyTme Giulia Mazza photo"
          />
        </div>
        <div className="col-span-2">
          <h1 className="text-4xl font-bold lg:text-5xl lg:mb-2 md:text-4xl">StudyTme</h1>
          <h2 className="font-serif text-2xl italic lg:text-3xl ">aka Giulia Mazza</h2>
          <Socials />
          <p className="lg:text-2xl md:mt-12"> Giulia is the founder of the CEOgang.</p>
          <p className="lg:text-2xl">
            She has now finished her studies in Data Science and Digital marketing but she keeps
            leading the community towards more productivity and mental health while working on her
            projects.
          </p>
        </div>
      </div>

      <div className="py-5">
        <div className="flex flex-col items-center justify-start 2xl:flex-row">
          <AboutCard
            title="Coworking Live"
            button={
              <Link href="https://www.youtube.com/channel/UCuxc7Lc6Ar076_4MLLHIz6g" passHref>
                <button className="flex items-center px-4 py-2 mt-2 font-semibold bg-transparent border rounded text-twitch-purple border-twitch-purple hover:bg-twitch-purple hover:text-white">
                  <FaTwitch className="mr-2" />
                  <a>Twitch</a>
                </button>
              </Link>
            }
            content={
              <>
                <p>
                  This is where you will find me live
                  <span className="font-bold"> 5 days a week! </span>
                  You can check out my
                  <span className="font-bold"> stream schedule </span>
                  <Link href="https://www.twitch.tv/studytme/schedule" passHref>
                    <span className="font-bold cursor-pointer text-twitch-purple hover:underline hover:text-twitch-purple-hover">
                      &nbsp;here
                    </span>
                  </Link>
                  .
                </p>
                <p>
                  By following my channel, you will be able to{" "}
                  <span className="font-bold">interact with the community </span>
                  and join in on the fun during our breaks.
                </p>
                <p>
                  Being productive with us will{" "}
                  <span className="font-bold">get you compensated! </span>
                  The more you watch, the more pomo-points you will get. They can be spent on my
                  store (hyperlink this to the store?) for some cool rewards.
                </p>
              </>
            }
          />

          <AboutCard
            title="An Ordinary Life"
            button={
              <Link href="https://www.youtube.com/channel/UCuxc7Lc6Ar076_4MLLHIz6g" passHref>
                <button className="flex items-center px-4 py-2 mt-2 font-semibold bg-transparent border rounded text-twitch-purple border-twitch-purple hover:bg-twitch-purple hover:text-white">
                  <FaYoutube className="mr-2" />
                  <a>YouTube</a>
                </button>
              </Link>
            }
            content={
              <>
                <p>
                  Hello there I&apos;m a text that will be replaced in the future with the real
                  content.
                </p>
              </>
            }
          />

          <AboutCard
            title="Online Community"
            button={
              <Link href="https://www.discord.gg/ceogang" passHref>
                <button className="flex items-center px-4 py-2 mt-2 font-semibold bg-transparent border rounded text-twitch-purple border-twitch-purple hover:bg-twitch-purple hover:text-white">
                  <FaDiscord className="mr-2" />
                  <a>Discord</a>
                </button>
              </Link>
            }
            content={
              <>
                <p>
                  The CEOgang is an{" "}
                  <span className="font-bold">Official Discord Partner Server</span>.
                </p>
                <p>
                  By joining the server, you will be able to directly interact with other viewers
                  and myself included!
                </p>
                <p>
                  You will find study rooms where people are regularly joining to work together, you
                  might be alone in your room but not when it&apos;s time to focus!
                </p>
                <p>
                  Checking on the discord regularly will also give you the opportunity to join in on
                  leisurely activities like gaming nights or community organized events.
                </p>
              </>
            }
          />
        </div>
      </div>

      <div className="my-10">
        <div className="my-5 text-center">
          <h1 className="text-lg font-semibold text-black md:text-2xl">Get the latest drip</h1>
          <p className="text-sm italic font-medium text-black ">Personally ideated by G</p>
        </div>
        <div className="grid grid-cols-2 md:mx-24 md:grid-cols-4">
          <div className="mx-2">
            <img
              className="rounded-lg fill-current"
              src={"/images/basicSandTee.png"}
              alt="sand tee front"
            />
          </div>
          <div className="mx-2">
            <img
              className="rounded-lg fill-current"
              src={"/images/merch1.png"}
              alt="black tee back"
            />
          </div>
          <div className="invisible h-0 mx-2 md:visible md:h-auto">
            <img
              className="rounded-lg fill-current "
              src={"/images/merch3.png"}
              alt="sand tee back"
            />
          </div>
          <div className="invisible h-0 mx-2 md:visible md:h-auto">
            <img
              className="rounded-lg fill-current "
              src={"/images/basicmug.png"}
              alt="black mug"
            />
          </div>
        </div>

        <div className="flex justify-center my-5">
          <button className="items-center px-4 py-2 mt-5 font-semibold bg-transparent border rounded text-twitch-purple border-twitch-purple hover:bg-twitch-purple hover:text-white hover:border-transparent">
            <div className="flex items-center justify-center">
              <Link href="https://studytme-shop.fourthwall.com/collections/all" passHref>
                <a>Check the merch</a>
              </Link>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const AboutCard = (props: { title: string; content: ReactNode; button: ReactNode }) => {
  return (
    <div className="flex flex-col p-4 my-4 rounded-lg sm:w-3/4 2xl:mx-2 odd:self-start even:self-end text-slate-500 bg-slate-100 2xl:even:self-start">
      <h1 className="w-full mb-4 text-2xl font-bold text-twitch-purple">{props.title}</h1>
      <div className="space-y-4">{props.content}</div>
      <div className="self-end pt-2">{props.button}</div>
    </div>
  );
};

export default Home;
