import { HiQuestionMarkCircle } from "react-icons/hi";
import { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="pt-8">
      <Head>
        <title>StudyTme - About</title>
      </Head>
      <h1 className="font-serif text-2xl italic lg:text-3xl">Why, how, who, where?</h1>
      <h3>The answers to the most asked questions</h3>
      <ul className="grid self-center grid-cols-2 my-5">
        <li className="mx-4">
          <div className="flex items-center gap-4">
            <span className="font-size:100px">&#10067;</span>
            <h3 className="underline sm:text-lg md:text-xl hover:text-twitch-purple hover:font-semibold">
              <a href="#how-does-it-work">How does it work?</a>
            </h3>
          </div>
        </li>
        <li className="mx-4">
          <div className="flex items-center gap-4 ">
            <span className="font-size:100px">&#128522;</span>
            <h3 className="underline sm:text-lg md:text-xl hover:text-twitch-purple hover:font-semibold">
              <a href="#who-does-it-work-for">Who does it work for?</a>
            </h3>
          </div>
        </li>
        <li className="mx-4">
          <div className="flex items-center gap-4 ">
            <span className="font-size:100px">&#129351;</span>
            <h3 className="underline sm:text-lg md:text-xl hover:text-twitch-purple hover:font-semibold">
              <a href="#why-does-it-work">Why does it work?</a>
            </h3>
          </div>
        </li>
        <li className="mx-6">
          <div className="flex items-center gap-4">
            <span className="font-size:100px">&#128640;</span>
            <h3 className="underline sm:text-lg md:text-xl hover:text-twitch-purple hover:font-semibold">
              <a href="#how-did-it-start">How did it start?</a>
            </h3>
          </div>
        </li>
        <li className="mx-4">
          <div className="flex items-center gap-4 ">
            <span className="font-size:100px">&#128581;</span>
            <h3 className="underline sm:text-lg md:text-xl hover:text-twitch-purple hover:font-semibold">
              <a href="#difference-hustle">How we differ from the hustle culture?</a>
            </h3>
          </div>
        </li>
        <li className="mx-4">
          <div className="flex items-center gap-4 ">
            <span className="font-size:100px">&#128188;</span>
            <h3 className="underline sm:text-lg md:text-xl hover:text-twitch-purple hover:font-semibold">
              <a href="#ceogang-meaning">What does CEOgang mean?</a>
            </h3>
          </div>
        </li>
      </ul>

      <section className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 md:gap-8">
        <QuestionBox
          question={<a id="how-does-it-work">How does it work?</a>}
          answer={
            <>
              G usually broadcasts co-working streams on Twitch 4 days a week. In each co-working
              stream, G films herself working in sessions of 45 minutes while muted, and then takes
              a break for 7 minutes to chat to viewers, motivate anyone who{"’"}s struggling and
              entertain viewers with mini games. Studying/working in segments like this is called
              the Pomodoro technique, which G didn{"’"}t invent but found useful when studying
              herself. For more info, check this website: &nbsp;
              <a
                href="https://todoist.com/productivity-methods/pomodoro-technique"
                className="text-twitch-purple hover:italic"
              >
                The Pomodoro Technique
              </a>
            </>
          }
          image={<span className="font-size:100px">&#10067;</span>}
        />
        <QuestionBox
          image={<span className="font-size:100px">&#128522;</span>}
          question={<a id="who-does-it-work-for">Who does it work for?</a>}
          answer="Co-working streams can help everyone. 
          Whether you're studying at university, working for a big company or freelancing, 
          it's a space to focus and get things done alongside a friendly community.
          "
        />
        <QuestionBox
          image={<span className="font-size:100px">&#129351;</span>}
          className="sm:col-span-2"
          question={<a id="why-does-it-work">Why does it work?</a>}
          answer={
            <>
              <p>
                There are many reasons why people find co-working streams useful. Apart from the
                most obvious ones (improving your time management, beating isolation and finding
                additional inspiration), these are some of G&apos;s favorites:
              </p>
              <div>
                <p className="mt-3 font-bold">Body doubling</p>
                <p>
                  Body doubling means working with another person present. The body double doesn’t
                  need to actively help with the task or physically be in the room with you, and
                  they can be doing something unrelated while you complete your task. The important
                  part is the knowledge that someone is ‘present’ and aware that you’re working on
                  your task, which can help keep you focused on what you’re doing.
                </p>
                <p className="mt-3 font-bold ">Escaping rabbit holes</p>
                <p>
                  It’s easy to get hyper-focused on a task and lose sight of the overall goal of
                  what you’re trying to do. Co-working streams can remind you to take regular breaks
                  and reflect on what you’re doing.
                </p>
                <p className="mt-3 font-bold">Routine</p>
                <p>
                  The problem with motivation is it can vanish. Focusing on routine, or as James
                  Clear calls it in his book, Atomic Habits, on a system, allows you to push through
                  the hard moments when you just don’t want to work. G helps people in creating a
                  habit showing up everyday at the same time, setting clear goals and working for
                  set periods of time, which can help a lot more than a vague sense of motivation.
                </p>
              </div>
            </>
          }
        />
        <QuestionBox
          image={<span className="font-size:100px">&#128640;</span>}
          question={<a id="how-did-it-start">How did it start?</a>}
          answer="G started streaming in November 2020 because her internship went fully remote during lockdown. Suddenly alone and struggling to focus, G decided to try streaming on Twitch to stay accountable. StudyTme’s popularity was totally unexpected, but G is loving the journey!
          "
        />
        <QuestionBox
          image={<span className="font-size:100px">&#128581;</span>}
          question={<a id="difference-hustle">How we differ from the hustle culture?</a>}
          answer="The CEO Gang places a lot of importance on using your energy effectively and listening to your needs. If you’re feeling tired, you need to listen to your body and rest to be the most effective you can be. Burning out is one of the worst ways people lose their productivity - you can’t ‘hustle’ if you’re too tired to function.
          "
        />
        <QuestionBox
          image={<span className="font-size:100px">&#128188;</span>}
          question={<a id="ceogang-meaning">What does CEOgang mean?</a>}
          answer="Being a CEO (Chief Executive Officer) literally means to be ultimately responsible 
          for taking managerial decisions of a company. The idea is that we the CEOgang are concious of
          being the final responsible of our lifes, but also of the reality we live in."
        />
      </section>
    </div>
  );
}

const QuestionBox = (props: {
  question: ReactNode;
  answer: ReactNode;
  className?: string;
  image: ReactNode;
}) => {
  return (
    <div className={"p-5 shadow-lg rounded-lg bg-white " + props.className}>
      <div className="flex items-center gap-4 pb-4 mb-4 border-b">
        <div>{props.image}</div>
        <h3 className="font-semibold text-twitch-purple sm:text-lg md:text-xl">{props.question}</h3>
      </div>
      <div className="text-gray-500">{props.answer}</div>
    </div>
  );
};
