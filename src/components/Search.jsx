import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { useResultContext } from "../context/ResultContextProvider";
import { Links } from "./Links";

export const Search = () => {
  const [text, setText] = useState("John Wick");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
    // eslint-disable-next-line
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-24 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:border-gray-700 dark:text-white dark:bg-gray-900 rounded-full border outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search Goggl or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
          onClick={() => setText("")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mt-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
      <Links />
    </div>
  );
};
