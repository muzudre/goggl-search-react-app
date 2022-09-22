import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "All" },
  { url: "/news", text: "News" },
  { url: "/image", text: "Images" },
  { url: "/video", text: "Videos" },
];

export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }) => (
        <NavLink
          to={url}
          exact
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 m-2 mb-0"
              : "dark:text-white pb-2 m-2 mb-0"
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};
