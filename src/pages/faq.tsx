import { HiQuestionMarkCircle } from "react-icons/hi";
import { ReactNode } from "react";
import Head from "next/head";

export default function About() {
  return (
    <div className="pt-8">
      <Head>
        <title>StudyTme - About</title>
      </Head>
      <h2 className="font-serif text-2xl italic lg:text-3xl">Why, how, who, where?</h2>
      <h3>The answers to the most asked questions</h3>

      <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 md:gap-8">
        <QuestionBox
          question="How does it work?"
          answer={
            <>
              G streams on Twitch around 5 days per week. She records herself studying in sessions
              of 45 mins and then takes breaks of 7mins during which she talks to the viewers,
              discuss different topics, motivates or just simply entertain them with mini games.
              This is a famous technique that G did not invent. It is called the Pomodoro technique.
              For more info, check this website: &nbsp;
              <a
                href="https://todoist.com/productivity-methods/pomodoro-technique"
                className="text-twitch-purple hover:italic"
              >
                The Pomodoro Technique
              </a>
            </>
          }
        />
        <QuestionBox
          question="Who does it work for?"
          answer="Anyone can take advantage of this project. No matter if you are an highschool
                student, working for a corporate or a freelancer. There is a space for you."
        />
        <QuestionBox
          className="sm:col-span-2"
          question="Why does it work?"
          answer={
            <>
              <p>
                There are many reasons why people are finding co-working streams useful. A part from
                the most obvious ones (improve your time tracking, combat lack of motivation and
                isolation, ...) the following are G&apos;s favorite.
              </p>
              <div>
                <p className="mt-3 font-bold">Body doubling</p>
                <p>
                  Body Doubling refers to doing a task with another person present. The body double
                  does not need to actively help with the task, and they can do something unrelated
                  while you complete the task. The knowledge that someone is “present” and aware
                  that you are doing the task is intended to increase motivation and follow-through.
                </p>
                <p className="mt-3 font-bold ">Rabbit hole</p>
                <p>
                  Sometimes when we are too focused on a task we forget what was the initial goal
                  and get lost in. It is good to have a reminder to look back why we started and if
                  we are wasting time on a futile task.
                </p>
                <p className="mt-3 font-bold">Routine</p>
                <p>
                  The problem with relying on motivation for too long is that it can disappear
                  without warning. Focusing on routine, or as James Clear calls it in Atomic Habits,
                  on a system, allows you to push through the hard moments. G helps people in
                  creating a habit. Showing up everyday at the same time and setting clear goals
                  will help more than finding the right motivator.
                </p>
              </div>
            </>
          }
        />
        <QuestionBox
          question="How did it start?"
          answer="G started streaming in November 2020 because her internship went fully remote and she
          needed a way to stay accountable. She was honestly not expecting all of this but she
          is loving the journey."
        />
        <QuestionBox
          question="How we differ from the hustle culture?"
          answer="The CEOgang places a lot of importance into using your energies effectively and
          listening to your needs. If you are feeling tired, by any means listen to your body
          and reset. The worst thing that can impact our productivity is burning out."
        />
      </div>
    </div>
  );
}

const QuestionBox = (props: { question: string; answer: ReactNode; className?: string }) => {
  return (
    <div className={"p-5 bg-gray-100 rounded-lg " + props.className}>
      <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b">
        <h3 className="font-semibold text-twitch-purple sm:text-lg md:text-xl">{props.question}</h3>
        <span className="inline-flex items-center justify-center w-8 h-8 text-gray-500 bg-gray-300 rounded-full shrink-0">
          <HiQuestionMarkCircle className="w-6 h-6" />
        </span>
      </div>
      <div className="text-gray-500">{props.answer}</div>
    </div>
  );
};
