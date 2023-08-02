import { FaDiscord, FaTwitch, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import OutlinedLinkButton from "../components/Buttons/OulinedLinkButton";
import Socials from "../components/socials";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex-grow ">
      <Head>
        <title>StudyTme</title>
      </Head>
      <section className="grid items-center grid-cols-3 gap-4 mb-10 md:gap-12 h-headerless-screen">
        <div className="flex flex-col items-center col-span-3 py-4 md:col-span-1">
          <video className="rounded-3xl md:h-auto h-96" autoPlay muted loop>
            <source src="/images/360g.mp4" type="video/mp4" />
            Spinning G
          </video>
        </div>
        <div className="col-span-3 md:col-span-2">
          <h1 className="text-4xl font-bold lg:text-5xl lg:mb-2 md:text-4xl">StudyTme</h1>
          <h2 className="font-serif text-2xl italic lg:text-3xl ">aka Giulia Mazza</h2>
          <Socials />
          <p className="mb-5 lg:text-2xl">
            Giulia (or G for short) is the founder of the CEO Gang, a Twitch and Discord community
            focused on productivity and mental wellbeing.
          </p>
          <p className="text-gray-500 lg:text-xl">
            Giulia created StudyTme when she was studying Data Science and Digital Marketing at
            university, but since graduating she{"'"}s expanded the channel to all aspects of
            working and productivity, while developing the community itself.
          </p>
        </div>
      </section>

      <section className="py-5 ">
        <div className="flex flex-col items-center 2xl:flex-row 2xl:items-stretch 2xl:space-x-8">
          <AboutCard
            title="Twitch"
            image={
              <img
                className="rounded-lg fill-current "
                src={"/images/twitch.png"}
                alt="studytme on twitch screenshot"
              />
            }
            button={
              <OutlinedLinkButton
                icon={<FaTwitch />}
                text={"Twitch"}
                href={"https://www.twitch.tv/studytme"}
              />
            }
            content={
              <>
                <p className="mb-5">
                  This is where you will find me live 5 days a week! You can check out my stream
                  schedule{" "}
                  <Link href="/schedule" passHref>
                    <span className="font-bold cursor-pointer text-twitch-purple hover:underline hover:text-twitch-purple-hover">
                      here
                    </span>
                  </Link>
                  .
                </p>
              </>
            }
            midtitle={"Why Join?"}
            emote1={<p>⏲</p>}
            emote2={<p>✅</p>}
            emote3={<p>😞</p>}
            emote4={<p>💪</p>}
            text1={<span className="whitespace-nowrap">Rhythm</span>}
            text2={<span className="whitespace-nowrap">To-do lists</span>}
            text3={<span className="whitespace-nowrap">Less alone</span>}
            text4={<span className="whitespace-nowrap">Motivation</span>}
            finaltext={"and more..."}
          />
          <AboutCard
            title="Youtube"
            image={
              <img
                className="rounded-lg fill-current "
                src={"/images/yt.png"}
                alt="studytme on youtube screenshot"
              />
            }
            button={
              <OutlinedLinkButton
                icon={<FaYoutube />}
                text={"Youtube"}
                href={"https://www.youtube.com/@studytmeITA"}
              />
            }
            content={
              <>
                <p className="mb-5">
                  G is far from perfect. Her videos follow her journey to become a better person.
                </p>
              </>
            }
            midtitle={"What will you find?"}
            emote1={<p>📷</p>}
            emote2={<p>📚</p>}
            emote3={<p>💬</p>}
            emote4={<p>🎬</p>}
            text1={<span className="whitespace-nowrap">Vlogs</span>}
            text2={<span className="whitespace-nowrap">Book reviews</span>}
            text3={<span className="whitespace-nowrap">Interviews</span>}
            text4={<span className="whitespace-nowrap">VODs</span>}
            finaltext={"and more..."}
          />
          <AboutCard
            title="Discord"
            image={
              <img
                className="rounded-lg fill-current "
                src={"/images/gang.png"}
                alt="studytme on discord screenshot"
              />
            }
            button={
              <OutlinedLinkButton
                icon={<FaDiscord />}
                text={"Discord"}
                href={"https://www.discord.gg/ceogang"}
              />
            }
            content={
              <>
                <p className="mb-5">
                  Discord is the easiest way to keep in touch with the community. Join study rooms,
                  hang out and find out all the latest news.
                </p>
              </>
            }
            midtitle={"What will you find?"}
            emote1={<p>💻</p>}
            emote2={<p>🤗</p>}
            emote3={<p>📚</p>}
            emote4={<p>🧠</p>}
            text1={<span className="whitespace-nowrap">Study rooms</span>}
            text2={<span className="whitespace-nowrap">Community</span>}
            text3={<span className="whitespace-nowrap">Bookclub</span>}
            text4={<span className="whitespace-nowrap">Masterminds</span>}
            finaltext={"and more..."}
          />
        </div>
      </section>

      <section className="flex flex-col gap-8 items-center my-24 text-center">
        <div>
          <h3 className="text-lg font-semibold text-black md:text-2xl">Get the latest drip</h3>
          <p className="text-sm italic font-medium text-slate-400 ">Designed by Giulia</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4">
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

        <OutlinedLinkButton text="Check the merch" href="https://merch.studytme.com" />
      </section>
    </div>
  );
};

const AboutCard = (props: {
  title: string;
  content: ReactNode;
  button: ReactNode;
  image: ReactNode;
  midtitle: string;
  emote1: ReactNode;
  emote2: ReactNode;
  emote3: ReactNode;
  emote4: ReactNode;
  text1: ReactNode;
  text2: ReactNode;
  text3: ReactNode;
  text4: ReactNode;
  finaltext: string;
}) => {
  return (
    <div className="flex flex-col px-4 py-6 my-4 bg-white rounded-lg shadow-lg sm:w-3/4 text-slate-500 ">
      <h2 className="w-full mb-4 text-2xl font-bold text-twitch-purple">{props.title}</h2>
      <div className="w-full mb-3">{props.image}</div>
      <hr className="self-center w-1/4 border-gray-400 border-1" />
      <div className="self-center w-4/5 mt-3 space-y-4 italic">{props.content}</div>
      <hr className="self-center w-3/4 mb-auto border-gray-400 border-1" />
      <div className="self-center m-4 font-bold text-gray-800">{props.midtitle}</div>
      <div className="grid self-center w-4/5 grid-cols-2 grid-rows-2 gap-4">
        <div className="grid items-center grid-cols-4 gap-4">
          <div className="w-2/3 col-span-1">{props.emote1}</div>
          <div className="col-span-3 text-gray-900 align-center">{props.text1}</div>
        </div>
        <div className="grid items-center grid-cols-4 gap-4">
          <div className="w-2/3 col-span-1">{props.emote2}</div>
          <div className="col-span-3 text-gray-900 align-center">{props.text2}</div>
        </div>
        <div className="grid items-center grid-cols-4 gap-4">
          <div className="w-2/3 col-span-1">{props.emote3}</div>
          <div className="col-span-3 text-gray-900 align-center">{props.text3}</div>
        </div>
        <div className="grid items-center grid-cols-4 gap-4">
          <div className="w-2/3 col-span-1 ">{props.emote4}</div>
          <div className="col-span-3 text-gray-900 align-center">{props.text4}</div>
        </div>
      </div>
      <div className="self-center my-4 italic font-bold">{props.finaltext}</div>
      <div className="self-center pt-4">{props.button}</div>
    </div>
  );
};

export default Home;
