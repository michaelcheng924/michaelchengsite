import Image from "next/image";
import React from "react";

const WorkCard = ({
  imageSrc,
  title,
  description,
  github,
  url1,
  url2,
  bullets,
}) => {
  return (
    <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link cursor-pointer">
      <h1 className="mt-5 text-3xl font-medium">
        {title ? title : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      {github && (
        <div className="mt-1">
          <strong>GitHub: </strong>
          <a href={github} target="_blank" rel="noreferrer">
            {github}
          </a>
        </div>
      )}
      {url1 && (
        <div className="mt-1">
          <strong>{url1.title}: </strong>
          <a href={url1.url} target="_blank" rel="noreferrer">
            {url1.url}
          </a>
        </div>
      )}
      {url2 && (
        <div className="mt-1">
          <strong>{url2.title}: </strong>
          <a href={url2.url} target="_blank" rel="noreferrer">
            {url2.url}
          </a>
        </div>
      )}
      {bullets && (
        <ul className="list-disc mt-2">
          {bullets.map((item, index) => {
            return (
              <li className="text-sm my-1 opacity-70" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={title}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={imageSrc}
        ></img>
      </div>
    </div>
  );
};

export default WorkCard;
