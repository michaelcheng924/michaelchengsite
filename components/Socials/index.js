import React from "react";

import yourData from "../../data/portfolio.json";
import { useTheme } from "next-themes";

const Socials = ({ className }) => {
  const { theme } = useTheme();

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <a
          className={`p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg transition-all duration-300 ease-out first:ml-0 ${
            theme === "dark"
              ? "hover:bg-slate-600 text-white"
              : "hover:bg-slate-100"
          } hover:scale-105 active:scale-100`}
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
