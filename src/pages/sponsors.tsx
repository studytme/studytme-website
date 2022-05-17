import { FaEnvelope } from "react-icons/fa";
import { Numbers } from "../components/numbers";
import Footer from "../components/footer";
import GTransparent from "../images/gtransparent.png";
import Header from "../components/header";
import Image from "next/image";
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
      <Image
        layout="responsive"
        width="1000"
        height="1000"
        objectFit="cover"
        className="border-none rounded-3xl"
        src={GTransparent}
        alt="StudyTme Giulia Mazza photo"
      />
    </div>
    <div>
      <h3 className="text-2xl font-bold lg:">About</h3>
      <p className="lg:text-2xl">Content creator and community manager addicted to productivity</p>
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
