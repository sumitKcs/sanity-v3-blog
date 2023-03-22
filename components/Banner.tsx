import React from "react";
import { blogConfig } from "@/util/constants";
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-5xl">{blogConfig.BANNER_TITLE}</h1>
        <h2 className="mt-5 md:mt-0">{blogConfig.BANNER_WELCOME_MESSAGE}</h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        {blogConfig.BANNER_INTRO}
      </p>
    </div>
  );
};

export default Banner;
