import Image from "next/image";
import streamSchedulePhoto from "../../public/images/schedule.png";

const Schedule = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src={streamSchedulePhoto} className="max-w-xl" alt="stream schedule" />
    </div>
  );
};

export default Schedule;
