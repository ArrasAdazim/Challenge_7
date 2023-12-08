import React from "react";
import { Link } from "react-router-dom";

export default function LeftBar() {
  return (
    <div
      className={
        "sidebar w-[250px] flex flex-col gap-y-2 border-r-8 min-h-screen"
      }
    >
      <Link
        to={"/dashboard"}
        className=" h-10 w-full hover:bg-[#CFD4ED] mt-4 font-bold text-sm py-3 pl-6"
      >
        CARS
      </Link>
      <Link
        to={"/dashboard"}
        className=" h-10 w-full hover:bg-indigo-200 font-bold text-sm py-3 pl-6"
      >
        LIST CAR
      </Link>
    </div>
  );
}
