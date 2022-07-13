import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center h-screen max-w-screen min-w-screen">
      <Header />
      <div className="w-full lg:w-8/12">
        <div className="w-full px-8">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
