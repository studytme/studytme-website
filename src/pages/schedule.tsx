import { HiArrowRight } from "react-icons/hi";

const Schedule = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex flex-col items-center w-full max-w-3xl">
        <h1 className="text-4xl font-black uppercase">Schedule</h1>
        <hr className="self-center w-1/4 my-4 border border-gray-400" />
        <div className="flex items-center mb-10">
          <p className="text-6xl">📚</p>
          <div className="flex flex-col items-center mx-4">
            <p className="text-3xl font-bold uppercase">Study streams</p>
            <p className="text-lg italic font-thin">45 mins focus - 7 mins break</p>
            <p className="flex items-center text-2xl uppercase font-thinner">
              Mon&nbsp;
              <span className="inline-flex items-center">
                <HiArrowRight />
              </span>
              &nbsp; Thu - 11 AM CEST
            </p>
          </div>
          <p className="text-6xl">📚</p>
        </div>
        <p className="w-full text-lg text-left font-bolder text-slate-400">
          EXTRA STREAMS (they may vary)
        </p>

        <div className="flex flex-col items-center w-full mt-2 mb-10">
          <p className="w-full mb-2 text-xl font-bold text-left text-slate-700">Wednesday</p>
          <div className="grid items-center w-full grid-cols-4">
            <p className="text-lg font-thinner">9PM CEST</p>
            <p className="text-xl font-bold text-slate-800">Watch Party</p>
            <div className="flex flex-wrap justify-center col-span-2 space-y-2 text-sm sm:space-y-0 sm:space-x-2 font-thinner text-black/50">
              <p className="py-1 w-32 text-center rounded-full bg-[#d4e5ef]">educational</p>
              <p className="py-1 w-32 text-center rounded-full bg-[#fadec9]">chilled</p>
            </div>
          </div>
          <hr className="self-center w-11/12 my-4 border border-gray-400" />
          <p className="w-full mb-2 text-xl font-bold text-left text-slate-700">Friday</p>
          <div className="grid items-center w-full grid-cols-4">
            <p className="text-lg font-thinner">2PM CEST</p>
            <p className="text-xl font-bold text-slate-800">Web Dev Class</p>
            <div className="flex flex-wrap justify-center col-span-2 space-y-2 text-sm sm:space-y-0 sm:space-x-2 font-thinner text-black/50">
              <p className="py-1 w-32 text-center rounded-full bg-[#dbeddb]">beginner</p>
              <p className="py-1 w-32 text-center rounded-full bg-[#fff6a9]">w/Leon</p>
            </div>
          </div>
          <hr className="self-center w-11/12 my-4 border border-gray-400" />
          <p className="w-full mb-2 text-xl font-bold text-left text-slate-700">Sunday</p>
          <div className="grid items-center w-full grid-cols-4 mb-3">
            <p className="text-lg font-thinner">2PM CEST</p>
            <p className="text-xl font-bold text-slate-800">Web Dev Class</p>
            <div className="flex flex-wrap justify-center col-span-2 space-y-2 text-sm sm:space-y-0 sm:space-x-2 font-thinner text-black/50">
              <p className="py-1 w-32 text-center rounded-full bg-[#dbeddb]">beginner</p>
              <p className="py-1 w-32 text-center rounded-full bg-[#fff6a9]">w/Leon</p>
            </div>
          </div>
          <div className="grid items-center w-full grid-cols-4">
            <p className="text-lg font-thinner">4PM CEST</p>
            <p className="text-xl font-bold text-slate-800">Hard Python</p>
            <div className="flex flex-wrap justify-center col-span-2 space-y-2 text-sm sm:space-y-0 sm:space-x-2 font-thinner text-black/50">
              <p className="py-1 w-32 text-center rounded-full bg-[#d4e5ef]">beginner</p>
              <p className="py-1 w-32 text-center rounded-full bg-[#d4d4d4]">w/Enkk</p>
            </div>
          </div>
        </div>

        <p className="text-sm italic text-slate-500">
          * schedule may vary, follow Instagram and join Discord to be always updated *
        </p>
      </div>
    </div>
  );
};

export default Schedule;
