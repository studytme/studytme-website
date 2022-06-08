import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import React from "react";

const Socials = () => (
  <div className="flex items-center pt-6 pb-4 space-x-6 text-gray-800">
    <Link href="https://twitter.com/StudyTme" passHref>
      <AiOutlineTwitter className="w-6 h-6 hover:text-twitch-purple" title="twitter icon" />
    </Link>
    <Link href="https://www.instagram.com/itsstudytme/" passHref>
      <AiOutlineInstagram className="w-6 h-6 hover:text-twitch-purple" title="instagram icon" />
    </Link>
    <Link href="https://www.linkedin.com/in/mazzagiulia0/" passHref>
      <FaLinkedinIn className="w-6 h-6 hover:text-twitch-purple" title="linkedin icon" />
    </Link>
    <Link href="https://www.youtube.com/channel/UCuxc7Lc6Ar076_4MLLHIz6g" passHref>
      <AiFillYoutube className="w-6 h-6 hover:text-twitch-purple" title="youtube icon" />
    </Link>
    <Link href="https://discord.gg/ceogang" passHref>
      <FaDiscord className="w-6 h-6 hover:text-twitch-purple" title="discord icon" />
    </Link>
  </div>
);

export default Socials;
