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
        <title>StudyTme</title>
      </Head>
      <section className="grid items-center grid-cols-3 gap-12 h-headerless-screen">
        <div className="max-h-screen ">
          <video className="rounded-3xl" autoPlay muted loop>
            <source src="/images/360g.mp4" type="video/mp4" />
            Spinning G
          </video>
        </div>
        <div className="col-span-2">
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
        <div className="flex flex-col items-center 2xl:flex-row 2xl:items-start">
          <AboutCard
            title="Coworking Live"
            button={
              <Link href="https://www.twitch.tv/studytme" passHref>
                <button className="flex items-center px-4 py-2 mt-2 font-semibold bg-transparent border rounded text-twitch-purple border-twitch-purple hover:bg-twitch-purple hover:text-white">
                  <FaTwitch className="mr-2" />
                  <a>Twitch</a>
                </button>
              </Link>
            }
            content={
              <>
                <p className="mb-5">
                  This is where you will find me live
                  <span className="font-bold"> 5 days a week! </span>
                  You can check out my
                  <span className="font-bold"> stream schedule </span>
                  <Link href="/schedule" passHref>
                    <span className="font-bold cursor-pointer text-twitch-purple hover:underline hover:text-twitch-purple-hover">
                      here
                    </span>
                  </Link>
                  .
                </p>
                <span className="">Join to:</span>
                <ul className="ml-5 list-disc">
                  <li>
                    Not sure what co-working live is?{" "}
                    <Link href="/faq" passHref>
                      <span className="font-bold cursor-pointer text-twitch-purple hover:underline hover:text-twitch-purple-hover">
                        Find out more
                      </span>
                    </Link>
                  </li>
                  <li>
                    <span className="font-bold text-twitch-purple">
                      You{"'"}ll also find extra streams where we:
                    </span>
                    :
                    <ul className="ml-5 list-disc">
                      <li>learn to code</li>
                      <li>improve in competitive videogames</li>
                      <li>get career advice/work on our CVs</li>
                    </ul>
                  </li>
                </ul>
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
                <p className="mb-5">
                  Want to follow G on her quest to become a better human being?
                </p>
                <span>Check out her YouTube channel for:</span>
                <ul className="ml-5 list-disc">
                  <li>vlogs about her messy life</li>
                  <li>interviews with guests on stream</li>
                  <li>playlists to study/work/relax to</li>
                </ul>
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
                <p className="mb-5">
                  The CEOgang is an{" "}
                  <span className="font-bold">Official Discord Partner Server</span>.
                </p>
                <span className="">You will find:</span>
                <ul className="ml-5 list-disc">
                  <li>
                    <span className="font-bold text-twitch-purple">Bookclub</span>: talk about
                    interesting books and improve your English skills.
                    <ul className="ml-5 list-disc">
                      <li>everyone is welcome</li>
                      <li>last Sunday of the month</li>
                      <li>no need to read the book to participate</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-twitch-purple">Virtual study rooms</span>: to
                    stay accountable and study/work alongside other people
                    <ul className="ml-5 list-disc">
                      <li>with or without cam on, as you wish</li>
                      <li>24/7 co-working, we have members in almost every country</li>
                      <li>friendly faces and a well moderated community</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold text-twitch-purple">MasterMinds</span>: master the
                    English language in a relaxed environment
                    <ul className="ml-5 list-disc">
                      <li>
                        open to everyone at any level of English (people join to learn and to help)
                      </li>
                      <li>4 sessions across 2 days (more info on Discord) </li>
                    </ul>
                  </li>
                </ul>
              </>
            }
          />
        </div>
      </section>

      <section className="flex flex-col items-center my-24 text-center">
        <h3 className="text-lg font-semibold text-black md:text-2xl">Get the latest drip</h3>
        <p className="text-sm italic font-medium text-slate-400 ">Designed by Giulia</p>

        <div className="grid grid-cols-2 mt-8 md:grid-cols-4">
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
              <Link href="https://merch.studytme.com" passHref>
                <a>Check the merch</a>
              </Link>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

const AboutCard = (props: { title: string; content: ReactNode; button: ReactNode }) => {
  return (
    <div className="flex flex-col p-4 my-4 bg-gray-100 rounded-lg sm:w-3/4 2xl:mx-2 text-slate-500">
      <h2 className="w-full mb-4 text-2xl font-bold text-twitch-purple">{props.title}</h2>
      <div className="space-y-4">{props.content}</div>
      <div className="self-center pt-2">{props.button}</div>
    </div>
  );
};

export default Home;
