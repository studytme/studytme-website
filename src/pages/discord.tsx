import { useEffect } from "react";

const Discord = () => {
  useEffect(() => {
    window.location.replace("https://discord.gg/ceogang");
  }, []);
  return <div className="flex flex-col items-center justify-center h-full">Redirecting...</div>;
};

export default Discord;
