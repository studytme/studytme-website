import { useEffect } from "react";

const Checkin = () => {
  useEffect(() => {
    window.location.replace("http://49.12.100.102:8080/checkin");
  }, []);
  return <div className="flex flex-col items-center justify-center h-full">Redirecting...</div>;
};

export default Checkin;
