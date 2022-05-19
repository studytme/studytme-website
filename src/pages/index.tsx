import { FaDiscord, FaTwitch, FaYoutube } from "react-icons/fa";
import BasicMug from "../images/basicmug.png";
import Footer from "../components/footer";
import GSpin from "../images/360g.gif";
import Header from "../components/header";
import Image from "next/image";
import Link from "next/link";
import Merch0 from "../images/basic sand t.png";
import Merch2 from "../images/merch1.png";
import Merch3 from "../images/merch3.png";
import Socials from "../components/socials";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex-grow">
      <div className="grid items-center grid-cols-3 gap-12 py-10 md:mx-20 md:px-12">
        <div className="max-h-screen ">
          <Image
            layout="responsive"
            width="1080"
            height="1920"
            objectFit="cover"
            className="border-none rounded-3xl"
            src={GSpin}
            alt="StudyTme Giulia Mazza photo"
          />
        </div>
        <div className="col-span-2">
          <h1 className="text-4xl font-bold lg:text-5xl lg:mb-2 md:text-4xl">StudyTme</h1>
          <h2 className="font-serif text-2xl italic lg:text-3xl ">aka Giulia Mazza</h2>

          <Socials />

          <p className="lg:text-2xl md:mt-12"> Giulia is the founder of the CEOgang.</p>
          <p className="lg:text-2xl">
            {" "}
            She has now finished her studies in Data Science and Digital marketing but she keeps
            leading the community towards more productivity and mental health while working on her
            projects.
          </p>
        </div>
      </div>

      <div className="md:pb-20 lg:pb-40 md:pt-20 md:px-12 ">
        <div className="py-5">
          <h1 className="font-serif text-2xl italic md:text-3xl">About Us</h1>
        </div>
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-3">
          <div className="col-span-1">
            <h1 className="text-lg font-bold md:text-xl md:mb-5">Coworking Live</h1>
            <p className="font-apple-system">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
              quisquam est.
            </p>
            <div className="flex justify-center">
              <button className="items-center px-4 py-2 mt-5 font-semibold text-[#612DFF] bg-transparent border border-[#612DFF] rounded hover:bg-[#612DFF]  hover:text-white hover:border-transparent">
                <div className="flex items-center justify-center">
                  <FaTwitch className="mr-2" />
                  <span>
                    <Link href="https://www.twitch.tv/studytme/profile">Twitch</Link>
                  </span>
                </div>
              </button>
            </div>
          </div>

          <div className="col-span-1">
            <h1 className="text-lg font-bold md:text-xl md:mb-5">An Ordinary Life</h1>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
              quisquam est.
            </p>
            <div className="flex justify-center">
              <button className="px-4 py-2 mt-5 font-semibold text-[#612DFF] bg-transparent border border-[#612DFF] rounded hover:bg-[#612DFF] hover:text-white hover:border-transparent">
                <div className="flex items-center justify-center">
                  <FaYoutube className="mr-2" />
                  <span>
                    <Link href="https://www.youtube.com/channel/UCuxc7Lc6Ar076_4MLLHIz6g">
                      YouTube
                    </Link>
                  </span>
                </div>
              </button>
            </div>
          </div>

          <div className="col-span-1">
            <h1 className="text-lg font-bold md:text-xl md:mb-5">Online Community</h1>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
              quisquam est.
            </p>
            <div className="flex justify-center">
              <button className="items-center px-4 py-2 mt-5 font-semibold text-[#612DFF] bg-transparent border border-[#612DFF] rounded hover:bg-[#612DFF] hover:text-white hover:border-transparent">
                <div className="flex items-center justify-center">
                  <FaDiscord className="mr-2" />
                  <span>
                    <Link href="https://www.discord.gg/ceogang">Discord</Link>
                  </span>
                </div>
              </button>
            </div>
          </div>
          <a
            href="./about"
            className="flex justify-center gap-5 py-12 place-items-center text-[#612DFF] "
          >
            <h5 className="hover:font-bold ">Learn more</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="stroke-1 bi bi-arrow-right hover:stroke-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="my-10">
        <div className="my-5 text-center">
          <h1 className="text-lg font-semibold text-black md:text-2xl">Get the latest drip</h1>
          <p className="text-sm italic font-medium text-black ">Personally ideated by G</p>
        </div>
        <div className="grid grid-cols-2 md:mx-24 md:grid-cols-4">
          <div className="mx-2">
            <Image className="rounded-lg fill-current" src={Merch0} alt="helo" />
          </div>
          <div className="mx-2">
            <Image className="rounded-lg fill-current" src={Merch2} alt="helo" />
          </div>
          <div className="invisible h-0 mx-2 md:visible md:h-auto">
            <Image className="rounded-lg fill-current " src={Merch3} alt="helo" />
          </div>
          <div className="invisible h-0 mx-2 md:visible md:h-auto">
            <Image className="rounded-lg fill-current " src={BasicMug} alt="helo" />
          </div>
        </div>

        <div className="flex justify-center my-5">
          <button className="items-center px-4 py-2 mt-5 font-semibold text-[#612DFF] bg-transparent border border-[#612DFF] rounded hover:bg-[#612DFF]  hover:text-white hover:border-transparent">
            <div className="flex items-center justify-center">
              <span>
                <Link href="https://studytme-shop.fourthwall.com/collections/all">
                  Check the merch
                </Link>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
