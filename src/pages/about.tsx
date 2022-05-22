import Footer from "../components/footer";
import Header from "../components/header";

export default function About() {
  return (
    <div className="">
      <h1 className="text-4xl font-bold lg:text-5xl lg:mb-2 md:text-4xl">StudyTme</h1>
      <h2 className="font-serif text-2xl italic lg:text-3xl">Why, how, who, where?</h2>
      <h3>The answers to the most asked questions</h3>

      <div className="my-5">
        <div className="justify-between p-8 transition-shadow bg-white shadow-xl rounded-xl group ">
          <h1 className="text-xl font-bold lg:text-2xl lg:mb-2 md:text-xl">How it works</h1>
          <p>
            G streams on Twitch around 5 days per week. She records herself studying in sessions of
            45 mins and then takes breaks of 7mins during which she talks to the viewers, discuss
            different topics, motivates or just simply entertain them with mini games. This is a
            famous technique that G did not invent. It is called the Pomodoro technique. For more
            info, check this website:
            <a
              href="https://todoist.com/productivity-methods/pomodoro-technique"
              className="text-twitch-purple hover:italic"
            >
              {" "}
              The Pomodoro Technique
            </a>
          </p>
        </div>
      </div>
      <div className="">
        <div className="justify-between p-8 transition-shadow bg-white shadow-xl rounded-xl group ">
          <h1 className="text-xl font-bold lg:text-2xl lg:mb-2 md:text-xl">Why it works</h1>
          <p>
            There are many reasons why people are finding co-working streams useful. A part from the
            most obvious ones (improve your time tracking, combat lack of motivation and isolation,
            ...) the following are G’s favorite.
          </p>
          <p>
            <p className="mt-3 font-bold">Body doubling</p>
            Body Doubling refers to doing a task with another person present. The body double does
            not need to actively help with the task, and they can do something unrelated while you
            complete the task. The knowledge that someone is “present” and aware that you are doing
            the task is intended to increase motivation and follow-through.
            <p className="mt-3 font-bold ">Rabbit whole</p>
            Sometimes when we are too focused on a task we forget what was the initial goal and get
            lost in. It is good to have a reminder to look back why we started and if we are wasting
            time on a futile task.
            <p className="mt-3 font-bold">Routine</p>
            The problem with relying on motivation for too long is that it can disappear without
            warning. Focusing on routine, or as James Clear calls it in Atomic Habits, on a system,
            allows you to push through the hard moments. G helps people in creating a habit. Showing
            up everyday at the same time and setting clear goals will help more than finding the
            right motivator.
          </p>
        </div>
      </div>
      <div className="my-5">
        <div className="justify-between p-8 transition-shadow bg-white shadow-xl rounded-xl group ">
          <h1 className="text-xl font-bold lg:text-2xl lg:mb-2 md:text-xl">Who does it work for</h1>
          <p>
            Anyone can take advantage of this project. No matter if you are an highschool student,
            working for a corporate or a freelancer. There is a space for you.
          </p>
        </div>
      </div>
    </div>
  );
}
