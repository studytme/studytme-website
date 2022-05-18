import BasicMug from "../images/basicmug.png";
import Footer from "../components/footer";
import Gprofile from "../images/360g.gif";
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
    <div className="">
      <Header />
      <div className="flex-grow px-0 mx-4 lg:mx-24">
        <div className="grid items-center grid-cols-3 gap-12 py-10 md:mx-20 md:px-12">
          <div className="max-h-screen ">
            <Image
              layout="responsive"
              width="1080"
              height="1920"
              objectFit="cover"
              className="border-none shadow-lg align-10 middle rounded-3xl"
              src={Gprofile}
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

        <div className="md:pb-20 lg:pb-30 md:pt-20 md:px-12 ">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="mr-2"
                    >
                      <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z" />
                      <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z" />
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="mr-2 bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="mr-2 bi bi-discord"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                    </svg>
                    <span>
                      <Link href="https://www.discord.gg/ceogang">Discord</Link>
                    </span>
                  </div>
                </button>
              </div>
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

        <div className="my-5">
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
                  <Link href="https://studytme.com/merch/">Check the merch</Link>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
