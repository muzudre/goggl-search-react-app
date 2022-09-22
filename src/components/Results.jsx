import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../context/ResultContextProvider";
import { Loading } from "./Loading";

export const Results = () => {
  const { getResults, results, searchTerm, isLoading } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      getResults(`${location.pathname}/q=${searchTerm}&num=40`);
    }
    // eslint-disable-next-line
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between sm:ml-48 md:ml-24 md:mr-56">
          {results?.map(({ link, title, description }, index) => (
            <div key={index} className="w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <p className="mb-6">{description}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/image":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.map(({ image, link: { href, title } }, index) => (
            <a
              className="sm:p-3 p-5"
              href={href}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-between sm:ml-48 md:ml-24 md:mr-56">
          {console.log(results)}
          {results?.map(({ links, id, source, title, published, summary }) => (
            <div key={id} className="w-full mb-4">
              <div className="flex gap-4">
                <a href={source?.href} target="_blank" rel="noreferrer">
                  {published}
                </a>
                <a href={source?.href} target="_blank" rel="noreferrer">
                  {source?.href}
                </a>
              </div>
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg  dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div dangerouslySetInnerHTML={{ __html: summary }} />
            </div>
          ))}
        </div>
      );
    case "/video":
      return (
        <div className="flex flex-wrap">
          {results.map((video, index) => (
            <div key={index} className="p-2">
              {video?.additional_links?.[0]?.href && (
                <ReactPlayer
                  url={video.additional_links?.[0].href}
                  controls
                  width="355px"
                  height="200px"
                />
              )}
            </div>
          ))}
        </div>
      );
    default:
      return "Error!";
  }
};
