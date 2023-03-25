import React from "react";
import Navbar from "./Navbar/Navbar";
import Mainheading from "./Mainheading";
import { Database, Idea, Team, Website, App } from "./Timeline/Timelineitems";
const Timeline = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[7rem] px-4 lg:px-12 xl:px-24 2xl:px-64">
        <div className="w-fit mx-auto">
          <Mainheading title="Timeline" />
        </div>
        <Idea />
        <Team />
        <Website />
        <Database />
        <App />
      </div>
      ;
    </>
  );
};

export default Timeline;
