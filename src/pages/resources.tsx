import { GetStaticProps, NextPage } from "next";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { ReactNode, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import SolidButton from "../components/Buttons/SolidLinkButton";
import SolidExternalLinkButton from "../components/Buttons/ExternalLinkButton";
import resourcesLocaleContent from "../../locales/resources";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      locale: context.locale,
      defaultLocale: context.defaultLocale,
    },
  };
};

const Resources: NextPage<{ locale: string; defaultLocale: string }> = (props: {
  locale: string;
  defaultLocale: string;
}) => {
  const localeContent = useMemo(
    () => resourcesLocaleContent[props.locale || props.defaultLocale],
    [props.locale]
  );

  return (
    <div className="pt-8">
      <Head>
        <title>StudyTme - About</title>
      </Head>
      <h1 className="font-serif text-2xl italic lg:text-3xl">{localeContent.title}</h1>
      <h3>{localeContent.subtitle}</h3>

      <section className="mt-7">
        <ResourceCard
          image={<img src="/images/finance.png" alt="studytme finance tracker template" />}
          title={<a id="finance-tracker">{localeContent.finance_tracker.title}</a>}
          description={localeContent.finance_tracker.description}
          link={
            "https://drive.google.com/drive/folders/1lV9OkW8WEek0vhrdkxh7bKksxKHX_C0V?usp=sharing"
          }
          linkText={localeContent.view_text}
        />
        <ResourceCard
          className="hidden"
          image={<img src="/images/notion.png" alt="notion" />}
          title={<a id="notion-general-hub">Notion General Hub</a>}
          description={
            "You can use this as a template to organize your Notion, This is a general template, not specific for work or school."
          }
          link={""}
          linkText={localeContent.view_text}
        />
        <ResourceCard
          className="hidden"
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
          linkText={localeContent.view_text}
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
  linkText: string;
}) => {
  return (
    <div className={"p-5 shadow-lg rounded-lg bg-white mb-5 " + props.className}>
      <div className="grid items-center sm:grid-cols-10">
        <div className="sm:col-span-2">{props.image}</div>
        <div className="sm:mx-5 sm:col-span-7">
          <h3 className="mt-4 font-semibold sm:text-lg md:text-xl md:mt-0">{props.title}</h3>
          <div className="text-gray-500">{props.description}</div>
        </div>
        <div className="flex justify-center sm:col-span-1 ">
          <SolidExternalLinkButton text={props.linkText} href={props.link} />
        </div>
      </div>
    </div>
  );
};

export default Resources;
