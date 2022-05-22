import { FaDiscord, FaTwitch, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Socials from "../components/socials";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex-grow">
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

      <div className="py-10">
        <div className="py-5">
          <h1 className="font-serif text-2xl italic md:text-3xl">About Us</h1>
        </div>
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-end col-span-1">
            <h1 className="w-full text-lg font-bold md:text-xl md:mb-5">Coworking Live</h1>
            <p className="font-apple-system">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur.
            </p>
            <div className="flex justify-center">
              <button className="items-center px-4 py-2 mt-5 font-semibold bg-transparent border rounded text-twitch-purple border-twitch-purple hover:bg-twitch-purple hover:text-white hover:border-transparent">
                <div className="flex items-center justify-center">
                  <FaTwitch className="mr-2" />

                  <Link href="https://www.twitch.tv/studytme/profile" passHref>
                    <a>Twitch</a>
                  </Link>
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-end col-span-1">
            <h1 className="w-full text-lg font-bold md:text-xl md:mb-5">An Ordinary Life</h1>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur.
            </p>
            <div className="flex justify-center">
              <button className="px-4 py-2 mt-5 font-semibold bg-transparent border rounded text-twitch-purple border-twitch-purple hover:bg-twitch-purple hover:text-white hover:border-transparent">
                <div className="flex items-center justify-center">
                  <FaYoutube className="mr-2" />

                  <Link href="https://www.youtube.com/channel/UCuxc7Lc6Ar076_4MLLHIz6g" passHref>
                    <a>YouTube</a>
                  </Link>
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-end col-span-1">
            <h1 className="w-full text-lg font-bold md:text-xl md:mb-5">Online Community</h1>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur.
            </p>
            <div className="flex justify-center">
              <button className="items-center px-4 py-2 mt-5 font-semibold bg-transparent border rounded text-twitch-purple border-twitch-purple hover:bg-twitch-purple hover:text-white hover:border-transparent">
                <div className="flex items-center justify-center">
                  <FaDiscord className="mr-2" />
                  <span>
                    <Link href="https://www.discord.gg/ceogang" passHref>
                      <a>Discord</a>
                    </Link>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <div className="my-5 text-center">
          <h1 className="text-lg font-semibold text-black md:text-2xl">Get the latest drip</h1>
          <p className="text-sm italic font-medium text-black ">Personally ideated by G</p>
        </div>
        <div className="grid grid-cols-2 md:mx-24 md:grid-cols-4">
          <div className="mx-2">
            <img className="rounded-lg fill-current" src={"/images/basicSandTee.png"} alt="helo" />
          </div>
          <div className="mx-2">
            <img className="rounded-lg fill-current" src={"/images/merch1.png"} alt="helo" />
          </div>
          <div className="invisible h-0 mx-2 md:visible md:h-auto">
            <img className="rounded-lg fill-current " src={"/images/merch3.png"} alt="helo" />
          </div>
          <div className="invisible h-0 mx-2 md:visible md:h-auto">
            <img className="rounded-lg fill-current " src={"/images/basicMug.png"} alt="helo" />
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

export default Home;
