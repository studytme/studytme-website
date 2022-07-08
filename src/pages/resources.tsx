import { HiQuestionMarkCircle } from "react-icons/hi";
import { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

const Resources = () => {
  return (
    <div className="pt-8">
      <Head>
        <title>StudyTme - About</title>
      </Head>
      <h1 className="font-serif text-2xl italic lg:text-3xl">Free Resources</h1>
      <h3>These are materials that the community and G worked on together </h3>

      <section className="mt-7">
        <ResourceCard
          image={<img src="/images/finance.png" alt="studytme finance tracker template" />}
          title={<a id="finance-tracker">Finance Tracker</a>}
          description={
            "3 files that you can use to keep track of your expensenses and incomes so you will always know your status. You know what they say: knowledge is power."
          }
          link={
            "https://drive.google.com/drive/folders/1lV9OkW8WEek0vhrdkxh7bKksxKHX_C0V?usp=sharing"
          }
        />
        <ResourceCard
          image={<img src="/images/notion.png" alt="notion" />}
          title={<a id="notion-general-hub">Notion General Hub</a>}
          description={
            "You can use this as a template to organize your Notion, This is a general template, not specific for work or school."
          }
          link={""}
        />
        <ResourceCard
          image={
            <img
              src="https://i.etsystatic.com/12366970/r/il/4f2167/2858382264/il_794xN.2858382264_7aqy.jpg"
              alt="notion"
            />
          }
          title={<a id="cv">Curriculum Vitae</a>}
          description={
            "Use this as a template for your curriculum vitae. We would always suggest to make it as personal as possible."
          }
          link={""}
        />
      </section>
    </div>
  );
};

const ResourceCard = (props: {
  title: ReactNode;
  description: ReactNode;
  className?: string;
  image: ReactNode;
  link: string;
}) => {
  return (
    <div className={"p-5 shadow-lg rounded-lg bg-white mb-5 " + props.className}>
      <div className="grid items-center md:grid-cols-10">
        <div className="md:col-span-2">{props.image}</div>
        <div className="md:mx-5 md:col-span-7">
          <h3 className="mt-4 font-semibold sm:text-lg md:text-xl md:mt-0">{props.title}</h3>
          <div className="text-gray-500">{props.description}</div>
        </div>
        <div className="flex justify-center md:col-span-1 ">
          <button className="px-4 py-2 font-bold text-white border rounded bg-twitch-purple hover:fill-twitch-purple-hover">
            <a href={props.link} target="_blank" rel="noreferrer">
              <h1 className=" hover:cursor-pointer">View</h1>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
